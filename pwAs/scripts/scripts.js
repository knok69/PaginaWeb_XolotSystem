document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navList = document.querySelector("nav ul");
    
    menuIcon.addEventListener("click", function () {
        navList.classList.toggle("show");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggle-info");
    const infoContainer = document.getElementById("info-container");
    
    toggleButton.addEventListener("click", function () {
        infoContainer.classList.toggle("hidden");
    });
});
function toggleInfo(id) {
    const element = document.getElementById(id);
    element.classList.toggle("hidden");
}
