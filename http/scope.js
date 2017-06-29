/**
 * Created by tongwii on 2017/6/29.
 */
var globalVariable = 'This is global variable';

function  globalFunction() {
    var localVariable = 'this is local variable';

    console.log('Visit gloable/local variable');
    console.log(globalVariable);
    console.log(localVariable);

    globalVariable="This is change variable";
    console.log(globalVariable);

    function  localFunction() {
        var innerLocalVariable ="this is inner local variable";


        console.log('Visit global /local/innerLocalVariable');
        console.log(globalVariable);
        console.log(localVariable);
        console.log(innerLocalVariable);
    }
    localFunction();
}
 globalFunction();