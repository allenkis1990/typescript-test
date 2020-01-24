let obj1:{name:string,age:number} = {name:'allen',age:18}
console.log(obj1);


let obj2: { name: string, fn: () => void } = {
    name: 'allen',
    fn: function () {
        console.log(this.name)
    }
}
obj2.fn()


type myType = {obj:{name:string},arr:Array<object|number>,fn:()=>void}
let obj3:myType = {
    obj:{
        name:'allen'
    },
    arr:[
        1,
        {job:'web'}
    ],
    fn(){
        console.log(this.obj,this.arr);
    }
}
obj3.fn()

let obj4:{name:string,obj3:myType} = {
    name:'allen',
    obj3:{
        obj:{name:'tom'},
        arr:[1,2,3],
        fn(){
            console.log(this.obj);
        }
    }
}
obj4.obj3.fn()

