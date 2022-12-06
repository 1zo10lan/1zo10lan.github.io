const nav = document.querySelector("nav");
const logoaft = document.getElementById("logo");

window.addEventListener("scroll", () => {
    if (window.scrollY > 120) {
        nav.style.backgroundColor = "rgba(0, 128, 0, 0.7)";
    } else {
        nav.style.backgroundColor = "green";
    }
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 980) {
        logoaft.style.width = "100px";
        logoaft.style.height = "100px";
        logoaft.style.paddingTop = "9px";
    } else {
        logoaft.style.width = "200px";
        logoaft.style.height = "200px";
        logoaft.style.paddingTop = "70px";
    }
})