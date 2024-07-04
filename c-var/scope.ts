// 变量的作用域

// js 中的 var 申明变量，x 先使用在申明导致结果异常
function f(shouldInitialize: boolean) {
  if (shouldInitialize) {
    var x = 10
  }
  return x
}
console.log(f(true)) // 10
console.log(f(false)) // undefined

// ts 中
// function f1(shouldInitialize: boolean) {
//   if (shouldInitialize) {
//     let x = 10
//   }
//   return x // 编译错误: x is not defined
// }
// f1(true)
// f1(false)

// WARN: js 中使用 var 重复申明 i 导致结果异常
function sumMatrix(matrix: number[][]) {
  var sum = 0;
  for (var i = 0; i < matrix.length; i++) {
    console.log("outer i = ", i)
    var currentRow = matrix[i];
    // 会影响外层的 i
    for (var i = 0; i < currentRow.length; i++) {
      console.log("inner i = ", i)
      sum += currentRow[i];
    }
  }
  return sum;
}
console.log(sumMatrix([[1, 2], [3, 4]])) // 3

// 换成ts中的let申明结果正确
function sumMatrix1(matrix: number[][]) {
  var sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    console.log("outer i = ", i)
    var currentRow = matrix[i];
    // 这里的 i 完全在自己的作用域，不会覆盖外层的 i
    for (let i = 0; i < currentRow.length; i++) {
      console.log("inner i = ", i)
      sum += currentRow[i];
    }
  }
  return sum;
}
console.log(sumMatrix1([[1, 2], [3, 4]])) // 10

// js 中 var 申明变量，setTimeout 拿到的都是 10
for (var i = 0; i < 10; i++) {
  setTimeout(function() { console.log(i); }, 1 * i); // 输出全是10
}
// js 的解决办法, 创建一个立即执行的匿名函数，传递 i
for (var i = 0; i < 10; i++) {
  (function(i) { setTimeout(function() { console.log(i); }, 1 * i) })(i)
}
// ts 中 let 不会有这个问题
for (let i = 0; i < 10; i++) {
  setTimeout(function() { console.log(i) }, 1 * i); // 输出结果正确
}
