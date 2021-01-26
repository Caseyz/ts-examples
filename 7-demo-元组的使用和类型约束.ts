/**
 *  元组的使用和类型约束
 */

// 一般的数组定义
// const arr: (string | number)[] = ['kaixuan', 'teacher', 20]

// ['kaixuan', 'teacher', 20] 对于这个数据分别代表了 姓名 职业 年龄， 不能搞乱顺序， 数组定义会有问题

// 元组
const arr1: [string, string, number] = ['kaixuan', 'teacher', 20]

// 老的CSV格式数据
const arr2: [string, string, number][] = [
    ['kaixuan', 'teacher', 20],
    ['kaixuan', 'teacher', 20],
    ['kaixuan', 'teacher', 20],
]