1.e s是语法 如循环 闭包 函数 原型 异步等是js和node必须遵守的东西。
不能操作dom 不能监听事件 不能处理http请求
2. js是使用es的标准， 结合w3c的web api标准， bom操作 事件绑定 ajax等完成浏览器操作
3. 渲染机制 doctype 文档类型定义 使用那种类型如html
浏览器渲染过程 html - > dom tree.css - > css rule 结合生成render tree = 》paint
重排reflow dom中的元素有自己的盒子， 需要浏览器计算得倒位置并放置， 当增删改节点修改样式修改字体等会触发
重绘repaint 应当减少 如dom改动 css改动等
4. js运行机制 异步同步 任务队列 事件循环 单线程 异步任务的放入和执行时间
异步包括settimeout setinterval dom事件。 promise
settimeout 不是立马会放到异步事件队列 而是等时间到了才会放到队列中。
5. 页面性能
5.1 资源压缩合并减少http请求
5.2 非核心代码异步加载
异步加载的方式 动态脚本加载(创造节点)
defer 是在html解析完后执行 脚本按顺序执行
async 是在加载完后立即执行 随机顺序执行
5.3 利用浏览器缓存 和缓存相关的http头 就是下面的
强缓存 expires过期绝对时间 服务器时间 cache - control相对时间 时间节点不会从服务器获取
协商缓存 last - modified.上次修改的时间
if -modified - since etag 对比
if -none match
5.4 使用cdn加速
5.5 预解析dns link中的rel = dns - prefetch.meta中的http - equiv = 'x-dns-pefetch-control'
主要解决https中a标签的预解析不是默认打开的。
6. 错误监控 产品质量
前端错误分类 代码错误。 资源加载错误
代码捕获方式
try -
catch.window.onerror
资源加载错误捕获方式 object.onerror
performance.getentries() //数组 加载成功的资源
error捕获
7. 算法
排序 快速排序 选择排序 希尔排序 冒泡排序
https: //segmentfault.com/a/entry/1190000009426421
	堆栈（ 先进后出） 队列（） 链表（）
https: //juejin.im/entry/58759e79128fe1006b48cdfd
	递归
https: //segmentfault/a/1190000009857470
	波兰式和逆波兰式
http: //www.cnblogs.com/chenying99/p/3675876.html
	https: //github.com/Tairraos/rpn.js/blob/master/rpn.js
	8. 前端安全
csrf 跨站请求伪造（ 登录过， 某个接口有漏洞） 比方在a网站登录后， 进入b网站， 点击引诱链接进入a
造成可以访问， 如新浪微博的粉丝疯狂增加漏洞。 防御 token验证 referer验证
xss 跨域脚本攻击 向页面注入脚本。 防御就是不让执行脚本， 慕课网有免费课程。
9. 前端通信
同源策略 协议 域名 端口组成源 三者必须一样。
前后端通信 ajax是同源通信。 websocket是不受同源策略 cors两者都支持。
原生实现ajax.xmlhttprequest对象 xhr.open(type, url, true).send().onload = function() {}
跨域
jsonp 利用script的异步加载实现
hash.hash改变页面不刷新
postmessage 跨域通信html5
websocket //不受同源策略影响
cors //跨域通信的新标准 
10. 原型链 函数也是个对象
创建对象的方法 字面量 构造函数 object.create(基于原型链) 三种
函数一new就成了构造函数 生成实例， 函数上都有一个prototype属性
指向原型对象 {}
原型对象有一个constucror指向等于构造函数；
实例的_proto_属性等于指向原型对象 如obj1._proto_ = m.prototype。
原型链： 在实例中找不到对应的方法或者属性， 就会到上一级原型对象上找，
还找不到会到原型对象的_proto_上去找。 实例的_proto_引用的是构造函数下
的一个prototype属性 即原型对象。

实例有三种生成方式， 原型对象有多层， 实例没有prototype， 原生对象函数对象才有prototype
但是二者都有_proto_指向原型 无论new 函数对象 还是普通对象都有 构造函数和— _proto_
构造函数有prototype指向 实例的_proto_
实例.构造函数.prototype = 实例._proto_ = 原型对象 = 函数.prototype = 原型对象.constructor.prototype


