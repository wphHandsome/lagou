1、当我们点击按钮的时候动态给 data 增加的成员是否是响应式数据，如果不是的话，如何把新增成员设置成响应式数据，它的内部原理是什么。
let vm = new Vue({
 el: '#el'
 data: {
  o: 'object',
  dog: {}
 },
 method: {
  clickHandler () {
   // 该 name 属性是否是响应式的
   this.dog.name = 'Trump'
  }
 }
})
答：不是响应式，在Vue初始化的过程中，将data选项中的值利用Object.defineProperty 中的 get/set 将其转化为响应式。
方法：给 dog 的属性 name 设置一个初始值，dog:{name:''}或者 this.$set(this.data.dog, name, 'hello')

2、请简述 Diff 算法的执行过程
答：在执行Diff算法的过程就是调用名为 patch 的函数，比较新旧节点。一边比较一边给真实的 DOM 打补丁。patch 函数接收两个参数 oldVnode 和 Vnode，它们分别代表新的节点和之前的旧节点。这个patch函数会比较 oldVnode 和 vnode 是否是相同的, 即函数 sameVnode(oldVnode, vnode), 根据这个函数的返回结果分如下两种情况：true：则执行 patchVnode，false：则用 vnode 替换 oldVnode
patchVnode 函数做的工作
找到对应的真实 dom，称为 el
判断 vnode 和 oldVnode 是否指向同一个对象。
如果是，那么直接 return。
如果他们都有文本节点并且不相等，那么将 el 的文本节点设置为 vnode 的文本节点。
如果 oldVnode 有子节点而 vnode 没有，则删除 el 的子节点。
如果 oldVnode 没有子节点而 vnode 有，则将 vnode 的子节点真实化之后添加到 el
如果两者都有子节点，则执行 updateChildren 函数比较子节点。
当 oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx 时，执行如下循环判断：
oldStartVnode 为 null，则 oldStartVnode 等于 oldCh 的下一个子节点，即 oldStartVnode 的下一个兄弟节点
oldEndVnode 为 null, 则 oldEndVnode 等于 oldCh 的相对于 oldEndVnode 上一个子节点，即 oldEndVnode 的上一个兄弟节点
newStartVnode 为 null，则 newStartVnode 等于 newCh 的下一个子节点，即 newStartVnode 的下一个兄弟节点
newEndVnode 为 null, 则 newEndVnode 等于 newCh 的相对于 newEndVnode 上一个子节点，即 newEndVnode 的上一个兄弟节点
oldEndVnode 和 newEndVnode 为相同节点则执行 patchVnode(oldStartVnode, newStartVnode)，执行完后 oldStartVnode 为此节点的下一个兄弟节点，newStartVnode 为此节点的下一个兄弟节点
oldEndVnode 和 newEndVnode 为相同节点则执行 patchVnode(oldEndVnode, newEndVnode)，执行完后 oldEndVnode 为此节点的上一个兄弟节点，newEndVnode 为此节点的上一个兄弟节点
oldStartVnode 和 newEndVnode 为相同节点则执行 patchVnode(oldStartVnode, newEndVnode)，执行完后 oldStartVnode 为此节点的下一个兄弟节点，newEndVnode 为此节点的上一个兄弟节点
oldEndVnode 和 newStartVnode 为相同节点则执行 patchVnode(oldEndVnode, newStartVnode)，执行完后 oldEndVnode 为此节点的上一个兄弟节点，newStartVnode 为此节点的下一个兄弟节点
使用 key 时的比较：
       oldKeyToIdx为未定义时，由 key 生成 index 表，具体实现为  createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx)

在createKeyToOldIdx 方法中，用 oldCh 中的 key 属性作为键，而对应的节点的索引作为值。然后再判断在 newStartVnode 的属性中是否有 key，且是否在 oldKeyToIndx 中找到对应的节点。
如果不存在这个 key，那么就将这个 newStartVnode 作为新的节点创建且插入到原有的 root 的子节点中，然后将 newStartVnode 替换为此节点的下一个兄弟节点。
如果存在这个key，那么就取出 oldCh 中的存在这个 key 的 vnode，然后再进行 diff 的过程，并将 newStartVnode 替换为此节点的下一个兄弟节点。
当上述 9 个判断执行完后，oldStartIdx 大于 oldEndIdx，则将 vnode 中多余的节点根据 newStartIdx 插入到 dom 中去；newStartIdx 大于 newEndIdx，则将 dom 中在区间 [oldStartIdx， oldEndIdx]的元素节点删除