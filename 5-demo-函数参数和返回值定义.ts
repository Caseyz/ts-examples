/**
 *  函数参数和返回值定义
 */

// 1. 函数返回类型为 number
// function getTotal(one: number, two: number): number {
//     return one + two
// }
// let sum1 = getTotal(1, 3)


// 2. 函数无返回类型 void
// function getAdd(): void {
//     console.log(123)
// }


// 3. 函数执行不完的返回值 never
// function getNever1(): never {
//     throw new Error("sry");
//     console.log(123)
// }
// function getNever2(): never {
//     while (true) { }
//     console.log(123)
// }


// 4. 定义函数传入的对象参数key的类型
// function add({ one, two }: { one: number, two: number }) {
//     return one + two
// }
// add({ one: 1, two: 2 })
