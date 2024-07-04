// js 中 变量可以重复申明
var x
var x
console.log(x)

// let x1
// let x1 // 错误，变量已经申明

// cosnt申明的变量值不可变
const numLivesForCat = 9;
const kitty = {
  name: "Aurora",
  numLives: numLivesForCat,
}
// Error
// kitty = {
//   name: "Danielle",
//   numLives: numLivesForCat
// };

// const 对象的属性可变
kitty.name = "Rory";
kitty.name = "Kitty";
kitty.name = "Cat";
kitty.numLives--;

// 结构数组
let input = [1, 2];
let [first, second] = input;
// swap variables
[first, second] = [second, first];
console.log(first); // 2
console.log(second); // 1

function f1([first, second]: [number, number]) {
  console.log(first);
  console.log(second);
}
f1(input);

// 你可以在数组里使用...语法创建剩余变量：
let [one, ...rest] = [1, 2, 3, 4];
console.log(one); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]


// 对象结构
let o = {
  a: "foo",
  b: 12,
  c: "bar"
};
let { a, b } = o;
console.log(a, b) // foo 12
// ({ a1, b1 } = { a1: "baz", b1: 101 });


// 默认值：?的变量可以使用默认值
function keepWholeObject(wholeObject: { a: string, b?: number }) {
  let { a, b = 1001 } = wholeObject;
  console.log(a, b)
}
keepWholeObject({ a: "str" }) // str 1001
keepWholeObject({ a: "str", b: 10 }) // str 10

// 数组展开
let a1 = [1, 2];
let a2 = [3, 4];
let bothPlus = [0, ...a1, ...a2, 5];
console.log(bothPlus)


// 展开对象
let defaults = { food: "spicy", price: "$$", ambiance: "noisy" }
let search = { ...defaults, food: "rich" }
console.log(search) //{ food: "rich", price: "$$", ambiance: "noisy" }


