let newLesson = form.new;
let addLesson = form.add;
let list = document.querySelector('ul');
let a = document.querySelector('.e').children;
let input = document.querySelectorAll('ul input');


const delLesson = () => {
    for (let i = 0; i < a.length; i++) {
        input[i].addEventListener('click', () => {
            if (a.length > 1) {
                input[i].parentElement.remove();
                console.log(a)

            } else if (a.length <= 1) {
                alert("miss");
                return
            }
        })
    }
    console.log(a)
}
delLesson();
addLesson.addEventListener('click', (elem) => {
    if (newLesson.value != "") {
        elem = document.createElement('li');
        elem.innerHTML = `<input type="checkbox" id="${newLesson.value}"> <label for="${newLesson.value}">${newLesson.value}</label>`
        list.append(elem);
        input = document.querySelectorAll('ul input');
        console.log(input);
    } else {
        alert("attention!");
    };
    delLesson()
});

