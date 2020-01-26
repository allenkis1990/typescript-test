//接口在对象上的使用
interface LwhInterface{
    name:string,
    age:number,
    job?:string,//可选
    // say:(name:string,age:number)=>void
    say:()=>void,
    [propName:string]:any//任意属性key是一个string  value如果是有指定类型会包含其他已经定义的
}

let obj:LwhInterface = {
    name:'lwh',
    age:18,
    job:'web',
    fuck:'fuck',
    say(){
        console.log(this.name + this.age + this.job + this.fuck);
    }
}
obj.say()


//接口在方法上的使用
interface fnInterface{
    <T1,T2>(name:T1,age:T2):void
    // (name:string,age:number):void
    // <T>(age:T):void
}
// let interfaceFn:fnInterface = function<T1,T2>(name:T1,age:T2):void{
let interfaceFn:fnInterface = function(name,age){
    console.log(name,age,'接口在function上的应用');
}
interfaceFn('lwh',11)



//接口在类上的使用
interface classInterface1{
    name:string,
    age:number
}
interface classInterface2{
    job?:string,
    say:(fuck:string)=>string
}
class ClassTest implements classInterface1,classInterface2{
    name:string = 'lwh'
    age:number = 18
    say:(fuck:string)=>string
    fuck:string
    job:string = 'web'
    private haha:string
    constructor(fuck:string){
        this.fuck = fuck
        this.say = function(){
            return 'say'
        }
        this.haha = 'haha'
    }
}

let haha = new ClassTest('fuck')
console.log(haha);



//接口的继承
interface classInterface3 extends classInterface1{
    fav:string
    money:number
}

class ClassTest2 implements classInterface3{
    name:string = 'lwh'
    age:number = 18
    fav:string = 'ball'
    money:number = 66666666
}

let hehe = new ClassTest2()
console.log(hehe);