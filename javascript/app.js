var blink_speed = 900; // every 1000 == 1 second, adjust to suit
var t = setInterval(function () {
    var ele = document.getElementById('terminal-icon');
    ele.style.visibility = (ele.style.visibility == 'hidden' ? '' : 'hidden');
}, blink_speed);