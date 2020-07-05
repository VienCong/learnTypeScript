// function setName(target) {
//     console.log('get setName');
//     // return (target) => {
//     //     console.log('setName');

//     // }
// }

// function setAge(target) {
//     console.log('get setAge');
//     // return (target) => {
//     //     console.log('setAge');

//     // }
// }

// @setName
// @setAge
// class ClassDec {
//     constructor(parameters) {

//     }
// }

// let sign;
// function setName(name: string) {
//     return (target: new () => any) => {
//         sign = target;
//         console.log(target.name);

//     }
// }

// @setName('lison')
// class ClassDec {
//     constructor() {

//     }
// }
// console.log(sign,'1111');
// console.log(ClassDec.prototype.constructor,'11112');

// function addName(constructor: new () => any) {
//     constructor.prototype.name = 'lison';
// }
// @addName
// class D {
// }
// interface D {
//     name: string
// }

// const d = new D();
// console.log(d.name);

// function classDecorator<T extends new (...arg: any[]) => {}>(target:T) {
//     return class extends target {
//         public newProperty = 'new property';
//         public hello = 'override';
//     }
// }
// @classDecorator
// class G {
//     public property = 'property';
//     public hello: string;
//     constructor(m: string) {
//         this.hello = m
//     }
// }

// console.log(new G('word'));

// function classDecorator1<T extends new (...args: any[]) => {}>(constructor: T) {
//     return class extends constructor {
//         newProperty = "new property";
//         hello = "override";
//     }
// }

// @classDecorator1
// class Greeter {
//     property = "property";
//     hello: string;
//     constructor(m: string) {
//         this.hello = m;
//     }
// }

// console.log(new Greeter("world"));

// function enumrable(bool: boolean) {
//     return (target, propertyName, descriptor: PropertyDescriptor) => {
//         console.log(target, propertyName, descriptor);
//         descriptor.enumerable = bool;
//     }
// }

// class F {
//     constructor(public age: number) { }
//     @enumrable(true)
//     public getAge() {
//         return this.age;
//     }
// }

// const f = new F(18);
// console.log(f, 'ffffff');

// for (const key in f) {
//     console.log(key, 'eeeeeee');
// }

// function enumrable(bool: boolean) {
//     return (target, propertyName, descriptor: PropertyDescriptor) => {
//         descriptor.enumerable = bool;
//     }
// }

// class F {
//     private _name:string
//     constructor(name: string) {
//         this._name = name;
//      }
//     @enumrable(true)
//     get name() {
//         return this._name;
//     }
//     set name(name) {
//         this._name = name
//     }
// }

// const f = new F('lison');
// for (const key in f) {
//     console.log(key);

// }


// function requied(target: any, properName: any, index: number) {
//     console.log(target, properName, index);

// }

// class I {
//     public name: string = 'lison';
//     public age: number = 18;
//     public getInfon(prefix: string,@requied infoType: string) {
//         return prefix + this[infoType]
//     }
// }

// const Ii = new I();
// Ii.getInfon('hhhi','name')