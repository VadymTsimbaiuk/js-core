//1
form.move.addEventListener("click", function () {
    if (form.input.value == "") {
        alert("missing text");
        form.output.value = "";
    } else {
        form.output.value = form.input.value;
        form.input.value = "";
    }
    console.log("send data")
});
//2
sForm.placeholder.onblur = function () {
    if (sForm.placeholder.value == "") {
        console.log("mising text")
    } else {
        sForm.placeholder.placeholder = placeholder.value
    };
};