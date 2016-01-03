/*Задача 1:  Напишете JavaScript програма, която по даден array да показва най-често срещания символ.
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];  Резултат: a ( 5 times )*/

var array =[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3],
    freqCounter = {},
    freqItem,
    counter = 0;

for (var i in array) {
    freqCounter[array[i]] =  (freqCounter[array[i]] || 0) + 1;
    if (freqCounter[array[i]] > counter) {
        counter = freqCounter[array[i]];
        freqItem = array[i];
    }
}

console.log('The most frequent item in the array is: ' + freqItem +
            ', ' + counter + ' times');

