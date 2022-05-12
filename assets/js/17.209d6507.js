(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{473:function(e,t,r){"use strict";r.r(t);var a=r(4),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h3",{attrs:{id:"_1-eventloop"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-eventloop"}},[e._v("#")]),e._v(" 1. eventloop")]),e._v(" "),r("ol",[r("li",[e._v("js 以前都是运行在浏览器中，由于 chrome 对 V8 做了开源因此 js 可以在服务器端运行，浏览器和服务器都是 js 的运行环境")]),e._v(" "),r("li",[e._v("js 所有任务都是在单线程完成，遇到大量耗时任务会出现假死的情况，无法及时响应用户的行为")]),e._v(" "),r("li",[e._v("eventloop 是一个程序结构，其他语言也有类似的事件循环机制， 用于等待和发送消息的事件，一般是程序中设置两个线程，一个负责程序本身的运行称为主线程，一个负责主线程和其他线程（I/O 操作）通讯称之为 eventloop 线程")]),e._v(" "),r("li",[e._v("浏览器的 eventloop 分为宏观任务和微观任务\n宏任务： script 整体代码, setTimeout/setTimeInterval, setImmediate, IO, UIrender 等\n微任务： async/await, promise, process.nextTick, postMessage, mutationObserver\neventloop 运行过程 参考"),r("a",{attrs:{href:"https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/7",target:"_blank",rel:"noopener noreferrer"}},[e._v("解析"),r("OutboundLink")],1)])]),e._v(" "),r("h3",{attrs:{id:"_2-vue-更新机制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-vue-更新机制"}},[e._v("#")]),e._v(" 2. vue 更新机制")]),e._v(" "),r("p",[e._v("通过对 Object.defineProterty() 进行封装 reaction , 通过对依赖收集和 watcher 触发 createElement 生成 vnode, newVnode 和 oldVnode 进行 diff 算法的 patch 打补丁过程更新 DOM")]),e._v(" "),r("h3",{attrs:{id:"_3-url-到完整的页面的过程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-url-到完整的页面的过程"}},[e._v("#")]),e._v(" 3. url 到完整的页面的过程")]),e._v(" "),r("ol",[r("li",[e._v("url 的域名通过 DNS 域名解析，本地域名解析服务器 -> 顶级域名解析服务器，直到找到域名对应的 ip 地址")]),e._v(" "),r("li",[e._v("通过 tcp 的三次握手建立连接之后通过 HTTP 应用层协议进行传输数据获取到报文段")]),e._v(" "),r("li",[e._v("首先客户端发送一个报文段首部序号 seq=x,同步位 SYN=1,数据部分为空，跟服务端进行请求连接，此时客户端进入连接等待阶段 syn sent, 服务端收到连接请求之后发送一个序号 seq=y, 同时发送一个确认号 ack=x+1, 同步位 SYN=1, 确认位 ACK=1，确认建立连接，此时服务端进入一个同步收到状态，客户端收到确认报文段之后，还要向服务端给确认连接报文段，确认报文段的 ACK=1，确认号 ack=y+1, 序号 seq=x+1,此时建立连接，处于 established 状态")]),e._v(" "),r("li",[e._v("浏览器接收到数据进行 ui render DOM 解析器 和 cssOM 解析器 生成完整的页面")])]),e._v(" "),r("h3",{attrs:{id:"_4-vue-针对数组和对象的处理有什么不同"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-vue-针对数组和对象的处理有什么不同"}},[e._v("#")]),e._v(" 4. vue 针对数组和对象的处理有什么不同")]),e._v(" "),r("p",[e._v("vue 针对数组是采用的代理模式修改数组原型上的几个方法（unshift, shift, pop, push slice 等 7 个方法）来实现对数组的依赖收集的\n对象采用的是 Object.defineProperty()")]),e._v(" "),r("h3",{attrs:{id:"_5-对缓存的了解-（协商缓存，强缓存）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-对缓存的了解-（协商缓存，强缓存）"}},[e._v("#")]),e._v(" 5. 对缓存的了解 （协商缓存，强缓存）")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://hejialianghe.github.io/computerNetwork/network-actual.html#_2-5-2-http%E7%BC%93%E5%AD%98",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考链接"),r("OutboundLink")],1)]),e._v(" "),r("h3",{attrs:{id:"_6-对-promise-的了解"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6-对-promise-的了解"}},[e._v("#")]),e._v(" 6. 对 promise 的了解")]),e._v(" "),r("p",[e._v("首选是对 promise 函数的分析，然后分析 promise 的原理\n"),r("a",{attrs:{href:"https://hejialianghe.github.io/jsadvanced/asyncpro.html#_3-4-%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3-promise",target:"_blank",rel:"noopener noreferrer"}},[e._v("深入理解 promise"),r("OutboundLink")],1)]),e._v(" "),r("h3",{attrs:{id:"_7-tcp-为啥需要三次握手"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_7-tcp-为啥需要三次握手"}},[e._v("#")]),e._v(" 7. TCP 为啥需要三次握手")]),e._v(" "),r("p",[e._v("TCP 的可靠传输原理： 超时重传和确认机制确保在网络上的可靠传输\n"),r("a",{attrs:{href:"https://mp.weixin.qq.com/s/NNarD-u4hWycl8FD8woSRg",target:"_blank",rel:"noopener noreferrer"}},[e._v("TCP 的三次握手"),r("OutboundLink")],1)]),e._v(" "),r("h3",{attrs:{id:"_8-闭包，垃圾回收机制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_8-闭包，垃圾回收机制"}},[e._v("#")]),e._v(" 8. 闭包，垃圾回收机制")]),e._v(" "),r("p",[e._v("闭包是一个函数, 其可以记住并访问外部变量")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://hejialianghe.github.io/jsadvanced/function.html#_2-1-javascript-%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86",target:"_blank",rel:"noopener noreferrer"}},[e._v("垃圾回收机制"),r("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=s.exports}}]);