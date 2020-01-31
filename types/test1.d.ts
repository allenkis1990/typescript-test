declare let Dname:string
declare function Dfn(name:number):number

declare class Dclass{
    name:string
    age:number
    //constructor也要声明出来
    constructor(name:string,age:number)
    say():void
}

declare enum Denum{
    left,
    right,
    top,
    bottom
}

declare namespace Dnamespace{
    let name:string
    namespace extend{
        function fn(name:string):void
    }
}

//全局的interface  全局type同理
interface Dinterface{
    name:string,
    age:number,
    job?:string,
    say(b:boolean):boolean
}
// type myType = {obj:{name:string},arr:Array<object|number>,fn:()=>void}

//声明合并
//真正结构 function Dshengming(key){return {key:key}}
declare function Dshengming(key:string):any
declare namespace Dshengming{
    let key:string
}

