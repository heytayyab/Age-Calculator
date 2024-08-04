function calculateAge() {

let birthdate = document.querySelector("#birthdate").value;
if (!birthdate) {
    document.querySelector("#result").innerHTML = "Please enter your Birth date."
    return;
}

let birthdateObj = new Date(birthdate);
let now = new Date();

// calculate the difference between years months days....
let years = now.getFullYear() - birthdateObj.getFullYear();
let months = now.getMonth() - birthdateObj.getMonth();
let days = now.getDate() - birthdateObj.getDate();
let hours = now.getHours() - birthdateObj.getHours();
let minutes = now.getMinutes() - birthdateObj.getMinutes();
let seconds = now.getSeconds() - birthdateObj.getSeconds();

// Adjust for negative values

if (seconds < 0) {
    seconds += 60;
    minutes--;
}

if (minutes < 0) {
    minutes += 60;
    hours--;
}

if (hours < 0) {
    hours += 24;
    days--;
}

if (days < 0) {
    // Create a date object for the previous month
    let prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    // Add the total days in the previous month to the days calculation
    days += prevMonth.getDate();
    months--;
}

if (months < 0) {
    months += 12;
    years --;
}

document.querySelector("#result").innerHTML = `You are ${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds old`


}