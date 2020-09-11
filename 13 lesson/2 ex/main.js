let keyboard = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 92, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47];

document.onkeypress = function (event) {
    console.log(event)
    keyboard.push(event.charCode);
    console.log(keyboard);
}
let elems = document.getElementsByClassName('key');
function init() {

    for (let i = 0; i < elems.length; i++) {
        if (elems[i].classList.length < 2) {
            elems[i].setAttribute('data', keyboard[i])
        } else if (elems[i].classList.length >= 2) {
            keyboard.splice(i, 0, 'none')
            //elems[i].setAttribute('data', 'none')
        }
    }
}

init()

document.onkeypress = function (event) {
    console.log(event.code);
    console.log(event.keyCode);
    document.querySelectorAll('.keyboard .key').forEach(function (element) {
        element.classList.remove('active');
    })

    document.querySelector('.keyboard .key[data = "' + event.keyCode + '"]').classList.add('active');
}
document.querySelectorAll('.keyboard .key').forEach(function (element) {
    element.onclick = function (event) {
        document.querySelectorAll('.keyboard .key').forEach(function (element) {
            element.classList.remove('active');
        });
        let code = this.getAttribute('data');
        this.classList.add('active');
        console.log(code)
    }
});

(function () {
    document.querySelector('#textarea').addEventListener('keydown', function (e) {
        if (e.keyCode === 13) {
            //e.preventDefault();
            document.querySelector('.enter').classList.add('active');

            console.log('enter');
        } else if (e.keyCode === 8) {
            //e.preventDefault()
            console.log('backspace');
            document.querySelector('.backspace').classList.add('active');
        } else if (e.keyCode === 9) {
            e.preventDefault()
            document.querySelector('.tab').classList.add('active');
            console.log('tab');
            var val = this.value,
                start = this.selectionStart,
                end = this.selectionEnd;
            this.value = val.substring(0, start) + '\t' + val.substring(end);
            this.selectionStart = this.selectionEnd = start + 1;
            return false;

        } else if (e.keyCode === 16) {
            //e.preventDefault()

            document.querySelector('.lshift').classList.add('active');
            document.querySelector('.rshift').classList.add('active');
            e.event.repeat = true;
            console.log('shift')
        } else if (e.keyCode === 17) {
            e.preventDefault()
            document.querySelector('.lctrl').classList.add('active');
            console.log('ctrl')
        } else if (e.keyCode === 17) {
            e.preventDefault()
            document.querySelector('.rctrl').classList.add('active');
            console.log('ctrl')
        } else if (e.keyCode === 18) {
            e.preventDefault()
            document.querySelector('.alt').classList.add('active');
            console.log('alt')
        } else if (e.keyCode === 20) {
            e.preventDefault()
            document.querySelector('.capslock').classList.add('active');
            console.log('CapsLock')
        }
        else if (e.keyCode === 32) {
            //e.preventDefault()
            document.querySelector('.spase').classList.add('active');
            console.log('spase')
        }
    });
})();
