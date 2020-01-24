let a1:number|string
a1 = 1
a1 = '2'



let a2:{name:string,age:number} = {
    name:'allen',
    age:18
}

let a3:any

a3 = 12
a3 = 'allen'
a3 = {}


let a4:undefined|null
a4 = null
a4 = undefined
console.log(a4);


function fn():never{
    throw '123'
}
fn()

//never只能用在死循环或者抛错不能赋给任何
// let a5:never
// a5 = 1

