// boolean, number, string, struct

// boolean
let b: boolean = false
console.log(b)

// number
// int
let decLiteral: number = 6;
// hex
let hexLiteral: number = 0xf00d;
// binary
let binaryLiteral: number = 0b1010;
// octal
let octalLiteral: number = 0o744;
console.log(decLiteral, hexLiteral, binaryLiteral, octalLiteral)

// string
let username: string = "bob";
username = "smith";
console.log(username)
let age: number = 37;
// 模板字符串
let sentence: string = `Hello, my name is ${username}.
I'll be ${age + 1} years old next month.`;
console.log(sentence)

// array
let list: number[] = [1, 2, 3];
// generic array
let list2: Array<number> = [1, 2, 3];
console.log(list, list2)

// tuple
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
// x = [10, 'hello']; // Error
console.log(x[0], x[1])
// 访问一个越界的类型，会使用联合类型替代
x[3] = 'world'; // OK, 字符串可以赋值给(string | number)类型
// console.log(x[5].toString()); // OK, 'string' 和 'number' 都有 toString
// x[6] = true; // Error, 布尔不是(string | number)类型

// enum
// 默认元素从0开始编号
enum Color { Red, Green, Blue }
let c: Color = Color.Green;
// 获取元素的名字
let colorName: string = Color[2];
console.log(colorName);  // Blue
// 指定编号位置
enum Color1 { Red = 1, Green, Blue }
let c1: Color1 = Color1.Green;
console.log(Color1.Blue) // 3
// 自定义编号
enum Color2 { Red = 1, Green = 2, Blue = 4 }
let c2: Color2 = Color2.Green;
console.log(Color2.Blue) // 4

// any
let notSure: any = 4;
notSure = "maybe a string instead";
// any 可以用来移植就代码，编译器不检查是否存在函数，而是运行时才会知道
// notSure.ifItExists(); // 编译成功，编译器不检查是否存在方法
// notSure.toString()
// notSure.toFixed(); // 编译成功
notSure = false; // okay, definitely a boolean
let prettySure: Object = 4; // Object 与 Any 不能等同
// prettySure.toFixed(); // 无法通过编译: Error: Property 'toFixed' doesn't exist on type 'Object'.
let anyList: any[] = [1, true, "free"];
anyList[1] = 100;
console.log(anyList) // [1, 100, "free"]

// void
// void 用来表示没有任何类型，与 any 相反，void 只能赋值 undifined 和 null, 似乎用处不大
function warnUser(): void {
  console.log("This is my warning message");
}
let unusable: void = undefined;
// unusable = 1 // 编译错误

// undefined和null
// 用处不大, 两者是所有类型的子类型，所有类型都可以赋值为 undefined 和 null
// 当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自。 这能避免 很多常见的问题。 也许在某处你想传入一个 string或null或undefined，你可以使用联合类型string | null | undefined。
let u: undefined = undefined;
let n: null = null;

// never
// never类型表示的是那些永不存在的值的类型
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
  return error("Something failed");
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
  while (true) {
  }
}

// object
// object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
declare function create(o: object | null): void;
// create({ prop: 0 }); // OK
// create(null); // OK
// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error

// 类型断言, 两种方式
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length; // <> 语法
let strLength1: number = (someValue as string).length; // as 语法
console.log(strLength, strLength1)
