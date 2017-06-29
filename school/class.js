/**
 * Created by tongwii on 2017/6/29.
 */
var student = require('./student');
var teacher = require('./teacher');


function add(teacherName,students){
    teacher.add(teacherName);
    students.forEach(function (item,index) {
        student.add(item);
    })
}

exports.add =add//使模块成为传统的模块实例
//module.exports = add;//使模块成为一个特殊的对象类型
//module.exports = add;和exports.add =add效果相同