/*
一、安装 编译
*/
cnpm install  -g  typescript
tsc hello.ts
vscode中 创建 tsconfig.json 文件 tsc --init 生成配置文件
修改 "outDir": "./js" 任务 - 运行任务  监视tsconfig.json
/*
二、语法
*/
0.类型断言
尖括号形式
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
as形式
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
1.数据类型
布尔类型（boolean） var flag:boolean=true;
数字类型（number）  var num:number=123;
字符串类型(string)  var str:string='this is ts';
数组类型（array）   var arr:number[]=[11,22,33]; var arr:Array<number>=[11,22,33];
元组类型（tuple）   let arr:[number,string]=[123,'this is ts'];
枚举类型（enum）
性别、月份等
enum Err {'undefined'=-1,'null'=-2,'success'=1};
var e:Err=Err.success;【没有赋值就取下标,中间有个赋值的话，后面的在此值基础上累加】 
任意类型（any）
var oBox:any=document.getElementById('box');
oBox.style.color='red';
void类型 typescript中的void表示没有任何类型，一般用于定义方法的时候方法没有返回值。
never类型
代表从不会出现的值。这意味着声明never的变量只能被never类型所赋值
var a:undefined;
a=undefined;
var b:null;
b=null;
null 和 undefined类型
是never类型的子类型
// var num:number;
// console.log(num)  //输出：undefined   报错
// var num:undefined;
// console.log(num)  //输出：undefined  //正确
// var num:number | null | undefined;解决
2.函数
2.1、函数的定义//新增返回类型控制 函数声明与匿名函数
2.2、可选参数 顺序必须是在后面  function getInfo(name:string,age?:number):string{}
2.3、默认参数 function getInfo(name:string,age:number=20):string{}
2.4、剩余参数 function sum(...result:number[]):number{}
2.5、函数重载 
重载指的是两个或者两个以上同名函数，但它们的参数不一样，这时会出现函数重载的情况。
typescript中的重载：通过为同一个函数提供多个函数类型定义来试下多种功能的目的。
function getInfo(name:string):string;
function getInfo(name:string,age:number):string;
function getInfo(name:any,age?:any):any{
if(age){

    return '我叫：'+name+'我的年龄是'+age;
}else{

    return '我叫：'+name;
}
}
3.类
3.1 类的定义
3.2 继承
class Person{

name:string;

constructor(name:string){
this.name=name;
}

run():string{

return `${this.name}在运动`
}
}
// var p=new Person('王五');
// alert(p.run())
class Web extends Person{
constructor(name:string){

super(name);  /*初始化父类的构造函数*/
}
}


var w=new Web('李四');
alert(w.run());
3.3 类里面的修饰符
public :公有          在当前类里面、 子类  、类外面都可以访问
protected：保护类型    在当前类里面、子类里面可以访问 ，在类外部没法访问
private ：私有         在当前类里面可以访问，子类、类外部都没法访问
属性如果不加修饰符 默认就是 公有 （public）
3.4 静态属性 静态方法
function Person(){
this.run1=function(){
}
}
Person.name='哈哈哈';

Person.run2=function(){  静态方法
}
var p=new Person();
Person.run2(); 静态方法的调用
3.5 抽象类 继承 多态
多态:父类定义一个方法不去实现，让继承它的子类去实现  每一个子类有不同的表现 
typescript中的抽象类：它是提供其他类继承的基类，不能直接被实例化
用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。
abstract class Animal{
public name:string;
constructor(name:string){
this.name=name;
}
abstract eat():any;  //抽象方法不包含具体实现并且必须在派生类中实现。
run(){
console.log('其他方法可以不实现')
}
}
// var a=new Animal() /*错误的写法*/
4.接口  (接口起到一种限制和规范的作用)
4.1 属性类接口
// interface FullName{
//     firstName:string;
//     secondName?:string;
// }
4.2 函数类型接口
// 加密的函数类型接口
interface encrypt{
(key:string,value:string):string;
}
var md5:encrypt=function(key:string,value:string):string{
//模拟操作
return key+value;
}
console.log(md5('name','zhangsan'));
4.3 可索引接口
//可索引接口 对数组的约束
// interface UserArr{
//     [index:number]:string
// }
// // var arr:UserArr=['aaa','bbb'];
// // console.log(arr[0]);
//可索引接口 对对象的约束
// interface UserObj{
//     [index:string]:string
// }
// var arr:UserObj={name:'张三'};
4.4 类类型接口
interface Animal{
name:string;
eat(str:string):void;
}
class Dog implements Animal{
}
4.5 接口扩展 接口可以继承接口
5.泛型(可以支持不特定的数据类型   要求：传入的参数和返回的参数一致)
使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据。 
这样用户就可以以自己的数据类型来使用组件.
5.1 泛型的定义
function getData<T>(value:T):T{
return value;
}
getData<number>(123);
getData<string>('1214231');
5.2 泛型函数
5.3 泛型类
class MinClas<T>{}
var m1=new MinClas<number>(); 
5.4 泛型接口
interface ConfigFn<T>{
(value:T):T;
}
function getData<T>(value:T):T{
return value;
}
var myGetData:ConfigFn<string>=getData;     
myGetData('20');  /*正确*/