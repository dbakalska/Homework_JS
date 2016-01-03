/*Задача 5: Напишете JavaScript функция, която смята обема на сфера по подаден радиус.*/

function sphereVolume (){
    var radius = document.getElementById('radius').value,
        volume = ((4/3) * Math.PI * Math.pow(radius, 3)).toFixed(4);
        document.getElementById('volume').value = volume;
}
