//全局变量
let Dname = 'lwh'
//全局方法
function Dfn(num){
    return num
}
//全局类
class Dclass{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    say(){
        console.log(this.name, this.age);
    }
}

//全局枚举
let Denum = {
    left:'left',
    right:'right',
    top:'top',
    bottom:'bottom'
}

//全局namespace
let Dnamespace = {
    name:'lwh',
    extend:{
        fn(name){
            console.log(name)
        }
    }
}

//声明合并
function Dshengming(key){
    return {
        key:key
    }
}