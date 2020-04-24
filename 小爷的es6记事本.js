//数组等方法演练 
console.log(
	[1, 2, 3, 6, 3, 5].every(function(currVal) {
		return currVal > 0
		//一假为假 返回值为布尔值
	}))
console.log(
	[].every(function(currVal) {
		return currVal > 0
		//空数组true
	}))
console.log(
	[].some(function(currVal) {
		return currVal > 0
		//空数组false
	}))
console.log(
	[2, 5, 3, 7, 1].some(function(currVal) {
		return currVal > 7
	}))
//原数组不变 copy副本  返回新数组
console.log([1, 4, 6].concat(7, [5], [8]))

//返回符合条件的第一个值 8 没有返回undefined
console.log([2, 8, 4, 6, 7].find(function(ele, index, arr) {
	return ele > 6
}))

//返回符合条件的第一个值的index  没有返回-1
//类似于indexOf findIndex功能更强大 查找大于小于 indexOf只能等于
console.log([2, 8, 4, 6, 7].findIndex(function(ele, index, arr) {
	return ele > 6
}))
//返回符合条件的第一个值的index  没有返回-1
console.log([2, 8, 5].indexOf(2))
//返回符合条件的最后一个值的index  没有返回-1
console.log([3, 6, 2, 6, 4, 6, 1].lastIndexOf(6))

console.log([3, 6, 1].join(','))
console.log('3, 6, 1'.split(','))

console.log([5, 4, 3].reverse())

console.log([5, 4, 3].filter(function(ele, index, arr) {
	//返回过滤数组 不会改变原数组
	return ele > 3
}))

console.log([5, 4, 3].forEach(function(ele, index, arr) {
	//没有返回值 用作从list中取出所需的数据
	//console.log(ele)
}))

console.log([5, 4, 3].map(function(ele, index, arr) {
	//返回新数组 每一项可拦截处理 不会过滤
	return ele * 2
}))

{
	let beginIndex = 3;
	let endIndex = 5
	console.log([2, 3, 4, 5, 6, 7, 8].slice(beginIndex, endIndex))
} {
	let start = 0; //开始位置从0开始
	let deleteCount = 2 //删除的个数
	let xx = "要替换新加的元素"
	console.log([2, 3, 4, 5, 6, 7, 8].splice(start, deleteCount))
} {
	let list = [5, 6, 3, 4, 2, 9, 0];

	function compare(a, b) {
		if (a > b) {
			return 1
		}
		if (a < b) {
			return -1
		}
		return 0
	}
	console.log(list.sort(compare))
}
console.log([3, 5, 6, 8].toString())
//valueOf返回本身
console.log([3, 5, 6, 8].valueOf())
//区分大小写 第二个参数可以是索引
console.log([4, 3, 6, 4].includes(3))

{
	const array = [0, 1, 2, 3, 4]; //累加  reduceRight
	const result = array.reduce((previousVal, currentVal, currentIndex, array) => {
		return previousVal + currentVal;
	});
	console.log(result);
} {
	const data = ['1', '2', '3'];
	data.shift('0'); //前面删除 unshift前面插入
	console.log(data); // ["0", "1", "2", "3"]
} {
	const data = ['1', '2', '3'];
	data.pop('0'); //后面删除 push后面插入
	console.log(data); // ["0", "1", "2", "3"]
} {

	//伪数组对象（拥有一个 length 属性和若干索引属性的任意对象）
	Array.from({
		length: 5
	}, (v, index) => index); // [0, 1, 2, 3, 4]
	//第二个参数可以理解为map
	Array.from([1, 2, 3], x => x + x); // [2, 4, 6]
} {
	//	1、 取出两个数组的不同元素
	var arr1 = [0, 1, 2, 3, 4, 5];
	var arr2 = [0, 4, 6, 1, 3, 9];

	function getArrDifference(arr1, arr2) {
		return arr1.concat(arr2).filter(function(v, i, arr) {
			//返回符合条件的数组
			// indexOf 符合的第一个索引 等于的肯定就一个 不是已经存在的
			return arr.indexOf(v) === arr.lastIndexOf(v);
		});
	}
	console.log(getArrDifference(arr1, arr2));
}

