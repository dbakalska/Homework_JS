/*Задача 2: Напишете JavaScript, който да връща броя на anchors (<а>) в HTML документ.*/

var count = document.getElementsByTagName('a').length;
console.log("There are " + count + " anchors in this HTML document");
