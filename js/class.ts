class Parent{
    //上面声明的就等于是this里的属性 如果下面没有接收一定要在上面给一个默认值
    //要想创建个this.xxx一定要上面先定义
    public name:string = 'parent'//都可以
    public job:string
    private sex:string//私有，只能自己调用
    protected age:number = 18//受保护，只能子类和自己调用
    constructor(job:string,sex:string){
        this.sex = sex
        this.job = job
        // this.getName()
    }
    getSex():void{
        console.log(this.sex)
    }
    private getName(){
        console.log(this.name);
    }
    //静态方法直接类调用
    static fn(){
        console.log('static!!!')
    }
    //在外面获取私有或者被保护的用法
    get getPrivateSex(){
        return this.sex
    }
    //在外部对私有或者被保护的设值
    set setPrivateSex(val:string){
        this.sex = val
    }
}

let p = new Parent('web','男')
p.getSex()
Parent.fn()

console.log(p.getPrivateSex,'获取私有');
p.setPrivateSex = '女'
console.log(p.getPrivateSex,'获取私有');



class Child extends Parent{
    public name:string = 'child'
    public aaa:string
    constructor(job:string,sex:string){
        super(job,sex)
        console.log(this.age);
        this.aaa = sex
    }
}
let c = new Child('java','女')
console.log(c);