// Data
const workshops = [
  {
    id: 1,
    title: "AI Agentic",
    description: "Découvrez les systèmes d'agents IA autonomes",
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>',
    prerequisites: [
    "Ordinateur portable avec Python 3.8+ installé",
    "gemini SDK (google-genai, version 0.3.0)",
    "Bibliothèque Pydantic (version 2.5.0)",
    "Environnement virtuel Python (version 1.0.1)",
    "Connexion avec une base de données MySQL (mysql-connector-python version 8.1.0)",
    "[Optionnel] Framework d'applications web Flask (Flask version 3.0.0 et Flask-CORS version 4.0.0)",
    "Compte OpenAI ou Anthropic (clé API)",
    "Connaissances de base en Python",
    "IDE ou éditeur de code (VSCode, PyCharm, etc.)",
    "Connexion Internet stable"
    ],
    plan: [
      {
        phase: "Introduction & Concepts de Base",
        details:
          "Présentation des notions fondamentales de l’IA et des modèles de langage",
      },
      {
        phase: "Caractéristiques Principales",
        details:
          "Capacité à comprendre, générer du texte et s’adapter au contexte",
      },
      {
        phase: "Rôle des API",
        details: "Permettre l’intégration des modèles IA dans des applications",
      },
      {
        phase: "Architecture Fondamentale (LLM)",
        details:
          "Basée sur les Transformers pour traiter de grandes quantités de texte",
      },
      {
        phase: "Mécanismes Avancés & Frameworks",
        details: "Fine-tuning, prompt engineering et frameworks IA modernes",
      },
      {
        phase: "Applications Concrètes",
        details:
          "Chatbots, traduction, analyse de données et assistance intelligente",
      },
    ],
  },
  {
    id: 2,
    title: "n8n",
    description: "Automatisation avancée des workflows",
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 17a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2zM14 17a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2z"/>',
    prerequisites: [
      "Les participants doivent créer un compte sur la plateforme n8n via le site officiel https://n8n.io  afin de pouvoir suivre les démonstrations pratiques et les exercices",
    ],
    plan: [
      {
        phase: "Phase 1: Introduction à n8n",
        details:
          "Présentation de la plateforme et configuration de l'environnement",
      },
      {
        phase: "Phase 2: Création de Workflows",
        details:
          "Construire des automatisations complexes avec des nœuds personnalisés",
      },
      {
        phase: "Phase 3: Intégrations",
        details: "Connecter n8n avec vos outils et services favoris",
      },
      {
        phase: "Phase 4: Optimisation & Production",
        details: "Bonnes pratiques et déploiement de vos workflows",
      },
    ],
  },
  {
    id: 3,
    title: "Classification des images",
    description: "Machine Learning et vision par ordinateur",
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>',
    prerequisites: [
      "<strong>Logiciel à installer :</strong> Visual Studio Code (VS Code)",

      "<strong>Bibliothèques Python à installer :</strong>",
      "NumPy : manipulation des tableaux numériques",
      "OpenCV (cv2) : lecture et traitement des images",
      "TensorFlow / Keras : création et entraînement du réseau de neurones",
      "Scikit-learn : division des données (train / test / validation)",
      "Matplotlib : affichage des images et des courbes",
      "Pickle : sauvegarde et chargement du modèle entraîné",
       '⚠️ IMPORTANT : Veuillez télécharger le dossier du dataset disponible dans le footer de cette page avant le début de la séance afin de pouvoir suivre correctement les démonstrations pratiques.'
    ],
    plan: [
      {
        phase: "Phase 1: Introduction à la classification d’images",
        details:
          "Présentation des concepts de base et des objectifs de la classification d’images",
      },
      {
        phase: "Phase 2: Types et méthodes de classification",
        details:
          "Différentes approches de classification supervisée et non supervisée",
      },
      {
        phase: "Phase 3: Introduction au Deep Learning et aux CNN",
        details:
          "Découverte du Deep Learning et du fonctionnement des réseaux de neurones convolutifs",
      },
      {
        phase: "Phase 4: Prétraitement et structure des CNN",
        details:
          "Préparation des données et compréhension de l’architecture interne des CNN",
      },
      {
        phase: "Phase 5: Architectures CNN et Transfer Learning",
        details:
          "Étude des architectures CNN populaires et utilisation du Transfer Learning",
      },
      {
        phase: "Phase 6: Implémentation et évaluation des performances",
        details:
          "Implémentation du modèle et évaluation des résultats à l’aide de métriques adaptées",
      },
    ],
    
  },
  {
    id: 4,
    title: "Système embarqué",
    description: "IoT et programmation de systèmes embarqués",
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>',
    prerequisites: [
      "Aucun prérequis technique n’est nécessaire. Les participants doivent simplement venir et suivre attentivement les explications durant le workshop.",
    ],

    plan: [
      {
        phase: "Phase 1: Introduction aux Systèmes Embarqués",
        details:
          "Présentation des systèmes embarqués, de leur rôle et des concepts de base",
      },
      {
        phase: "Phase 2: Arduino",
        details: "Découverte d’Arduino et programmation des microcontrôleurs",
      },
      {
        phase: "Phase 3: Capteurs et Actionneurs",
        details: "Utilisation et interfaçage des capteurs et des actionneurs",
      },
      {
        phase: "Phase 4: Projet Pratique Arduino",
        details: "Réalisation d’un projet pratique complet avec Arduino",
      },
      {
        phase: "Phase 5: Raspberry Pi",
        details: "Introduction au Raspberry Pi et à son environnement",
      },
      {
        phase: "Phase 6: Projet Pratique Raspberry Pi",
        details: "Réalisation d’un projet pratique basé sur Raspberry Pi",
      },
    ],
  },
];

