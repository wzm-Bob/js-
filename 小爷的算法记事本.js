时间复杂度指的是一个算法执行所耗费的时间
空间复杂度指运行完一个程序所需内存的大小
稳定指， 如果a = b, a在b的前面， 排序后a仍然在b的前面
不稳定指， 如果a = b， a在b的前面， 排序后可能会交换位置
1. 快速排序 不稳定
k - 先从数列中取出一个数作为“ 基准”。
k - 分区过程： 将比这个“ 基准” 大的数全放到“ 基准” 的右边， 小于或等于“ 基准” 的数全放到“ 基准” 的左边。
k - 再对左右区间重复第二步， 直到各区间只有一个数。
var quickSort = function(arr) {
	if (arr.length <= 1) {
		return arr;
	}
	var pivotIndex = Math.floor(arr.length / 2); //基准位置（理论上可任意选取）
	var pivot = arr.splice(pivotIndex, 1)[0]; //基准数
	var left = [];
	var right = [];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < pivot) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}
	return quickSort(left).concat([pivot], quickSort(right));
};
quickSort([4, 7, 2, 3, 7, 34, 0])
2. 选择排序 O(n2) 的时间复杂度数据规模越小越好 不稳定
x - 在未排序序列中找到最小（ 大） 元素， 存放到排序序列的起始位置
x - 从剩余未排序元素中继续寻找最小（ 大） 元素， 然后放到已排序序列的末尾。
x - 重复第二步， 直到所有元素均排序完毕。
function selectionSort(arr) {
	var len = arr.length;
	var minIndex, temp;
	for (var i = 0; i < len - 1; i++) {
		minIndex = i;
		for (var j = i + 1; j < len; j++) {
			if (arr[j] < arr[minIndex]) { // 寻找最小的数
				minIndex = j; // 将最小数的索引保存
			}
		}
		temp = arr[i];
		arr[i] = arr[minIndex];
		arr[minIndex] = temp;
	}
	return arr;
}
selectionSort([3, 5, 2, 0, 66, 3, 4])
3. 希尔排序 也称递减增量排序算法， 是插入排序的一种更高效的改进版本。
但希尔排序是非稳定排序算法。
x - 选择一个增量序列 t1， t2，……， tk， 其中 ti > tj, tk = 1；
x - 按增量序列个数 k， 对序列进行 k 趟排序；
x - 每趟排序， 根据对应的增量 ti， 将待排序列分割成若干长度为 m 的子序列，
分别对各子表进行直接插入排序。 仅增量因子为 1 时， 整个序列作为一个表来处理，
表长度即为整个序列的长度。
function shellSort(arr) {
	var len = arr.length,
		temp,
		gap = 1;
	while (gap < len / 3) { //动态定义间隔序列
		gap = gap * 3 + 1;
	}
	for (gap; gap > 0; gap = Math.floor(gap / 3)) {
		for (var i = gap; i < len; i++) {
			temp = arr[i];
			for (var j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
				arr[j + gap] = arr[j];
			}
			arr[j + gap] = temp;
		}
	}
	return arr;
}
shellSort([3, 2, 6, 4, 8, 7])
4. 冒泡排序 O(1) 稳定
y - 外层for 循环控制循环次数;
y - 内层for 循环进行两数交换， 找每次的最大数， 排到最后;
y - 设置一个标志位， 减少不必要的循环;
var arr = [3, 4, 1, 2];

function bubbleSort(arr) {
	var max = arr.length - 1;
	for (var j = 0; j < max; j++) {
		// 声明一个变量，作为标志位
		var done = true;
		for (var i = 0; i < max - j; i++) {
			if (arr[i] > arr[i + 1]) {
				var temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
				done = false;
			}
		}
		if (done) {
			break;
		}
	}
	return arr;
}
bubbleSort(arr);
5. 递归 一个过程或函数在其定义或说明中有直接或间接调用自身的一种方法。
阶乘 如果传入的参数很大, 调用栈非常大, 使用尾递归解决内存占用过大问题。
function factorial(n) {
	if (n === 0) {
		return 1
	}

	return n * factorial(n - 1)
}
尾递归 通过设置一个累加参数， 并且每一次都将当前的值累加上去， 然后递归调用。
function factorial(n, total = 1) {
	if (n === 0) {
		return total
	}

	return factorial(n - 1, n * total)
}
6. 堆栈(先进后出, 末尾插入， 末尾删除)
栈创建与使用(实现添加、 删除元素、 获取栈顶元素、 已经是否为空， 栈的长度、 清除元素等几个基本操作)