instanceof原理 左侧的实例对象的属性和右侧构造函数的属性是否引用
同一个对象。
new 运算符 1. 新对象创建 继承prototype2.执行构造函数， 传入参数， 绑定上下文
3. 如果返回新对象。 就替换。

面向对象： 声明类 es5

function 初始值 es6 class + constructor
实例话 new
继承的本质。 就是原型链
继承的方式：
1. 借助构造函数实现 子类中调用父类（ 只是部分继承， 原型上的无法继承）
parent.call(this) // apply 将父级的构造函数指向子集的this
2. 借助原型链 实现整体继承
cild.prototype = new parent()
new child()._proto_引用parent的原型上的_proto_
缺点 两个子类共同引用父类的原型对象， 一个改变另一个也变掉
3. 组合方式实现继承 最通用的方式
缺点 父类调用两次 优化1child.protype = parent.protype
优化2 child.protype = object.create(parent.prototype)
es6继承 class child extends parent {
	constructor(name) {
		super(name) //先执行父类
		this.sub = 'aa'
	}
}
//1.最简单的类
// function Person(){

//     this.name='张三';
//     this.age=20;
// }
// var p=new Person();
// alert(p.name);



//2、构造函数和原型链里面增加方法


// function Person(){

//     this.name='张三';  /*属性*/
//     this.age=20;
//     this.run=function(){

//         alert(this.name+'在运动');
//     }

// }
// //原型链上面的属性会被多个实例共享   构造函数不会
// Person.prototype.sex="男";
// Person.prototype.work=function(){
//     alert(this.name+'在工作');

// }
// var p=new Person();
// // alert(p.name);
// // p.run();
// p.work();



//3类里面的静态方法


// function Person(){

//     this.name='张三';  /*属性*/
//     this.age=20;
//     this.run=function(){  /*实例方法*/

//         alert(this.name+'在运动');
//     }

// }

// Person.getInfo=function(){

//     alert('我是静态方法');
// }
// //原型链上面的属性会被多个实例共享   构造函数不会
// Person.prototype.sex="男";
// Person.prototype.work=function(){
//     alert(this.name+'在工作');

// }
// var p=new Person();    
// p.work();

// //调用静态方法
// Person.getInfo();



// 4、es5里面的继承   对象冒充实现继承


//    function Person(){
//         this.name='张三';  /*属性*/
//         this.age=20;
//         this.run=function(){  /*实例方法*/
//             alert(this.name+'在运动');
//         }

//     }      
//     Person.prototype.sex="男";
//     Person.prototype.work=function(){
//          alert(this.name+'在工作');

//     }

//     //Web类 继承Person类   原型链+对象冒充的组合继承模式

//     function Web(){

//         Person.call(this);    /*对象冒充实现继承*/
//     }

//     var w=new Web();
//    // w.run();  //对象冒充可以继承构造函数里面的属性和方法

//     w.work();  //对象冒充可以继承构造函数里面的属性和方法   但是没法继承原型链上面的属性和方法



// 5、es5里面的继承   原型链实现继承

//    function Person(){
//         this.name='张三';  /*属性*/
//         this.age=20;
//         this.run=function(){  /*实例方法*/
//             alert(this.name+'在运动');
//         }

//     }      
//     Person.prototype.sex="男";
//     Person.prototype.work=function(){
//          alert(this.name+'在工作');

//     }

//     //Web类 继承Person类   原型链+对象冒充的组合继承模式

//     function Web(){

//     }

//    Web.prototype=new Person();   //原型链实现继承
//    var w=new Web();
//     //原型链实现继承:可以继承构造函数里面的属性和方法 也可以继承原型链上面的属性和方法
//     //w.run();

//     w.work();



// 6、 原型链实现继承的 问题？

//    function Person(name,age){
//         this.name=name;  /*属性*/
//         this.age=age;
//         this.run=function(){  /*实例方法*/
//             alert(this.name+'在运动');
//         }

//     }      
//     Person.prototype.sex="男";
//     Person.prototype.work=function(){
//          alert(this.name+'在工作');

//     }

//    var p=new Person('李四',20);
//    p.run();



// function Person(name,age){
//         this.name=name;  /*属性*/
//         this.age=age;
//         this.run=function(){  /*实例方法*/
//             alert(this.name+'在运动');
//         }

