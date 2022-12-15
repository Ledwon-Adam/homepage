{
    const welcome = () => {
        console.log("Witam wszystkich na stronie poświęconej moim zainteresowaniom");
    }
    
    const backgroundToogle = () => {
        const body = document.querySelector(".body__light");
        const button__functionName = document.querySelector(".js-buttonFunction");
        body.classList.toggle("body__dark");
        if (body.classList.contains("body__dark")) {
            button__functionName.innerText = "jasny";
        } else {
            button__functionName.innerText = "ciemny";
        }
    }

    const init = () => {
        const button = document.querySelector(".js-button");
        button.addEventListener("click", backgroundToogle);
        welcome();
    }

    init();
}