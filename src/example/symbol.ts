// let a = Symbol();
// console.log(a);

// let prop = 'name';
// let prop1 = 'angle'
// const info = {
//     [prop] :'wangjc',
//     prop1
// };
// console.log(info)
// let b = Symbol('aaaaa');
// console.log(a === b, 'aaaaagggg');
// // let c = Symbol({a:1})
// let c = Symbol('aaaaa');
// console.log(c.toString());

// let prop = 'name';
// let prop1 = 'angle'
// const info = {
//     [`${prop}111`] :'wangjc',
//     prop1
// };
// console.log(info);

// const info2 = {
//     [b]: 'aaaaaa',
//     a:'bbbbb'
// };
// info2[b] = 'aaaaa'
// console.log(info2,'88888888');
// for (const key in info2) {
//     console.log('你的天使');
//     if (info2.hasOwnProperty(key)) {
//         console.log(key, 'aaaaabbbbbddddd11');
//     }
// }
// console.log(Object.keys(info2));
// console.log(Object.getOwnPropertyNames(info2));
// console.log(JSON.stringify(info2));
// console.log(Object.getOwnPropertySymbols(info2));
// console.log(Reflect.ownKeys(info2)); // 返回所有属性名（包括Symbol）


const s6 = Symbol.for('lison');
// const s7 = Symbol.for('lison');
// console.log(s6===s7);
console.log(Symbol.keyFor(s6));


