function fn1(val1: string, val2: number): void {
    console.log(val1 + val2)
}

fn1('1', 2)


function fn2(): number {
    return 2020
}

console.log(fn2());




let fn3: (val1: string, val2: number) => string = function(val1,val2){
    return val1+val2
}
console.log(fn3('lwh', 520));


//fucntion类型定义的语法可以为   fn(key:string):void   fn:(key:string)=>void
let fnObj: { fn():void } = {
    fn() {
    }
}