# Estrutura do site

Cada página continua sendo um arquivo HTML independente, mas o código que define
aparência e comportamento foi separado para facilitar a manutenção.

- `index.html`, `id-frances.html`, `equipe.html`, `videoblogs.html` e
  `yoartista.html`: conteúdo e estrutura própria de cada página.
- `assets/css/<pagina>.css`: estilos exclusivos daquela página.
- `assets/js/<pagina>.js`: interações exclusivas daquela página.
- `assets/js/site-header.js`: um único cabeçalho reutilizado por todas as páginas.
- `assets/`: imagens, capas, ícones e fotos usados localmente.

## Como editar uma página

1. Altere o conteúdo (títulos, parágrafos, links e seções) no arquivo `.html` da
   página.
2. Para mudar aparência, procure o seletor correspondente em
   `assets/css/<pagina>.css`.
3. Para mudar uma interação, procure o código em `assets/js/<pagina>.js`.
4. Para alterar o menu que aparece no topo de todas as páginas, edite apenas
   `assets/js/site-header.js`.

## Caminhos para arquivos

Como os arquivos HTML estão na raiz do repositório, um recurso local é referenciado
assim:

```html
<img src="assets/fotos-frances/IMG_1185.jpeg" alt="Descrição da foto">
<a href="videoblogs.html">Videoblogs</a>
```

Evite começar esses caminhos com `/`. Um caminho como `/assets/...` procura a pasta
na raiz do domínio e pode falhar quando o site é publicado em um subdiretório do
GitHub Pages. Também prefira nomes de arquivo sem espaços, acentos ou parênteses
nos próximos uploads: isso reduz a chance de erros de URL.

## Ao adicionar uma nova página

1. Crie `nova-pagina.html` a partir de uma página existente.
2. Crie `assets/css/nova-pagina.css` e `assets/js/nova-pagina.js`.
3. No `head`, inclua o CSS: `<link rel="stylesheet" href="assets/css/nova-pagina.css">`.
4. Antes do `</body>`, inclua o JS: `<script src="assets/js/nova-pagina.js"></script>`.
5. Copie o bloco abaixo logo após a abertura do `body`, para reutilizar o menu:

```html
<div data-site-header></div>
<script src="assets/js/site-header.js"></script>
```

Depois, adicione o link da página no `site-header.js`.
