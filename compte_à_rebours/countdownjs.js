var deadline = new Date("Nov 20, 2022 00:00:00").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var t = deadline - now;
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((t % (1000 * 60)) / 1000);
  document.getElementById("day").innerHTML = days;
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = minutes;
  document.getElementById("second").innerHTML = seconds;

  if (t < 0) {
    clearInterval(x);
    document.querySelector("h1").innerHTML = "C'est ton jour";
    document.getElementById("demo").innerHTML = "De la part de tonton Dylan";
    document.getElementById("day").innerHTML = "BON";
    document.getElementById("hour").innerHTML = "ANNIVERSAIRE";
    document.getElementById("minute").innerHTML = "ADELINE";
    document.getElementById("second").innerHTML = "FAITH";
  }
}, 1000);

const bubbleMaker = () => {
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  document.querySelector("#clockdiv").appendChild(bubble);

  const size = Math.random() * 200 + 100 + "px";
  bubble.style.height = size;
  bubble.style.width = size;

  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  bubble.style.width = "15px";
  bubble.style.overflowX = "hidden";
  setTimeout(() => {
    bubble.remove();
  }, 8000);
};

setInterval(bubbleMaker, 100);
