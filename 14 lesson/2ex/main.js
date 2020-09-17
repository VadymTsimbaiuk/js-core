let block = document.querySelector(".form-container")
let name = form.name;
let secondName = form.secondName;
let eAddres = form.eAddres;
let sex = form.sex;
let position = form.position;
position.options[0].selected = true;

let agree = form.terms
let signUpBtn = form.bSignUp;


let profile = document.querySelector("#profile")
let username = "";
let workPosition = "";
let resSex = "";



//вивід обраного елементу форми посади

let select = document.querySelector('select');
select.onchange = function () {
    let indexSelected = select.selectedIndex,
        option = select.querySelectorAll('option')[indexSelected];
    let selectedId = option.getAttribute('id');

    if (selectedId == '1') {
        workPosition = option.value
        console.log(option.value)
    } else if (selectedId == '2') {
        workPosition = option.value
        console.log(option.value);
    } else if (selectedId == '3') {
        workPosition = option.value
        console.log(option.value);
    }
}

//email

eAddres.onblur = function () {
    if (!eAddres.value.includes('@')) {
        eAddres.classList.add('invalid');
        error.innerHTML = "Будь-ласка, введіть правильний email";
        document.querySelector('.form-container').style.height = '480px'
    }
};

eAddres.onfocus = function () {
    if (this.classList.contains('invalid')) {
        this.classList.remove('invalid');
        error.innerHTML = "";
        document.querySelector('.form-container').style.height = '460px'
    };
};

//вибір статі
const checkSex = () => {
    for (let i = 0; i < sex.length; i++) {
        if (sex[i].checked) {
            resSex = sex[i].id
            console.log("вибрана стать " + sex[i].id)
        }
    }
}

//перевірка погодження з положеннями

function checkAgree() {
    if (agree.checked == true) {
        console.log("checked")
        signUpBtn.disabled = false
    } else {
        signUpBtn.disabled = true
        console.log("notchecked")
    }
}
document.getElementById("bSignUp").addEventListener("click", function () {
    block.classList.add("not-active");
    profile.classList.remove("not-active");
    document.querySelector("#fullName").innerText = name.value + " " + secondName.value;
    document.querySelector("#work-eAddres").innerText = eAddres.value;
    document.querySelector("#work-position").innerText = workPosition;


    if (resSex == sex[0].id) {
        document.querySelector(".man").classList.add("active");
        document.querySelector(".woman").classList.add("not-active");
    } else if (resSex == sex[1].id) {
        document.querySelector(".woman").classList.add("active");
        document.querySelector(".man").classList.add("not-active")
    };
});

document.getElementById("bSignOut").addEventListener("click", function () {
    block.classList.remove("not-active");
    profile.classList.add("not-active");
    document.querySelector("#fullName").innerText = "";
    document.querySelector("#work-eAddres").innerText = "";
    document.querySelector("#work-position").innerText = "";

})