function Stack() {
	this.items = [];
}
Stack.prototype = {
	constructor: Stack,
	push: function(element) {
		this.items.push(element);
		//插入到后面
	},
	pop: function() {
		return this.items.pop();
		//删除 arrayObject 的最后一个元素，把数组长度减 1，并且返回它删除
		//的元素的值。如果数组已经为空，则 pop() 不改变数组，并返回 undefined 值
	},
	peek: function() {
		return this.items[this.items.length - 1];
		//数组的最后一个就是栈顶元素
		//栈中的第一个
	},
	isEmpty: function() {
		return this.items.length == 0;
	},
	clear: function() {
		this.items = [];
	},
	size: function() {
		return this.items.length;
	},
	print: function() {
		console.log(this.items.toString());
	}
}
栈的使用
var stack = new Stack();
stack.push(5);
stack.push(8);
stack.pop();
stack = [5] 先进后出

7. 队列(先进先出)

function Queue() {
	this.items = [];
}
Queue.prototype = {
	constructor: Queue,
	enqueue: function(elements) {
		this.items.push(elements);
	},
	dequeue: function() {
		return this.items.shift();
		//删除数组第一个元素并返回
	},
	front: function() {
		return this.items[0];
		//取出队列的第一个
	},
	isEmpty: function() {
		return this.items.length == 0;
	},
	size: function() {
		return this.items.length;
	},
	clear: function() {
		this.items = [];
	},
	print: function() {
		console.log(this.items.toString());
	}
}
队列使用， 先进先出 shift删除前面的一个（ 优先级队列， 合适的场景下添加删除）。
var queue = new Queue();
queue.enqueue('huang');
queue.enqueue('cheng');
queue.enqueue('du');

8. 链表 链表存储有序的元素集合, 但不同于数组, 链表中的元素在内存中并不是连续放置的。
每个元素由一个存储元素本身的节点和一个指向下一个元素的引用(也称指针或链接) 组成。（ 对于传统的数组, 链表的一个好处在于, 添加或移除元素的时候不需要移动其他元素。
然 而, 链表需要使用指针, 因此实现链表时需要额外注意。 数组的另一个细节是可以直接
访问任何 位置的任何元素, 而要想访问链表中间的一个元素, 需要从起点(表头) 开始迭代
列表直到找到 所需的元素）

function LinkedList() {
	function Node(element) {
		this.element = element; //当前元素
		this.next = null; //指针
	}
	this.head = null;
	this.length = 0;
	//通过对一个方法append判断就可以知道是否设置了prototype
	if ((typeof this.append !== 'function') && (typeof this.append !== 'string')) {
		//添加元素
		LinkedList.prototype.append = function(element) {
			var node = new Node(element);
			var current;
			if (this.head === null) {
				this.head = node;
			} else {
				current = this.head;
				while (current.next !== null) {
					current = current.next;
				}
				current.next = node;
			}
			this.length++;
		};
		//插入元素，成功true，失败false
		LinkedList.prototype.insert = function(position, element) {
			if (position > -1 && position < this.length) {
				var current = this.head;
				var previous;
				var index = 0;
				var node = new Node(element);
				if (position == 0) {
					node.next = current;
					this.head = node;
				} else {
					while (index++ < position) {
						previous = current;
						current = current.next;
					}
					node.next = current;
					previous.next = node;
				}
				this.length++;
				return true;
			} else {
				return false;
			}
		};
		//根据位置删除指定元素，成功 返回元素， 失败 返回null
		LinkedList.prototype.removeAt = function(position) {
			if (position > -1 && position < this.length) {
				var current = this.head;
				var previous = null;
				var index = 0;
				if (position == 0) {
					this.head = current.next;
				} else {
					while (index++ < position) {
						previous = current;
						current = current.next;
					}
					previous.next = current.next;
				}
				this.length--;
				return current.element;
			} else {
				return null;
			}
		};
		//根据元素删除指定元素，成功 返回元素， 失败 返回null
		LinkedList.prototype.remove = function(element) {
			var index = this.indexOf(element);
			return this.removeAt(index);
		};
		//返回给定元素的索引，如果没有则返回-1
		LinkedList.prototype.indexOf = function(element) {
			var current = this.head;
			var index = 0;
			while (current) {
				if (current.element === element) {
					return index;
				}
				index++;
				current = current.next;
			}
			return -1;
		};
		LinkedList.prototype.isEmpty = function() {
			return this.length === 0;
		};
		LinkedList.prototype.size = function() {
			return this.length;
		};
		LinkedList.prototype.toString = function() {
			var string = '';
			var current = this.head;
			while (current) {
				string += current.element;
				current = current.next;
			}
			return string;
		};
		LinkedList.prototype.getHead = function() {
			return this.head;
		};
	}
}
链表的使用
var linkedList = new LinkedList();
console.log(linkedList.isEmpty()); //true;
linkedList.append('huang');
linkedList.append('du')
linkedList.insert(1, 'cheng');
console.log(linkedList.toString()); //huangchengdu
console.log(linkedList.indexOf('du')); //2
console.log(linkedList.size()); //3
console.log(linkedList.removeAt(2)); //du
console.log(linkedList.toString()); //huangcheng
链表有多种不同的类型, 这一节介绍双向链表。 双向链表和普通链表的区别在于,
在链表中, 一个节点只有链向下一个节点的链接, 而在双向链表中, 链接是双向的:
	一个链向下一个元素, 另一个链向前一个元素。
