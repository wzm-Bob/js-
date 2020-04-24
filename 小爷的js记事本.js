1.函数节流： 频繁触发, 但只在特定的时间内才执行一次代码
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
2.函数防抖: 频繁触发, 但只在特定的时间内没有触发执行条件才执行一次代码
输入框搜索自动补全事件， 频繁操作点赞和取消点赞等等
var timer = null;

function click() {
	clearTimeout(timer);
	timer = setTimeout(() => {
		ajax(...);
	}, 500)
}
3.数组深入（ 数组常用方法如下）
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