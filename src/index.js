const Minutes = new Date().getMinutes();

const inputValue = prompt('Введите значение');

console.log(typeof inputValue, typeof Minutes);


if (Minutes === 4) {
    alert('Будильник звонит');
}

switch (Minutes) {
    // case Number(inputValue):
    //     alert('Будильник опять звонит');
    //     break;

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
        alert('Результата нет');
}


// Вариант, при котором будильник звонит во время, записанное в prompt и каждые 10 мин

let min = Minutes + 10;
if (parseInt(inputValue) === min || Minutes === parseInt(inputValue)){
    alert("Будильник звонит");

} else if (parseInt(inputValue) > min) {
    alert("Будильник уже не звонит");
}
else {
    alert("Ничего не происходит");
}
//
// const Second = new Date().getUTCSeconds();
// console.log(Second);