// }      
// Person.prototype.sex="男";
// Person.prototype.work=function(){
//         alert(this.name+'在工作');

// }


// function Web(name,age){


// }

// Web.prototype=new Person();

// var w=new Web('赵四',20);   //实例化子类的时候没法给父类传参

// w.run();

// // var w1=new Web('王五',22);



//7.原型链+对象冒充的组合继承模式


//   function Person(name,age){
//             this.name=name;  /*属性*/
//             this.age=age;
//             this.run=function(){  /*实例方法*/
//                 alert(this.name+'在运动');
//             }

//     }      
//     Person.prototype.sex="男";
//     Person.prototype.work=function(){
//             alert(this.name+'在工作');

//     }


//     function Web(name,age){

//         Person.call(this,name,age);   //对象冒充继承   实例化子类可以给父类传参
//     }

//     Web.prototype=new Person();

//     var w=new Web('赵四',20);   //实例化子类的时候没法给父类传参

//     // w.run();
//     w.work();

//     // var w1=new Web('王五',22);



//8、原型链+对象冒充继承的另一种方式


function Person(name, age) {
	this.name = name; /*属性*/
	this.age = age;
	this.run = function() { /*实例方法*/
		alert(this.name + '在运动');
	}

}
Person.prototype.sex = "男";
Person.prototype.work = function() {
	alert(this.name + '在工作');

}


function Web(name, age) {

	Person.call(this, name, age); //对象冒充继承  可以继承构造函数里面的属性和方法、实例化子类可以给父类传参
}

Web.prototype = Person.prototype;

var w = new Web('赵四', 20); //实例化子类的时候没法给父类传参

w.run();
// w.work();

// var w1=new Web('王五',22);
11. http协议特点 uri 简单快速 无连接(连一次就会断掉) 不记状态
报文 请求报文（ 请求行 请求头 空行 请求体） 响应报文（ 响应头）
get请求会被主动缓存 post不会； get在浏览器回退无害 post绘重复提交
301 请求页面重定向 302 临时重定向
持久链接 管线化（ 多个请求发起 都完成后响应） 两种请求
表格布局 浮动 定位 网格 flex
css 盒模型 标准模型（ 不包含padding） + IE模型（ 包含） margin + border + padding
计算宽高的不同 dom.style.width dom.currentstyle.width(取到渲染后的 直支持IE)

12. 兼容 window.getComputedstyle
js获取盒模型的宽高 边距重叠 取最大值
bfc解决边距重叠 增加父级元素 添加overflow属性。
dom事件模型 冒泡向上 捕获
dom0 ele.onclick
dom2 ele.addeventlistener('click', function() {}, true)
dom事件流 捕获(window - document - html - body) = 》目标 = 〉冒泡
流程
event对象应用 e.preventDefault z阻止链接跳转
e.stopPropagation 阻止冒泡 如父子元素有不同的事件
e.stopimmediatepropagation事件响应优先级
e.target 当前点击元素
自定义事件
var eve = new Event('custom')
ev.addEventllistener('custom', function() {})
ev.dispatchEvent(eve)

13. webpack common.js规范 入口文件 输出为bundle.js
有一些解析规则

14. 原型 jquery和zepto中原型实战
实例不同 但构造函数上的prototype一样

15. 虚拟dom 用js模拟dom结构 dom操作昂贵 将dom对比放在js层 提高效率。
snabbdom 核心api函数 h函数创建vnode patch函数渲染vnode

16. mvvm
1. 模版就是字符串 是有逻辑的 有变量的。 必须转换成js.
2. render函数 with语法 就是h函数创建返回的vnode
3. updateComponent patch函数的执行
4. jquery区别 数据视图分离 节藕。 数据驱动 不操作dom
5. mvvm model + view + viewmodel理解
data + template + vm组合
vm = new Vue({ //是view和model绑定的桥梁 
	// 通过事件绑定监听和data绑定实现
	el: '#app',
	data: data,
	methods: {}
})

