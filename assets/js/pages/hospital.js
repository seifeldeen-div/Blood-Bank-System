const cards = document.querySelectorAll('.Places .card');
const items = document.querySelectorAll('.about .item');
let contactBtn = document.querySelectorAll('.item #contact');
let contactSec = document.querySelector(" .contact");
let counter = document.querySelector("#counter");
let textMessage = document.querySelector("#textMessage")
let countLimit = 10
let warningMessaage = document.querySelector("#warningMessaage")
let form = document.querySelector(".contact form")
let btnSubmitMessage = document.querySelector(".btnSubmitMessage input[type='submit']")
let SubmitMessage = document.querySelector('.SubmitMessage')


// click on card to present about 
items.forEach(item => item.style.display = 'none');

document.getElementById('Cairo').style.display = 'flex';

cards.forEach(card => {
    card.addEventListener('click', () => {
        items.forEach(item => item.style.display = 'none');

        const cityClass = [...card.classList].find(c => c !== 'card');
        
         
        const targetId = cityClass === 'portSaid' ? 'PortSaid' : 
                         cityClass === 'cairo' ? 'Cairo' : cityClass;
        
        const targetItem = document.getElementById(targetId);

        if (targetItem) {
            targetItem.style.display = 'flex';
        }
    });
});
// click button to present contact sec

contactBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        contactSec.classList.toggle("contactActive")
        if (contactSec.classList.contains("contactActive")) {
            setTimeout(() => {
                contactSec.classList.add("blurBack")
            }, 400)
        } else {
            contactSec.classList.remove("blurBack")
        }
    })
})
WordLength()

form.addEventListener("submit", (e) => {
    if (!CheckWordLength())
        e.preventDefault()
    else {
        e.preventDefault()
        contactSec.classList.remove("contactActive")   
        contactSec.classList.remove("blurBack")        
        form.reset()
        counter.textContent = ""
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

// about
// Mobile slide-in for .about panel
const aboutPanel = document.querySelector('.about');
const closeBtn = document.getElementById('closeAbout');
 

 
cards.forEach(card => {
    card.addEventListener('click', () => {
        if (window.innerWidth <= 732) {
            aboutPanel.classList.add('showAbout');
        }
    });
});


closeBtn.addEventListener('click', () => {
    aboutPanel.classList.remove('showAbout');
});


document.addEventListener('click', (e) => {
    if (
        window.innerWidth <= 732 &&
        !aboutPanel.contains(e.target) &&
        !e.target.closest('.Places .card')
    ) {
        aboutPanel.classList.remove('showAbout');
    }
});