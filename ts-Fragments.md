## 测试 reactive 响应式对象类型
> packages/reactivity/__tests__/reactive.spec.ts:277
- 响应式对象类型对象为 Object
## 为什么 Vue 使用 WeakMap 做为储存响应式对象管理的原因
> packages/reactivity/src/reactive.ts:182
- 因为如果使用 Map 的来做响应式对象管理，每当使用者要执行数据销毁操作 如 `data=null`（执行这个并一定能销毁数据，数据可能被其他东西强引用着），我内部同时要判断数据是否真的已销毁了，这一步骤相对于使用 WeakMap 时就不用手动判断，而是交给JavaScript运行时处理