17. vue 生成四大步
1. 模版解析 成render函数 data中的属性都变成js变量
2. 响应式监听 object.defineproperty 将data属性代理到vm上
没走get的属性 不会执行set 避免重复渲染（ 如没用的data属性）
set执行updatecomponent()
将属性代理到vm的原因是 vnode中的变量是vm.变量； 而响应式中在data中
所以要代理到vm上。
3. 首次渲染 显示页面 且绑定依赖 patch生成dom
updateComponent() {
	vm.update(vnode)
}
vm.update(vnode) {
	const prevnode = vm.vnode
	if (!prevnode) {
		vm.$el = vm.patch(el, vnode)
	} else {
		vm.$el = vm.patch(prevnode, node)
	}
}
4. data属性变化 触发rerender 新旧vnode对比 重新patch

1. created() 在这一步， 实例已完成以下的配置： 数据观测(data observer)， 属性和方法
运算， watch / event 事件回调。 然而， 挂载阶段还没开始， $el 属性目前尚不可用
2. beforeMount render开始调用
3. mount 实例被挂载后调用， 这时 el 被新创建的 vm.$el 替换了。

注意 mounted 不会保证所有的子组件也都一起被挂载。
如果你希望等到整个视图都渲染完毕， 可以在 mounted 内部使用 vm.$nextTick：
4. beforeUpdate 数据更新时调用， 发生在虚拟 DOM 打补丁之前。
这里适合在更新之前访问现有的 DOM， 比如手动移除已添加的事件监听器。

18. 组件化的理解 封装（ 视图 数据 变化逻辑） 复用（ props传递 复用）
jsx本质 语法糖 类似h函数 解析成js才能运行
jsx和vdom的关系 jsx需要渲染成html patch函数
react.createelement 和h 都生成vnode
setstate过程 异步 还是到patch中

19. hybrid 混合开发 存在意义是快速迭代 无需审核 file协议
hybrid开发成本高 h5运营性
schema协议 = 》前端和手机客户端通信协议


3. node是使用es的标准， 结合node api, 处理API 处理文件等
完成服务端操作
4. node中的模块化用common.js 开放封闭原则
5. node调试 利用vscode的断点调试 package.json中的入口文件要一样
6. 后端开发1.服务稳定性2.内存cpu 3 日志记录4.安全 xss攻击sql注入
越权登录等5.集群
7. http请求 dns解析（ 域名解析成IP， 有缓存走缓存） 建立tcp链接（
三次握手， 第一次握手， 客户端问服务端 你是否可以用； 第二次服务端告诉客户端，
可用； 第三次 客户端告诉服务端我知道了 发起请求） 发送http请求
server接受处理并返回 客户端渲染处理
8. redis解决多进程数据共享， 操作系统分配的内存不会占用，
独立的server； 将session放在redis中解决。 内存数据库 mysql是硬盘数据库。

1. 基本数据类型有这五种: Undefined、 Null、 String、 Number、 Boolean、 symbol。
引用类型： 当复制保存着对象的某个变量时， 操作的是对象的引用， 但在为对象添加属性时， 操作的是实际的对象。 引用类型值指那些可能为多个值构成的对象。 引用类型值指那些可能为多个值构成的对象。
引用类型有这几种： object、 Array、 RegExp、 Date、 Function、 特殊的基本包装类型(String、 Number、 Boolean) 以及单体内置对象(Global、 Math)。
2. JS中的 call， apply 和 bind 是 Function.prototype 下的方法， 都是用于改变函数执行时的上下文。 最终的返回值是你调用的方法的返回值， 若该方法没有返回值， 则返回 undefined。 它们的作用都是改变当前函数 this 的指向。
call 方法第二个参数接收的是参数列表， 简单说就是需要把实参按照形参的个数传进去
call 方法的第一个参数用于改变 this 指向， 但是如果传入 null / undefined 值， this 会指向 window 'use strict' //  严格模式
var obj = {
	value: '我是obj对象'
}

function fn(a, b) {
	console.log(this)
	console.log(a + b)
}

fn(10, 20) // 普通模式下 this 是 window，在严格模式下 this 是 undefined   30
fn.call('', 10, 20) // 普通模式下 this 是 {''}，  在严格模式下 this 是 ''          30
fn.call(obj, 10, 20) // 普通模式下 this 是 obj，   在严格模式下 this 是 obj         30
fn.call(null, 10, 20) // 普通模式下 this 是 window，在严格模式下 this 是 null        30
fn.call(undefined, 10, 20) // 普通模式下 this 是 window，在严格模式下 this 是 undefined   30

