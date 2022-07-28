const Header = document.querySelector(".js-header");

const js_header = () => {
    window.addEventListener("scroll", function () {
        if (this.scrollY > 0) {
            Header.classList.add("active__Nav");
        } else {
            Header.classList.remove("active__Nav");

        }
    })
}
js_header();


const loading = () => {
    var loadshow;

    function pageshow() {
        loadshow = setTimeout(loadf, 10)
    }

    function loadf() {
        document.querySelector(".l-main").style.display = "block";
        document.querySelector(".l-loading").style.display = "none";
    }
    window.addEventListener("load", pageshow)
}
loading();



const menu__toggle = () => {
    var humbger__btn = document.querySelector(".humbger");
    var humbger__menu = document.querySelector(".humbger__menu");

    humbger__btn.onclick = function() {
        humbger__btn.classList.toggle("active");
        humbger__menu.classList.toggle("active");
    }
    humbger__menu.onclick = function() {
        humbger__btn.classList.remove("active");
        humbger__menu.classList.remove("active");
    }
}
menu__toggle();