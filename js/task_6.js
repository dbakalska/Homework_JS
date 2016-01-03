/*Задача 6: Напишете JavaScript функция, която показва случайна снимка при
 всяко едно отваряне на страницата.*/

var pics = ["images/pic1.jpg", "images/pic2.jpg", "images/pic3.jpg",
            "images/pic4.jpg", "images/pic5.jpg"];

function randomPics() {
    var randomImg = Math.floor(Math.random() * pics.length);
    document.getElementById("img").src = pics[randomImg];
}
window.onload = randomPics;