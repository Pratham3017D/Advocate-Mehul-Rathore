const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

if (menuToggle && mobileMenu) {

    menuToggle.addEventListener("click", function () {

        menuToggle.classList.toggle("open");
        mobileMenu.classList.toggle("open");

    });


    const mobileLinks = mobileMenu.querySelectorAll("a");

    mobileLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            menuToggle.classList.remove("open");
            mobileMenu.classList.remove("open");

        });

    });

}