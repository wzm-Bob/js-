1. mark表示标记或突出显示的文本以供参考；
2. nav标识导航部分 doctype声明使用哪种模式
3. svg是xml格式， 三种分别是矢量图像、 点阵图像和文本。
4. track是媒体元素的子元素
5. DHTML是动态html 包括三剑客所有
6. html5不在支持font rel 获取getCurrentPosition位置
7. cross - document 跨文档通信
8. geolocation获取用户的地理位置信息
9. Microdata // 语义化 暂时没有支持
10. server - sent 客户端自动获取服务端的更新推送， 之前需要轮询
11. WebSocket API 中， 浏览器和服务器只需要做一个
握手的动作， 然后， 浏览器和服务器之间就形成了
一条快速通道。 两者之间就直接可以数据互相传送。 不需要
轮询操作。 Websocket 使用 ws 或 wss 的统一资源
标志符， 类似于 HTTPS， 其中 wss 表示在 TLS 之上
的 Websocket。
12. 索引数据库
13. 应用缓存 离线web存储
14. 拖放
15. XMLHttpRequest Level 2 可以跨域
http: //www.ruanyifeng.com/blog/2012/09/xmlhttprequest_level_2.html
	16. http: //modernizr.cn
	17. section区块article独立的文章区块
aside相关内容或引文 nav导航
18. JSON.parse() 将字符串序列化成dom对象stringify反之
19. addEventListener和dispatchEvent
20. canvas添加图片 完成后才能操作
21. 音频视频video audio
二者都是容器文件 类似于压缩了的zip文件
视频容器包含了音频轨道、 视频轨道和元数据（ 视频封面、 标题、 子标题、 字幕等）
主流格式：.avi.flv.mp4.mkv.ogv
22. 解码器是一组算法， 对原始文件流编码解码
音频解码器 aac mpeg - 3(收费) ogg
视频解码器 h .264(收费) vp8 ogg
23. webm视频格式
24. 限制 1. 视频加载不支持流格式2.全屏视频无法用脚本控制
25. 浏览器是否支持标签 支持哪种编码器
/*<audio controls src="xxx.ogg">
<source src="" type="audio/ogg">浏览器选择播放格式 type声明了就会只选择type的</source>
不支持准备的文字或其他插件区域</audio>*/
26. controls就是底部的控制区域
load() 加载文件 为播放准备
play() 加载并播放
pause()
canplayType(type) 测试video是否支持mime类型文件
只读属性 duration 播放时长秒
paused 媒体文件暂停 返回true
ended 媒体文件播放完毕 返回true
error currentSrc当前正在播放的文件
开发可修改的属性
autoplay loop
currentTime 播放所用时间
volume 0.0 - 1.0 音量
muted监测设置静音
autobuffer通知播放前 是否缓冲加载
video的额外特性
poster //视频预加载的展示图片
videoWidth只读
27. 视频时序查看器
抓取帧会绘制到canvas, 单击canvas帧会定位到视频对应节点。
/*<video oncanplay="startVideo" onended="stopTimeLine()"></video>*/
28. 准备播放会触发oncanplay
29. 播放完会触发onended以停止帧的创建。
30. 定位到视频 是利用帧算出事件 赋值currentTime
31. 鼠标悬浮播放片段， 点击播放完整 onmouseover onmouseout
32. geolocation 地理定位Api
位置信息包含经纬度(十进制) 及元数据(海拔、 行使方向、 速度不存在返回null)
设备的数据源如下
1. ip地址 一般只能到市级
2. gps / wifi / mac地址 / 手机Id
gps精确， 但耗时长耗电
wifi只使用有网的地方
手机定位也准确， 需要设备， 结合gps使用
3. 自定义数据多个数据源的组合 不靠谱
33. 用户位置信息建议加密， 用完删除。
34. 支持性
//if(navigator.geolocation)
35. 位置请求分为单次定位请求 和重复性位置请求
navigator.geolocation.getCurrentPosition(updateLocation, handleLocationError, {
	timeout: 1000
})
updateLocation(position) {
	//position包含coords特性即latitude longitude accuracy
}
handleLocationError(error) {
	switch (error.code) {
		case 0: //用户拒绝浏览器获取位置
			break；
		case 1 //尝试获取位置 但失败
		3 //获取超时
	}
}
6. 重复性的位置更新请求
navigator.geolocation.watchPosition(参数一样)
场景 如位置变化实时查看 走步距离等
关闭clearWatch(watchId)
7. communication
real - time实时 cross - origin跨源、
postMessage 通信的安全机制
if (typeof window.postMessage === 'undefined') 不支持
window.postMessage('hell', '源')
messageEvent事件监听
8. xmlhttprequest 跨源请求
兼容
var xhr = new XMLHttpRequest()
if (typeof xhr.withCredentials === undefined)
	xhr2不再使用状态标识， 而是提供命名进度
xhr.onprogress = function(e) {
	var total = e.total;
	var loaded = e.loaded;
	if (e.lengthComputable) {
		//利用进度干点事
	}
}
9. xhr支持二进制数据 对webgl和音频友好。
能够发送blob和arraybuffer对象。
responseType => text document arraybuffer blob
10. 进度钩子函数
xhr.upload.onprogress = function(e) {
	var ratio = e.loaded / e.total;
	setProgress(ratio + "%完成")
}
xhr.onprogress = function(e) {
	var ratio = e.loaded / e.total;
	setProgress(ratio + "%完成")
}
xhr.onload = function(e) {
	setProgress("完成")
}
xhr.onerror = function(e) {
	setProgress("失败")
}
xhr.open("post", "http:xx", true)
xhr.send(data)
11. websockets
//股票价格 新闻 余票 交通  数据读取等要
//实施读取数据
comet技术让服务端主动异步推送数据。
websocket握手 客户端和服务端初次握手将http协议升级到websocket协议。
一旦连接建立成功 就可双向通信
websocket接口 ws: // wss://
	12.
if (window.WebSocket)
	url = "ws://localhost:8080/echo"
w = new WebSocket(url)
w.onopen = function() {
	//建立连接w.onopen	
	//收到消息w.onmessage
	//关闭连接w.onclose
	//错误w.onclose
}
13. 位置追踪器 geolocation + websockets
14. html5带了很多type和校验函数
15. 拖放 不利用底层鼠标事件
	<
	div id = "xx"
draggable = "true" >
	拖动标识 <
	/div>
drag拖动中持续发生的事件
dragenter拖动进入新元素触发新元素的该事件
dragover鼠标移动到某元素上触发
drop释放鼠标触发
dragend在拖动源上触发 意味着结束

dataTransfer获取拖动或放置的数据
setData(format, data)
get