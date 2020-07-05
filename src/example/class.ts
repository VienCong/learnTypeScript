// class Point {
//     x: number;
//     y: number;
//     constructor(x: number, y: number) {
//         this.x = x;
//         this.y = y;
//     }
//     getPosition() {
//         return `(${this.x},${this.y})`
//     }
// }

// class Parent {
//     name: string;
//     constructor(name: string) {
//         this.name = name
//     }
// }

// class Child extends Parent {
//     constructor(name: string) {
//         super(name)
//     }
// }

// class Parent {
//     // private age: number;
//     protected age: number;
//     constructor(age: number) {
//         this.age = age
//     }

//     protected getAge() {
//         console.log('aaaa');
//     }
// }
// const p = new Parent(18);
// // console.log(p.age);
// class Child extends Parent {
//     constructor(age: number) {
//         super(age)
//         // console.log(super.age);
//         super.getAge();
//         // super.age
//     }
// }


// class UserInfo {
//     readonly name: string;
//     constructor(name: string) {
//         this.name = name
//     }
// }

// const userInfo = new UserInfo('lli');
// console.log(userInfo.name);
// userInfo.name = 'aaaaa'
// class A {
//     constructor(public name:string) {

//     }
// }
//  const a1 = new A('llllsisiis');
//  console.log(a1);

// class Parent {
//     static age: number = 18;
//     static getAge() {
//         return Parent.age;
//     }
//     constructor() {

//     }
// }

// const p = new Parent();
// console.log(p.age);
// console.log(Parent.age);

// class Info {
//     name: string;
//     age?: number;
//     private _inforStr: string;
//     constructor(name: string, age?: number, public sex?: string) {
//         this.name = name;
//         this.age = age;
//         // this._inforStr =''
//     }

//     get infoStr() {
//         return `${this.name}:${this.age}`
//     }
//     set infoStr(value) {
//         console.log(value, 'RRRRRRRRRRRRRRRRR');

//         this._inforStr = value;
//     }
// }

// const info = new Info('lison');
// console.log(info.infoStr='lll');

// abstract class People {
//     constructor(public name: string) {

//     }
//     abstract printName():void;
// }

// class Man extends People {
//     constructor(name:string) {
//         super(name);
//         this.name = name
//     }

//     printName(){
//         return 'aaaaaa'
//     }

// abstract class People {
//     abstract _name:string;
//     abstract get insideName():string;
//     abstract set insideNmae(value:string);
// }

// class p extends People {
//     _name:string;
//     insideName:string;
// }

// interface Food {
//     type:string;
//     color:string;
//     func(a:number):void;
// }

// class Food1 implements Food {
//     type:string = 'aaaa';
//     color:string = 'red';
//     func(a:number):string{

//     }
// }

// class A {
//     protected name:string = '';
// }

// interface I extends A {

// }

// class B extends A implements I {
//     protected name= 'aaaaa'
// }

const creaate = <T>(c: new () => T): T => {
    return new c();
}
class Infos {
    public age:number;
}
console.log(creaate(Infos));
