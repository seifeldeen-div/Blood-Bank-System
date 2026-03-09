let magicContactbtn = document.querySelector(".magicContactbtn")
let contactSec = document.querySelector(".contact")
let counter = document.querySelector("#counter")
let textMessage = document.querySelector("#textMessage")
let countLimit = 10
let warningMessaage = document.querySelector("#warningMessaage")
let form = document.querySelector(".contact form")
let btnSubmitMessage = document.querySelector(".btnSubmitMessage input[type='submit']")
let SubmitMessage = document.querySelector('.SubmitMessage')

WordLength()

form.addEventListener("submit", (e) => {
    if (!CheckWordLength())
        e.preventDefault()
    else {
        e.preventDefault()
        SubmitMessage.classList.add("done")
        setTimeout(() => {
            SubmitMessage.classList.remove("done")
        }, 1000)
        form.reset()
        counter.textContent = ""
    }
})

magicContactbtn.addEventListener("click", (e) => {
    e.preventDefault()
    contactSec.classList.toggle("contactActive")
    if (contactSec.classList.contains("contactActive")) {
        setTimeout(() => {
            contactSec.classList.add("blurBack")
        }, 400)
    }else {
        contactSec.classList.remove("blurBack")
    }
})

function WordLength() {
    textMessage.addEventListener("input", (e) => {
        e.preventDefault()
        counter.innerHTML = "count: " + textMessage.value.length
        if (textMessage.value.length > countLimit) {
            textMessage.classList.add("maxCount")
            warningMessaage.textContent = `Max length = ${countLimit} letter`
            return
        }
        else {
            textMessage.classList.remove("maxCount")
            warningMessaage.textContent = ""
        }
    })
}
function WordLength() {
    let check = true;
    textMessage.addEventListener("input", () => {
        counter.innerHTML = "count: " + textMessage.value.length
        if (textMessage.value.length > countLimit) {
            textMessage.classList.add("maxCount")
            warningMessaage.textContent = `Max length = ${countLimit} letter`
            check = false;
        }
        else {
            textMessage.classList.remove("maxCount")
            warningMessaage.textContent = ""
        }
    })
    if (check)
        return true
    else
        return false
}
function CheckWordLength() {
    if (textMessage.value.length > countLimit) {
        textMessage.classList.add("maxCount")
        warningMessaage.textContent = `Max length = ${countLimit} letter`
        return false
    }
    else {
        textMessage.classList.remove("maxCount")
        warningMessaage.textContent = ""
        return true
    }
}