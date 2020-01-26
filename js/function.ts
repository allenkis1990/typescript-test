function fn1(val1: string, val2: number): void {
    console.log(val1 + val2)
}

fn1('1', 2)


function fn2(): number {
    return 2020
}

console.log(fn2());


function fn33(val1: string, val2: number) {
    return val1 + val2
}

let fn3: (val1: string, val2: number) => string
fn3 = fn33
console.log(fn3('lwh', 520));


//fucntion类型定义的语法可以为   fn(key:string):void   fn:(key:string)=>void
let fnObj: { fn():void } = {
    fn() {
    }
}