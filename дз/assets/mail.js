
firstName.addEventListener("input", function (event) {
    if (form.firstName.value.match(/\b^[a-zA-Z]{3,20}\b/)) {
        firstName.classList.add("valid");
        firstName.classList.remove("notValid");
    } else {
        firstName.classList.remove("valid");
        firstName.classList.add("notValid");
    }
    return true
}, false);

lastName.addEventListener("input", function (event) {
    if (form.lastName.value.match(/\b[a-zA-Z]{3,20}\b/i)) {
        lastName.classList.add("valid");
        lastName.classList.remove("notValid");
        return true;
    } else {
        lastName.classList.remove("valid");
        lastName.classList.add("notValid");
    }
    return true
}, false);


email.addEventListener("input", (event) => {
    if (form.email.value.match(/\b^[a-zA-Z][0-9a-zA-Z_.]{2,21}@[a-zA-Z]{2,12}\.[a-zA-Z]{2,12}\b/i)) {
        email.classList.add("valid");
        email.classList.remove("notValid");
        return true;
    } else {
        email.classList.add("notValid");
        email.classList.remove("valid");
    }

}, false);

password.addEventListener("input", (event) => {
    if (form.password.value.match(/\b[0-9a-zA-Z_.]{8,15}\b/i)) {
        password.classList.add("valid");
        password.classList.remove("notValid");
        return true
    } else {
        password.classList.add("notValid");
        password.classList.remove("valid");
    }

}, false);

let num;
const check = () => {
    num = 0;
    if (firstName.classList.contains('valid')) {
        console.log('name valid');
        num++
    }
    if (firstName.classList.contains('notValid')) {
        console.log('name not valid')
        num--
    }
    if (lastName.classList.contains('valid')) {
        console.log('name  valid');
        num++
    }
    if (lastName.classList.contains('notValid')) {
        console.log('name not valid');
        num--
    }
    if (email.classList.contains('valid')) {
        console.log('name  valid');
        num++
    }
    if (email.classList.contains('notValid')) {
        console.log('name not valid');
        num--
    }
    if (password.classList.contains('valid')) {
        console.log('name valid');
        num++
    }
    if (password.classList.contains('notValid')) {
        console.log('name not valid');
        num--
    }
    if (num == 4) {
        document.getElementById('signUp').removeAttribute('disabled')
    }
    console.log(num)
};

let modal = document.getElementById('myModal');
let signUp = document.getElementById('signUp')

let start = document.getElementById('start');

signUp.onclick = ()=>{
    document.getElementById('form').style.display = "none";
    modal.style.display ="block";
}
start.onclick=()=>{
    form.firstName.value ="";
    firstName.classList.remove("valid");
    form.lastName.value ="";
    lastName.classList.remove("valid");
    form.email.value ="";
    email.classList.remove("valid");
    form.password.value ="";
    password.classList.remove("valid");
    form.agree.value = "";
    modal.style.display ="none";
    document.getElementById('form').style.display = "block";
}
window.onclick = (event)=>{
    if(event.target == modal){
        modal.style.display = "none"
    }
}