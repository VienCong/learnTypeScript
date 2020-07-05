let add: (x: number, y: number) => number;
add = (x: number, y: number): number => {
    return x + y
}
// add = (arg1: string, arg2: number): number => {
//     return arg1 + arg2
// }
// type AddFunc = (n1: number, n2: number, n3?: number) => number
// let add1: AddFunc;
// add1 = (n1: number, n2: number): number => {
//     return n1 + n2
// }

// add1 = (n1: number, n2: number, n3: number): number => {
//     return n1 + n2 + (n3 as number)
// }

function a(x: string): string[]
function a(x: number): number[]
function a(x: any): any {
    if (typeof x === 'string') {
        return x.split('')
    } else {
        return x.toSting().split('').map((item: any)=> Number(item))
    }
}

// a('abv').map(item=>{
//     return item.toFixed()
// })