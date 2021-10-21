var description = document.getElementById("description");
var dayArea = document.getElementById("currentDay");
const today = moment();
var format = 'h:mm';

dayArea.textContent += today.format('MM-DD-YYYY');



//Finding time for each time block and determining if it should be red, green, or grey.
var text1 = document.getElementById("description1");
var timeblock4 = moment('11:15:00',format),
beforeTime = moment('12:00:00',format),
afterTime = moment('12:59:59',format);

if (timeblock4.isBefore(beforeTime)){
    text1.style.backgroundColor = "darkgray";

} else {
    text1.style.backgroundColor = "green";
}
if (timeblock4.isBetween(beforeTime, afterTime)){
    text1.style.backgroundColor = "red";
}

var text2 = document.getElementById("description2");
var timeblock4 = moment('13:15:00',format),
beforeTime = moment('12:00:00',format),
afterTime = moment('12:59:59',format);

if (timeblock4.isBefore(beforeTime)){
    text2.style.backgroundColor = "darkgray";

} else {
    text2.style.backgroundColor = "green";
}
if (timeblock4.isBetween(beforeTime, afterTime)){
    text2.style.backgroundColor = "red";
}


var timeblock4 = moment('13:15:00',format),
beforeTime = moment('12:00:00',format),
afterTime = moment('12:59:59',format);

if (timeblock4.isBefore(beforeTime)){
    description.style.backgroundColor = "darkgray";

} else {
    description.style.backgroundColor = "green";
}
if (timeblock4.isBetween(beforeTime, afterTime)){
    description.style.backgroundColor = "red";
}


var timeblock4 = moment('13:15:00',format),
beforeTime = moment('12:00:00',format),
afterTime = moment('12:59:59',format);

if (timeblock4.isBefore(beforeTime)){
    description.style.backgroundColor = "darkgray";

} else {
    description.style.backgroundColor = "green";
}
if (timeblock4.isBetween(beforeTime, afterTime)){
    description.style.backgroundColor = "red";
}


var timeblock4 = moment('13:15:00',format),
beforeTime = moment('12:00:00',format),
afterTime = moment('12:59:59',format);

if (timeblock4.isBefore(beforeTime)){
    description.style.backgroundColor = "darkgray";

} else {
    description.style.backgroundColor = "green";
}
if (timeblock4.isBetween(beforeTime, afterTime)){
    description.style.backgroundColor = "red";
}


var timeblock4 = moment('13:15:00',format),
beforeTime = moment('12:00:00',format),
afterTime = moment('12:59:59',format);

if (timeblock4.isBefore(beforeTime)){
    description.style.backgroundColor = "darkgray";

} else {
    description.style.backgroundColor = "green";
}
if (timeblock4.isBetween(beforeTime, afterTime)){
    description.style.backgroundColor = "red";
}


var timeblock4 = moment('13:15:00',format),
beforeTime = moment('12:00:00',format),
afterTime = moment('12:59:59',format);

if (timeblock4.isBefore(beforeTime)){
    description.style.backgroundColor = "darkgray";

} else {
    description.style.backgroundColor = "green";
}
if (timeblock4.isBetween(beforeTime, afterTime)){
    description.style.backgroundColor = "red";
}


var timeblock4 = moment('13:15:00',format),
beforeTime = moment('12:00:00',format),
afterTime = moment('12:59:59',format);

if (timeblock4.isBefore(beforeTime)){
    description.style.backgroundColor = "darkgray";

} else {
    description.style.backgroundColor = "green";
}
if (timeblock4.isBetween(beforeTime, afterTime)){
    description.style.backgroundColor = "red";
}


var timeblock4 = moment('13:15:00',format),
beforeTime = moment('12:00:00',format),
afterTime = moment('12:59:59',format);

if (timeblock4.isBefore(beforeTime)){
    description.style.backgroundColor = "darkgray";

} else {
    description.style.backgroundColor = "green";
}
if (timeblock4.isBetween(beforeTime, afterTime)){
    description.style.backgroundColor = "red";
}






// if(
//     moment().format('h:mm').isSameOrAfter()
// );