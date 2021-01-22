/**
 *  接口interface 
 */

interface students {
    name: string,
    age: number,
    inClass: number,
    // 非必须的属性
    grade?: string,
    // 定义相应的key和value
    [propname: string]: any,
    // 定义函数类型key和返回值
    say(): string
}

const student = {
    name: 'zkx',
    age: 18,
    inClass: 1,
    grade: '优',
    say() {
        return 'hello !'
    }
}

function get(student: students) {
    console.log(student)
}

get(student)

// 接口在 类 上的使用(通过 implements)
class Student implements students {
    name: 'zkx';
    age: 18;
    inClass: 1;
    grade: '优';
    say() {
        return 'hello !'
    }
}

// 在 接口interface 上也存在着 继承extends
interface Person extends students {
    toWork(): number
}

const student1 = {
    name: 'zkx',
    age: 18,
    inClass: 1,
    grade: '优',
    say() {
        return 'hello !'
    },
    toWork() {
        return 1
    }
}



function set(student: Person) {
    console.log(student)
}

set(student1)