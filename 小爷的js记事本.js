一、 requestAnimFrame动画
every: 一假即假
some: 一真即真
返回值是布尔值
var result = computers.every(function(computer) {
	return computer.ram > 16
})

一、 Array数组
1、 _.concat
将原数组拷贝一份副本, 拼接操作副本新数组, 原数组不变

const array = [1]
const other = array.concat(2, [3], [
	[4]
])
console.log(other); // [1, 2, 3, [4]]
console.log(array); // [1]

2、 _.fill
修改替换数组中元素的值

const array = [1, 2, 3];
array.fill('a');
console.log(array); // ['a', 'a', 'a']

console.log(Array(3).fill(2)); // [2, 2, 2]

console.log([4, 6, 8, 10].fill('*', 2, 3)); // [4, '*', '*', 10]; 从下标为2开始到下标为3,第三个为空时默认替换到数组最尾
3、 _.find
返回从数组中查找到符合条件的第一个值
const users = [{
	'user': 'barney',
	'age': 36,
	'active': true
}, {
	'user': 'fred',
	'age': 40,
	'active': false
}, {
	'user': 'pebbles',
	'age': 1,
	'active': true
}];
const findOut = users.find(item => item.age < 40);
console.log(findOut); // { active: true, age: 36, user: "barney" }
4、 _.findIndex
返回从数组中查找到符合条件的第一个值的下标， 没有符合的返回 - 1

const users = [{
	'user': 'barney',
	'age': 36,
	'active': true
}, {
	'user': 'fred',
	'age': 40,
	'active': false
}, {
	'user': 'pebbles',
	'age': 1,
	'active': true
}];
const findIndex = users.findIndex(item => item.age < 40);
console.log(findIndex); // 0

5、 _.indexOf 同样可用在字符串
返回从数组中查找到的第一个值的下标， 没有符合的返回 - 1
const array = [2, 9, 9];
const result = array.indexOf(9);
console.log(result); // 1

6、 _.join
根据分隔符来拼接数组中元素

const result = ['one', 'two', 'three'].join('--');
console.log(result); // "one--two--three"

7、 _.lastIndexOf
返回在数组中最后出现该值的index下标， 没有返回 - 1

const array = [2, 9, 9, 4, 3, 6];
const result = array.lastIndexOf(9);
console.log(result); // 2

8、 _.reverse
反转数组

const array = [1, 2, 3];
console.log(array.reverse()); // [3, 2, 1]

二、 Collection集合
1、 _.each
依次yielding数组元素, 可以在中间操作每个元素
	[1, 2, 3].forEach((value, index) => {
		console.log(value * 3);
	}); // 3 6 9 依次输出

2、 _.every
数组中每个元素是否符合提供的测试条件函数

const isLargerThanTen = (element, index, array) => {
	console.log(element, index, array);
	return element >= 10;
}

const array = [10, 20, 30];
const result = array.every(isLargerThanTen);
console.log(result); // true

3、 _.filter
过滤出符合提供的条件函数的值, 并返回它们组成的数组

const isBigEnough = (value) => {
	return value >= 10
}
const array = [12, 5, 8, 130, 44];
const filtered = array.filter(isBigEnough);
console.log(filtered); // [12, 130, 44]

4、 _.includes
该值是否在数组中

const array = [1, 2, 3];
array.includes(1); // true
// 用indexOf相同效果
const array = [1, 2, 3];
array.indexOf(1) > -1; // true

5、 _.map
将数组中元素每个值改变后返回新数组

const array1 = [1, 2, 3];
const array2 = array1.map((value, index) => {
	return value * 2 + index;
});
console.log(array2); // [2, 5, 8]
6、 _.pluck
pluck是Lodash v4 .0 之前的函数

const array1 = [{
	name: "Alice"
}, {
	name: "Bob"
}, {
	name: "Jeremy"
}];
const names = array1.map(x => {
	return x.name;
})
console.log(names); // ["Alice", "Bob", "Jeremy"]

7、 _.reduce
从左到右计算一个数组中各元素值 累加算法

const array = [0, 1, 2, 3, 4];
const result = array.reduce((previousVal, currentVal, currentIndex, array) => {
	return previousVal + currentVal;
});
console.log(result); // 等于各元素之和10

8、 _.reduceRight
从右到左计算一个数组中各元素值

const array = [0, 1, 2, 3, 4];
const result = array.reduceRight((previousVal, currentVal, currentIndex, array) => {
	return previousVal - currentVal;
});
console.log(result); // 从右减到左，等于-2

9、 _.size
返回对象的键值对个数

const result2 = Object.keys({
	one: 1,
	two: 2,
	three: 3
}).length;
console.log(result2); // 3

10、 _.some
数组中是否有些元素符合条件

const isLargerThanTen = (element, index, array) => {
	return element >= 10;
}
const array = [10, 9, 8];
const result = array.some(isLargerThanTen);
console.log(result); // true
1
2
3
4
5
6
三、 Function函数
1、 _.after【 注】 这只是一种可选的实现方式在执行之前保证所有async calls异步回调已结束

const notes = ['profile', 'settings'];
notes.forEach((note, index) => {
	console.log(note);
	if (notes.length === (index + 1)) {
		render(); // 到数组最后一个元素执行渲染方法
	}
});
1
2
3
4
5
6
7
四、 Lang属性
1、 _.isNaN
检测值是否是NaN

// ES6
console.log(Number.isNaN(NaN)); // true
1
2
五、 Object对象
1、 _.assign
将自身可enumerable属性加到目标对象

