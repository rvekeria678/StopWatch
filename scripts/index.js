var display = document.getElementById("display");
var start_button = document.getElementById("start");
var stop_button = document.getElementById("stop");
var lap_button = document.getElementById("lap");
var clear_button = document.getElementById("clear");
var lap_table = document.getElementById("lap-table");
var intid;
var seconds = 0;
var minutes = 0;
var hours = 0;
lap_button.disabled = true;
stop_button.disabled = true;
clear_button.disabled = true;

start_button.addEventListener("click", function (event) {
    start_button.disabled = true;
    lap_button.disabled = false;
    stop_button.disabled = false;
    clear_button.disabled = false;
    intid = setInterval(function () {
        seconds += 1;
        if (seconds > 59) {
            minutes += 1;
            seconds = 0;
        }
        if (minutes > 59) {
            hours += 1;
            minutes = 0;
        }

        let out = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');

        display.innerHTML = out;

    }, 1000);
});

lap_button.addEventListener("click", function (event) {
    lap_table.innerHTML += "<li>" + hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0') + "</li><hr>"
});

stop_button.addEventListener("click", function (event) {
    clearInterval(intid);
    start_button.disabled = false;
    stop_button.disabled = true;
});

clear_button.addEventListener("click", function (event) {
    clearInterval(intid);
    start_button.disabled = false;
    lap_button.disabled = true;
    stop_button.disabled = true;
    clear_button.disabled = true;
    display.innerHTML = "00:00:00";
    lap_table.innerHTML = "";
    seconds = 0;
    minutes = 0;
    hours = 0;
});