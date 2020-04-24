1. 内置component组件（ 单独拿出一个组件来专门进行切换使用）
使用is来绑定你的组件 常用在有共同的属性需要切换 如邮箱登录
和密码登录。
2. scope slot slot - scope已经废除 推荐使用v - slot
v - slot: default <
	template v - slot: todo >
	//父页面
	<p>我是有名字插槽 </p> <
	/template>
	//子页面
	<
	slot name = "todo" > 我是默认值 < /slot>
	// v-slot:{dynamicSlotName} 动态命名
	// 父级模板里的所有内容都是在父级作用域中编译的；
	// 子模板里的所有内容都是在子作用域中编译的
	//作用域插槽 用法
	// slotProps 接取的是子组件标签slot上属性数据的集合
	// slotProps也可以写成解构插槽 v-slot:todo="{user,test}"
	<
	todo - list >
	<template v-slot:todo="slotProps" >
   {{slotProps.user.firstName}}
 </template> <
	/todo-list> 
	// 子组件{{ user.lastName }}是默认数据
	<
	slot name = "todo": user = "user": test = "test" > {
		{
			user.lastName
		}
	} <
	/slot> 
data() {
		return {
			user: {
				lastName: "Zhang",
				firstName: "yue"
			},
			test: [1, 2, 3, 4]
		}
	},
	//v-slot:todo 当父页面没有(="slotProps") 显示 zhang 否则 yue

	3. key 的特殊属性主要用在 Vue 的虚拟 DOM 算法， 在新旧 nodes
对比时辨识 VNodes, 不使用key, Vue 会使用一种最大限度减少动态
元素并且尽可能的尝试修复 / 再利用相同类型元素的算法
经典用法： 完整地触发组件的生命周期钩子和触发过渡
4. v - once 只渲染元素和组件一次, 用在静态组件比较好
5. v - cloak 和CSS规则 如[v - cloak] {
	display: none
}
一起使用
只有当关联的全部编译完了后才会显示改元素
6. v - pre 在模板中跳过vue的编译， 直接输出原始值 如 {
	{
		msg
	}
}
不会被编译的
7. < input v - model.lazy = "msg" > 相当于change触发msg
v - model.number v - model.trim
8. v - bind.prop
	<!-- 通过 prop 修饰符绑定 DOM 属性 如textContent-->
	<
	div v - bind: text - content.prop = "text" > < /div>
	<!-- 通过 $props 将父组件的 props 一起传给子组件 -->
	<
	child - component v - bind = "$props" > < /child-component>
v - bind.camel
	.camel 修饰符允许在使用 DOM 模板时将 v - bind 属性名称驼峰化， 例如 SVG 的 viewBox 属性： <
	svg: view - box.camel = "viewBox" > < /svg> 

v - bind.sync 语法糖而已
v - bind: [key] = "value"
绑定动态属性
9. 当和 v -
	if 一起使用时， v -
	for 的优先级比 v -
	if 更高
10. this.nextTick 将回调延迟到下次 DOM 更新循环之后执行。
在修改数据之后立即使用它， 然后等待 DOM 更新。
this.message = 'changed'
// DOM 还没有更新
this.$nextTick(function() {
	// DOM 现在更新了
	// `this` 绑定到当前实例
	this.doSomethingElse()
})
11. this.$forceUpdate()
迫使 Vue 实例重新渲染。 注意它仅仅影响实例本身和插入插槽内容
的子组件， 而不是所有子组件。
12. this.$off 移除自定义事件监听器
13. this.$once 监听一个自定义事件， 但是只触发一次。
一旦触发之后， 监听器就会被移除。
14. this.$on 监听当前实例上的自定义事件
vm.$on('test', function(msg) {
	console.log(msg)
})
vm.$emit('test', 'hi')
15. this.delete 删除对象的属性。 如果对象是响应式的， 确保删除能触发更新视图。 这个方法主要用于避开 Vue
不能检测到属性被删除的限制， 但是你应该很少会使用它。
16. set 向响应式对象中添加一个属性， 并确保这个新属性同样
是响应式的， 且触发视图更新
17. data为啥是个函数 因为obj是引用对象 一个地方改变 他也就变了， 函数的话每次都会返回一个新的对象，
确保多个实例用一个对象不会影响
18. vue.extend 使用基础 Vue 构造器， 创建一个“ 子类”。 参数是一个包含组件选项的对象
19. this.$attrs 和this.$listeners
适用场景就是跨组件通信 比方a, b, c组件
a的数据要传给c c的数组要传给a
inheritAttrs 当父组件传递的prop 子组件没接收时 会在组件上显示
改为false后会隐藏； 但是通过$attrs又会激活移除掉的属性， 所以能向下传递。
如下B组件 a组件传递了foo coo coo只在c组件使用
	<
	template >
	<div>
 <p>foo:{{foo}}</p>
 <p>attrs:{{$attrs}}</p>
 <childDomChild v-bind="$attrs" v-on="$listeners"></childDomChild>
 </div> <
	/template> <
