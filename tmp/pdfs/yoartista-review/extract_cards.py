import json
import re
import sys

import pdfplumber


PDF = r"D:\Downloads\Cópia de Espanhol COLTEC (1).pdf"


def page_lines(page):
    words = page.extract_words(extra_attrs=["fontname", "size"])
    grouped = []
    for word in sorted(words, key=lambda item: (item["top"], item["x0"])):
        if not grouped or abs(grouped[-1]["top"] - word["top"]) > 1.5:
            grouped.append({"top": word["top"], "words": [word]})
        else:
            grouped[-1]["words"].append(word)

    lines = []
    for group in grouped:
        ordered = sorted(group["words"], key=lambda item: item["x0"])
        text = " ".join(item["text"] for item in ordered).strip()
        heading_chars = sum(
            len(item["text"])
            for item in ordered
            if "ArchivoBlack" in item.get("fontname", "")
        )
        total_chars = sum(len(item["text"]) for item in ordered) or 1
        lines.append(
            {
                "top": group["top"],
                "text": text,
                "heading": heading_chars / total_chars >= 0.6,
            }
        )
    return lines


def extract_cards(page, page_number):
    lines = page_lines(page)
    cards = []
    label_indexes = [
        i
        for i, line in enumerate(lines)
        if re.search(r"Legenda\s+descritiva", line["text"], re.IGNORECASE)
    ]
    for position, label_index in enumerate(label_indexes):
        heading_index = label_index - 1
        while heading_index >= 0 and not lines[heading_index]["heading"]:
            heading_index -= 1
        if heading_index < 0:
            continue

        author_lines = [lines[heading_index]["text"]]
        cursor = heading_index - 1
        while (
            cursor >= 0
            and lines[cursor]["heading"]
            and lines[heading_index]["top"] - lines[cursor]["top"] < 55
        ):
            author_lines.insert(0, lines[cursor]["text"])
            heading_index = cursor
            cursor -= 1
        author = " ".join(author_lines)

        turma = "Turma não informada"
        for line in lines[heading_index + 1 : label_index]:
            match = re.search(r"Turma:\s*([0-9]+(?:\s*e\s*[0-9]+)?)", line["text"], re.IGNORECASE)
            if match:
                turma = match.group(1)

        next_heading = len(lines)
        for i in range(label_index + 1, len(lines)):
            if lines[i]["heading"]:
                next_heading = i
                break
        label_remainder = re.sub(
            r"^.*?Legenda\s+[Dd]escritiva\s*:?\s*", "", lines[label_index]["text"]
        ).strip()
        description_parts = ([label_remainder] if label_remainder else []) + [
            line["text"]
            for line in lines[label_index + 1 : next_heading]
            if line["text"] and not line["heading"]
        ]
        description = re.sub(r"\s+", " ", " ".join(description_parts)).strip()
        cards.append(
            {
                "page": page_number,
                "author": author,
                "turma": turma,
                "description": description,
            }
        )
    return cards


def main():
    cards = []
    with pdfplumber.open(PDF) as pdf:
        for page_number in range(2, 9):
            cards.extend(extract_cards(pdf.pages[page_number - 1], page_number))
    json.dump(cards, sys.stdout, ensure_ascii=True, indent=2)


if __name__ == "__main__":
    main()
