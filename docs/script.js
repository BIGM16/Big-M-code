// Mobile sidebar toggle
const sidebar = document.getElementById("sidebar");
const openSidebar = document.getElementById("openSidebar");
const closeSidebar = document.getElementById("closeSidebar");

openSidebar.addEventListener("click", () => {
  sidebar.classList.add("open");
});

closeSidebar.addEventListener("click", () => {
  sidebar.classList.remove("open");
});

const liens = document.querySelectorAll(".link");
liens.forEach((lien) => {
  lien.addEventListener("click", () => {
    liens.forEach((l) => {
      l.classList.remove("bg-primary", "bg-opacity-20", "text-white");
      l.classList.add(
        "hover:bg-primary",
        "hover:bg-opacity-20",
        "text-gray-300",
        "hover:text-white",
        "transition",
        "duration-200"
      );
    });
    lien.classList.add("bg-primary", "bg-opacity-20", "text-white");
    lien.classList.remove(
      "hover:bg-primary",
      "hover:bg-opacity-20",
      "text-gray-300",
      "hover:text-white",
      "transition",
      "duration-200"
    );
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      // Close mobile sidebar if open
      sidebar.classList.remove("open");

      // Scroll to target
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Affichage de la div interactif temporaire des ressources
const resourceDivs = document.querySelectorAll(".ressource");
const revelation = document.querySelectorAll(".revelation");
const openResourceButtons = document.querySelectorAll(".Ouvre-ressource");

openResourceButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    resourceDivs[index].classList.add("hidden");
    revelation[index].classList.remove("hidden");

    setTimeout(() => {
      resourceDivs[index].classList.remove("hidden");
      revelation[index].classList.add("hidden");
    }, 5000);
  });
});

function openWhatsApp() {
  const whatsappLink = "https://chat.whatsapp.com/BaC9U19NLsZ70nNMNLEJ6A"; // Remplace par ton numéro
  window.open(whatsappLink, "_blank");
};

// formulaire de soumission candidature
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const nom = document.getElementById("fullName").value.trim();
  const numero = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const cours = document.getElementById("course").value.trim();
  const formatChoisi = document
    .querySelector('input[name="format"]:checked')
    .value.trim();
  const message = document.getElementById("message").value.trim();

  const contactMessage = `Bonjour, je me présente, je suis ${nom}. J'aimerai m'inscrire pour le cours de programmation web en ${cours} sous le format de cours en ${formatChoisi}. J'aimerai soulever un petit quelqur chose à ce propos ${message} et vous prie de me joindre via mon mail ${email} ou directement sur whatsapp à ce numero ${numero}.`;

  const numeroWhatsApp = "243899274502"; // Remplace par ton numéro
  const lien = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
    contactMessage
  )}`;

  window.open(lien, "_blank"); // Ouvre WhatsApp

  confirmation.style.display = "block"; // Affiche le message
  form.reset(); // Réinitialise le formulaire
});
