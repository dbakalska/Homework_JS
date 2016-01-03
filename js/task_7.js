/* Задача 7: Напише JavaScript функционалност, която конвертира от kg в lb и обратно.
 1kg = 2.20462262 lb */

function convertKGtoLB(){
    var convert = document.getElementById("convert").value,
        from = document.getElementById("from").value,
        to = document.getElementById("to").value,
        result = document.getElementById("result");;
    if (from !== to && from == "kg") {
        result.innerHTML = parseFloat(convert) * 2.20462262;
    }   else if (from !== to && from == "lb"){
        result.innerHTML = parseFloat(convert) *  0.45359237;
    }
    else {
        alert("You have entered equal measures");
    }
}
