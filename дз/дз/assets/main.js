const localDate = () => {
    setInterval(() => {
        let full = new Date();
        let yy = full.getFullYear();
        let mm = full.getMonth() + 1;
        let dd = full.getDate();
        if (mm < 10) mm = '0' + mm;
        if (dd < 10) dd = '0' + dd;
        document.getElementById('local-date').innerHTML = `${yy} . ${mm} . ${dd}`
    });
}
localDate();

const localTime = () => {
    setInterval(() => {
        let fullTime = new Date();
        let hh = fullTime.getHours();
        let min = fullTime.getMinutes();
        let ss = fullTime.getSeconds();
        if (hh < 10) hh = '0' + hh;
        if (min < 10) min = '0' + min;
        if (ss < 10) ss = '0' + ss;
        document.getElementById('local-time').innerHTML = `${hh} : ${min} : ${ss}`;
    });
}
localTime();

let time = 0;
let running = 0;

const start = () => {
    if (running == 0) {
        running = 1;
        increment();
        document.getElementById('start').disabled = true;
        document.getElementById('stop').disabled = false;
        document.getElementById('start').innerHTML = "Resume";

    } else {
        running = 0;
        document.getElementById('start').innerHTML = "Resume";
    }
}
const stop = () => {
    running = 0;
    document.getElementById('stop').disabled = true;
    document.getElementById('start').disabled = false;

}
const reset = () => {
    document.getElementById('output').innerHTML = "00:00:00:000";
    document.getElementById('start').innerHTML = "Start";
    document.getElementById('outputUnit').innerText = ''
}

const increment = () => {
    if (running == 1) {
        setTimeout(function () {
            time++;
            let mils = time % 100;
            let sec = Math.floor(time / 100 % 60);
            let min = Math.floor(time / 100 / 60);
            let hour = Math.floor(time / 100 / 60 / 60);

            if (mils < 100) mils = mils + "0";
            if (sec < 10) sec = "0" + sec;
            if (min < 10) min = "0" + min;
            if (hour < 10) hour = "0" + hour;
            document.getElementById('output').innerHTML = `${hour}:${min}:${sec}:${mils}`;
            increment()
        }, 10)
    }
}

const loop = () => {
    let ul = document.getElementById('outputUnit');
    let list = [];
    list.push(document.getElementById('output').innerText)

    for (let i = 0; i < list.length; i++) {
        let li = document.createElement('li')
        li.innerText = list[i];
        ul.appendChild(li);
    }
}

let countdown = document.getElementById('countdown').innerText;
let num = Number(countdown);
let minutes = document.getElementById('countdown-minutes');

const plus = () => {
    num++;
    document.getElementById('countdown').innerText = `${num}`
}
const minus = () => {
    num--;
    document.getElementById('countdown').innerText = `${num}`
}

let countRunning = 0;
let b = num;
let a = 0;

const countdownStart = () => {
    if (countRunning == 0) {
        countRunning = 1
        document.getElementById('countdownStart').disabled = true;
        document.getElementById('countdownReset').disabled = false;
        document.getElementById('countdownStop').disabled = false;
        if (b > 0) {
            timer()
        } else if (a > 0) {
            timer()
        }
    }
}
const countdownStop = () => {
    countRunning = 0;
    clearTimeout(timer);

    document.getElementById('countdownStart').disabled = false;
    document.getElementById('countdownStop').disabled = true;
}
function countdownReset() {
    document.getElementById('countdownStart').disabled = false;
    document.getElementById('countdownStop').disabled = true;
    document.getElementById('countdownReset').disabled = true;
    a = 0;
    b = num;
    document.querySelector('.time-section').innerText = ""
}

const timer = () => {
    if (countRunning == 1) {
        setTimeout(() => {
            if (b > 0 && a == 0) {
                a = 60; a--; b -= 1
                document.getElementById('time-section').innerHTML = `${b}: ${a}`;
            } else if (a > 0) {
                a--;
                document.getElementById('time-section').innerHTML = `${b}:${a}`;
            } else if (b == 0 && a == 0) {
                document.getElementById('time-section').innerHTML = "aaaa"
                clearTimeout(timer);
                countRunning = 0
            }
            timer()
        }, 1000);
    }
}



