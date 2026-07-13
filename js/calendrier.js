/* =====================================================================
   L'ÉLAN — Widget de prise de rendez-vous (DÉMONSTRATION)
   ---------------------------------------------------------------------
   Affiche le mois en cours avec des jours disponibles / indisponibles,
   propose des créneaux horaires, puis un mini-formulaire de confirmation.
   Aucune donnée n'est envoyée : la soumission affiche un message.

   ⚠ EN PRODUCTION : brancher Calendly, Cal.com ou un backend de
   réservation (API + base de données) à la place de cette simulation.
   ===================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const grille = document.querySelector("#calendrier-grille");
  if (!grille) return;

  const titreMois = document.querySelector("#calendrier-mois");
  const blocCreneaux = document.querySelector("#creneaux");
  const listeCreneaux = document.querySelector("#creneaux-liste");
  const dateChoisie = document.querySelector("#date-choisie");
  const formReservation = document.querySelector("#form-reservation");
  const recap = document.querySelector("#recap-rdv");
  const confirmation = document.querySelector("#confirmation-rdv");

  const aujourdHui = new Date();
  const annee = aujourdHui.getFullYear();
  const mois = aujourdHui.getMonth();

  const nomsJours = ["Lu", "Ma", "Me", "Je", "Ve", "Sa", "Di"];
  const horaires = ["9h00", "10h30", "14h00", "15h30", "17h00"];

  let jourSelectionne = null;
  let creneauSelectionne = null;

  /* Titre du mois (ex. "juillet 2026") */
  titreMois.textContent = aujourdHui.toLocaleDateString("fr-FR", {
    month: "long",
    year: "numeric",
  });

  /* Disponibilité simulée mais stable : lun–ven, jours futurs,
     avec quelques jours "complets" pour le réalisme. */
  function estDisponible(jour) {
    const date = new Date(annee, mois, jour);
    const jourSemaine = date.getDay(); // 0 = dimanche
    if (jourSemaine === 0 || jourSemaine === 6) return false; // week-end
    if (jour <= aujourdHui.getDate()) return false; // passé / aujourd'hui
    if (jour % 5 === 0 || jour % 7 === 0) return false; // "complets"
    return true;
  }

  /* En-têtes des jours */
  nomsJours.forEach((nom) => {
    const div = document.createElement("div");
    div.className = "jour-nom";
    div.textContent = nom;
    grille.appendChild(div);
  });

  /* Cases vides avant le 1er du mois (semaine commençant lundi) */
  const premierJour = new Date(annee, mois, 1).getDay(); // 0 = dim
  const decalage = premierJour === 0 ? 6 : premierJour - 1;
  for (let i = 0; i < decalage; i++) {
    const vide = document.createElement("div");
    vide.className = "jour vide";
    vide.setAttribute("aria-hidden", "true");
    grille.appendChild(vide);
  }

  /* Jours du mois */
  const nbJours = new Date(annee, mois + 1, 0).getDate();
  for (let j = 1; j <= nbJours; j++) {
    const bouton = document.createElement("button");
    bouton.type = "button";
    bouton.textContent = j;
    bouton.className = "jour";

    if (estDisponible(j)) {
      bouton.classList.add("dispo");
      bouton.setAttribute("aria-label", `Choisir le ${j} — disponible`);
      bouton.addEventListener("click", () => choisirJour(j, bouton));
    } else {
      bouton.disabled = true;
      bouton.setAttribute("aria-label", `${j} — indisponible`);
    }
    grille.appendChild(bouton);
  }

  function choisirJour(jour, bouton) {
    grille.querySelectorAll(".jour.selectionne")
      .forEach((b) => b.classList.remove("selectionne"));
    bouton.classList.add("selectionne");
    jourSelectionne = new Date(annee, mois, jour);

    dateChoisie.textContent = jourSelectionne.toLocaleDateString("fr-FR", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });

    /* Créneaux horaires */
    listeCreneaux.innerHTML = "";
    creneauSelectionne = null;
    formReservation.classList.remove("visible");
    confirmation.classList.remove("visible");

    horaires.forEach((h, i) => {
      /* Quelques créneaux déjà pris, pour le réalisme */
      if ((jour + i) % 4 === 0) return;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "creneau";
      btn.textContent = h;
      btn.addEventListener("click", () => {
        listeCreneaux.querySelectorAll(".creneau.selectionne")
          .forEach((b) => b.classList.remove("selectionne"));
        btn.classList.add("selectionne");
        creneauSelectionne = h;
        recap.textContent =
          `Séance découverte — ${dateChoisie.textContent} à ${h}`;
        formReservation.classList.add("visible");
      });
      listeCreneaux.appendChild(btn);
    });

    blocCreneaux.hidden = false;
    blocCreneaux.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  /* Confirmation (démo : aucun envoi réel) */
  formReservation.addEventListener("submit", (e) => {
    e.preventDefault();
    const nom = formReservation.querySelector("#rdv-nom").value.trim();
    confirmation.textContent =
      `Merci ${nom} ! Votre séance découverte du ${dateChoisie.textContent} ` +
      `à ${creneauSelectionne} est bien notée. Vous recevrez un e-mail de ` +
      `confirmation. (Démonstration : aucune donnée n'a été envoyée.)`;
    confirmation.classList.add("visible");
    formReservation.classList.remove("visible");
    formReservation.reset();
  });
});
