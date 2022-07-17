var CountDownDate = new Date("Jan 22, 2023 00:00:00").getTime();

var countdownfunction = setInterval(function() {

    /*https://codepen.io/haycuoilennao19/pen/eYdqzvp*/

    var giay = 1000;
    var phut = giay * 60;
    var gio = phut * 60;
    var ngay = gio * 24;


    var TimeNow = new Date().getTime();
    var distance = CountDownDate - TimeNow;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("c_days").innerHTML = days + "<br> Ngày";
    document.getElementById("c_hours").innerHTML = hours + "<br> Giờ";
    document.getElementById("c_minutes").innerHTML = minutes + "<br> Phút";
    document.getElementById("c_seconds").innerHTML = seconds + "<br> Giây";

    if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("c_days").innerHTML = "0 <br> Days";
    }

    if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("c_hours").innerHTML = "0 <br> Hours";
    }

    if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("c_minutes").innerHTML = "0 <br> Minutes";
    }

    if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("c_seconds").innerHTML = "0 <br> Seconds";
    }

}, 1000);