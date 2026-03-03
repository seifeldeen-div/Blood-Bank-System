// نغلف الكود بداخل DOMContentLoaded لضمان وجود العناصر
document.addEventListener("DOMContentLoaded", function () {
    const doneMessage = document.querySelector("#doneMessage");
    const form = document.querySelector("#formData");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            doneMessage.classList.add("done");
            setTimeout(() => {
                doneMessage.classList.remove("done")
            }, 2000)
            form.reset();
        });
    }
});

// #########################
// --------pattern---------
// #########################
let nationalId = document.querySelector("")