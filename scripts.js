function hideStuff(id) {
    document.getElementById(id).style.display = 'none';
    document.getElementById("show").checked = false; //should uncheck the show button when clicking hide button. makes sense right?
}

function showStuff(id) {
    document.getElementById(id).style.display = 'inline';
    document.getElementById("hide").checked = false; //doesn't work if you pull by name? some reason works fine with id tho.
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