export default class Formatter {

  capitalize(str) {
    return (
      str && typeof str == "string"
    ) ? str[0].toUpperCase() + str.slice(1) : undefined;
  }

  normalizeSpaces(str) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] == " " && " .,?!)".includes(str[i+1])) {
        str = str.slice(0, i) + str.slice(i+1);
        i--;
      } else if (str[i] == "(" && str[i-1] != " ") {
        str = str.slice(0, i) + " " + str.slice(i);
        i--;
      } else if (".,?!)".includes(str[i]) && str[i+1] != " ") {
        str = str.slice(0, i+1) + " " + str.slice(i+1);
        i--;
      }
    }
    return str.trim();
  }

  countWords(str) {
    str = this.#deletePunctuation(str);
    return str.split(" ")[0] == "" ? 0 : str.split(" ").length;
  }

  countUniqueWords(str) {
    let words = this.normalizeSpaces(this.#deletePunctuation(str)).split(" ");
    let wordCounter = {};
    for (let word of words) {
      wordCounter[word] = wordCounter[word] ? wordCounter[word] + 1 : 1;
    }

    let answer = [];
    for (let key of Object.keys(wordCounter)) {
      let text = `${key} - ${wordCounter[key]} раз`;
      if ("234".includes(String(wordCounter[key]))) {
        text += "а";
      }
      answer.push(text);
    }
    return answer.join(", ");
  }

  #deletePunctuation(str) {
    str = this.normalizeSpaces(str.toLowerCase());
    for (let i = 0; i < str.length; i++) {
      if (".,?!()".includes(str[i])) {
        str = str.slice(0, i) + str.slice(i+1);
        i--;
      }
    }
    str = this.normalizeSpaces(str);
    return str;
  }
}



