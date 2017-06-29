/**
 * Created by tongwii on 2017/6/29.
 */
// var pet = {
//     words:'...',
//     speak:function () {
//         console.log(this.words);
//         console.log(this==pet);
//     }
// }
// pet.speak();
//
// function pet(words) {
//     this.words = words;
//     console.log(this.words);
//     console.log(this);
// }
// pet('...');

function Pet(words) {
    this.words = words;
    this.speak = function () {
        console.log(this.words);
        console.log(this);
    }
}
var cat = new Pet('喵喵');
cat.speak();