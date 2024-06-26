document.addEventListener("DOMContentLoaded", () => {
    let body = document.querySelector("body");

    const profileForm = document.getElementById("profileForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const bioInput = document.getElementById("bio");
    const contactInput = document.getElementById("contact");
    const addressInput = document.getElementById("address");
    const profilePicInput = document.getElementById("profilePicInput");

    const profileName = document.getElementById("profileName");
    const profileEmail = document.getElementById("profileEmail");
    const profileBio = document.getElementById("profileBio");
    const profileContact = document.getElementById("profileContact");
    const profileAddress = document.getElementById("profileAddress");
    const profilePicture = document.getElementById("profilePicture");

    const darkModeToggle = document.getElementById("darkModeToggle");

    // Load profile data from local storage if available
    const loadProfile = () => {
        const profile = JSON.parse(localStorage.getItem("profile"));
        if (profile) {
            profileName.textContent = profile.name;
            profileEmail.textContent = profile.email;
            profileBio.textContent = profile.bio;
            profileContact.textContent = profile.contact;
            profileAddress.textContent = profile.address;
            if (profile.picture) {
                profilePicture.src = profile.picture;
            }
        }
    };

    // Save profile data to local storage
    function saveProfile() {
        const profile = {
            name: profileName.textContent,
            email: profileEmail.textContent,
            bio: profileBio.textContent,
            contact: profileContact.textContent,
            address: profileAddress.textContent,
            picture: profilePicture.src,
        };
        localStorage.setItem("profile", JSON.stringify(profile));
    };

    // Handle form submission
    profileForm.addEventListener("submit", (event) => {
        event.preventDefault();

        profileName.textContent = nameInput.value;
        profileEmail.textContent = emailInput.value;
        profileBio.textContent = bioInput.value;
        profileContact.textContent = contactInput.value;
        profileAddress.textContent = addressInput.value;

        const file = profilePicInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                profilePicture.src = e.target.result;
                saveProfile();
            };
            reader.readAsDataURL(file);
        } else {
            saveProfile();
        }

        profileForm.reset();
    });

    // Handle dark mode toggle
    darkModeToggle.addEventListener("click", () => {
        body.classList.toggle("darkMode");
    });

    // Initial load
    loadProfile();
});

