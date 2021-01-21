/**
 *  数组类型注解
 */

const numberArr = [1, 2, 3, 4]

const numberArr1: number[] = [1, 2]
const stringArr: string[] = ['1', '2', '3']
const undefinedArr: undefined[] = [undefined, undefined, undefined]

const arr: (number | string)[] = [1, 'string', 3]

const obj1: { name: string, age: number }[] = [
    {
        name: 'zz',
        age: 17
    },
    {
        name: 'dd',
        age: 19
    },
]


// type alias  类型别名
type objType = {
    name: string,
    age: number
}

const obj2: objType[] = [
    {
        name: 'zz',
        age: 17
    },
    {
        name: 'dd',
        age: 19
    },
]

// 使用类的方式替换类型别名的方式
class objClass {
    name: string;
    age: number
}

const obj3: objClass[] = [
    {
        name: 'zz',
        age: 17
    },
    {
        name: 'dd',
        age: 19
    },
]