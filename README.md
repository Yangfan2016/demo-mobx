# demo-mobx


<img src="https://user-images.githubusercontent.com/17830872/163711760-4b8653f2-a19c-4866-8cef-55adade29613.png" width="100" height="100" alt="mbox" />  

docs: https://www.mobxjs.com/ (v6)

## Intro

MobX 是一个经过战火洗礼的库，它通过透明的函数响应式编程(transparently applying functional reactive programming - TFRP)使得状态管理变得简单和可扩展。MobX背后的哲学很简单:

![imgage](https://cn.mobx.js.org/flow.png)

任何源自应用状态的东西都应该自动地获得。其中包括UI、数据序列化、服务器通讯，等等。

Mobx 和 其他实现有什么不同：

- 同步执行 (这样监听的值始终是最新的，并且调试会方便，因为没有额外的 Promise/Async 库引入的堆栈信息)
- 没有引入额外的数据结构，基于普通的 Object, Class, Array 实现 (更少学习成本，更新数据时更自然)
- 独立方案 (不捆绑框架，相比 Meter, EmberJS 和 VueJS 而言)

## Memo

名词解释：

**FRP**  
FRP 的本质是，在声明一个值的时候，同时指定他的动态行为。这个值可能是事件，也可能是数据。 FRP 有两个重要的分支：

**基于 Event Stream 的 FRP**  
基于 Event Stream 的 FRP 擅长于管理 Stream，可进行 Joining, splitting, merging, mapping, sampling 等等。在需要处理多个 Event Stream 的时候非常有用，但对于简单场景来说，就过于复杂了。比如 *RxJS* 和 *BaconJS* 就属于此类。
 
**Transparent FRP (TFRP)**  
Transparent FRP 是在背后去实现 Reactive Programming 。和 Event Stream 的 FRP 一样，TFRP 会在需要的时候更新 View，不同的是 TFRP 不需要你定义如何 (How) 以及何时 (When) 更新。这一类型的框架有 *Meter(Tracker)*，*knockoutJS* 和 *EmberJS* 。
