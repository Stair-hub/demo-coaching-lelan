/* =====================================================================
   L'ÉLAN — Scripts communs
   - Application des photos depuis js/images.js (attribut data-img)
   - Menu mobile
   - Animations fade-in au scroll (IntersectionObserver)
   - Lightbox de la galerie
   - Formulaires de démonstration (contact, newsletter) : pas de backend,
     affichage d'un simple message de confirmation.
   ===================================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ---- 1. Photos centralisées (voir js/images.js) ---- */
  if (typeof SITE_IMAGES !== "undefined") {
    document.querySelectorAll("[data-img]").forEach((img) => {
      const cle = img.dataset.img;
      if (SITE_IMAGES[cle]) img.src = SITE_IMAGES[cle];
    });
  }

  /* ---- 2. Menu mobile ---- */
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav");
  if (burger && nav) {
    burger.addEventListener("click", () => {
      const ouverte = nav.classList.toggle("ouverte");
      burger.setAttribute("aria-expanded", ouverte ? "true" : "false");
    });
  }

  /* ---- 3. Fade-in discret au scroll ---- */
  const revealables = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entrees) => {
        entrees.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealables.forEach((el) => observer.observe(el));
  } else {
    revealables.forEach((el) => el.classList.add("visible"));
  }

  /* ---- 4. Lightbox de la galerie ---- */
  const lightbox = document.querySelector(".lightbox");
  if (lightbox) {
    const lightboxImg = lightbox.querySelector("img");
    const fermer = lightbox.querySelector(".lightbox-fermer");

    document.querySelectorAll(".galerie button").forEach((btn) => {
      btn.addEventListener("click", () => {
        const img = btn.querySelector("img");
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add("ouverte");
        fermer.focus();
      });
    });

    const fermerLightbox = () => lightbox.classList.remove("ouverte");
    fermer.addEventListener("click", fermerLightbox);
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) fermerLightbox();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") fermerLightbox();
    });
  }

  /* ---- 5. Formulaire de contact (démo, pas de backend) ---- */
  const formContact = document.querySelector("#form-contact");
  if (formContact) {
    formContact.addEventListener("submit", (e) => {
      e.preventDefault();
      // En production : envoyer vers un service (Netlify Forms, Formspree…)
      formContact.querySelector(".message-confirmation").classList.add("visible");
      formContact.reset();
    });
  }

  /* ---- 6. Newsletter (champ décoratif, pas de backend) ---- */
  const formNews = document.querySelector("#form-newsletter");
  if (formNews) {
    formNews.addEventListener("submit", (e) => {
      e.preventDefault();
      const msg = formNews.parentElement.querySelector(".message-confirmation");
      if (msg) msg.classList.add("visible");
      formNews.reset();
    });
  }
});
