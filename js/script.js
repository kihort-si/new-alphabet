let copyButtonAdded = false;

function replaceCharacters(text) {
    const replacementDict = {
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
        'Ъё': 'Jo',
        'Ъю': 'Ju',
        'Ъе': 'Je',
        'Ъя': 'Ja',
        'ъя': 'ja',
        'ъё': 'jo',
        'ъю': 'ju',
        'ъе': 'je'
    };

    let replacedText = '';
    let i = 0;
    while (i < text.length) {
        const char = text[i];
        if (i + 2 < text.length && text.slice(i, i + 2) in replacementDict) {
            const replacement = replacementDict[text.slice(i, i + 2)];
            i += 2;
            replacedText += replacement;
        } else {
            const replacement = replacementDict[char] || char;
            i += 1;
            replacedText += char === char.toUpperCase() ? replacement.toUpperCase() : replacement;
        }
    }

    return replacedText;

}

function resizeTextarea() {
    const textarea = document.getElementById("inputText");
    textarea.style.height = "auto"; // Сбрасываем высоту до автоматической
    textarea.style.height = textarea.scrollHeight + "px";
}

function replaceText() {
    const user_input = document.getElementById("inputText").value;
    const result = replaceCharacters(user_input);

    const resultDiv = document.getElementById("resultText");
    resultDiv.innerHTML = "<h2>Результат замены:</h2><p>" + result + "</p>";

    resizeTextarea();

    if (!copyButtonAdded) {
        const copyButton = document.createElement("button");
        copyButton.innerText = "Скопировать";
        copyButton.className = "copy-button";
        copyButton.onclick = copyResult;
        resultDiv.appendChild(copyButton);
        copyButtonAdded = true;
    }
}

function copyResult() {
    const resultText = document.getElementById("resultText").getElementsByTagName("p")[0];
    const range = document.createRange();
    range.selectNode(resultText);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    try {
        document.execCommand('copy');
    } catch (err) {
        console.error('Не удалось скопировать текст: ', err);
    }

    selection.removeAllRanges();
}

const textarea = document.getElementById("inputText");
textarea.addEventListener("input", function() {
    resizeTextarea();
    copyButtonAdded = false;
});