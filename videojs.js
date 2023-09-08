var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");
var navbar = document.querySelector("header")

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "II";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

window.addEventListener("scroll", () => {
  if (window.scrollY > 695) {
    navbar.style.opacity = "0";
  } else {
    navbar.style.opacity = "1";
  }
});
