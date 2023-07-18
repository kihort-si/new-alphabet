def replace_characters(text):
    # Словарь замен для русского алфавита с учетом регистра
    replacement_dict = {
        'а': 'a',
        'б': 'b',
        'в': 'v',
        'г': 'g',
        'д': 'd',
        'е': 'e',
        'ё': 'ö',
        'ж': 'ž',
        'з': 'z',
        'и': 'i',
        'й': 'j',
        'к': 'k',
        'л': 'l',
        'м': 'm',
        'н': 'n',
        'о': 'o',
        'п': 'p',
        'р': 'r',
        'с': 's',
        'т': 't',
        'у': 'u',
        'ф': 'f',
        'х': 'h',
        'ц': 'c',
        'ч': 'x',
        'ш': 'š',
        'щ': 'ś',
        'ы': 'y',
        'ь': 'í',
        'э': 'e',
        'ю': 'ü',
        'я': 'ä',
        'А': 'A',
        'Б': 'B',
        'В': 'V',
        'Г': 'G',
        'Д': 'D',
        'Е': 'E',
        'Ё': 'Ö',
        'Ж': 'Ž',
        'З': 'Z',
        'И': 'I',
        'Й': 'J',
        'К': 'K',
        'Л': 'L',
        'М': 'M',
        'Н': 'N',
        'О': 'O',
        'П': 'P',
        'Р': 'R',
        'С': 'S',
        'Т': 'T',
        'У': 'U',
        'Ф': 'F',
        'Х': 'X',
        'Ц': 'C',
        'Ч': 'X',
        'Ш': 'Š',
        'Щ': 'Ś',
        'Ы': 'Y',
        'Ь': 'Í',
        'Э': 'E',
        'Ю': 'Ü',
        'Я': 'Ä',
        'Ъё': 'Jö',
        'Ъю': 'Jü',
        'Ъе': 'Jё',
        'Ъя': 'Jä',
        'ъя': 'jä',
        'ъё': 'jö',
        'ъю': 'jü',
        'ъе': 'jё'
    }

    # Замена символов в тексте с учетом регистра
    replaced_text = ''
    i = 0
    while i < len(text):
        char = text[i]
        if i + 2 < len(text) and text[i:i + 2] in replacement_dict:
            replacement = replacement_dict[text[i:i + 2]]
            i += 2
        else:
            replacement = replacement_dict.get(char, char)
            i += 1

        if char.isupper():
            replacement = replacement.upper()

        replaced_text += replacement

    return replaced_text


def main():
    user_input = input("Введите текст для замены: ")
    result = replace_characters(user_input)
    print("Результат замены:")
    print(result)


if __name__ == "__main__":
    main()