1. 函数节流： 频繁触发, 但只在特定的时间内才执行一次代码
应用场景一般是onrize， onscroll等这些频繁触发的函数
// 限制500ms执行一次
var flag = false;
window.onscroll = function() {
	if (flag === true) return;
	flag = true;
	setTimeout(() => {
		console.log("要执行的事");
		flag = false;
	}, 500)
}
2. 函数防抖: 频繁触发, 但只在特定的时间内没有触发执行条件才执行一次代码
输入框搜索自动补全事件， 频繁操作点赞和取消点赞等等
var timer = null;

function click() {
	clearTimeout(timer);
	timer = setTimeout(() => {
		ajax(...);
	}, 500)
}
3. 数组深入（ 数组常用方法如下）
concat: 链接两个或者更多数据， 并返回结果。
every: 对数组中的每一项运行给定的函数， 如果该函数对每一项都返回true， 则返回true。
filter: 对数组中的每一项运行给定函数， 返回改函数会返回true的项组成的数组。
forEach: 对数组中的每一项运行给定函数， 这个方法没有返回值。
join: 将所有的数组元素链接成一个字符串。
indexOf: 返回第一个与给定参数相等的数组元素的索引， 没有找到则返回 - 1。
lastIndexOf: 返回在数组中搜索到的与给定参数相等的元素的索引里最大的值。
map: 对数组中的每一项运行给定函数， 返回每次函数调用的结果组成的数组。
reverse: 颠倒数组中元素的顺序， 原先第一个元素现在变成最后一个， 同样原先的最后一个元素变成现在的第一个。
slice: 传入索引值， 将数组中对应索引范围内的元素作为新元素返回。
some: 对数组中的每一项运行给定函数， 如果任一项返回true， 则返回true。
sort: 按照字母顺序对数组排序， 支持传入指定排序方法的函数作为参数。
toString: 将数组作为字符串返回。
valueOf: 和toString相似， 将数组作为字符串返回。
4. typeof返回值 undefined boolean string number object

function;
typeof NaN //'number'
typeof null //'object' 
5. typeof运算符用于判断对象的类型， 但是对于一些创建的对象， 它们都会返回 'object'，
有时我们需要判断该实例是否为某个对象的实例， 那么这个时候需要用到instanceof运算符
const auto = new Car('Honda', 'Accord', 1998);
console.log(auto instanceof Car) //true
1. 内置类型 {
	null
	undefined
	boolean
	string
	number
	object {
		array function等都是object的子类型
	}
	Symbol
}
typeof 类型推导
typeof null => 'object'
typeof array => 'object'
var a;
typeof a => 'undefined'
typeof 运算符总是返回字符串 {
	var a;
	undefined 未赋值;
	b;
	undeclared 未声明;
	typeof 对二者均返回 'undefined'
}
小结: 通过 typeof 的安全防范机制（ 阻止报错） 来检查 undeclared 变量。
2. 值
类数组（ 一组通过数字索引的值） 如实参
Array.prototype.slice.call(arguments)
Array.from() 一样的功能
reverse() 方法只有数组有 字符串没有
0.1 + 0.2 === 0.3; // false
二进制浮点数中的 0.1 和 0.2 并不是十分精确， 它们相加的结果并非刚好等于 0.3， 而是一个比较接近的数字 0.30000000000000004， 所以条件判断结果为 false
Number.EPSILON 在指定的误差范围内比较浮点数的大小是否相等
Number.isInteger 检测一个值是否是整数
Number.isNaN NAN不等于NAN
Object.is() 来判断两个特殊值是否绝对相等 优先使用 == || ===
	简单标量基本类型值（ 字符串和数字等） 通过值复制来赋值 / 传递， 而复合值（ 对象等） 通过引用复制来赋值 / 传递。 JavaScript 中的引用和其他语言中的引用 / 指针不同， 它们不能指向别的变量 / 引用， 只能指向值。
核心： 由于引用指向的是值本身而非变量， 所以一个引用无法更改另一个引用的指向。
var a = [1, 2, 3];
var b = a;
a;
// [1,2,3] b; // [1,2,3] 
然后 b = [4, 5, 6];
a;
[1, 2, 3] b;
[4, 5, 6]
b = [4, 5, 6] 并不影响 a 指向值[1, 2, 3]
3. 原生函数可以被当作构造函数来使用 如 new String("")
但返回值是基本类型的封装对象。
a.valueOf() 将包装类型拆分为基本类型。
关于数组（ array）、 对象（ object）、 函数（
function） 和正则表达式， 常量创建和构造函数创建一样效果。
原生构造函数有自己的.prototype对象 = 》所有的函数都可以调用 Function.prototype中的apply、 call、 bind
Function.prototype 是一个空函数
4. 强制类型转换
toString Number Boolean(0) false
toJSON() 应该“ 返回一个能够被字符串化的安全的 JSON 值”， 而不是“ 返回一个 JSON 字符串”。 ==
	对于undefined和nulld的隐式转换安全返回true
5. 语法
如果
finally 中抛出异常（ 无论是有意还是无意）， 函数就会在此处终止。 如果此前
try 中已经有
return 设置了返回 值， 则该值会被丢弃。
6. 函数作用域
	(function() {
		自执行函数 也是内部作用域
	})()
给匿名函数具名挺好的实践
setTimeout(function timeDelayFun() {}, 20)
	(function autoRunFun() {})(window)
js引擎解析分为编译和执行阶段， 所有变量会提升
函数声明会提升到变量之前
6. 闭包
1. 作用域查找2.保持引用不销毁 垃圾回收机制

function setupBot(name, selector) {
	$(selector).click(function activator() {
		console.log("Activating: " + name);
	});
}
setupBot("Closure Bot 1", "#bot_1");

function wait(message) {
	setTimeout(function timer() {
		console.log(message);
	}, 1000);
}
wait("Hello, closure!")
延迟函数的回调会在循环结束时才执行
for (var i = 1; i <= 5; i++) {
	(function(j) {
		setTimeout(function timer() {
			console.log(j);
		}, j * 1000);
	})(i);
}
利用let的块级作用域 每次循环都会有一个新的作用域 var的的话全局使用 循环i都是一个
for (let i = 1; i <= 5; i++) {
	setTimeout(function timer() {
		console.log(i);
	}, i * 1000);
}
7. 原型链

call与apply在改变this的同时， 就立刻执行， 应用函数，
而bind绑定this后并不会立马执行， 而是返回一个新的绑定函数。 当执行绑定函数时， this指向与形参在bind方法执行时已经确定了， 无法改变。 所以多次绑定没有意义。

函数防抖实现的核心在于每次都去clear一个延时器， 然后每次执行函数的时候， 都去clear以前的延时器。 只有当你中断输入的时候， 才会去执行相应回调。 而函数节流的核心是去判断当前时间和开始时间的间隔是否到达了设置的delay值， 如果达到了， 就执行一次回调。 没有则不执行。
$('.xjk').bind('input',throttle(fns,2000,false))
function fns(){
    debugger
    console.log(000)
}
function throttle(fn, delay, isDebounce) {
    debugger
    let timer
    let lastCall = 0
    return function(...args) {
        if (isDebounce) {//防抖
            if (timer) clearTimeout(timer)
            timer = setTimeout(() => {
                fn(...args)
        }, delay)
        } else {//节流
            const now = new Date().getTime()
            if (now - lastCall < delay) return
            lastCall = now
            fn(...args)
        }
    }
}