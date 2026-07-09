// Beauty — Salon mixte : interactions communes

// ---------- Menu mobile ----------
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      links.classList.toggle("open");
      toggle.textContent = links.classList.contains("open") ? "✕" : "☰";
    });
  }

  // Marque le lien actif
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((a) => {
    const href = a.getAttribute("href");
    if (href === path || (path === "" && href === "index.html")) {
      a.classList.add("active");
    }
  });

  // ---------- Lightbox galerie ----------
  const lightbox = document.getElementById("lightbox");
  if (lightbox) {
    const lbImg = lightbox.querySelector("img");
    document.querySelectorAll(".gallery figure").forEach((fig) => {
      fig.addEventListener("click", () => {
        const img = fig.querySelector("img");
        lbImg.src = img.src;
        lbImg.alt = img.alt;
        lightbox.classList.add("open");
      });
    });
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox || e.target.classList.contains("lightbox-close")) {
        lightbox.classList.remove("open");
      }
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") lightbox.classList.remove("open");
    });
  }

  // ---------- Formulaire de contact ----------
  const form = document.getElementById("contact-form");
  if (form) {
    const msg = document.getElementById("form-msg");

    // ⚠️ REMPLACEZ par votre adresse email de réception :
    const RECEIVE_EMAIL = "contact@beauty-salon.fr";

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      msg.className = "form-msg";
      msg.textContent = "";

      const data = Object.fromEntries(new FormData(form).entries());
      if (!data.name || !data.email || !data.message) {
        msg.classList.add("error");
        msg.textContent = "Merci de remplir tous les champs obligatoires.";
        return;
      }
      if (!/^\S+@\S+\.\S+$/.test(data.email)) {
        msg.classList.add("error");
        msg.textContent = "Adresse email invalide.";
        return;
      }

      // Envoi via FormSubmit (aucune inscription requise).
      // Au premier envoi, FormSubmit vous enverra un email de confirmation.
      try {
        const res = await fetch("https://formsubmit.co/ajax/" + encodeURIComponent(RECEIVE_EMAIL), {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            _subject: "Nouveau message — Beauty Salon",
            _template: "table",
            Nom: data.name,
            Email: data.email,
            Téléphone: data.phone || "—",
            Prestation: data.service || "—",
            Message: data.message,
          }),
        });
        if (!res.ok) throw new Error("send failed");
        msg.classList.add("success");
        msg.textContent = "✓ Merci ! Votre message a bien été envoyé.";
        form.reset();
      } catch (err) {
        // Repli : ouvre le client mail
        const body = `Nom: ${data.name}\nEmail: ${data.email}\nTéléphone: ${data.phone || ""}\nPrestation: ${data.service || ""}\n\n${data.message}`;
        window.location.href =
          "mailto:" + RECEIVE_EMAIL +
          "?subject=" + encodeURIComponent("Nouveau message — Beauty Salon") +
          "&body=" + encodeURIComponent(body);
        msg.classList.add("success");
        msg.textContent = "Ouverture de votre client email…";
      }
    });
  }

  // ---------- Animation apparition ----------
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("fade-up");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".service-card, .duo-card, .gallery figure").forEach((el) => io.observe(el));
});
