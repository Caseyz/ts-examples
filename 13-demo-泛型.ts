/**
 *  泛型的使用
 */

// 1. 泛型在函数中的使用

function Join<T>(first: T[], second: Array<T>) {
    return `${first}-${second}`
}
Join<number>([1], [2, 3])

function myFun<T, P>(first: T, second: P) {
    return `${first}${second}`
}
myFun<number, number>(1, 2)




// 2. 泛型在类中的使用

// 基本使用
// class SelectGirls<T> {
//     constructor(private girls: Array<T>) { }
//     getGirls(index: number): T {
//         return this.girls[index]
//     }
// }

// let girls = new SelectGirls<string>(['丽娅', '热巴', 'baby'])
// console.log(girls.getGirls(0))

// 继承
interface Girl {
    name: string,
    age?: number,
}

class SelectGirls<T extends Girl> {
    constructor(private girls: Array<T>) { }
    getGirls(index: number): string {
        return this.girls[index].name
    }
}

let girls = new SelectGirls<Girl>([
    { name: 'baby', age: 18 },
    { name: '热巴' },
    { name: '冰冰' },
])
console.log(girls.getGirls(0))

