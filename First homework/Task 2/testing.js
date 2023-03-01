import Bigints from "./bigints.js";


let calculator = new Bigints();
alert(calculator.addition("123.123", "123.123123"));
alert(calculator.addition("123.123123123123", "123.123123"));
alert(calculator.addition("123123", "123123123"));

alert(calculator.subtraction("123.123", "123.123123"));
alert(calculator.subtraction("123.123123123123", "123.123123"));
alert(calculator.subtraction("123123", "123123123"));

alert(calculator.multiplication("123.123", "123.1"));
alert(calculator.multiplication("123.1", "123.123"));
alert(calculator.multiplication("123123", "123123"));

alert(calculator.division("123.123", "123.1"));
alert(calculator.division("123.1", "123.123"));
alert(calculator.division("123123123123", "123123"));

