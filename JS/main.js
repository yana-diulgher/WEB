window.onload = function () {

    const params = new URLSearchParams(window.location.search);
    const title = params.get("title");

    if (title) {
        alert("Вы перешли на страницу " + title);
    }

};

const links = document.querySelectorAll(".nav-link");

links.forEach(link => {

    if (link.href === window.location.href) {
        link.classList.add("active");
    }
});

const items = document.querySelectorAll(".item");

items.forEach(item => {
    
    const arrow = item.querySelector(".arrow");

    arrow.addEventListener("click", (e) => {
        e.stopPropagation(); // чтобы не срабатывало лишнее
        item.classList.toggle("open");
    });
});

let seconds = 0;
let interval;
function startTimer() {
    interval = setInterval(function () {

        seconds++;

        let min = Math.floor(seconds / 60); //округление целого числа
        let sec = seconds % 60;

        document.getElementById("time").textContent =
            (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec;  //min + ":"  + sec;

    }, 1000);// выполняется каждые 1000млсек / 1сек

}

function resetTimer() {

    clearInterval(interval);

    seconds = 0;

    document.getElementById("time").textContent = "00:00";

}

function calcIMT() {

    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value / 100;

    let imt = weight / (height * height);

    if (weight == "" || height == 0) {

        document.getElementById("result").textContent = "Ваш ИМТ: не выявлен ";

    } else {

        document.getElementById("result").textContent = "Ваш ИМТ: " + imt.toFixed(1);
    }

}
