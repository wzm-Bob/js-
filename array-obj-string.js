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
	Array.from({
		length: 5
	}, (v, index) => index); // [0, 1, 2, 3, 4]

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