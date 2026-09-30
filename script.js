function toggleMenu() {
    const menu = document.getElementById("nav-menu");
    menu.classList.toggle("show");
}

const navLinks = document.querySelectorAll("#nav-menu a");

navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        document.getElementById("nav-menu").classList.remove("show");
    });
});