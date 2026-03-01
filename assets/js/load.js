// Navbar
fetch("../components/navbar.html")
    .then(response => {
        if (!response.ok) throw new Error("Navbar not found");
        return response.text();
    })
    .then(data => {
        document.getElementById("navbar").innerHTML = data;
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