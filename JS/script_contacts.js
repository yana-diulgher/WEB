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
