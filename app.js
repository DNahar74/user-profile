document.addEventListener("DOMContentLoaded", () => {
    let darkModeToggle = document.querySelector(".darkModeToggle");
    let darkModeToggleText = document.querySelector(".darkModeToggle b");
    let body = document.querySelector("body");
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("darkMode");
        if (body.classList.contains("darkMode")) {
            darkModeToggleText.innerText = "Light Mode";
        } else {
            darkModeToggleText.innerText = "Dark Mode";
        }
    })
})