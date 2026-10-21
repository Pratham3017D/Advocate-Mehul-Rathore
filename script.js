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


// =========================================
// CONTACT FORM
// =========================================

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    const formStatus = contactForm.querySelector(".form-status");
    const submitButton = contactForm.querySelector('[type="submit"]');

    contactForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        formStatus.textContent = "";
        formStatus.classList.remove("success", "error");

        const accessKey = contactForm.querySelector('[name="access_key"]').value.trim();

        if (!accessKey || accessKey === "YOUR_WEB3FORMS_ACCESS_KEY") {
            formStatus.textContent = "The form is not configured yet. Add your Web3Forms access key to contact.html.";
            formStatus.classList.add("error");
            return;
        }

        submitButton.disabled = true;
        submitButton.textContent = "Sending...";

        try {
            const response = await fetch(contactForm.action, {
                method: "POST",
                body: new FormData(contactForm),
                headers: {
                    Accept: "application/json"
                }
            });
            const result = await response.json();

            if (!response.ok || !result.success) {
                throw new Error(result.message || "The inquiry could not be sent.");
            }

            contactForm.reset();
            formStatus.textContent = "Thank you. Your inquiry has been sent successfully.";
            formStatus.classList.add("success");
        } catch (error) {
            formStatus.textContent = "We could not send your inquiry. Please try again shortly.";
            formStatus.classList.add("error");
        } finally {
            submitButton.disabled = false;
            submitButton.innerHTML = 'Send Inquiry <span>→</span>';
        }

    });

}