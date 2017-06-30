/**
 * Created by tongwii on 2017/6/30.
 */
var EventEmitter = require('events').EventEmitter;

var life = new EventEmitter();
//修改一个事件的监听器个数，系统默认为10个超出会提示警告
life.setMaxListeners(11);

//可以用addEventEmitter来替代，作用是一样的
function goout(who) {
    console.log('go out!'+who);
}
life.on('help',goout);

life.on('help',function (who) {
    console.log('aaa! '+who);
});

life.on('help',function (who) {
    console.log('bbb! '+who);
});

life.on('help',function (who) {
    console.log('ccc! '+who);
});

life.on('help',function (who) {
    console.log('ddd! '+who);
});

life.on('help',function (who) {
    console.log('eee! '+who);
});

life.on('help',function (who) {
    console.log('fff! '+who);
});

life.on('help',function (who) {
    console.log('ggg! '+who);
});

life.on('help',function (who) {
    console.log('hhh! '+who);
});

life.on('help',function (who) {
    console.log('iii! '+who);
});

life.on('doSomething',function (who) {
    console.log('girl1!  '+who);
});
life.on('doSomething',function (who) {
    console.log('girl2!  '+who);
});

//移除事件监听，不可以移除匿名函数的事件监听
life.removeListener('help',goout);
//查询事件监听的个数,三种方法
console.log(life.listenerCount('help'));
console.log(life.listeners('help').length);
console.log(EventEmitter.listenerCount(life,'help'));

//批量移除事件监听器
// life.removeAllListeners();移除所有事件监听器
life.removeAllListeners('doSomething');

//调用，如果有事件监听器会返回true，没有会返回false
var hsaConfortListener = life.emit('help','lisa');
var hsaDoingListener = life.emit('doSomething','qu');
var hsaBadListener = life.emit('bad','lisa and qu ');


console.log(hsaConfortListener);
console.log(hsaDoingListener);
console.log(hsaBadListener);

