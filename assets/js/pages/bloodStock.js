let cards = document.querySelectorAll(".cardType")
let bloodIcon = document.querySelectorAll(".bloodIcon")
let rateIcon = document.querySelectorAll(".rateIcon")
let bagsNumber = document.querySelectorAll(".bagsNumber")
let inputRange = document.querySelectorAll(".bloodRange")
let statueText = document.querySelectorAll(".statueText")
let pushBtn = document.querySelectorAll(".push")
let pullBtn = document.querySelectorAll(".pull")
let totalBloodbags = document.querySelector(".totalBloodbags")
let lowStock = document.querySelector(".lowStock")

cards.forEach((card, index) => {
    bagsNumber[index].innerHTML = inputRange[index].value
    rangeStatue(index)
    updateBagsnumber()
    updateLowstock()
})

cards.forEach((card, index) => {

    pushBtn[index].addEventListener("click", function (e) {
        e.preventDefault()

        inputRange[index].value++
        bagsNumber[index].innerHTML = inputRange[index].value
        rangeStatue(index)
        updateBagsnumber()
        updateLowstock()
    })
    pullBtn[index].addEventListener("click", function (e) {
        e.preventDefault()

        inputRange[index].value--
        bagsNumber[index].innerHTML = inputRange[index].value
        rangeStatue(index)
        updateBagsnumber()
        updateLowstock()
    })

    inputRange[index].addEventListener("input", () => {
        bagsNumber[index].innerHTML = inputRange[index].value
        rangeStatue(index)
        updateBagsnumber()
        updateLowstock()
    })
})

function rangeStatue(index) {
    cards[index].classList.remove("cardColorstatueDanger", "cardColorstatueSuit", "cardColorstatueSafe")
    if (inputRange[index].value < 31) {
        statueText[index].innerHTML = "LOW"
        cards[index].classList.add("cardColorstatueDanger")

    } else if (inputRange[index].value >= 31 && inputRange[index].value < 61) {
        statueText[index].innerHTML = "SUIT"
        cards[index].classList.add("cardColorstatueSuit")

    } else {
        statueText[index].innerHTML = "SAFE"
        cards[index].classList.add("cardColorstatueSafe")
    }
}
function updateBagsnumber() {
    totalBags = 0
    bagsNumber.forEach((bag, index) => {
        totalBags += parseInt(bag.innerHTML)
    })
    totalBloodbags.innerHTML = totalBags
}
function updateLowstock() {
    var lowStockNumber = 0;
    cards.forEach((card, index) => {
        if (inputRange[index].value < 31)
            lowStockNumber++
    })
    lowStock.innerHTML = lowStockNumber
}