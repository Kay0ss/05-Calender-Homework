var description = document.getElementById("description");
var dayArea = document.getElementById("currentDay");
const today = moment();
var format = 'h:mm';

dayArea.textContent += today.format('MM-DD-YYYY');



//Finding time for each time block and determining if it should be red, green, or grey.
var text1 = document.getElementById("description1");
var timeblock4 = moment(),
beforeTime = moment('9:00:00',format),
afterTime = moment('9:59:59',format);

if (timeblock4.isBefore(beforeTime)){
    text1.style.backgroundColor = "green";

} else {
    text1.style.backgroundColor = "darkgray";
}
if (timeblock4.isBetween(beforeTime, afterTime)){
    text1.style.backgroundColor = "red";
}

var text2 = document.getElementById("description2");
var timeblock4 = moment(),
beforeTime = moment('10:00:00',format),
afterTime = moment('10:59:59',format);

if (timeblock4.isBefore(beforeTime)){
    text2.style.backgroundColor = "green";

} else {
    text2.style.backgroundColor = "darkgray";
}
if (timeblock4.isBetween(beforeTime, afterTime)){
    text2.style.backgroundColor = "red";
}

var text3 = document.getElementById("description3");
var timeblock4 = moment(),
beforeTime = moment('11:00:00',format),
afterTime = moment('11:59:59',format);

if (timeblock4.isBefore(beforeTime)){
    text3.style.backgroundColor = "green";

} else {
    text3.style.backgroundColor = "darkgray";
}
if (timeblock4.isBetween(beforeTime, afterTime)){
    text3.style.backgroundColor = "red";
}

var text4 = document.getElementById("description4");
var timeblock4 = moment(),
beforeTime = moment('12:00:00',format),
afterTime = moment('12:59:59',format);

if (timeblock4.isBefore(beforeTime)){
    text4.style.backgroundColor = "green";

} else {
    text4.style.backgroundColor = "darkgray";
}
if (timeblock4.isBetween(beforeTime, afterTime)){
    text4.style.backgroundColor = "red";
}

var text5 = document.getElementById("description5");
var timeblock4 = moment(),
beforeTime = moment('13:00:00',format),
afterTime = moment('13:59:59',format);

if (timeblock4.isBefore(beforeTime)){
    text5.style.backgroundColor = "green";

} else {
    text5.style.backgroundColor = "darkgray";
}
if (timeblock4.isBetween(beforeTime, afterTime)){
    text5.style.backgroundColor = "red";
}

var text6 = document.getElementById("description6");
var timeblock4 = moment(),
beforeTime = moment('14:00:00',format),
afterTime = moment('14:59:59',format);

if (timeblock4.isBefore(beforeTime)){
    text6.style.backgroundColor = "green";

} else {
    text6.style.backgroundColor = "darkgray";
}
if (timeblock4.isBetween(beforeTime, afterTime)){
    text6.style.backgroundColor = "red";
}

var text7 = document.getElementById("description7");
var timeblock4 = moment(),
beforeTime = moment('15:00:00',format),
afterTime = moment('15:59:59',format);

if (timeblock4.isBefore(beforeTime)){
    text7.style.backgroundColor = "green";

} else {
    text7.style.backgroundColor = "darkgray";
}
if (timeblock4.isBetween(beforeTime, afterTime)){
    text7.style.backgroundColor = "red";
}

var text8 = document.getElementById("description8");
var timeblock4 = moment(),
beforeTime = moment('16:00:00',format),
afterTime = moment('16:59:59',format);

if (timeblock4.isBefore(beforeTime)){
    text8.style.backgroundColor = "green";

} else {
    text8.style.backgroundColor = "darkgray";
}
if (timeblock4.isBetween(beforeTime, afterTime)){
    text8.style.backgroundColor = "red";
}

var text9 = document.getElementById("description9");
var timeblock4 = moment(),
beforeTime = moment('17:00:00',format),
afterTime = moment('17:59:59',format);

if (timeblock4.isBefore(beforeTime)){
    text9.style.backgroundColor = "green";

} else {
    text9.style.backgroundColor = "darkgray";
}
if (timeblock4.isBetween(beforeTime, afterTime)){
    text9.style.backgroundColor = "red";
}






// if(
//     moment().format('h:mm').isSameOrAfter()
// );