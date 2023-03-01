import Goods from "./goods.js";

console.log("First test:");
let initialObj = new Goods();
let apple = new Goods("apple", 321, 5, "golden");
let pineapple = new Goods("pineapple", 123, 2, "russian");
console.log(apple.sortGoods(
  "name-ends-apple&price->=120&quantity-<=5",
  [apple, pineapple]
));

console.log("Second test:")
let obj1 = new Goods("qwefd", 2, 23, "qweqweabc");
let obj2 = new Goods("fd", 3, 0, "qqq");
let obj3 = new Goods("simple", 666, 1000, "dimple");
let obj4 = new Goods("net", 7, 7, "popit");
console.log(initialObj.sortGoods(
  "name-contains-fd&price-=2-&quantity->5&description-ends-abc",
  [obj1, obj2, obj3, obj4],
));
