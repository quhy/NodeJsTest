/**
 * Created by tongwii on 2017/6/29.
 */
//<sctipt src='a.js'></script>
//<sctipt src='b.js'></script>
//<sctipt src='c.js'></script>
// var i = 0;
// while(true){
//     i++;
// }
var c =0 ;
function printInt() {
    console.log(c);
}
function  plus(callback) {
   setTimeout(function () {
       c+=1;
       callback(c);
   },1000)

}
plus(printInt);
