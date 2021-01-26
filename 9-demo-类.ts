/**
 *  ts中的类
 */

// ts中的类和es6中的类大部分是相似的， 有一些自身的用法


// 1. 类的访问类型
//    public:  类的内部和外部都可以访问的变量和方法
//    private: 只有类的内部可以访问的变量和方法
//    protected: 类的内部和[继承者的方法中也可以使用]可以访问的变量和方法





// 2. 类的构造函数
class Parent1 {
    public name;
    constructor(name: string) {
        this.name = name
    }
}
//    对于Parent类可以简写为
class Parent2 {
    constructor(public name: string) { }
}

let parent1 = new Parent1('kkk')
let parent2 = new Parent2('jjj')
console.log(parent1.name)
console.log(parent2.name)


// 3. 类的get，set以及静态类static
class Xiaojiejie {
    constructor(private _age: number) { }

    public get age(): number {
        return this._age
    }


    public set age(age: number) {
        this._age = age
    }

}
let www = new Xiaojiejie(18)
www.age = 30
console.log(www.age)

// 静态变量和函数可以通过类名直接访问
class Xiaojiejie1 {
    static sayHello() {
        console.log('hello!!!')
    }
}
Xiaojiejie1.sayHello()


// 4. 类的只读属性
class Teacher {
    public readonly _name: string
    constructor(name: string) {
        this._name = name
    }
}
let teacher = new Teacher('zhengkaixuan')
console.log(teacher._name)

//  5. 抽象类
abstract class Person5 {
    abstract skill(): void
}

class Waiter extends Person5 {
    skill() {
        console.log('我会上菜')
    }
}
class TheCook extends Person5 {
    skill() {
        console.log('我会做菜')
    }
}
