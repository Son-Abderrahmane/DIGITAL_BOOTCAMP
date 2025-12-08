    // Data
    const workshops = [
      {
        id: 1,
        title: 'AI Agentic',
        description: 'Découvrez les systèmes d\'agents IA autonomes',
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>',
        plan: [
          { phase: 'Phase 1: Introduction & Théorie', details: 'Comprendre les concepts fondamentaux des agents IA et leur architecture' },
          { phase: 'Phase 2: Pratique Hands-on', details: 'Construire votre premier agent IA avec des frameworks modernes' },
          { phase: 'Phase 3: Cas d\'Usage', details: 'Explorer les applications réelles et les scénarios d\'implémentation' },
          { phase: 'Phase 4: Q&A et Déploiement', details: 'Session interactive et guide de déploiement en production' }
        ]
      },
            {
        id: 3,
        title: 'Classification des images',
        description: 'Machine Learning et vision par ordinateur',
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>',
        plan: [
          { phase: 'Phase 1: Fondamentaux ML', details: 'Introduction au Machine Learning et aux réseaux de neurones' },
          { phase: 'Phase 2: Préparation des Données', details: 'Collecte, nettoyage et augmentation de datasets d\'images' },
          { phase: 'Phase 3: Entraînement de Modèles', details: 'Créer et entraîner des modèles de classification avec TensorFlow/PyTorch' },
          { phase: 'Phase 4: Évaluation & Déploiement', details: 'Tester les performances et déployer votre modèle' }
        ]
      },
      {
        id: 2,
        title: 'n8n',
        description: 'Automatisation avancée des workflows',
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 17a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2zM14 17a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2z"/>',
        plan: [
          { phase: 'Phase 1: Introduction à n8n', details: 'Présentation de la plateforme et configuration de l\'environnement' },
          { phase: 'Phase 2: Création de Workflows', details: 'Construire des automatisations complexes avec des nœuds personnalisés' },
          { phase: 'Phase 3: Intégrations', details: 'Connecter n8n avec vos outils et services favoris' },
          { phase: 'Phase 4: Optimisation & Production', details: 'Bonnes pratiques et déploiement de vos workflows' }
        ]
      },

      {
        id: 4,
        title: 'Système embarqué',
        description: 'IoT et programmation de systèmes embarqués',
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>',
        plan: [
          { phase: 'Phase 1: Introduction aux Systèmes Embarqués', details: 'Architecture matérielle et concepts de base de l\'IoT' },
          { phase: 'Phase 2: Programmation de Microcontrôleurs', details: 'Coder pour Arduino, ESP32 et autres plateformes' },
          { phase: 'Phase 3: Capteurs et Actionneurs', details: 'Interfaçage avec des composants électroniques et communication' },
          { phase: 'Phase 4: Projet Pratique', details: 'Construire un projet IoT complet de A à Z' }
        ]
      }
    ];

    const teams = [
      {
        id: 1,
        title: 'AI Agentic',
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>',
        members: [
          { name: 'El-falah Hassania', role: 'Stagiaire de Full stuck 207' },
          { name: 'Harzafi Ghita', role: 'Stagiaire de Full stuck 207' },
          { name: 'Hasbi Zakaria', role: 'Stagiaire de Full stuck 207' },
          { name: 'Drifi Oussama', role: 'Stagiaire de Full stuck 207' },
          { name: 'Aya Asrir', role: 'Stagiaire de Full stuck 207' },
          { name: 'Kaoutar Saydi', role: 'Stagiaire de Full stuck 207' }
        ]
      },
      {
        id: 2,
        title: 'n8n',
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 17a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2zM14 17a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2z"/>',
        members: [
          { name: 'Douaa Tabit', role: 'Stagiaire de Full stuck 207' },
          { name: 'Mouad Haddad', role: 'Stagiaire de Full stuck 207' },
          { name: 'Salim Gouraguine', role: 'Stagiaire de Full stuck 207' },
          { name: 'Israe Yajib', role: 'Stagiaire de Full stuck 207' },
          { name: 'Oussama Bouzalim', role: 'Stagiaire de Full stuck 207' },
          { name: 'Rawaa Mchaabat', role: 'Stagiaire de Full stuck 207' }
        ]
      },
      {
        id: 3,
        title: 'Classification des images',
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>',
        members: [
          { name: 'Marwa El Morid', role: 'Stagiaire de Full stuck 207' },
          { name: 'Sami Ftaita', role: 'Stagiaire de Full stuck 207' },
          { name: 'Othamne Fakir', role: 'Stagiaire de Full stuck 207' },
          { name: 'Salma Kourtaf', role: 'Stagiaire de Full stuck 207' },
          { name: 'Mohamed Jannane', role: 'Stagiaire de Full stuck 207' },
          { name: 'Zakariya Chmesi', role: 'Stagiaire de Full stuck 207' }
        ]
      },
      {
        id: 4,
        title: 'Système embarqué',
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>',
        members: [
          { name: 'Abderrahmane Mlih', role: 'Stagiaire de Full stuck 207' },
          { name: 'Khadija Dafrine', role: 'Stagiaire de Full stuck 207' },
          { name: 'Zakaria Hrida', role: 'Stagiaire de Full stuck 207' },
          { name: 'Salma Abaryoud', role: 'Stagiaire de Full stuck 207' },
          { name: 'Hiba Mazrak', role: 'Stagiaire de Full stuck 207' },
          { name: 'Chaimae Bensouda', role: 'Stagiaire de Full stuck 207' },
          { name: 'Moncef Fennan', role: 'Stagiaire de Full stuck 207' }
        ]
      }
    ];

    // Render workshops
    const workshopsGrid = document.getElementById('workshops-grid');
    workshops.forEach(workshop => {
      const card = document.createElement('div');
      card.className = 'workshop-card';
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
            ${workshop.plan.map(item => `
              <div class="plan-item">
                <div class="plan-phase">${item.phase}</div>
                <div class="plan-details">${item.details}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
      
      // Append to grid first, then add event listener
      workshopsGrid.appendChild(card);
    });

    // Add click handlers after all cards are in the DOM
    document.querySelectorAll('.workshop-card').forEach(card => {
      card.addEventListener('click', function(e) {
        const isCurrentlyActive = this.classList.contains('active');
        
        // Close all cards
        document.querySelectorAll('.workshop-card').forEach(c => {
          c.classList.remove('active');
          const content = c.querySelector('.workshop-content');
          if (content) {
            content.classList.remove('active');
          }
        });
        
        // If this card wasn't active, open it
        if (!isCurrentlyActive) {
          this.classList.add('active');
          const content = this.querySelector('.workshop-content');
          if (content) {
            content.classList.add('active');
          }
        }
      });
    });

    // Render teams
    const teamsGrid = document.getElementById('teams-grid');
    teams.forEach(team => {
      const card = document.createElement('div');
      card.className = 'team-card';
      card.innerHTML = `
        <div class="team-header">
          <div class="workshop-icon">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              ${team.icon}
            </svg>
          </div>
          <h3 class="pixel-font" style="color: #ccff00; font-size: 0.8rem;">${team.title}</h3>
        </div>
        <div class="team-members">
          ${team.members.map(member => `
            <div class="member-card scanlines">
              <div>
                <div class="member-name">${member.name}</div>
                <div class="member-role">${member.role}</div>
              </div>
              <div class="status-dot"></div>
            </div>
          `).join('')}
        </div>
      `;
      teamsGrid.appendChild(card);
    });

    // Particles canvas
    const canvas = document.getElementById('particles-canvas');
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

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
        ctx.fillStyle = 'rgba(204, 255, 0, 0.3)';
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

        particles.slice(i + 1).forEach(otherParticle => {
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
    document.getElementById('scroll-btn').addEventListener('click', function() {
      document.querySelector('.section').scrollIntoView({ behavior: 'smooth' });
    });
  