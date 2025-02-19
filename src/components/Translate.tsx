import React from "react";

function Translate() {
  const [textToTranslate] = React.useState("");
  const inputRef = React.useRef<HTMLTextAreaElement | null>(null);
  const resultRef = React.useRef<HTMLTextAreaElement | null>(null);
  const copyButtonRef = React.useRef(null);

  const translate = () => {
    if (inputRef.current && resultRef.current) {
      const text = inputRef.current.value;
      resultRef.current.value = replaceCharacters(text);
    }
    autoResize();
  };

  const copyToClipboard = () => {
    if (resultRef.current) {
      resultRef.current.select();
      document.execCommand('copy');
    }
  };

  const autoResize = () => {
    const inputArea = inputRef.current;
    const outputArea = resultRef.current;
    if (inputArea || outputArea) {
      if (inputArea) {
        inputArea.style.height = 'auto';
        inputArea.style.height = inputArea.scrollHeight + 'px';
      }
      if (outputArea) {
        outputArea.style.height = 'auto';
        outputArea.style.height = outputArea.scrollHeight + 'px';
      }
    }
  }

  const replaceCharacters = (text: string) => {
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
      'Е': 'Ё',
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
      'Х': 'H',
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
        const replacement = replacementDict[text.slice(i, i + 2) as keyof typeof replacementDict];
        i += 2;
        replacedText += replacement;
      } else {
        const replacement = replacementDict[char as keyof typeof replacementDict] || char;
        i += 1;
        replacedText += char === char.toUpperCase() ? replacement.toUpperCase() : replacement;
      }
    }

    return replacedText;
  }

  return (
    <div className="translateBlock">
      <div>
        <textarea id="inputText" ref={inputRef} rows={1} placeholder={"Введите Ваш текст..."} onChange={translate}/>
      </div>
      <div>
        <textarea id="resultText" ref={resultRef} rows={1} value={textToTranslate} readOnly/>
        <button id="copyButton" ref={copyButtonRef} type="button" onClick={copyToClipboard}>Скопировать</button>
      </div>
    </div>
  );
}

export default Translate;