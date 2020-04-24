1.隐藏指定元素
const hide=(...el)=>{
	[...el].forEach(e=>e.style.display='none')
}
hide(document.querySelectorAll('img'))
2.是否有指定类
const hasClass=(el,className)=>{
	el.classList.contains(className);
}
hasClass(document.querySelector('p.test'),'test')//true
3.切换一个元素类
const toggleClass=(el,className)=>{
	el.classList.toggle(className)
}
toggleClass(document.querySelector('p.test'),'test')//移除
4.获取当前元素滚动位置
const getScrollPosition = (el=window)=>{
	x:el.pageXOffset!==undefined?el.pageXOffset: el.scrollLeft
	y:el.pageYOffset!==undefined?el.pageXOffset: el.scrollTop
}
getScrollPosition()
5.平滑滚动到页面顶部
const scrollTop=()=>{
	const c=document.documentElement.scrollTop||document.body.scrollTop
	if(c>0){
		window.requestAnimationFrame(scrollTop)
		//执行动画 浏览器下次重绘之前调用指定的回调函数更新动画
		window.scrollTo(0,c-c/8);
	}
}
scrollTop()
6.父元素包含子元素
const elementContains=(parent,child)=>{
	parent!==child && parent.contains(child);
}
elementContains(document.querySelector('head'),document.querySelector('title'))
7.如何检查指定的元素在视口中是否可见
const elementIsvisibleInViewport =(el, partiallyVisible false)=> {
	const { top, Left, bottom, right }=el. getBoundingcClientRect();
	const { innerHeight, innerwidth }= window;
	return partiallyVisible ?
	((top>0 && top < innerHeight)||(bottom >0 && bottom < innerHeight ))&&
	((left >0 && left innerwidth)||(right >0 && right < innerwidth ))
	:top >=0 && left >=0 && bottom <= innerHeight && right <= innerwidth;
};
elementIsvisibleInviewport(e);//需要左右可见
ementIsvisibleInViewport(el,true);//需要全屏(上下左右)可以见
8.找出元素中所有图片元素
const getImages =(el, includeDuplicates = false)=> {
	const images=[...el.getelementsByTagName('img')].map( img => img.getAttribute('src'));
	return includeDuplicates ? images :[...new Set(images)]
}
//事例: incLudeDuplicates为true表示需要排除重复元素
getImage (document, true)
getImages(document, false);
9.如何确定设备是移动设备还是台式机/笔记本电脑？
const detectDeviceType =()=>
 /Android | webos | iPhone | iPad | iPod | BlackBerry | IEMobile | Opera Mini/i.test(navigator.userAgent)
? 'Mobile' : 'Desktop';
 //事例
detectDeviceType ();//"Mobile" or "Desktop"