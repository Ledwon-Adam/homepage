{
    const welcome = () => {
        console.log("Witam wszystkich na stronie poświęconej moim zainteresowaniom");
    }
    
    const backgroundToogle = () => {
        let body = document.querySelector(".body__light");
        body.classList.toggle("body__dark");
        if (body.classList.contains("body__dark")) {
        js-buttonFunction.innerText = "jasny";
        } else {
        js-buttonFunction.innerText = "ciemny";
        }
    };

    const init = () => {
        let button = document.querySelector(".js-button");
        button.addEventListener("click", backgroundToogle);
        welcome();
    }

    init();
}