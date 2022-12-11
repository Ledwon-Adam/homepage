let button = document.querySelector(".js-button");
let body = document.querySelector(".body__light");
let themeName = document.querySelector(".js-buttonFunction");

button.addEventListener("click", () => {
    body.classList.toggle("body__dark");
    if (body.classList.contains("body__dark")) {
        button__functionName.innerText = "jasny";
    } else {
        button__functionName.innerText = "ciemny";
    }
});