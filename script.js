// =========================================
// MOBILE MENU
// =========================================

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


// =========================================
// DISCLAIMER MODAL
// =========================================

const disclaimerOverlay =
    document.querySelector("#disclaimerOverlay");

const agreeButton =
    document.querySelector("#agreeButton");

const disagreeButton =
    document.querySelector("#disagreeButton");


if (disclaimerOverlay) {

    const hasAgreed =
        localStorage.getItem("mehulRathoreDisclaimer");


    // Show disclaimer only if user
    // has not agreed before

    if (!hasAgreed) {

        disclaimerOverlay.classList.add("show");

        document.body.style.overflow = "hidden";

    }

}


// =========================================
// I AGREE
// =========================================

if (agreeButton) {

    agreeButton.addEventListener("click", function () {

        localStorage.setItem(
            "mehulRathoreDisclaimer",
            "agreed"
        );

        disclaimerOverlay.classList.remove("show");

        document.body.style.overflow = "";

    });

}


// =========================================
// DISAGREE
// =========================================

if (disagreeButton) {

    disagreeButton.addEventListener("click", function () {

        const modal =
            document.querySelector(".disclaimer-modal");

        modal.innerHTML = `
            <div class="disclaimer-message">

                <h2>
                    Unable to <em>Proceed</em>
                </h2>

                <p>
                    You have chosen not to proceed to the
                    website.
                </p>

            </div>
        `;

    });

}