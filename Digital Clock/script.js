let Timer = document.querySelector('#timer');

setInterval(function () {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();


    let amPm;
    if (hour >= 12) {
        amPm = "pm";
    } else {
        amPm = "am";
    }

    if (hour > 12) {
        hour = hour - 12;
    }

    let formatterHour;
    if (hour < 10) {
        formatterHour = "0" + hour;
    } else {
        formatterHour = hour;
    }

    let formatterMinutes;
    if (minute < 10) {
        formatterMinutes = "0" + minute;
    } else {
        formatterMinutes = minute;
    }

    let formatterSecond;
    if (second < 10) {
        formatterSecond = "0" + second;
    } else {
        formatterSecond = second;
    }

    


    Timer.textContent = `${formatterHour}:${formatterMinutes}:${formatterSecond} ${amPm}`;
}, 1000);