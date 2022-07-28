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
        loadshow = setTimeout(loadf, 12000)
    }

    function loadf() {
        document.querySelector(".l-main").style.display = "block";
        document.querySelector(".l-loading").style.display = "none";
    }
}



