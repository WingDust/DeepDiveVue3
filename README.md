# Deepfunction ensureRenderer() { Dive Vue3
> 这个仓库是为了深入 Vue3 而建立的，阅读源码方式将会以 [tofile](https://github.com/WingDust/tofile) 来做

> 阅读源码方式的新增为添加 `npm i vue` 从 `node_module` 中 vue 的类型声明文件来入口源码的大体结构，又由于它是 `TypeScript` 写的，所以根据类型声明文中的类型来去 `ripgrep` 找到对应的源码
# 问题
## 为什么 vue3 没有使用 createDocumentFragment
# 我最应该看了各种 api 的源码
- 这对于我使用 vue3 来实现业务，常用的东西，会更加得心应手
## createApp
- 属于 runtime-dom
 
## 编译后后的 vue.global.js 文件 (`npm run build` 生成)
- 一个ifie函数生成一个Vue全局变量为一个对象
```js
{
  BaseTransition: {
    name: 'BaseTransition',
    props: {
      mode: [Function: String],
      appear: [Function: Boolean],
      persisted: [Function: Boolean],
      onBeforeEnter: [Array],
      onEnter: [Array],
      onAfterEnter: [Array],
      onEnterCancelled: [Array],
      onBeforeLeave: [Array],
      onLeave: [Array],
      onAfterLeave: [Array],
      onLeaveCancelled: [Array],
      onBeforeAppear: [Array],
      onAppear: [Array],
      onAfterAppear: [Array],
      onAppearCancelled: [Array]
    },
    setup: [Function: setup]
  },
  Comment: Symbol(Comment),
  EffectScope: [class EffectScope],
  Fragment: Symbol(Fragment),
  KeepAlive: {
    name: 'KeepAlive',
    __isKeepAlive: true,
    props: { include: [Array], exclude: [Array], max: [Array] },
    setup: [Function: setup]
  },
  ReactiveEffect: [class ReactiveEffect],
  Static: Symbol(Static),
  Suspense: {
    name: 'Suspense',
    __isSuspense: true,
    process: [Function: process],
    hydrate: [Function: hydrateSuspense],
    create: [Function: createSuspenseBoundary],
    normalize: [Function: normalizeSuspenseChildren]
  },
  Teleport: {
    __isTeleport: true,
    process: [Function: process],
    remove: [Function: remove],
    move: [Function: moveTeleport],
    hydrate: [Function: hydrateTeleport]
  },
  Text: Symbol(Text),
  Transition: [Function: Transition] {
    displayName: 'Transition',
    props: {
      mode: [Function: String],
      appear: [Function: Boolean],
      persisted: [Function: Boolean],
      onBeforeEnter: [Array],
      onEnter: [Array],
      onAfterEnter: [Array],
      onEnterCancelled: [Array],
      onBeforeLeave: [Array],
      onLeave: [Array],
      onAfterLeave: [Array],
      onLeaveCancelled: [Array],
      onBeforeAppear: [Array],
      onAppear: [Array],
      onAfterAppear: [Array],
      onAppearCancelled: [Array],
      name: [Function: String],
      type: [Function: String],
      css: [Object],
      duration: [Array],
      enterFromClass: [Function: String],
      enterActiveClass: [Function: String],
      enterToClass: [Function: String],
      appearFromClass: [Function: String],
      appearActiveClass: [Function: String],
      appearToClass: [Function: String],
      leaveFromClass: [Function: String],
      leaveActiveClass: [Function: String],
      leaveToClass: [Function: String]
    }
  },
  TransitionGroup: {
    name: 'TransitionGroup',
    props: {
      mode: [Function: String],
      appear: [Function: Boolean],
      persisted: [Function: Boolean],
      onBeforeEnter: [Array],
      onEnter: [Array],
      onAfterEnter: [Array],
      onEnterCancelled: [Array],
      onBeforeLeave: [Array],
      onLeave: [Array],
      onAfterLeave: [Array],
      onLeaveCancelled: [Array],
      onBeforeAppear: [Array],
      onAppear: [Array],
      onAfterAppear: [Array],
      onAppearCancelled: [Array],
      name: [Function: String],
      type: [Function: String],
      css: [Object],
      duration: [Array],
      enterFromClass: [Function: String],
      enterActiveClass: [Function: String],
      enterToClass: [Function: String],
      appearFromClass: [Function: String],
      appearActiveClass: [Function: String],
      appearToClass: [Function: String],
      leaveFromClass: [Function: String],
      leaveActiveClass: [Function: String],
      leaveToClass: [Function: String],
      tag: [Function: String],
      moveClass: [Function: String]
    },
    setup: [Function: setup]
  },
  VueElement: [class VueElement],
  callWithAsyncErrorHandling: [Function: callWithAsyncErrorHandling],
  callWithErrorHandling: [Function: callWithErrorHandling],
  camelize: [Function (anonymous)],
  capitalize: [Function (anonymous)],
  cloneVNode: [Function: cloneVNode],
  compatUtils: null,
  compile: [Function: compileToFunction],
  computed: [Function: computed$1],
  createApp: [Function: createApp],
  createBlock: [Function: createBlock],
  createCommentVNode: [Function: createCommentVNode],
  createElementBlock: [Function: createElementBlock],
  createElementVNode: [Function: createBaseVNode],
  createHydrationRenderer: [Function: createHydrationRenderer],
  createPropsRestProxy: [Function: createPropsRestProxy],
  createRenderer: [Function: createRenderer],
  createSSRApp: [Function: createSSRApp],
  createSlots: [Function: createSlots],
  createStaticVNode: [Function: createStaticVNode],
  createTextVNode: [Function: createTextVNode],
  createVNode: [Function: createVNodeWithArgsTransform],
  customRef: [Function: customRef],
  defineAsyncComponent: [Function: defineAsyncComponent],
  defineComponent: [Function: defineComponent],
  defineCustomElement: [Function: defineCustomElement],
  defineEmits: [Function: defineEmits],
  defineExpose: [Function: defineExpose],
  defineProps: [Function: defineProps],
  defineSSRCustomElement: [Function: defineSSRCustomElement],
  effect: [Function: effect],
  effectScope: [Function: effectScope],
  getCurrentInstance: [Function: getCurrentInstance],
  getCurrentScope: [Function: getCurrentScope],
  getTransitionRawChildren: [Function: getTransitionRawChildren],
  guardReactiveProps: [Function: guardReactiveProps],
  h: [Function: h],
  handleError: [Function: handleError],
  hydrate: [Function: hydrate],
  initCustomFormatter: [Function: initCustomFormatter],
  initDirectivesForSSR: [Function: NOOP],
  inject: [Function: inject],
  isMemoSame: [Function: isMemoSame],
  isProxy: [Function: isProxy],
  isReactive: [Function: isReactive],
  isReadonly: [Function: isReadonly],
  isRef: [Function: isRef],
  isRuntimeOnly: [Function: isRuntimeOnly],
  isShallow: [Function: isShallow],
  isVNode: [Function: isVNode],
  markRaw: [Function: markRaw],
  mergeDefaults: [Function: mergeDefaults],
  mergeProps: [Function: mergeProps],
  nextTick: [Function: nextTick],
  normalizeClass: [Function: normalizeClass],
  normalizeProps: [Function: normalizeProps],
  normalizeStyle: [Function: normalizeStyle],
  onActivated: [Function: onActivated],
  onBeforeMount: [Function (anonymous)],
  onBeforeUnmount: [Function (anonymous)],
  onBeforeUpdate: [Function (anonymous)],
  onDeactivated: [Function: onDeactivated],
  onErrorCaptured: [Function: onErrorCaptured],
  onMounted: [Function (anonymous)],
  onRenderTracked: [Function (anonymous)],
  onRenderTriggered: [Function (anonymous)],
  onScopeDispose: [Function: onScopeDispose],
  onServerPrefetch: [Function (anonymous)],
  onUnmounted: [Function (anonymous)],
  onUpdated: [Function (anonymous)],
  openBlock: [Function: openBlock],
  popScopeId: [Function: popScopeId],
  provide: [Function: provide],
  proxyRefs: [Function: proxyRefs],
  pushScopeId: [Function: pushScopeId],
  queuePostFlushCb: [Function: queuePostFlushCb],
  reactive: [Function: reactive],
  readonly: [Function: readonly],
  ref: [Function: ref],
  registerRuntimeCompiler: [Function: registerRuntimeCompiler],
  render: [Function: render],
  renderList: [Function: renderList],
  renderSlot: [Function: renderSlot],
  resolveComponent: [Function: resolveComponent],
  resolveDirective: [Function: resolveDirective],
  resolveDynamicComponent: [Function: resolveDynamicComponent],
  resolveFilter: null,
  resolveTransitionHooks: [Function: resolveTransitionHooks],
  setBlockTracking: [Function: setBlockTracking],
  setDevtoolsHook: [Function: setDevtoolsHook],
  setTransitionHooks: [Function: setTransitionHooks],
  shallowReactive: [Function: shallowReactive],
  shallowReadonly: [Function: shallowReadonly],
  shallowRef: [Function: shallowRef],
  ssrContextKey: Symbol(ssrContext),
  ssrUtils: null,
  stop: [Function: stop],
  toDisplayString: [Function: toDisplayString],
  toHandlerKey: [Function (anonymous)],
  toHandlers: [Function: toHandlers],
  toRaw: [Function: toRaw],
  toRef: [Function: toRef],
  toRefs: [Function: toRefs],
  transformVNodeArgs: [Function: transformVNodeArgs],
  triggerRef: [Function: triggerRef],
  unref: [Function: unref],
  useAttrs: [Function: useAttrs],
  useCssModule: [Function: useCssModule],
  useCssVars: [Function: useCssVars],
  useSSRContext: [Function: useSSRContext],
  useSlots: [Function: useSlots],
  useTransitionState: [Function: useTransitionState],
  vModelCheckbox: {
    deep: true,
    created: [Function: created],
    mounted: [Function: setChecked],
    beforeUpdate: [Function: beforeUpdate]
  },
  vModelDynamic: {
    created: [Function: created],
    mounted: [Function: mounted],
    beforeUpdate: [Function: beforeUpdate],
    updated: [Function: updated]
  },
  vModelRadio: {
    created: [Function: created],
    beforeUpdate: [Function: beforeUpdate]
  },
  vModelSelect: {
    deep: true,
    created: [Function: created],
    mounted: [Function: mounted],
    beforeUpdate: [Function: beforeUpdate],
    updated: [Function: updated]
  },
  vModelText: {
    created: [Function: created],
    mounted: [Function: mounted],
    beforeUpdate: [Function: beforeUpdate]
  },
  vShow: {
    beforeMount: [Function: beforeMount],
    mounted: [Function: mounted],
    updated: [Function: updated],
    beforeUnmount: [Function: beforeUnmount]
  },
  version: '3.2.31',
  warn: [Function: warn$1],
  watch: [Function: watch],
  watchEffect: [Function: watchEffect],
  watchPostEffect: [Function: watchPostEffect],
  watchSyncEffect: [Function: watchSyncEffect],
  withAsyncContext: [Function: withAsyncContext],
  withCtx: [Function: withCtx],
  withDefaults: [Function: withDefaults],
  withDirectives: [Function: withDirectives],
  withKeys: [Function: withKeys],
  withMemo: [Function: withMemo],
  withModifiers: [Function: withModifiers],
  withScopeId: [Function: withScopeId]
}

```
- Vue全局变量上的所有属性
```js
for (const i in Vue){console.log(i)}
// BaseTransition
// Comment
// EffectScope
// Fragment
// KeepAlive
// ReactiveEffect
// Static
// Suspense
// Teleport
// Text
// Transition
// TransitionGroup
// VueElement
// callWithAsyncErrorHandling
// callWithErrorHandling
// camelize
// capitalize
// cloneVNode
// compatUtils
// compile
// computed
// createApp
// createBlock
// createCommentVNode
// createElementBlock
// createElementVNode
// createHydrationRenderer
// createPropsRestProxy
// createRenderer
// createSSRApp
// createSlots
// createStaticVNode
// createTextVNode
// createVNode
// customRef
// defineAsyncComponent
// defineComponent
// defineCustomElement
// defineEmits
// defineExpose
// defineProps
// defineSSRCustomElement
// effect
// effectScope
// getCurrentInstance
// getCurrentScope
// getTransitionRawChildren
// guardReactiveProps
// h
// handleError
// hydrate
// initCustomFormatter
// initDirectivesForSSR
// inject
// isMemoSame
// isProxy
// isReactive
// isReadonly
// isRef
// isRuntimeOnly
// isShallow
// isVNode
// markRaw
// mergeDefaults
// mergeProps
// nextTick
// normalizeClass
// normalizeProps
// normalizeStyle
// onActivated
// onBeforeMount
// onBeforeUnmount
// onBeforeUpdate
// onDeactivated
// onErrorCaptured
// onMounted
// onRenderTracked
// onRenderTriggered
// onScopeDispose
// onServerPrefetch
// onUnmounted
// onUpdated
// openBlock
// popScopeId
// provide
// proxyRefs
// pushScopeId
// queuePostFlushCb
// reactive
// readonly
// ref
// registerRuntimeCompiler
// render
// renderList
// renderSlot
// resolveComponent
// resolveDirective
// resolveDynamicComponent
// resolveFilter
// resolveTransitionHooks
// setBlockTracking
// setDevtoolsHook
// setTransitionHooks
// shallowReactive
// shallowReadonly
// shallowRef
// ssrContextKey
// ssrUtils
// stop
// toDisplayString
// toHandlerKey
// toHandlers
// toRaw
// toRef
// toRefs
// transformVNodeArgs
// triggerRef
// unref
// useAttrs
// useCssModule
// useCssVars
// useSSRContext
// useSlots
// useTransitionState
// vModelCheckbox
// vModelDynamic
// vModelRadio
// vModelSelect
// vModelText
// vShow
// version
// warn
// watch
// watchEffect
// watchPostEffect
// watchSyncEffect
// withAsyncContext
// withCtx
// withDefaults
// withDirectives
// withKeys
// withMemo
// withModifiers
// withScopeId
```
# 《Vue 设计与实现》
## 第一篇
### 第三章
- 渲染器（本质是一个函数会找到需要挂载的容器（就是一个正常 dom 元素），再用容器的 appendElement来完成组件的渲染），会对一个组件（在抽象逻辑上是一个多个 dom 元素，js代码，css代码的组合，在 javascript 语义上本质是一个函数返回一个javascript 对象）,渲染器函数根据输入的参数的类型判断来它是一个普通的标签元素，object 或function 就被设置为组件，（在 vue 中object 被设置为有状态组件的判定）

## 第二篇
### 第四章
- 不能硬编码 (指写死的代码) 写一个依赖的副作用函数，应该使用一个全局变量来保存依赖，
- 来自远程的修改
- 需要对储存依赖的副作用函数的 bucket
  - 需要对要执行的依赖的副作用函数与被监听的对象之间建立对应关系
  - 一个要执行的依赖的副作用函数 可以对应 <=> 多个监听的对象
  - 一个监听的对象               可以对应 <=> 多个要执行的依赖的副作用函数
  - 多个监听的对象               可以对应 <=> 多个要执行的依赖的副作用函数
