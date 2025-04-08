let bgColor = document.querySelector("body");
let btnBgColor = document.querySelector(".button-cart");
let nikeImg = document.querySelector(".nike");
let tenis = document.querySelector(".nike");

function changeBgColor(cor, img){
    tenis.classList.add("troca-efeito")

    bgColor.style.background = cor;
    btnBgColor.style.background = cor;
    nikeImg.src = img;

    setTimeout(() => {
        tenis.classList.remove("troca-efeito")
        tenis.src = img
    }, 500);
}
