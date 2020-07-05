// 泛型
// const getArray = (value: any, times: number = 5): any[] => {
//     return new Array(times).fill(value);
// }
// console.log(getArray(2, 3).map(item => item+1));
// const getArray = <T>(value: T, times: number = 5): T[] => {
//     return new Array(times).fill(value);
// }
// console.log(getArray<number>(2, 3).map(item => item.length));

// const getArray = <T, U>(value1: T, value2: U, times: number): [T, U][]=>{
//     return new Array(times).fill([value2, value1])
// }
// console.log(getArray(1,'1111',4));
// getArray(1,'1111',4).forEach(item=>{
//     item[0].toFixed();
//     item[1].toFixed();
// })


// let getArray: <T>(value: T, times: number)=> T[];
// getArray = (arg:any,times:number) => {
//     return new Array(times).fill(value);
// }

// getArray(123,3).map(item=>item.length)

// type GetArray = <T>(value: T, times: number) => T[];
// let getArray: GetArray = (arg: any, times: number) => {
//     return new Array(times).fill(value);
// }

// type GetArray<T> = (value: T, times: number) => T[]

// interface ValueWithLength {
//     length: number
// }
// const getArray = <T extends ValueWithLength>(arg: T, times: number): T[] => {
//     return new Array(times).fill(value);
// }

// getArray(112,2);
// getArray('aaaaaa',2);

const getProps = <T,K extends keyof T>(object:T,key:K)=>{
    return object[key]
}

let objs = {
    a:'',
    b:'111'
};
getProps(objs, 'a')