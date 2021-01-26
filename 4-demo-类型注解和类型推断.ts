/**
 *  type annotation 类型注解
 *  type inferrence 类型推断
 */

// 使用中：如果 TS 能够自动分析变量类型，我们就什么也不用做啦；如果 TS 无法自动分析出变量类型就需要使用 类型注解

// 类型注解
const age: number = 1;
// -----------------------------------------------------------------
function getSum(one: number, two: number) {
    return one + two
}
let sum = getSum(1, 2)

// 类型推断
let weight = 1230;
// -----------------------------------------------------------------
let one = 1;
let two = 2;
let three = one + two
// -----------------------------------------------------------------
const obj = {
    name: '小红',
    age: 18
}
