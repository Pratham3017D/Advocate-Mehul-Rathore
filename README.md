# Chamber of Advocate Mehul Rathore

A responsive, multi-page website for the Chamber of Advocate Mehul Rathore, built with HTML, CSS, and JavaScript. The design uses an editorial, minimal visual style with an ivory background, charcoal typography, muted gold accents, and responsive navigation.

**Live website:** https://pratham3017d.github.io/Advocate-Mehul-Rathore/

> **Project status:** In development. Professional details, practice-area descriptions, contact information, the final disclaimer wording, and contact-form configuration must be verified before the website is considered production-ready.

## Overview

The website currently includes four main pages:

- **Home (`index.html`)** — introduction to the chamber, practice-area overview, professional approach, and contact call to action.
- **Profile (`profile.html`)** — professional profile layout, background and education sections, courts/practice information, and professional values.
- **Practice Areas (`practice-areas.html`)** — overview of the practice areas presented by the website. Descriptions and the listed areas require confirmation by the advocate.
- **Contact (`contact.html`)** — chamber contact details and an inquiry form layout.

## Built With

- **HTML5** — page structure and content
- **CSS3** — styling, layout, responsive design, and interactions
- **JavaScript** — client-side behavior such as the mobile navigation and disclaimer interaction
- **GitHub Pages** — static website hosting
- **Web3Forms** — intended contact-form service; configuration and testing are still required

No frontend framework or build step is currently required.

## Project Structure

```text
Advocate-Mehul-Rathore/
├── index.html
├── profile.html
├── practice-areas.html
├── contact.html
├── css/
│   └── style.css
├── images/
│   └── mehul-rathore.jpg
├── script.js
└── README.md
```

The `images/mehul-rathore.jpg` file is the expected portrait path referenced by the home and profile pages. Add the approved image at this location, or update both HTML references if the filename or format differs.

## Run Locally

1. Clone or download the repository:

   ```bash
   git clone https://github.com/Pratham3017D/Advocate-Mehul-Rathore.git
   ```

2. Open the project folder in your code editor.

3. Open `index.html` in a browser, or use a local development extension such as **Live Server** in Visual Studio Code.

The project is static, so no package installation or compilation is currently needed.

## Configuration Before Launch

### 1. Verify professional information

Confirm all information with Advocate Mehul Rathore before publishing, including:

- Professional biography and qualifications
- Bar Council enrolment details and year
- Courts and jurisdictions
- Areas of practice and their descriptions
- Chamber address, phone number, email address, and consultation details

Do not publish placeholder text or unverified professional claims.

### 2. Add the approved portrait

Place the approved portrait at `images/mehul-rathore.jpg`. Check its appearance on desktop and mobile, and adjust the image crop in `css/style.css` if necessary.

### 3. Configure and test the inquiry form

The contact page is intended to use Web3Forms. Before enabling it for real inquiries:

1. Create or access the appropriate Web3Forms account.
2. Replace the placeholder access key in `contact.html` with the valid key.
3. Confirm the destination email and service configuration.
4. Test successful submissions, validation, and error handling.
5. Make the form's privacy and confidentiality notice clear.

**Until the form is configured and tested, do not represent it as a working way to contact the chamber.** Visitors should not submit sensitive or confidential legal information through an unverified form.

### 4. Review the disclaimer

Have the advocate review and approve the website disclaimer and other professional notices before launch. This README does not provide legal advice or confirm compliance with applicable professional rules.

### 5. Test all pages

Before deployment, check:

- Navigation and links on all four pages
- Mobile menu behavior
- Portrait loading and image paths
- Responsive layouts on desktop, tablet, and mobile
- Keyboard focus and basic accessibility
- Contact-form behavior and status messages
- Disclaimer behavior and wording
- Page titles, descriptions, and other metadata

## Design Direction

The visual system is based on:

- Ivory and warm neutral backgrounds
- Charcoal text
- Muted gold accents
- Serif headings and clean sans-serif body text
- Generous spacing, fine borders, and restrained hover effects
- Responsive layouts for smaller screens

The intention is to present a calm, clear, and professional chamber website without excessive animation or decorative UI.

## Deployment

The website is hosted as a static site using GitHub Pages.

For updates:

1. Make and test changes locally.
2. Commit and push the changes to the repository's configured publishing branch.
3. Wait for GitHub Pages to publish the update.
4. Check the live site on desktop and mobile. If an old version appears, try a hard refresh.

## Contributing and Maintenance

This is a website for a specific legal chamber. Changes to professional details, practice areas, contact information, and legal notices should be confirmed with the advocate before publication.

For maintenance, keep the shared navigation, footer, visual styles, and links consistent across all pages.

## Disclaimer

This repository documents a website project; it does not provide legal advice. Website content is informational and should not be treated as a substitute for advice from a qualified legal professional. Final website notices and professional details require review and approval by the advocate.
