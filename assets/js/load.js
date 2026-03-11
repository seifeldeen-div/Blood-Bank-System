let burgerSign = document.querySelector("#burgerSign");
// let links = document.querySelector("#links");
let lis = document.querySelectorAll("#links ul li")
let container = document.querySelector(".container")
let links = document.querySelectorAll(".link")

links.forEach((link) => {
    link.addEventListener("click", (e) => {
        // e.preventDefault()
        links.forEach(l => l.classList.remove("activeLink"))
        link.classList.add("activeLink")
    })
})

burgerSign.addEventListener("click", () => {
    // let currentDisplay = window.getComputedStyle(links).display;
    burgerSign.classList.toggle("scale")
    container.classList.toggle("active")
    lis.forEach(li => {
        li.style.pointerEvents = "all";
    })
});
