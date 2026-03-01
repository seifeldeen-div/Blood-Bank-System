// Navbar
fetch("../components/navbar.html")
    .then(response => {
        if (!response.ok) throw new Error("Navbar not found");
        return response.text();
    })
    .then(data => {
        document.getElementById("navbar").innerHTML = data;

        // burger navbabar
        let burgerSign = document.querySelector("#burgerSign")
        let links = document.querySelector("#links")

        burgerSign.addEventListener("click", () => {

            let currentDisplay = window.getComputedStyle(links).display
            console.log("currentDisplay:", currentDisplay)

            if (links.style.display === "none")
                links.style.display = "flex"
            else
                links.style.display = "none"
        })
    })
    .catch(err => console.error("Error loading navbar:", err));

// Footer
fetch("../components/footer.html")
    .then(response => {
        if (!response.ok) throw new Error("Footer not found");
        return response.text();
    })
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    })
    .catch(err => console.error("Error loading footer:", err));