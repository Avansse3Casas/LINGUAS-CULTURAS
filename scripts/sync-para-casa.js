#!/usr/bin/env node

const fs = require('node:fs/promises');
const path = require('node:path');

const NOTION_API_VERSION = '2026-03-11';
const API_URL = 'https://api.notion.com/v1/data_sources';
const outputPath = path.resolve(__dirname, '..', 'data', 'para-casa.json');

function requiredEnv(name) {
  const value = process.env[name];
  if (!value) throw new Error(`${name} não está configurada.`);
  return value;
}

function plainText(property) {
  return (property ?? []).map((item) => item.plain_text ?? '').join('').trim();
}

function fileUrl(property) {
  const file = property?.[0];
  if (!file) return '';
  if (file.type === 'file') return file.file?.url ?? '';
  if (file.type === 'external') return file.external?.url ?? '';
  return '';
}

function parseTerm(name = '') {
  const match = String(name).match(/[123]/);
  return match ? Number(match[0]) : 0;
}

function mapEntry(page) {
  const properties = page.properties ?? {};
  const titulo = plainText(properties.TITULO?.title);
  const trimestre = parseTerm(properties.TRIMESTRE?.select?.name);
  const url = properties.URL?.url?.trim() || fileUrl(properties.ARQUIVO?.files);

  if (!titulo || !trimestre) {
    console.warn(`Ignorando entrada ${page.id}: TITULO e TRIMESTRE válido são obrigatórios.`);
    return null;
  }

  return {
    titulo,
    descricao: plainText(properties.DESCRICAO?.rich_text),
    url,
    trimestre,
    idioma: properties.IDIOMA?.select?.name ?? '',
    turma: plainText(properties.TURMA?.rich_text),
    prazo: properties.PRAZO?.date?.start?.slice(0, 10) ?? '',
    ordem: properties.ORDEM?.number ?? Number.MAX_SAFE_INTEGER,
  };
}

async function queryDataSource(token, dataSourceId) {
  const entries = [];
  let cursor;

  do {
    const body = {
      page_size: 100,
      filter: { property: 'LIBERADO', checkbox: { equals: true } },
      sorts: [
        { property: 'TRIMESTRE', direction: 'ascending' },
        { property: 'ORDEM', direction: 'ascending' },
      ],
      result_type: 'page',
    };
    if (cursor) body.start_cursor = cursor;

    const response = await fetch(`${API_URL}/${encodeURIComponent(dataSourceId)}/query`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Notion-Version': NOTION_API_VERSION,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(`Consulta ao Notion falhou (${response.status}): ${error.message ?? 'erro desconhecido'}`);
    }

    const payload = await response.json();
    if (!Array.isArray(payload.results)) throw new Error('Resposta inválida da API do Notion.');

    entries.push(...payload.results);
    cursor = payload.has_more ? payload.next_cursor : undefined;
  } while (cursor);

  return entries;
}

async function writeJson(items) {
  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  const temporaryPath = `${outputPath}.tmp`;
  await fs.writeFile(temporaryPath, `${JSON.stringify(items, null, 2)}\n`, 'utf8');
  await fs.rename(temporaryPath, outputPath);
}

async function main() {
  const token = requiredEnv('NOTION_TOKEN');
  const dataSourceId = requiredEnv('NOTION_PARA_CASA_DATA_SOURCE_ID');
  const pages = await queryDataSource(token, dataSourceId);
  const items = pages
    .map(mapEntry)
    .filter(Boolean)
    .sort((a, b) => a.trimestre - b.trimestre || a.ordem - b.ordem);

  await writeJson(items);
  console.log(`${items.length} atividade(s) liberada(s) em data/para-casa.json.`);
}

main().catch((error) => {
  console.error(`Sincronização não concluída: ${error.message}`);
  process.exitCode = 1;
});