apply 方法的第二个参数需要传入一个实参列表， 也就是数组或类数组
apply 方法的第一个参数用于改变 this 指向， 但是如果传入 null / undefined 值， this 会指向 window

function log() {
	console.log.apply(console, arguments)
}

log(123) // 123
log('name', 456) // name 456

bind 方法直接改变这个函数的 this 指向 并且返回一个新的函数，
之后再次调用这个函数的时候 this 都是指向 bind 绑定的第一个参数

call 和 apply 的区别
call 是 apply 的语法糖
call 和 apply 都是改变 this 指向后并执行函数
call 和 apply 的第一个参数的作用相同， 都是让另外一个对象替换当前对象， 改变 this 的指向
call 的第二个参数传入的是参数列表， apply 的第二个参数传入的是实参列表， 也就是数组或类数组
call 和 bind 的区别
call 是改变 this 指向后并执行函数， bind 是返回改变 this 指向后的函数
call 的第二个参数传入的是参数列表， bind 的第二个参数（ 可选） 可以是参数列表， 也可以是实参列表（ 数组）
callback - > promise - > generator - > async + await 异步编程
3. https: //www.cnblogs.com/wangziye/p/9566454.html
	宏任务（ macrotask） 和微任务（ microtask）
事件轮训中宏任务执行后看有没有微任务 有的话全部执行 执行完再执行下一个微任务。
macrotask 和 microtask 表示异步任务的两种分类。

在挂起任务时， JS 引擎会将所有任务按照类别分到这两个队列中， 首先在 macrotask
的队列（ 这个队列也被叫做 task queue） 中取出第一个任务，
执行完毕后取出 microtask 队列中的所有任务顺序执行； 之后再取 macrotask 任务，
周而复始， 直至两个队列的任务都取完。
setTimeout(() => {
	//执行后 回调一个宏事件
	console.log('内层宏事件3')
}, 0)
console.log('外层宏事件1');

new Promise((resolve) => {
	console.log('外层宏事件2');
	resolve()
}).then(() => {
	console.log('微事件1');
}).then(() => {
	console.log('微事件2')
})
外层宏事件1
外层宏事件2
微事件1
微事件2
内层宏事件3•
首先浏览器执行js进入第一个宏任务进入主线程, 遇到 setTimeout 分发到宏任务
Event Queue中

• 遇到 console.log() 直接执行 输出 外层宏事件1

• 遇到 Promise， new Promise 直接执行 输出 外层宏事件2

• 执行then 被分发到微任务Event Queue中

• 第一轮宏任务执行结束， 开始执行微任务 打印 '微事件1'
'微事件2'

•
第一轮微任务执行完毕， 执行第二轮宏事件， 打印setTimeout里面内容 '内层宏事件3'
1. 单例模式
确保只有一个实例， 提供全局访问；
如qq创建div, 设置一个flag
2. 策略模式
一系列算法封装起来（ 缺点是要穷尽）
如表单的校验 正则规则、 提示等算法封装
3. 代理模式
为一个对象提供一个代用品或占位符， 以便控制对它的访问
如图片的预加载 间接访问在未加载完之前放loading图片
4. 迭代器模式
在使用迭代器模式之后， 即使不关心对象的内部构造， 也可以按顺序访问其中的每个元素‘
如JS中数组的map forEach 已经内置了迭代器
5. 发布 - 订阅模式(观察者模式)
对象间的一种一对多的依赖关系， 当一个对象发生改变时， 所有依赖于它的对象都将得到通知
如js click事件 常用的input propertychange实时监听
6. 组合模式
可以用树形结构来表示这种“ 部分 - 整体” 的层次结构
如表单的自动保存 递归处理叶子节点input select等
7. 装饰者模式
以动态地给某个对象添加一些额外的职责， 而不会影响从这个类中派生的其他对象。
最简单的装饰者， 就是重写对象的属性
8. 状态模式
依据不同的状态实现不同的功能
9. 适配器模式
是解决两个软件实体间的接口不兼容的问题， 对不兼容的部分进行适配
解决两个已有接口之间不匹配的问题