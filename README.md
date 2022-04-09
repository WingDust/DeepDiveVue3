# Deep Dive Vue3
> 这个仓库是为了深入 Vue3 而建立的，阅读源码方式将会以 [tofile](https://github.com/WingDust/tofile) 来做
# 问题
## 为什么 vue3 没有使用 createDocumentFragment
# 我最应该看了各种 api 的源码
- 这对于我使用 vue3 来实现业务，常用的东西，会更加得心应手

# 《Vue 设计与实现》
## 第一篇
### 第三章
- 渲染器（本质是一个函数会找到需要挂载的容器（就是一个正常 dom 元素），再用容器的 appendElement来完成组件的渲染），会对一个组件（在抽象逻辑上是一个多个 dom 元素，js代码，css代码的组合，在 javascript 语义上本质是一个函数返回一个javascript 对象）,渲染器函数根据输入的参数的类型判断来它是一个普通的标签元素，object 或function 就被设置为组件，（在 vue 中object 被设置为有状态组件的判定）

## 第二篇
### 第四章
- 不能硬编码 (指写死的代码) 写一个依赖的副作用函数，应该使用一个全局变量来保存依赖，
