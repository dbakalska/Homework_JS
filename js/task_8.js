/*Задача 8:  Напишете JavaScript функция, която да добавя редове към
 таблица.Тествайте върху HTML документ.*/

function addRow() {
    var table = document.getElementById("table"),
        row = table.insertRow(-1),
        cell_1 = row.insertCell(0),
        cell_2 = row.insertCell(1),
        cell_3 = row.insertCell(2);
        cell_1.innerHTML = "New cell 1";
        cell_2.innerHTML = "New cell 2";
        cell_3.innerHTML = "New cell 3";
}

