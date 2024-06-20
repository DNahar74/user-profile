document.addEventListener("DOMContentLoaded", () => {
    let darkModeToggle = document.querySelector(".darkModeToggle");
    let darkModeToggleText = document.querySelector(".darkModeToggle b");
    let body = document.querySelector("body");

    // to display dark mode
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("darkMode");
        if (body.classList.contains("darkMode")) {
            darkModeToggleText.innerText = "Light Mode";
        } else {
            darkModeToggleText.innerText = "Dark Mode";
        }
    })

    // to use localstorage
    let userDetails = JSON.parse(localStorage.getItem("profile"));
    let profileImage = document.querySelector(".profileImage");
    let profileName = document.querySelector(".profileName");
    let bio = document.querySelector(".bio");
    let address = document.querySelector(".address");
    let phone = document.querySelector(".phone");
    let email = document.querySelector(".email");

    if (userDetails) {
        profileImage.src = userDetails.picture;
        profileName.innerText = userDetails.name;
        bio.innerText = userDetails.bio;
        address.innerText = userDetails.address;
        phone.innerText = userDetails.contact;
        email.innerText = userDetails.email;
        // changing the target hrefs
        phone.href = `tel:${userDetails.contact}`;
        email.href = `mailto:${userDetails.email}`;
    }
})