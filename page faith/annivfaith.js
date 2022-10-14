// let temps = 100;
// const timerElement = document.getElementById("timer");

// function diminuerTemps(){
//     let minutes = parseInt(temps / 60, 10);
//     let secondes = parseInt(temps % 60, 10);
//     minutes = minutes < 10 ? "0" + minutes : minutes;
//     secondes = secondes < 10 ? "0" + secondes : secondes;
//     timerElement.innerText = minutes + ":" + secondes;
//     temps = temps <= 0 ? 0 : temps - 1;
// }   setInterval(diminuerTemps, 1000);

// setInterval(console.log,1000);

// const departMinutes = 5;
// let temps = departMinutes * 60
// const timerElement = document.getElementById("timer");
// setInterval(() => {
//     let minutes = parseInt(temps / 60, 10);
//     let secondes = parseInt(temps % 60, 10);
//     minutes = minutes < 10 ? "0" + minutes : minutes;
//     secondes = secondes < 10 ? "0" + secondes : secondes;
//     timerElement.innerText = `${minutes}:${secondes}`;
//     temps = temps <= 0 ? 0 : temps - 1;
// }, 1000);
 
var deadline = new Date("Nov 20, 2022 00:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var t = deadline - now;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);
    document.getElementById("day").innerHTML = days ;
    document.getElementById("hour").innerHTML = hours ;
    document.getElementById("minute").innerHTML = minutes ;
    document.getElementById("second").innerHTML = seconds ;

    if (t<0){
        clearInterval(x);
        document.getElementById("demo").innerHTML = "";
        document.getElementById("day").innerHTML = 'HAPPY' ;
        document.getElementById("hour").innerHTML = 'BIRTHDAY' ;
        document.getElementById("minute").innerHTML = 'ADELINE' ;
        document.getElementById("second").innerHTML = 'FAITH' ;
    }
}, 1000);