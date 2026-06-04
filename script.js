function showTime() {
    let date = new Date();

    let time = date.toLocaleTimeString();

    document.getElementById("clock").innerHTML = time;
}

setInterval(showTime, 1000);