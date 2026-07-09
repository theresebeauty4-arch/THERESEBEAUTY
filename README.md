# Beauty — Site statique (HTML / CSS / JavaScript)

Version simplifiée du site du salon **Beauty**, en HTML/CSS/JS pur, sans framework.
Il suffit d'ouvrir `index.html` dans un navigateur — ou de déposer le dossier sur
n'importe quel hébergeur statique (OVH, Netlify, Vercel, GitHub Pages, Hostinger…).

## 📁 Contenu

```
beauty-site/
├── index.html          # Accueil
├── femmes.html         # Prestations femmes
├── hommes.html         # Prestations hommes
├── galerie.html        # Galerie photos (avec lightbox)
├── contact.html        # Formulaire de contact
├── css/style.css       # Styles (rose poudré chic)
├── js/main.js          # Menu mobile, lightbox, formulaire, animations
└── images/             # Toutes les photos (hero, services, galerie)
```

## ✉️ Recevoir les messages du formulaire par email

Le formulaire de contact utilise **[FormSubmit](https://formsubmit.co)** — gratuit,
sans inscription. Il suffit de :

1. Ouvrir `js/main.js`
2. Chercher la ligne :
   ```js
   const RECEIVE_EMAIL = "contact@beauty-salon.fr";
   ```
3. Remplacer par **votre vraie adresse email**.
4. La **première fois** qu'un message est envoyé depuis le site en ligne,
   vous recevrez un email de confirmation FormSubmit — cliquez sur le lien
   pour activer la réception. Après ça, tous les messages arrivent directement
   dans votre boîte.

> Note : FormSubmit ne fonctionne que sur un site en ligne (pas en local
> `file://`). En cas d'échec, le script bascule automatiquement sur `mailto:`
> qui ouvre le client email du visiteur.

## 🎨 Personnalisation rapide

- **Couleurs** : les variables sont en haut de `css/style.css` (`:root`).
- **Textes** : directement dans les fichiers `.html`.
- **Photos** : remplacez les fichiers dans `images/` (mêmes noms).
- **Coordonnées** (adresse, téléphone, email) : présentes dans le pied de page
  de chaque `.html` et dans `contact.html`.

## 🚀 Mise en ligne

- **Netlify / Vercel** : glisser-déposer le dossier.
- **OVH / Hostinger** : uploader tout le dossier via FTP dans `www/` ou `public_html/`.
- **GitHub Pages** : pousser le dossier sur un repo, activer Pages.

Bon lancement 💕



homme{
  <!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Hommes — Beauty · Salon mixte</title>
  <meta name="description" content="Coupe, taille de barbe, rasage traditionnel et soins. Prestations barbier chez Beauty." />
  <link rel="stylesheet" href="C:\Users\MIMA ESEMA\Documents\salon\style.css" />
</head>
<body>
  <header class="site-header">
    <div class="container nav">
      <a href="index.html" class="logo">THERESE<small>Beauty</small></a>
      <ul class="nav-links">
        <li><a href="index.html">Accueil</a></li>
        <li><a href="femmes.html">Femmes</a></li>
        <li><a href="hommes.html">Hommes</a></li>
        <li><a href="galerie.html">Galerie</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
      <a href="contact.html" class="btn btn-primary">Réserver</a>
      <button class="nav-toggle" aria-label="Menu">☰</button>
    </div>
  </header>

  <main>
    <section class="container page-hero">
      <div class="img"><img src="C:\Users\MIMA ESEMA\Documents\salon\homme.jpg" alt="Prestation homme au salon Beauty" /></div>
      <div>
        <p class="eyebrow">Univers Hommes</p>
        <h1>L'art du <span class="italic">détail.</span></h1>
        <p>Coupe millimétrée, sculpture de la barbe, rasage à l'ancienne : nos barbiers perpétuent des gestes précis dans une ambiance intimiste, pour un résultat impeccable.</p>
      </div>
    </section>

    <section class="surface-cream">
      <div class="container">
        <div class="section-title">
          <p class="divider">Prestations</p>
          <h2>Le vestiaire du gentleman</h2>
        </div>
        <div class="services-grid">
          <article class="service-card">
            <img src="C:\Users\MIMA ESEMA\Documents\salon\service-coupe-homme.jpg" alt="Coupe classique" />
            <div class="body">
              <h3>Coupe classique <span class="price">35 €</span></h3>
              <p>Coupe précise adaptée à votre style et à votre visage.</p>
            </div>
          </article>
          <article class="service-card">
            <img src="C:\Users\MIMA ESEMA\Documents\salon\service-barbe.jpg" alt="Coupe et barbe" />
            <div class="body">
              <h3>Coupe & barbe <span class="price">50 €</span></h3>
              <p>Formule complète : coupe, taille de barbe et finitions.</p>
            </div>
          </article>
          <article class="service-card">
            <img src="C:\Users\MIMA ESEMA\Documents\salon\service-barbe.jpg" alt="Taille de barbe" />
            <div class="body">
              <h3>Taille de barbe <span class="price">22 €</span></h3>
              <p>Sculptage à la tondeuse et au ciseau, huile hydratante.</p>
            </div>
          </article>
          <article class="service-card">
            <img src="C:\Users\MIMA ESEMA\Documents\salon\service-rasage.jpg" alt="Rasage traditionnel" />
            <div class="body">
              <h3>Rasage traditionnel <span class="price">30 €</span></h3>
              <p>Serviette chaude, mousse artisanale, coupe-choux, apaisement.</p>
            </div>
          </article>
          <article class="service-card">
            <img src="C:\Users\MIMA ESEMA\Documents\salon\service-couleur.jpg" alt="Coloration barbe" />
            <div class="body">
              <h3>Coloration barbe <span class="price">dès 25 €</span></h3>
              <p>Nuance naturelle pour couvrir ou intensifier.</p>
            </div>
          </article>
          <article class="service-card">
            <img src="C:\Users\MIMA ESEMA\Documents\salon\service-visage.jpg" alt="Rituel visage" />
            <div class="body">
              <h3>Rituel visage <span class="price">40 €</span></h3>
              <p>Gommage, massage et soin hydratant pour une peau nette.</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section style="text-align:center;">
      <div class="container" style="max-width:600px;">
        <h2 style="font-size:clamp(28px,4vw,44px);">Un moment pour soi.</h2>
        <a href="contact.html" class="btn btn-primary" style="margin-top:28px;">Réserver</a>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container footer-grid">
      <div class="footer-brand">
        <div class="logo">THERESE — Beauty.</div>
        <p style="margin-top:14px; max-width:400px;">Salon de beauté mixte. Un lieu confidentiel pensé pour révéler la beauté singulière de chacune et chacun.</p>
        <div class="socials">
                <a href="https://www.facebook.com/shaks15"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/shako_serge?igsh=YzljYTk1ODg3Zg=="><i class="fa-brands fa-instagram"></i></a>
                <a href="#"><i class="fa-brands fa-youtube"></i></a>
                <a href="https://www.tiktok.com/@shako2k?_r=1&_t=ZS-94m3ExvJlk4"><i class="fa-brands fa-tiktok"></i></a>     
        </div>
      </div>
      <div><h4>Contact</h4><ul><li>34 rue KIsasu, Lemba-terminus</li><li>+243 82 60 81 753</li><li>theresebeauty4@gmail.com</li></ul></div>
      <div><h4>Horaires</h4><ul><li>lundi — Ven : 9h – 19h</li><li>Samedi : 9h – 18h</li><li>Dim — Lun : Fermé</li></ul></div>
    </div>
    <div class="footer-bottom">© <span id="year"></span> Beauty — Salon mixte.</div>
  </footer>
  <script>document.getElementById("year").textContent = new Date().getFullYear();</script>
  <script src="js/main.js"></script>
</body>
</html>

}



 <a href="hommes.html" class="duo-card">
          <img src="C:\Users\MIMA ESEMA\Documents\salon\homme.jpg" alt="Prestations hommes" />
          <div class="overlay">
            <small>Coupe · Barbe · Rasage</small>
            <h3>Hommes</h3>
            <span>Découvrir →</span>
          </div>
        </a>
