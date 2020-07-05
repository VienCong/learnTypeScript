let bool: boolean = true;
// let num = 1111;
console.log('basic-type');
// bool = 123;
let num: number = 9999;
console.log(num);
num = 0b111;
num = 0o777;
num = 0xaa;
num = 10;
let str: string = '123';
console.log(`我就是你的${str}`);
setTimeout(() => {
    console.log(num, '222')
}, 1000);
// let arr: Array<number> = [1, 23, 4, 4];
// let arr:number[] = [1,2,3];
// let arr:(number|object)[] = [1,2,3,{aa:1}];
let tuple: [number, string];
tuple = [111, '222'];

enum Roles {
    super,
    upper
}
console.log(Roles.super, Roles.upper, 'aaaaa', Roles[1], Roles[0]);

let value: any;
// void类型
const consoleText = (text: string): void => {
    console.log(text);
    // return '1111';

}

let v: void;
v = undefined;
// v = null;

const errorFun = (message: string): never => {
    throw new Error('aaa')
}

const errorFun1 = (message: string): never => {
    while (true) {
        console.log('aaaa');
    };
}

const aaa: string = errorFun('aaa') as never;

const getLength = (target: string | number):number => {
    if ((target as string).length || (target as string).length === 0) {
        return (target as string).length;
    } else {
        return target.toString().length
    }
}