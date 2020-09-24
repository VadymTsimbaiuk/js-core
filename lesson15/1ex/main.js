const leftModal = document.getElementById("from-left");
const rightModal = document.getElementById("from-right");

window.addEventListener('scroll', function () {
    for (let i = 24; i < window.scrollY; i++) {
        if (window.scrollY > 72 && window.scrollY <= 200) {
            document.getElementById("down").style.fontSize = `${window.scrollY / 3}px`
            document.getElementById("up").style.fontSize = `${window.scrollY / 3}px`
        } else if (window.scrollY >= 400 && window.scrollY <= 600) {
            document.querySelector("hr").style.width = `${window.scrollY / 1.7}px`
            leftModal.style.left = `${window.scrollY / 4}px`

        } else if (window.scrollY >= 600 && window.scrollY <= 935) {
            rightModal.style.right = `${window.scrollY / 4}px`
        } else if (window.scrollY >= 1503 && window.scrollY <= 1900) {
            document.getElementById("up").style.fontSize = `${72 / window.scrollY * 1000}px`
        }

    }
    console.log('Текущая прокрутка сверху: ' + window.pageYOffset)

});
document.getElementById("up").addEventListener('click', () => {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    })
})
