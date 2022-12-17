{
    const welcome = () => {
        console.log("Witam wszystkich na stronie poświęconej moim zainteresowaniom");
    }
    
    const backgroundToogle = () => {
        const body = document.querySelector(".body--light");
        const button__functionName = document.querySelector(".js-buttonFunction");
        body.classList.toggle("body--dark");
        if (body.classList.contains("body--dark")) {
            button__functionName.innerText = "jasny";
        } else {
            button__functionName.innerText = "ciemny";
        }
    }

    const init = () => {
        const button = document.querySelector(".js-buttonText");
        button.addEventListener("click", backgroundToogle);
        welcome();
    }

    init();
}