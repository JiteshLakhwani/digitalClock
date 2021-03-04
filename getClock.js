function showTime() {
    
    var dateObj = new Date();
    var hours = dateObj.getHours();
    var minutes = dateObj.getMinutes();
    var seconds = dateObj.getSeconds();
    var session = "AM";

    if (hours == 0) {
        
        hours = 12;
    }

    if (hours > 12) {
        hours -= 12;
        session = "PM";
    }

    var hours = (hours < 10) ? "0" + hours : hours;
    var minutes = (minutes < 10) ? "0" + minutes : minutes;
    var seconds = (seconds < 10) ? "0" + seconds : seconds;

    var time = hours + ":" + minutes + ":" + seconds + ":" + session;

    document.getElementById("showTimeId").innerText = time;
    // document.getElementById("showTimeId").textContent = time;

    setInterval(showTime, 1000);

    //document.write(hours + ":" + minutes + ":" + seconds);
}

showTime();