const teams = [
  {
    id: 1,
    title: "AI Agentic",
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>',
    members: [
      { name: "El-falah Hassania", role: "Stagiaire de Full stuck 207" },
      { name: "Harzafi Ghita", role: "Stagiaire de Full stuck 207" },
      { name: "Hasbi Zakaria", role: "Stagiaire de Dev 105" },
      { name: "Drifi Oussama", role: "Stagiaire de Dev 105" },
      { name: "Aya Asrir", role: "Stagiaire de Full stuck 207" },
      { name: "Kaoutar Saydi", role: "Stagiaire de Full stuck 207" },
    ],
  },
  {
    id: 2,
    title: "n8n",
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 17a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2zM14 17a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2z"/>',
    members: [
      { name: "Douaa Tabit", role: "Stagiaire de Full stuck 207" },
      { name: "Mouad Haddad", role: "Stagiaire de Full stuck 207" },
      { name: "Salim Gouraguine", role: "Stagiaire de Full stuck 207" },
      { name: "Israe Yajib", role: "Stagiaire de Full stuck 207" },
      { name: "Oussama Bouzalim", role: "Stagiaire de Full stuck 207" },
      { name: "Rawâa M'chaabat", role: "Stagiaire de Full stuck 207" },
    ],
  },
  {
    id: 3,
    title: "Classification des images",
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>',
    members: [
      { name: "Marwa El Mourid", role: "Stagiaire de Full stuck 207" },
      { name: "Sami Ftaita", role: "Stagiaire de Full stuck 207" },
      { name: "Othmane Fakir", role: "Stagiaire de Full stuck 207" },
      { name: "Salma Kourtaf", role: "Stagiaire de Full stuck 207" },
      { name: "Mohamed Jannane", role: "Stagiaire de Full stuck 207" },
      { name: "Zakariya Chmesi", role: "Stagiaire de Full stuck 207" },
    ],
  },
  {
    id: 4,
    title: "Système embarqué",
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>',
    members: [
      { name: "Abderrahmane Mlih", role: "Stagiaire de Full stuck 207" },
      { name: "Khadija Dafrine", role: "Stagiaire de Full stuck 207" },
      { name: "Zakaria Hrida", role: "Stagiaire de Full stuck 207" },
      { name: "Salma Abaryoud", role: "Stagiaire de Full stuck 207" },
      { name: "Hiba Mazrak", role: "Stagiaire de Full stuck 207" },
      { name: "Chaimae Bensouda", role: "Stagiaire de Full stuck 207" },
      { name: "Moncef Fennan", role: "Stagiaire de Dev 105" },
      { name: "Oussama Sabbar", role: "Stagiaire de Dev 105" },
    ],
  },
];

