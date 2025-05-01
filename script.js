document.addEventListener("DOMContentLoaded", function() {
    console.log("Portfolio website loaded successfully.");
    
    // Add profile image dynamically
    const header = document.querySelector("header");
    const profileImage = document.createElement("img");
    profileImage.src = "assets/profile.JPG"; // Ensure the image is inside the assets folder in your project
    profileImage.alt = "Thrisha Patil";
    profileImage.classList.add("profile-pic");
    header.insertBefore(profileImage, header.firstChild);
});
