{
    const welcome = () => {
        console.log("Witam wszystkich na stronie poświęconej moim zainteresowaniom");
    }
    
    const backgroundToogle = () => {
        let body = document.querySelector(".body__light");
        let button__functionName = document.querySelector(".js-buttonFunction");
        body.classList.toggle("body__dark");
        if (body.classList.contains("body__dark")) {
            button__functionName.innerText = "jasny";
        } else {
            button__functionName.innerText = "ciemny";
        }
    }

    const init = () => {
        let button = document.querySelector(".js-button");
        button.addEventListener("click", backgroundToogle);
        welcome();
    }

    init();
}