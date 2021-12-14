import mountElement from "./mountElement"
import updateComponent from "./updateComponent"

export default function diffComponent(
  virtualDOM,
  oldComponent,
  oldDOM,
  container
) {
  if (isSameComponent(virtualDOM, oldComponent)) {
    // 同一个组件 做组件更新操作
    updateComponent(virtualDOM, oldComponent, oldDOM, container)
  } else {
    // 不是同一个组件
    mountElement(virtualDOM, container, oldDOM)
  }
}
// 判断是否是同一个组件
function isSameComponent(virtualDOM, oldComponent) {
  console.log(virtualDOM,'oldComponent211')
  console.log(oldComponent,'222')
  return oldComponent && virtualDOM.type === oldComponent.constructor
}
