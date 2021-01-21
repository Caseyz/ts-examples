// 静态类型
let count: number = 2

// 接口和自定义静态类型
interface XiaoJieJie {
    name: string,
    age: number
}

const xiaohong: XiaoJieJie = {
    name: '小红',
    age: 20
}

console.log(xiaohong.age)