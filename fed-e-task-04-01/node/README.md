* react16之前的版本对比更新virtualDom的过程是采用循环加递归实现的，这种对比方式有一个问题就是，一旦任务开始进行就无法中断，如果组件数量庞大，主线程就会长期被占用。这就导致用户交互。动画等无法立即执行，造成卡顿。

* 解决方案
1.利用浏览器空闲时间执行任务，拒绝长时间占用主线程
2.放弃递归，只采用循环，循环可中断
3.任务拆分，将任务拆分成一个个小任务

requestIdleCallback挂载在window下的方法，利用浏览器空余时间来执行任务。
requestIdleCallback(function(deadline){
    //deadline.timeRemaining()  获取浏览器空余时间
})

