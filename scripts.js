function hideStuff(id) {
    document.getElementById(id).style.display = 'none';
}

function showStuff(id) {
    document.getElementById(id).style.display = 'block';
}

function printDate() {
    var date = new Date();
    date.setTime(date.getTime()) //+date.getTimezoneOffset()) 
    document.getElementById("timestamp").innerHTML = date.toString();
    t = setTimeout(function () {
        printDate()
    }, 500);
}

function nightShift() {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
}

function dayShift() {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
}

/*
function timer() {
    function checkTime(i) {
        return (i < 10) ? "0" + i : i;
    }
 
    function startTime() {
        var today = new Date(),
            h = checkTime(today.getHours()),
            m = checkTime(today.getMinutes()),
            s = checkTime(today.getSeconds());
        document.getElementById("timestamp").innerHTML += h + ":" + m + ":" + s;
        t = setTimeout(function () {
            printDate()
            startTime()
        }, 500);
    }
    startTime();
}
*/