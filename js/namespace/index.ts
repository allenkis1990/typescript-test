/// <reference path="n1.ts" />
//一定要使用命令tsc xx.ts --outFile xx.js 否则无法正常引入n1
//要放到外面使用一定要export出去，只放里面使用可以不export
namespace Lwh{
    let haha = 'lwh'
    export let name:string = haha
    export namespace Xll{
        let hehe = 'xll'
        export let name:string = hehe
    }
}

console.log(Lwh.name);
console.log(Lwh.Xll.name);
console.log(n1);
