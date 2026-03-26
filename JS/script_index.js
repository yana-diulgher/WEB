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
