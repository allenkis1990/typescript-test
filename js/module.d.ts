declare var ajj:string

//主要是用来给TS识别用的
//.d.ts文件里的只能声明不能赋值
declare module 'abc' {
    let abc:{name:string}
    export default abc
}