//1
//const randomizerColor = (min, max) => Math.round(Math.random() * (max - min))
let count = 0;
document.querySelector('.block').addEventListener('mouseover', function changeColor() {

    if (event.target.className == 'block') {
        event.target.style.backgroundColor = 'red';
        count++;
        if (count == 2) {
            event.target.style.backgroundColor = 'yellow';

        } else if (count == 3) {
            event.target.style.backgroundColor = 'green';
        } else {
            count = 1;
        }
    }
})
document.querySelector('.block').addEventListener('mouseout', function firstCol() {
    event.target.style.backgroundColor = 'violet';
})
//2


document.querySelector('.secret').addEventListener('mouseover', function firstStep() {
    event.target.innerHTML = '<p>Хочеш знати який?</p>';
    event.target.style.backgroundColor = 'red';

})
document.querySelector('.secret').addEventListener('mousedown', function secondStep() {
    event.target.innerHTML = '<p>А не скажу</p>';
    event.target.style.backgroundColor = 'yellow';
})
document.querySelector('.secret').addEventListener('mouseup', function secondStep() {
    event.target.innerHTML = '<p>Хочеш знати який?</p>';
    event.target.style.backgroundColor = 'red';
})
document.querySelector('.secret').addEventListener('mouseout', function thirdStep() {

    event.target.style.background = '';
    event.target.innerHTML = '<p>У мене є секрет</p>';
});

//3



//document.querySelectorAll("#bgImg").addEventListener("click", function () {
//  let bgI = prompt("Введіть посилання")
//  event.target.style.backgroundImage = `url(${bgI})`
//})

//let qi = document.querySelectorAll("#bgImg");
//function clack() {
//   for (let i = 0; i < qi.length; i++) {
//       let bgURL = prompt('Введіть посилання');
//       console.log(bgURL)
//       qi[i].addEventListener("click", function () {
//            qi[i].style.backgroundImage = `url(${bgURL})`
//        });
//
//   }
//}

const parent = document.querySelector(".images");
parent.addEventListener('click', (e) => {
    let bgURL = prompt('Введіть посилання');
    e.target.style.backgroundImage = `url(${bgURL})`;
    console.log(e.target);
});

//4

const colorText = document.querySelector(".text");
colorText.addEventListener('click', (e) => {
    e.target.style.color = e.target.innerText
})



