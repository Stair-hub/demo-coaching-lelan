# L'Élan — Coaching de vie · Site de démonstration

Site vitrine fictif (portfolio) : 4 pages + 2 pages légales, HTML/CSS/JS vanilla, prêt pour Netlify.

## Déploiement Netlify
Glisser-déposer le dossier entier sur https://app.netlify.com/drop — aucune build nécessaire.
Sous-domaine suggéré : `demo-coaching-lelan`.

## Placeholders à remplacer (chercher-remplacer global)
| Placeholder | Où | Remplacer par |
|---|---|---|
| `[MON_NOM]` | footer de toutes les pages + mentions légales | Votre nom / nom commercial |
| `[MON_URL]` | idem | URL de votre site (lien normal, pas de nofollow) |
| URLs photos | `js/images.js` (centralisées) + balises `og:image` dans chaque `<head>` | Vos propres photos |

## Structure
- `index.html` — Accueil (formule de base)
- `contact.html` — Contact + calendrier de rendez-vous (formule de base)
- `approche.html` — Mon approche (option +100 €/page)
- `ressources.html` — Ressources / mini-blog (option +100 €/page)
- `article-reconversion.html` — Article complet (~400 mots)
- `mentions-legales.html`, `politique-confidentialite.html`
- `css/style.css` — palette et variables commentées en tête de fichier
- `js/images.js` — config centralisée des photos
- `js/main.js` — menu, fade-in, lightbox, formulaires démo
- `js/calendrier.js` — widget de réservation (en production : brancher Calendly / Cal.com)
- `assets/logo.svg`, `assets/favicon.svg`

## Notes
- Aucun formulaire n'envoie de données (démonstration).
- Les deux autres cartes d'articles pointent vers l'article exemple ; dupliquer `article-reconversion.html` pour créer les articles manquants si besoin.
