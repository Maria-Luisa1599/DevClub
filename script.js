let bgColor = document.querySelector("body");
let btnBgColor = document.querySelector(".button-cart");
let tenis = document.querySelector(".nike");

function changeStyles(cor, img){
    tenis.classList.add("troca-efeito")

    bgColor.style.background = cor;
    btnBgColor.style.background = cor;

    setTimeout(() => {
        tenis.src = img
        tenis.classList.remove("troca-efeito")
    }, 500);
}
