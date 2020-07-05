// const mergeFunc = <T, U>(arg1: T, arg2: U): T & U => {
//     let res = {} as T & U;
//     res = Object.assign(arg1, arg2);
//     return res;
// }

// interface NameInfo {
//     firstName: string,
//     lastName: string
// }

// const getFunllName = ({ firstName, lastName }: NameInfo) => {
//     return `${firstName} ${lastName}`
// }

// getFunllName({
//     firstName:'aaa',
//     lastName:'bbbb',
//     ccc:'aaaaa'
// } as NameInfo)

// const getFunllName = ({ firstName, lastName }: { firstName: string, lastName: string }) => {
//     return `${firstName} ${lastName}`
// }

// getFunllName({
//     firstName:'aaa',
//     lastName:'bbbb',
//     ccc:'aaaaa'
// } )

// interface Vegetable {
//     color?: string,
//     readonly type: string,
//     [prop: string]: any
// }

// const getVegetables = ({ color, type }: Vegetable) => {
//     return `A ${color ? (color + '  ') : ''}${type}`
// }

// console.log(
//     getVegetables({
//         type: 'tomato',
//         color:'aaaa',
//         sixe:'aaaaaa'
//     } as Vegetable)
// );

// console.log(
//     getVegetables({
//         type: 'tomato',
//         color: 'aaaa',
//         sixe: 'aaaaaa'
//     })
// );

// let vegetable:Vegetable = {
//     type:'saaaa'
// }

// vegetable.type = 'aaaa'


// interface ArrInterface {
//     0: string,
//     readonly 1: number
// }

// let arr: ArrInterface = ['222', 111, 11111]

// type AddFunc = (num1: number, num2: number) => number
// const add: AddFunc = (n1, n2) => n1 + n2

// interface RoleDic {
//     [id: number]: string
// }
// const role1: RoleDic = {
//     1:'aaa',
//     // 'v':1
// }

// interface RoleDic {
//     [id: string]: string
// }
// const role1: RoleDic = {
//     1:'aaa',
//     'v':'aaaaaa'
// }
// interface Vegetable {
//     color: string
// }

// interface Tomato extends Vegetable {
//     redius: number
// }

interface Couter {
    (): void,
    count: number
}

const getCounter = (): Couter => {
    const c = () => {
        c.count++
    };
    c.count = 0;
    return c;
}
const counter:Couter = getCounter();
counter();
console.log(counter.count);
counter();
console.log(counter.count);
counter();
console.log(counter.count);
