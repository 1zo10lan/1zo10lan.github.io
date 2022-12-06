const logoaft = document.getElementById("logo");

window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    if (window.scrollY > 400) {
        logoaft.style.width = "100px";
        logoaft.style.height = "100px";
        logoaft.style.paddingTop = "9px";
    } else {
        logoaft.style.width = "200px";
        logoaft.style.height = "200px";
        logoaft.style.paddingTop = "70px";
    }
})