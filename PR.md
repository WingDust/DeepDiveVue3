## 可以提PR的想法
- 对于 template 中的出现了注释允许
```Vue
<div
class ="
<!-- fixed-->
color
big
small
"
>
</div>
```
- vue 不支持多次绑定 class 合并
```vue
<div>
<div
  :class="varclass" 固定样式
  :class="varclass2" 条件样式
  :class="varclass2" 动态样式
  >
</div>
</div>
```
