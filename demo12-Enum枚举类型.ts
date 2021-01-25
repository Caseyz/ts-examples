/**
 *  枚举类型的使用
 */

// enum直接定义类型，自动编号，从0开始；也可以自己设置

enum Status {
    MESSAGE = 1,
    SPA,
    DABAOJIAN
}

function judgeStatus(status: any) {
    switch (status) {
        case Status.MESSAGE:
            return 'message'
        case Status.SPA:
            return 'spa'
        case Status.DABAOJIAN:
            return 'dabaojian'
        default:
            return null;
    }
}

// log: message
console.log(judgeStatus(Status.MESSAGE))
// log: MESSAGE
console.log(Status[1])
