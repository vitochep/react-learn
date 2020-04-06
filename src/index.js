const Minutes = new Date().getMinutes();

const Second = new Date().getUTCSeconds();
console.log(Second);

const inputValue = prompt('Введите значение');

console.log(typeof inputValue, typeof Minutes);

//Task 1
if (Minutes === 4) {
    alert('Будильник звонит');
}


//Task2
switch (Minutes) {
    case 35:
        alert('Будильник опять звонит');
        break;

    case 45:
        alert('Будильник опять звонит');
        break;

    case 55:
        alert('Будильник опять звонит');
        break;

    default:

}


// Вариант, при котором будильник звонит во время, записанное в prompt и каждые 10 мин
// let min = Minutes + 10;
//
// if (parseInt(inputValue) === min || Minutes === parseInt(inputValue)){
//     alert("Будильник  тоже звонит");
//
// } else if (parseInt(inputValue) > min) {
//     alert("Будильник уже не звонит");
// }
// else {
//     alert("Ничего не происходит");
// }


//Task 3
//С сеундами - на 59 минут 00 сек-45 сек работает. В остальное время не работает. С остальными также

let  inputValueNumber = parseInt(inputValue);


if (inputValueNumber === 59 && Minutes === 59 && Second <= 45) {
    alert('Это правда')

} else {
    alert('Это не так')
}


//Task 4

const currentDate  = new Date().toTimeString();
console.log(currentDate);

if (parseInt(currentDate) === parseInt("23:00") && parseInt(currentDate) === inputValueNumber){
    alert('Ага')
}