script >
	import childDomChild from './childDomChild';
export default {
	name: 'child-dom'
	props: ["foo"],
	inheritAttrs: false,
}
a组件
	<
	template >
	<div>
   <child-dom
    :foo="foo"
    :coo="coo"
     v-on:upRocket="reciveRocket"
   >
   </child-dom>
 </div> <
	/template> <
script >
	import childDom from "@/components/ChildDom.vue";
export default {
	name: 'demoNo',
	data() {
		return {
			foo: "Hello, world",
			coo: "Hello,rui"
		}
	},
	components: {
		childDom
	},
	methods: {
		reciveRocket() {
			console.log("reciveRocket success")
		}
	}
} <
/script>
c组件
	<
	template >
	<div>
 <p>coo:{{coo}}</p>
 <button @click="startUpRocket">我要发射火箭</button>
 </div> <
	/template> <
script >
	export default {
		name: 'childDomChild',
		props: ['coo'],
		methods: {
			startUpRocket() {
				this.$emit("upRocket");
				console.log("startUpRocket")
			}
		}
	} <
	/script>
20. this.$isServe //是否运行在服务端 服务端渲染
21. this.$slots访问静态插槽
22. this.$scopedSlots访问作用域插槽
// 所有插槽都是函数的 Vue 3。
render: function(createElement) {
	return createElement('div', [
		createElement('child', {
			// 在数据对象中传递 `scopedSlots`
			// 格式为 { name: props => VNode | Array<VNode> }
			scopedSlots: {
				default: function(props) {
					return createElement('span', props.text)
				}
			}
		})
	])
}
<blog-post>
  <template v-slot:header>
    <h1>About Me</h1>
  </template>

  <p>Here's some page content, which will be included in vm.$slots.default, because it's not inside a named slot.</p>

  <template v-slot:footer>
    <p>Copyright 2016 Evan You</p>
  </template>

  <p>If I have some content down here, it will also be included in vm.$slots.default.</p>.
</blog-post>
Vue.component('blog-post', {
	render: function(createElement) {
		var header = this.$slots.header
		var body = this.$slots.default
		var footer = this.$slots.footer
		return createElement('div', [
			createElement('header', header),
			createElement('main', body),
			createElement('footer', footer)
		])
	}
})
23. this.$children
当前实例的直接子组件。 需要注意 $children 并不保证顺序，
也不是响应式的。 如果你发现自己正在尝试使用 $children
来进行数据绑定， 考虑使用一个数组配合 v -
	for 来生成子组件，
