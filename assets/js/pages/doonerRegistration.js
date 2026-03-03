
document.addEventListener("DOMContentLoaded", function () {
    const doneMessage = document.querySelector("#doneMessage");
    const errorMessage = document.querySelector("#errorMessage");
    const form = document.querySelector("#formData");

    function sendData() {
        doneMessage.classList.add("done");
        setTimeout(() => {
            doneMessage.classList.remove("done")
        }, 3000)
        form.reset();
    }

    function errroData() {
        errorMessage.classList.add("error");
        setTimeout(() => {
            errorMessage.classList.remove("error")
        }, 2000)
    }

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            let nationalId = document.querySelector("#nationalId").value
            let genderInput = document.querySelector("#gender").value
            let genderOptions = document.querySelectorAll("#genderList option")
            let bloodInput = document.querySelector("#bloodType").value
            let bloodOptions = document.querySelectorAll("#bloodList option")
            let phoneNumber = document.querySelector("#phoneNumber").value

            if (!/^\d{14}$/.test(nationalId)) {
                errorMessage.textContent = "Not Valid ID"
                errroData()
                return
            }

            let genderValid = false
            for (var c = 0; c < genderOptions.length; c++) {
                if (genderInput === genderOptions[c].value) {
                    genderValid = true
                    break
                }
            }
            if (!genderValid) {
                errorMessage.textContent = "Not Valid Gender"
                errroData()
                return
            }

            let bloodValid = false
            for (var c = 0; c < bloodOptions.length; c++) {
                if (bloodInput === bloodOptions[c].value) {
                    bloodValid = true
                    break
                }
            }
            if (!bloodValid) {
                errorMessage.textContent = "Incorrect Blood Type"
                errroData()
                return
            }

            if (!/^01[0-9]{9}$/.test(phoneNumber)) {
                errorMessage.textContent = "Not Valid Number"
                errroData()
                return
            }

            sendData()
        });
    }
});