循环链表可以像链表一样只有单向引用, 也可以像双向链表一样有双向引用。
循环链表和链 表之间唯一的区别在于, 最后一个元素指向下一个元素的指针(tail.next)
不是引用null, 而是指向第一个元素(head)。 双向循环链表有指向head元素的tail.next,
	和指向tail元素的head.prev。

9. 波兰式和逆波兰式

波兰式之前缀表达式[一种不需要括号的表示法， 可以用来表示一个计算表达式];
(如果一个操作符后面跟着两个操作数时， 则计算， 然后将结果作为操作数替换这个操作符和两个操作数)
比如2 + 3 * (5 - 1)
这个表达式的前缀表达式为 + 2 * 3 - 5 1 来表示。
演绎过程： + 2 * 3 4
演绎过程： + 2 12
演绎过程： 14

逆波兰式之后缀表达式[和前缀表达式刚好相反， 是将操作符号放置于操作数之后];
(读到操作符时， 将之前的两个操作数做计算， 然后替换 这两个操作数和操作符， 接着读取)
比如2 + 3 * (5 - 1)
这个表达式的后缀表达式为 2 3 5 1 - * +来表示。
演绎过程： 2 3 4 * +
	演绎过程： 2 12 +
	演绎过程： 14


10. 自己实现思路
//实现快速排序 以基准值比较 拆分左中右 合并
function quickSort(arr) {
	//最后一步
	if (arr.length <= 1) {
		return arr
	}
	//第一步 取出中间的数字
	var lengths = Math.floor(arr.length / 2);
	var middleVal = arr[lengths];
	//第二步 循环数组 大的放右边 小的放左边
	var leftArr = [];
	var rightArr = [];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < middleVal) {
			leftArr.push(arr[i])
		}
		if (arr[i] > middleVal) {
			rightArr.push(arr[i])
		}
	}
	//第三步 将左侧 +中间 + 右侧相连接 左侧右侧任然是数组 需要循环排序
	return quickSort(leftArr).concat(middleVal, quickSort(rightArr))
}

// console.log(quickSort([6, 4, 3, 9]))

//实现冒泡排序  两个两个交换 换到没有为止
function bubbleSort(arr) {
	var lengths = arr.length - 1;
	while (lengths > 1) { //主要是界限判定没有 或一个就不比较了
		for (var i = 0; i < lengths; i++) {
			if (arr[i] > arr[i + 1]) {
				var temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
			}

		}
		lengths--;
	}

}

//选择排序 找出最小的 放到前面 依次找
function selectionSort(arr) {
	if (arr === null || arr.length < 2) {
		return arr;
	}
	var temp, minIndex;
	for (var i = 0; i < arr.length - 1; i++) {
		minIndex = i;
		for (var j = i + 1; j < arr.length; j++) {
			//第一步 循环比较找出最小的数据的index
			if (arr[j] < arr[minIndex]) {
				minIndex = j
			}
		}
		temp = arr[i];
		arr[i] = arr[minIndex];
		arr[minIndex] = temp
	}
	return arr
}

//希尔排序 分组插入
function shellSort(arr) {
	var len = arr.length,
		temp,
		gap = 1;
	while (gap < len / 3) { //动态定义间隔序列 奇数 1 3 5 7 9
		gap = gap * 3 + 1;
	}
	for (gap; gap > 0; gap = Math.floor(gap / 3)) {
		for (var i = gap; i < len; i++) {
			temp = arr[i];
			for (var j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
				arr[j + gap] = arr[j];
			}
			arr[j + gap] = temp;
		}
	}
	return arr;
}