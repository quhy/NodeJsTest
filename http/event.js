/**
 * Created by tongwii on 2017/6/29.
 */
function clickIt(e) {
    window.alert('Button is clicked');
}
var button = document.getElementById("#button");
button.addEventListener('click',clickIt);