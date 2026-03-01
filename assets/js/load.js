// بيحدد الـ path تلقائي بناءً على مكان الصفحة
const isRoot = window.location.pathname.endsWith("index.html")
    || window.location.pathname === "/";
const basePath = isRoot ? "." : "..";

fetch(`${basePath}/components/navbar.html`)
    .then(response => {
        if (!response.ok) throw new Error("Navbar not found");
        return response.text();
    })
    .then(data => {
        document.getElementById("navbar").innerHTML = data;

        let burgerSign = document.querySelector("#burgerSign");
        let links = document.querySelector("#links");

        burgerSign.addEventListener("click", () => {
            // let currentDisplay = window.getComputedStyle(links).display;
            if (links.style.display === "none")
                links.style.display = "flex";
            else
                links.style.display = "none";
        });
    })
    .catch(err => console.error("Error loading navbar:", err));

fetch(`${basePath}/components/footer.html`)
    .then(response => {
        if (!response.ok) throw new Error("Footer not found");
        return response.text();
    })
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    })
    .catch(err => console.error("Error loading footer:", err));