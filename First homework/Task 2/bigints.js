export default class Bigints{
  addition(x, y) {
    let answer = []
    y = this.#toBigInt(y);
    x = this.#toBigInt(x);
    if (x[1] == y[1]) {
      answer = [x[0] + y[0], x[1]];
    } else if (x[1] > y[1]) {
      answer = [
        x[0] + y[0] * (BigInt(10) ** (BigInt(x[1]) - BigInt(y[1]))),
        x[1],
      ];
    } else {
      answer = [
        y[0] + x[0] * (BigInt(10) ** (BigInt(y[1]) - BigInt(x[1]))),
        y[1],
      ];
    }
    return this.#toString(answer);
  }

  subtraction(x, y) {
    let answer = []
    y = this.#toBigInt(y);
    x = this.#toBigInt(x);
    if (x[1] == y[1]) {
      answer = [x[0] - y[0], x[1]];
    } else if (x[1] > y[1]) {
      answer = [
        x[0] - y[0] * (BigInt(10) ** (BigInt(x[1]) - BigInt(y[1]))),
        x[1],
      ];
    } else {
      answer = [
        y[0] - x[0] * (BigInt(10) ** (BigInt(y[1]) - BigInt(x[1]))),
        y[1],
      ];
    }
    return this.#toString(answer);
  }

  multiplication(x, y) {
    x = this.#toBigInt(x);
    y = this.#toBigInt(y);
    return this.#toString([x[0] * y[0], x[1] + y[1]]);
  }

  division(x, y) {
    x = this.#toBigInt(x);
    y = this.#toBigInt(y);
    if (y[0] == 0) {
      return "No zero division!";
    } else if (x[1] > y[1]) {
      return this.#toString([
        x[0] / y[0],
        x[1] - y[1],
      ]);
    } else {
      return this.#toString([
        x[0] / y[0],
        0
      ]);
    }
  }

  #toBigInt(num) {
    let zerosCounter = 0;
    if (num.includes(".")){
      zerosCounter = num.length - num.indexOf('.') - 1;
    }
    return [BigInt(num.split(".").join("")), zerosCounter];
  }

  #toString(bigIntItem) {
    let num = bigIntItem[0].toString();
    if (bigIntItem[1] == 0) {
      return num;
    } else if (bigIntItem[1] < num.length) {
      return num.slice(0, num.length - bigIntItem[1]) +
      "." + num.slice(num.length - bigIntItem[1]);
    } else if (bigIntItem[1] >= num.length) {
      let startsWith = "0.";
      for (let i = 0; i < bigIntItem[1] - num.length; i++) {
        startsWith += "0";
      }
      return startsWith + num;
    }
  }

}