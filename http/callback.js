/**
 * Created by tongwii on 2017/6/29.
 */
function learn(something) {
    console.log(something);
}
function  we(callback,something) {
    something += 'is cool';
    callback(something);
}
we(learn,'Node.js');