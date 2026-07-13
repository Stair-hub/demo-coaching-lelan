/* =====================================================================
   CONFIG PHOTOS — L'Élan (site de démonstration)
   ---------------------------------------------------------------------
   Toutes les photos du site sont centralisées ici.
   Pour remplacer une image : changez simplement l'URL correspondante.
   Dans le HTML, chaque <img> porte un attribut data-img="cle" ;
   le script main.js applique automatiquement l'URL ci-dessous.

   Sources actuelles : Unsplash (placeholders libres de droits).
   Paramètres ?w=...&q=80 = largeur / qualité (à ajuster si besoin).
   ===================================================================== */

const SITE_IMAGES = {
  /* --- Ambiance & lieu ------------------------------------------- */
  // Hero accueil : salon lumineux, plantes, grandes fenêtres
  hero: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1600&q=80",

  // Galerie "Le lieu" (6 photos)
  lieu1: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=80", // canapé cosy
  lieu2: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=900&q=80", // pièce lumineuse
  lieu3: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=900&q=80", // fauteuil, lumière douce
  lieu4: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&q=80", // plante verte
  lieu5: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=900&q=80",   // tasse de thé
  lieu6: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=900&q=80", // carnet ouvert

  /* --- Portraits --------------------------------------------------- */
  // Portrait professionnel de la coach (page Mon approche)
  portrait: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&q=80",

  /* --- Ressources / articles -------------------------------------- */
  article1: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=900&q=80", // bureau, café, carnet
  article2: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=900&q=80", // matin calme, étirement
  article3: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=900&q=80", // table, thé, sérénité

  /* --- Divers ------------------------------------------------------ */
  // Bandeau CTA (accueil) : détail déco apaisant
  ctaBand: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=1600&q=80",
  // "Carte" stylisée page contact (image statique, pas d'API)
  carte: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=900&q=80"
};
