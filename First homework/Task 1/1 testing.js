import Formatter from "./1 string.js";


let formatter = new Formatter();
let capitalizedStrings = [];
let results = ["Test", undefined, "123", undefined, undefined, undefined, "S", "A"]

capitalizedStrings.push(formatter.capitalize("test")); // Test
capitalizedStrings.push(formatter.capitalize("")); // undefined
capitalizedStrings.push(formatter.capitalize("123")); // 123
capitalizedStrings.push(formatter.capitalize(123)); // undefined
capitalizedStrings.push(formatter.capitalize(null)); // undefined
capitalizedStrings.push(formatter.capitalize({name: "John"})); // undefined
capitalizedStrings.push(formatter.capitalize("s")); // S
capitalizedStrings.push(formatter.capitalize("A")); // A

for (let i = 0; i < 8; i++) {
  alert(`Capitalize method: ${capitalizedStrings.at(i)} == ${results.at(i)}`);
}

alert(`Normalize spaces method: <<${formatter.normalizeSpaces("Вот пример строки,в которой     используются знаки препинания.После знаков должны стоять пробелы , а перед знаками их быть не должно .    Если есть лишние подряд идущие пробелы, они должны быть устранены.")}>>`);
alert(`Normalize spaces method: <<${formatter.normalizeSpaces(". . .. . . . . ....")}>>`);
alert(`Normalize spaces method: <<${formatter.normalizeSpaces("word word       word(word,word)..word.          one? more!word")}>>`);

alert(`Words counter method: <<${formatter.countWords(". . .. . . . . ....")}>>`);
alert(`Words counter method: <<${formatter.countWords("Вот пример строки,в которой     используются знаки препинания.После знаков должны стоять пробелы , а перед знаками их быть не должно .    Если есть лишние подряд идущие пробелы, они должны быть устранены.")}>>`);
alert(`Words counter method: <<${formatter.countWords("Логопедическая работа по коррекции дисграфии, на??? почве нарушения !!языкового анализа и синтеза у младших школьников")}>>`);

alert(`Count unique words method: <<${formatter.countUniqueWords("word word       word(word,word)..word.      one    one? more!word")}>>`);
alert(`Count unique words method: <<${formatter.countUniqueWords("Текст, в котором слово текст несколько раз встречается и слово тоже")}>>`);
