let arr1:Array<string> = ['1','2','3']
console.log(arr1);

let arr2:number[] = [1,2,3]
console.log(arr2);

let arr3:(number|string)[] = [1,2,'3']
console.log(arr3);

let arr4:Array<boolean|null> = [false,null]
console.log(arr4);

//数组和对象都可以用<object>
let arr5:Array<object> = [[1]]
console.log(arr5);


//元组
let arr6:[string,boolean] = ['1',true]
console.log(arr6);