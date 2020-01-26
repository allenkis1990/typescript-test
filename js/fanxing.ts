//1
//<T>一定在()括号前面
function lwh<T>(val: T): void {
    console.log(val);
}

lwh('lwh')


//2
let lwh2 = function <T>(val: T): void {
    console.log(val)
}
lwh2('lwh2')

//3.泛型在接口中的应用
interface Interface1 {
    <T>(val: T) : void
}

let lwh3:Interface1 = function(val):void{
    console.log(val)
}
lwh3('1212')

//4.泛型的约束扩展
let ys :{name:string,length:number} = {
    name:'allen',
    length:10
}
// function ysFn<T>(obj:T):void{}
//约束一定要有length
let ysFn:<T extends {length:number}>(obj:T)=>void = function(obj){
    console.log(obj);
}

ysFn(ys)



//5.泛型指定类型 函数层面
function Xxx<T>(val:T):void{
    console.log(val);
}
Xxx<string>('Xxx')


//6.泛型提升到 接口层面
interface tisheng<T>{
    (val:T):void
}

let tishengFn:tisheng<string> = function(val){
    console.log(val);
}
tishengFn('tisheng')

//7.解决两个参数相加问题
interface fnInterface2{
    <T1,T2>(name:T1,age:T2):void
}
// let interfaceFn:fnInterface = function<T1,T2>(name:T1,age:T2):void{
let interfaceFn2:fnInterface2 = function(name,age){
    console.log(`${name}${age}`,'解决两个参数相加问题');
    // console.log(+name*+age,'解决两个参数相加问题');
}
interfaceFn2('lwh',11)


//8.泛型应用在类中 constructor里一定要传参数才可使用泛型
class LeiFanxing<T,T2>{
    name:T
    age:T
    fuck:T2
    constructor(name:T,age:T,fuck:T2){
        this.name = name
        this.age = age
        this.fuck = fuck
    }
}
// let LLL = new LeiFanxing<number,string>(18,19,'fuck')
let LLL = new LeiFanxing(18,19,'fuck')//<number,string>不传的话就会自己推断类型
console.log(LLL);