{
	//2、 取出两个数组的相同元素
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
}

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
} {
	//浅复制数组的一部分到同一数组中的另一个位置，
	//并返回它，不会改变原数组的长度。
	//将索引3到4的元素复制到索引0的位置
	console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
	//[ 4, 2, 3, 4, 5 ]
}
console.log(Array.isArray([1, 2, 3]));
//全部返回 数组迭代器对象 需要for of循环出来
{
	console.log([2, 4, 1, 0, 7].keys());
	console.log([2, 4, 1, 0, 7].values());
	console.log([2, 4, 1, 0, 7].entries());
	/*for (const key of iterator) {
		console.log(key);
	}*/
}
//检测值是否是NaN
console.log(Number.isNaN(NaN)); // true
//字符串大全
{
	console.log('fs'.repeat(2))
	console.log('fsA'.toLowerCase())
	console.log('fsA'.toUpperCase())
	console.log(' fsA '.trim())
	console.log('includes'.includes("c"));
	console.log('start'.startsWith('st'));
	console.log('end'.endsWith('ng'));
	//填充长度 +填充值
	console.log('1'.padStart(2, '0'));
	console.log('1'.padEnd(4, '007'));
	//返回字符串中指定字符 不会破坏原字符
	console.log('dwerqweer'.charAt(3))
	console.log('dwerqweer'.charCodeAt(3)) //返回unicode
	console.log('dwerqweer'.indexOf('w'))
	console.log('dwerqweer'.lastIndexOf('w'))
	console.log('dwerqweer'.concat('111'))
	console.log('dwerqweer7'.match(/we/g))
	console.log('dwerqweer7'.replace(/we/g, '00'))
	console.log('dwerqweer7'.search(/we/g)) //返回匹配的第一个索引
	console.log('dwerqweer7'.slice(0, 2)) //begin end
	console.log('dwerqweer7'.split('e'))
	console.log('dwerqweer7'.substr(2, 2)) //提取从第一个开始的指定长度串
	console.log('dwerqweer7'.substring(2, 4)) //提取下标之间的串
}
//对象
{
	console.log(Object.keys({
		a: 1,
		b: 2
	}))
	console.log(Object.values({
		a: 1,
		b: 2
	}))
	console.log(Object.entries({
		a: 1,
		b: 2
	}))
} {
	const target = {
		a: 1,
		b: 2
	};
	const source = {
		b: 4,
		c: 5
	};
	const returnedTarget = Object.assign(target, source);
	console.log(target);
	// expected output: Object { a: 1, b: 4, c: 5 }
	console.log(returnedTarget);
	// expected output: Object { a: 1, b: 4, c: 5 }
} {
	console.log(Object.create(null)) //基于原型链
	//方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__
} {
	var obj = {
		a: 1,
		b: 2
	};
	//参数2定义新属性
	Object.defineProperty(obj,
		"c", {
			value: "6",
			writable: true
		}
	)
	console.log(obj)
} {
	var obj = {
		a: 1,
		b: 2
	};
	Object.freeze(obj); //冻结对象  冻结后无法修改属性
}
//对象长度
 {
	var data = {};
	var arr = Object.keys(data);
	console.log(arr.length == 0); //true 为空， false 不为空
	var data = {};
	var b = (JSON.stringify(data) == "{}");
	console.log(b); //true 为空， false 不为空
} {
	//不会做隐式类型转换 对象的话引用类型必须一致
	console.log(Object.is(undefined, undefined)) //判断两个值是否相同
} {
	const object1 = new Object();
	object1.property1 = 42; //判断是否有指定的key
	console.log(object1.hasOwnProperty('property1'));
}
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
//es6 数据结构
{
	let list = new Set();
	list.add(5);
	list.add(7);
	list.add(7);

	console.log('size', list.size); // 2
}

{
	let arr = [1, 2, 3, 1, '2'];
	let list2 = new Set(arr);

	console.log('unique', list2);
}

{
	let arr = ['add', 'delete', 'clear', 'has'];
	let list = new Set(arr);

	console.log('has', list.has('add'));
	console.log('delete', list.delete('add'), list);
	list.clear();
	console.log('list', list);
}

{
	let arr = ['add', 'delete', 'clear', 'has'];
	let list = new Set(arr);
	// list.keys()是一个数组迭代器
	for (let key of list.keys()) {
		console.log('keys', key);
	}
	for (let value of list.values()) {
		console.log('value', value);
	}
	for (let [key, value] of list.entries()) {
		console.log('entries', key, value);
	}

	list.forEach(function(item) {
		console.log(item);
	})
}

{
	let map = new Map();
	let arr = ['123'];

	map.set(arr, 456);

	console.log('map', map, map.get(arr));
}

{
	let map = new Map([
		['a', 123],
		['b', 456]
	]);
	console.log('map args', map);
	console.log('size', map.size);
	console.log('delete', map.delete('a'), map);
	console.log('clear', map.clear(), map);
}


{
	let obj = {
		time: '2017-03-11',
		name: 'net',
		_r: 123
	};

	let monitor = new Proxy(obj, {
		// 拦截对象属性的读取
		get(target, key) {
			return target[key].replace('2017', '2018')
		},
		// 拦截对象设置属性
		set(target, key, value) {
			if (key === 'name') {
				return target[key] = value;
			} else {
				return target[key];
			}
		},
		// 拦截key in object操作
		has(target, key) {
			if (key === 'name') {
				return target[key]
			} else {
				return false;
			}
		},
		// 拦截delete
		deleteProperty(target, key) {
			if (key.indexOf('_') > -1) {
				delete target[key];
				return true;
			} else {
				return target[key]
			}
		},
		// 拦截Object.keys,Object.getOwnPropertySymbols,Object.getOwnPropertyNames
		ownKeys(target) {
			return Object.keys(target).filter(item => item != 'time')
		}
	});

	console.log('get', monitor.time);

	monitor.time = '2018';
	monitor.name = 'mukewang';
	console.log('set', monitor.time, monitor);

	console.log('has', 'name' in monitor, 'time' in monitor);

	// delete monitor.time;
	// console.log('delete',monitor);
	//
	// delete monitor._r;
	// console.log('delete',monitor);
	console.log('ownKeys', Object.keys(monitor));

}

{
	let obj = {
		time: '2017-03-11',
		name: 'net',
		_r: 123
	};

	console.log('Reflect get', Reflect.get(obj, 'time'));
	Reflect.set(obj, 'name', 'mukewang');
	console.log(obj);
	console.log('has', Reflect.has(obj, 'name'));
}