const result1 = Object.assign({
	1: 'aaa'
}, {
	2: 'bbb'
});
console.log(result1); // { 1: "aaa", 2: "bbb" }

const result2 = Object.assign({
	1: 'aaa'
}, ['a', 'b', 'c']);
console.log(result2); // { 0: "a", 1: "b", 2: "c" }
1
2
3
4
5
2、 _.keys
取出对象所有自身可enumerable属性

const result2 = Object.keys({
	one: 1,
	two: 2,
	three: 3
});
console.log(result2); // ["one", "two", "three"]
1
2
六、 String字符串
1、 _.repeat
重复字符串count次

const result = 'abc'.repeat(2);
console.log(result); // 'abcabc'
1
2
2、 _.toLower
字符串中字符所有大写转成小写

const result = 'Fo1OBAR'.toLowerCase();
console.log(result); // "fo1obar"
1
2
3、 _.toUpper
字符串中字符所有小写转成大写

const result = 'foobar'.toUpperCase();
console.log(result); // "FOOBAR"
1
2
4、 _.trim
裁剪字符串首尾的空符

const result = ' abc '.trim()
console.log(result); // 'abc'
1
2【 拓展】
1、 unshift向数组添加的第一个元素
const data = ['1', '2', '3'];
data.unshift('0');

console.log(data); // ["0", "1", "2", "3"]
1
2
3
4
2、 Array.from();
creates a new Array instance from an array - like or iterable object.

Array.from({
	length: 5
}, (v, index) => index); // [0, 1, 2, 3, 4]

Array.from([1, 2, 3], x => x + x); // [2, 4, 6]

1、 取出两个数组的不同元素

var arr1 = [0, 1, 2, 3, 4, 5];
var arr2 = [0, 4, 6, 1, 3, 9];

function getArrDifference(arr1, arr2) {
	return arr1.concat(arr2).filter(function(v, i, arr) {
		return arr.indexOf(v) === arr.lastIndexOf(v);
		//过滤掉存在的
	});
}
console.log(getArrDifference(arr1, arr2));


2、 取出两个数组的相同元素

var arr1 = [0, 1, 2, 3, 4, 5];
var arr2 = [0, 4, 6, 1, 3, 9];

function getArrEqual(arr1, arr2) {
	let newArr = [];
	for (let i = 0; i < arr2.length; i++) {
		for (let j = 0; j < arr1.length; j++) {
			if (arr1[j] === arr2[i]) {
				newArr.push(arr1[j]);
			}
		}
	}
	return newArr;
}
console.log(getArrEqual(arr1, arr2));
//输出：(4) [0, 4, 1, 3]

//解构 扩展运算符
{
	let a, b, rest;
	[a, b, ...rest] = [1, 2, 3, 4, 5, 6];
	console.log(a, b, rest);
} 
{
	let a, b;
	({
		a,
		b
	} = {
		a: 1,
		b: 2
	})
	console.log(a, b);
}
//字符串操作
{
	let str = "string";
	console.log('includes', str.includes("c"));
	console.log('start', str.startsWith('str'));
	console.log('end', str.endsWith('ng'));
} 
{ //填补
	console.log('1'.padStart(2, '0'));
	console.log('1'.padEnd(2, '0'));
}
//数组补充
let empty = Array.of();
console.log('empty', empty); // []

{
	for (let index of ['1', 'c', 'ks'].keys()) {
		console.log('keys', index);
	}
	for (let value of ['1', 'c', 'ks'].values()) {
		console.log('values', value);
	}
	for (let [index, value] of ['1', 'c', 'ks'].entries()) {
		console.log('values', index, value);
	}
}
{
	//浅复制数组的一部分到同一数组中的另一个位置，
	//并返回它，不会改变原数组的长度。
	//将索引3到4的元素复制到索引0的位置
	console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
	//[ 4, 2, 3, 4, 5 ]
}
//Object.is() 判断两个值是否相同 不会进行隐式转换
//Symbol let a1=Symbol();唯一的不重复的
Object.getOwnPropertySymbols获取设置symbol为key的value
静态方法 Reflect.ownKeys() 返回一个由目标对象自身的属性键组成的数组。
console.log(Reflect.ownKeys(object1));
// expected output: Array ["property1", "property2"]
//list对象的增删改查
{
	let list = new Set();
	list.add(1);
	list.add(2);
	list.add(1);
	console.log('list----', Array.from(list));
} {
	let arr = ['add', 'delete', 'clear', 'has'];
	let list = new Set(arr);

	console.log('has', list.has('add'));
	console.log('delete', list.delete('add'), list);
	list.clear();
	console.log('list', list);
}
//Map
{
	let map = new Map();
	map.set(arr, 456);
	map.get(arr)
} {
	let map = new Map([
		['a', 123],
		['b', 456]
	]);
	console.log('map args', map);
	console.log('size', map.size);
	console.log('delete', map.delete('a'), map);
	console.log('clear', map.clear(), map);
}
函数节流： 频繁触发, 但只在特定的时间内才执行一次代码
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
函数防抖: 频繁触发, 但只在特定的时间内没有触发执行条件才执行一次代码
输入框搜索自动补全事件， 频繁操作点赞和取消点赞等等
var timer = null;

function click() {
	clearTimeout(timer);
	timer = setTimeout(() => {
		ajax(...);
	}, 500)
}

obj是否为空
var data = {};
var arr = Object.keys(data);
alert(arr.length == 0); //true 为空， false 不为空
var data = {};
var b = (JSON.stringify(data) == "{}");
alert(b); //true 为空， false 不为空

数组深入（ 数组常用方法如下）
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