// class Counters {
//     constructor(public count: number = 0) {

//     }

//     public add(value:number){
//         this.count+=value;
//         return this;
//     }
//     public substract(value:number){
//         this.count-=value;
//         return this;
//     }
// }

// let counter1 = new Counters(10);
// console.log(counter1.add(2));
// console.log(counter1.substract(4));

// class PowCounter extends Counters {
//     constructor(public count:number = 0){
//         super(count)
//     }
//     public pow(value:number){
//         this.count = this.count**value
//     }
// }

// keyof
// interface InfoInterfaceAdvanced {
//     name:string;
//     age:number;
// }

// let infoProp:keyof InfoInterfaceAdvanced;
// infoProp = 'name';


function getValue<T, K extends keyof T>(obj: T, names: K[]) {
    return names.map(n => obj[n]);
}

const infoObj = {
    name:'lison',
    age:18
}

let values = getValue(infoObj,['name'])
console.log(values);
