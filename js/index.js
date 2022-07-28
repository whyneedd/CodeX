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

var username = "Name";
var nbrmember = "120k";

function Test() {
    document.querySelectorAll(".desc-serv").innerHTML = `${username}, ${nbrmember}`;
}
Test();