// Render workshops
const workshopsGrid = document.getElementById("workshops-grid");
workshops.forEach((workshop) => {
  const card = document.createElement("div");
  card.className = "workshop-card";
  card.innerHTML = `
        <div class="workshop-header">
          <div class="workshop-info">
            <div class="workshop-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                ${workshop.icon}
              </svg>
            </div>
            <div style="flex: 1; min-width: 0;">
              <h3 class="workshop-title pixel-font">${workshop.title}</h3>
              <p class="workshop-description">${workshop.description}</p>
            </div>
          </div>
          <div class="chevron">
            <svg width="24" height="24" fill="none" stroke="#ccff00" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </div>
        </div>
        <div class="workshop-content">
          <div class="workshop-plan">
            <h4 class="plan-title">Plan du Workshop</h4>
            ${workshop.plan
              .map(
                (item) => `
              <div class="plan-item">
                <div class="plan-phase">${item.phase}</div>
                <div class="plan-details">${item.details}</div>
              </div>
            `
              )
              .join("")}
          </div>
                    <div class="workshop-plan">
            <h4 class="plan-title">Prérequis</h4>
            <ul class="prerequisites-list">
              ${workshop.prerequisites
                .map(
                  (prerequisite) => `
                <li>${prerequisite}</li>
              `
                )
                .join("")}
            </ul>
          </div>
        </div>
      `;

  // Append to grid first, then add event listener
  workshopsGrid.appendChild(card);
});

// Add click handlers after all cards are in the DOM
document.querySelectorAll(".workshop-card").forEach((card) => {
  card.addEventListener("click", function (e) {
    const isCurrentlyActive = this.classList.contains("active");

    // Close all cards
    document.querySelectorAll(".workshop-card").forEach((c) => {
      c.classList.remove("active");
      const content = c.querySelector(".workshop-content");
      if (content) {
        content.classList.remove("active");
      }
    });

    // If this card wasn't active, open it
    if (!isCurrentlyActive) {
      this.classList.add("active");
      const content = this.querySelector(".workshop-content");
      if (content) {
        content.classList.add("active");
      }
    }
  });
});

// Render teams
const teamsGrid = document.getElementById("teams-grid");
teams.forEach((team) => {
  const card = document.createElement("div");
  card.className = "team-card";
  card.innerHTML = `
        <div class="team-header">
          <div class="workshop-icon">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              ${team.icon}
            </svg>
          </div>
          <h3 class="pixel-font" style="color: #ccff00; font-size: 0.8rem;">${
            team.title
          }</h3>
        </div>
        <div class="team-members">
          ${team.members
            .map(
              (member) => `
            <div class="member-card scanlines">
              <div>
                <div class="member-name">${member.name}</div>
                <div class="member-role">${member.role}</div>
              </div>
              <div class="status-dot"></div>
            </div>
          `
            )
            .join("")}
        </div>
      `;
  teamsGrid.appendChild(card);
});

// Particles canvas
const canvas = document.getElementById("particles-canvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = document.documentElement.scrollHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    this.size = Math.random() * 2 + 1;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
    if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
  }

  draw() {
    ctx.fillStyle = "rgba(204, 255, 0, 0.3)";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

const particles = [];
for (let i = 0; i < 50; i++) {
  particles.push(new Particle());
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle, i) => {
    particle.update();
    particle.draw();

    particles.slice(i + 1).forEach((otherParticle) => {
      const dx = particle.x - otherParticle.x;
      const dy = particle.y - otherParticle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 150) {
        ctx.strokeStyle = `rgba(204, 255, 0, ${0.2 * (1 - distance / 150)})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(otherParticle.x, otherParticle.y);
        ctx.stroke();
      }
    });
  });

  requestAnimationFrame(animate);
}

animate();

// Scroll to workshops section
document.getElementById("scroll-btn").addEventListener("click", function () {
  document.querySelector(".section").scrollIntoView({ behavior: "smooth" });
});
