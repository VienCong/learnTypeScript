// type TypeString = string;
// let str2:TypeString;
// type PositionType<T> = {x:T,y:T};
// const position:PositionType<number> = {
//     x:2,
//     y:4
// }

// const position1:PositionType<string> = {
//     x:'2',
//     y:'4'
// }

// type Child<T> = {
//     current:T;
//     child?:Child<T>
// }

// let ccc:Child<string> = {
//     current:'1111',
//     child:{
//         current:'11111'
//     }
// }

// type Child = Child[];

// type Name = 'lison'|'aaaa'|'jshhhs';
// const name1:Name = 'jshhhs'

interface Square {
    kind: 'square',
    size: number
}

interface Rectangle {
    kind: 'rectangel',
    height: number,
    width: number
}

interface Circle {
    kind: 'circle',
    radius: number
}

type Shape = Square | Rectangle | Circle;

function getArea(s: Shape):number {
    switch (s.kind) {
        case 'square':
            return 1;
            break;
        case 'rectangel':
            return 2;
            break;
        case 'circle':
            return 3;
            break;
        // default:
        //     break;
    }
}