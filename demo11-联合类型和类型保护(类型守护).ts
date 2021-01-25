/**
 *  联合类型 和 类型保护(类型守护)
 */

interface Waiter {
    xijiao: boolean,
    say: () => {}
}

interface Teacher {
    xijiao: boolean,
    skill: () => {}
}


// 1. 通过断言的方式进行类型保护
function judgeWho1(name: Waiter | Teacher) {
    // 通过判断 xijiao 这个属性的值
    if (name.xijiao) {
        (name as Teacher).skill()
    } else {
        (name as Waiter).say()
    }
}


// 2. 通过in的方式进行类型保护
function judgeWho2(name: Waiter | Teacher) {
    // 通过in进行判断进行类型保护
    if ('say' in name) {
        name.say()
    } else if ('skill' in name) {
        name.skill()
    }
}


// 3. 通过typeof的方式进行类型保护
function add(first: number | string, second: number | string) {
    if (typeof first === 'string' || typeof second === 'string') {
        return `${first}+${second}`
    } else {
        return first + second
    }
}


// 4. 通过instanceof的方式进行类型保护
class NumberObj {
    count!: number
}

function addObj(first: object | NumberObj, second: object | NumberObj) {
    if (first instanceof NumberObj && second instanceof NumberObj) {
        return first.count + second.count
    }
    return 0
}