/**
 * Created by tongwii on 2017/6/29.
 */
var klass= require('./class');

exports.add=function (klasses) {
    klasses.forEach(function (index,item) {
        var _klass = item;
        var teacherName = item.teacherName;
        var students = item.students;
        klass.add(teacherName,students);
    })
};