并且使用 Array 作为真正的来源。
24. this.$root 当前组件树的根 Vue 实例
25. this.$parent 父实例
26. 用于当前 Vue 实例的初始化选项。 需要在选项中包含自定义
属性时会有用处
new Vue({
	customOption: 'foo',
	created: function() {
		console.log(this.$options.customOption) // => 'foo'
	}
})
27. this.$el Vue 实例使用的根 DOM 元素
28. this.$props 当前组件接收到的 props 对象。
Vue 实例代理了对其 props 对象属性的访问。
29. this.$data Vue 实例观察的数据对象。 Vue 实例代理了对其 data 对象属性的访问
30. functional 函数式组件 使组件无状态(没有 data)
和无实例(没有 this 上下文)。
他们用一个简单的 render 函数返回虚拟节点使他们更容易渲染。
Vue.component('my-component', {
	functional: true,
	// Props 是可选的
	props: {
		// ...
	},
	// 为了弥补缺少的实例
	// 提供第二个参数作为上下文
	render: function(createElement, context) {
		// ...
	}
})
31. provide 和 inject 主要为高阶插件 / 组件库提供用例。
并不推荐直接用于应用程序代码中。
32. Mixin 钩子按照传入顺序依次调用，
并在调用组件自身的钩子之前被调用。
33.e rrorCaptured 当捕获一个来自子孙组件的错误时被调用。
此钩子会收到三个参数： 错误对象、 发生错误的组件实例以及
一个包含错误来源信息的字符串。 此钩子可以返回 false 以阻
止该错误继续向上传播。
34. beforeDestroy deactivated（ keep - alive 组件停用时调用。）
activated（ keep - alive 组件激活时调用。）
35 当这个钩子被调用时， 组件 DOM 已经更新，
所以你现在可以执行依赖于 DOM 的操作。 然而在大多数情况下，
你应该避免在此期间更改状态。 如果要相应状态改变，
通常最好使用计算属性或 watcher 取而代之。
注意 updated 不会承诺所有的子组件也都一起被重绘。
如果你希望等到整个视图都重绘完毕， 可以用 vm.$nextTick
替换掉 updated
updated: function() {
	this.$nextTick(function() {
		// Code that will run only after the
		// entire view has been re-rendered
	})
}
36. beforeUpdate数据更新时调用， 发生在虚拟 DOM 打补丁之前。
这里适合在更新之前访问现有的 DOM， 比如手动移除已添加的事件监听器
37. 注意 mounted 不会承诺所有的子组件也都一起被挂载。 如果你希望等到
整个视图都渲染完毕， 可以用 vm.$nextTick 替换掉 mounted：
38. beforeMount在挂载开始之前被调用： 相关的 render 函数首次被调用。
39. created 在实例创建完成后被立即调用。 在这一步， 实例已
完成以下的配置： 数据观测(data observer)， 属性和方法的运算，
watch / event 事件回调。 然而， 挂载阶段还没开始，
$el 属性目前不可见。
40. watch 不应该使用箭头函数来定义 watcher 函数, 理由是箭头函数
绑定了父级作用域的上下文， 所以 this 将不会按照期望指向 Vue 实例
41. methods对象和watch一样 不应该使用箭头函数， 理由一致。
42. computed 计算属性将被混入到 Vue 实例中。 所有 getter 和
setter 的 this 上下文自动地绑定为 Vue 实例。
注意如果你为一个计算属性使用了箭头函数， 则 this 不会指向这个组件的实例，
不过你仍然可以将其实例作为函数的第一个参数来访问。
会缓存 依赖响应式变更。
filters一般做只处理HTML页面的数据的事；
computed一般做只处理data中的数据的事；
既要处理HTML页面的数据又要处理data中的数据就在methods中定义方法来做。
43. propsData 创建实例时传递 props。 主要作用是方便测试
44. data Vue 实例也代理了 data 对象上所有的属性，
因此访问 vm.a 等价于访问 vm.$data.a。 Vue 将会递归将 data
的属性转换为 getter / setter， 从而让 data 的属性能够响应数据变化
45.
const state = Vue.observable({
	count: 0
})
让一个对象可响应。 Vue 内部会用它来处理 data 函数返回的对象。
返回的对象可以直接用于渲染函数和计算属性内， 并且会在发生改变
时触发相应的更新。 也可以作为最小化的跨组件状态存储器;
始终操作使用 Vue.observable 返回的对象， 而不是传入源对象
46.



表单设计： vue - form - making
工具地址： http: //tools.xiaoyaoji.cn/form
	GitHub地址： https: //github.com/GavinZhuLei/vue-form-making

	流程设计：
1、 Bpm。
工具地址： https: //demo.bpmn.io/s/start。
	项目地址： https: //github.com/bpmn-io/bpmn-js
	2、 g6 - editor
项目地址： https: //github.com/antvis/g6-editor
	3、 jsplumb
项目地址： https: //github.com/jsplumb/jsplumb
	教程地址：[图片] https: //www.kancloud.cn/luponu/jsplumb-tutorial/891366