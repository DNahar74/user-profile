document.addEventListener("DOMContentLoaded", () => {
    const profileForm = document.getElementById("profile-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const bioInput = document.getElementById("bio");
    const contactInput = document.getElementById("contact");
    const addressInput = document.getElementById("address");
    const profilePicInput = document.getElementById("profile-pic-input");

    const profileName = document.getElementById("profile-name");
    const profileEmail = document.getElementById("profile-email");
    const profileBio = document.getElementById("profile-bio");
    const profileContact = document.getElementById("profile-contact");
    const profileAddress = document.getElementById("profile-address");
    const profilePicture = document.getElementById("profile-picture");

    const darkModeToggle = document.getElementById("dark-mode-toggle");

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
    const saveProfile = () => {
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
    profileForm.addEventListener("submit", (e) => {
        e.preventDefault();

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
    });

    // Handle dark mode toggle
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // Initial load
    loadProfile();
});

