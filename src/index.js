
//Task 1
const Minutes = new Date().getMinutes();

const Second = new Date().getUTCSeconds();

const inputValue = prompt('Введите значение');
console.log(typeof inputValue, typeof Minutes);

console.log(Second);

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
let min = Minutes + 10;

if (parseInt(inputValue) === min || Minutes === parseInt(inputValue)){
    alert("Будильник  тоже звонит");

} else if (parseInt(inputValue) > min) {
    alert("Будильник уже не звонит");
}
else {
    alert("Ничего не происходит");
}
//


//Task 3
let inputValueNumber = parseInt(inputValue);


if (inputValueNumber === 59 && Minutes === 59 && Second <= 45) {
    alert('Это правда')

} else {
    alert('Это не так')
}



//Task 4
const currentTime = new Date().toTimeString().slice(0, 5);
console.log(currentTime);

if (currentTime === "18:12") {
    alert('Время совпадает')
}



//Task 5
const currentTimeAll = new Date().toTimeString().slice(0, 8);
console.log(currentTimeAll);

if (currentTimeAll === "23:59:59") {
    alert('Время тоже совпадает');
}


//Tsk 6
const currentDateMonth = new Date().toLocaleString().slice(0, 5);
console.log(currentDateMonth);

if (currentDateMonth === '14.01') {
    alert('Совпадает');
}

//Второй вариант решения этой задачи
const currentDay = new Date().getDate();
console.log(currentDay);

const currentOnlyMonth = new Date().getMonth();
console.log(currentOnlyMonth);

let TrueMonth = currentOnlyMonth + 1;
console.log (TrueMonth);

let sumDateNotFull = '0' + String(currentDay) + '.' + '0' + String(TrueMonth);
console.log(sumDateNotFull);

if (sumDateNotFull === '14.01') {
    alert('Тоже совпадает');
}
//


//Task 7
const currentOnlyDate = new Date().toLocaleString().slice(0, 5);
console.log(currentOnlyDate);

const currentOnlyTime = new Date().toLocaleString().slice(11, 20);
console.log(currentOnlyTime);

const currentFull = currentOnlyDate + ',' + currentOnlyTime;
console.log(currentFull);

if (currentFull >= '15.12, 14:00:30' && currentFull < '15.12, 14:01:00') {
    alert('Время  тоже совпадает');
}