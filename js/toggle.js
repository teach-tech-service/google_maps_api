const btn = document.getElementById("display-btn");
const list = document.getElementById("items");
let i = 0;

btn.addEventListener("click", () => {
    i % 2 == 0
        ? (list.style.transform = "translateX(-400px)")
        : (list.style.transform = "translateX(0px)");
    i++;
});
