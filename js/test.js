/**
 * Vocational Test Logic
 */

const questions = [
  // 1-4
  { text: "¿Qué actividad disfrutas más en tu tiempo libre?", options: [
    { text: "Armar, desarmar o reparar aparatos electrónicos o software.", category: "ENG" },
    { text: "Leer sobre avances médicos, biología o primeros auxilios.", category: "HEA" },
    { text: "Organizar proyectos, planificar presupuestos o liderar equipos.", category: "BUS" },
    { text: "Dibujar, pintar o crear diseños y contenido visual.", category: "ART" }
  ]},
  { text: "En un trabajo de equipo en el colegio, usualmente tú eres quien:", options: [
    { text: "Redacta el informe y cuida la ortografía y el mensaje.", category: "SOC" },
    { text: "Aporta ideas creativas sobre la presentación estética del proyecto.", category: "ART" },
    { text: "Asigna tareas y asegura que se cumplan las metas y tiempos.", category: "BUS" },
    { text: "Se encarga del análisis lógico, matemático o técnico.", category: "ENG" }
  ]},
  { text: "¿Qué tipo de documentales o contenidos prefieres ver?", options: [
    { text: "El universo, tecnología espacial o ingeniería de infraestructura.", category: "ENG" },
    { text: "El cuerpo humano, ciencias biológicas o avances clínicos.", category: "HEA" },
    { text: "Historia, comportamiento humano y problemas de la sociedad.", category: "SOC" },
    { text: "Emprendedores de éxito, startups y estrategias comerciales.", category: "BUS" }
  ]},
  { text: "Si pudieras aportar a resolver un reto mundial, ¿cuál elegirías?", options: [
    { text: "Desarrollar soluciones médicas para enfermedades complejas.", category: "HEA" },
    { text: "Impulsar la economía y crear oportunidades de empleo.", category: "BUS" },
    { text: "Crear tecnologías sostenibles y energías limpias.", category: "ENG" },
    { text: "Garantizar la justicia, educación y derechos ciudadanos.", category: "SOC" }
  ]},
  // 5-8
  { text: "¿Cómo prefieres estructurar y comunicar tus ideas?", options: [
    { text: "Mediante diagramas, mapas de procesos o modelos lógicos.", category: "ENG" },
    { text: "A través de expresiones visuales, bocetos o producciones.", category: "ART" },
    { text: "Escribiendo ensayos, debatiendo o argumentando oralmente.", category: "SOC" },
    { text: "Presentando propuestas comerciales y metas cuantificables.", category: "BUS" }
  ]},
  { text: "Si te regalan un libro para leer el fin de semana, prefieres que sea de:", options: [
    { text: "Anatomía, salud integral o biotecnología.", category: "HEA" },
    { text: "Diseño, historia del arte o producción audiovisual.", category: "ART" },
    { text: "Estrategia de negocios y modelos de innovación.", category: "BUS" },
    { text: "Derecho, sociología o filosofía aplicada.", category: "SOC" }
  ]},
  { text: "¿Qué materias escolares te resultan más estimulantes?", options: [
    { text: "Matemáticas, Física o Computación.", category: "ENG" },
    { text: "Biología y Química.", category: "HEA" },
    { text: "Artes plásticas, Música o Expresión.", category: "ART" },
    { text: "Historia, Ciencias Sociales o Literatura.", category: "SOC" }
  ]},
  { text: "¿En qué entorno profesional te proyectas a futuro?", options: [
    { text: "Un centro médico, hospital o laboratorio de análisis.", category: "HEA" },
    { text: "Un bufete, juzgado, institución social o aula.", category: "SOC" },
    { text: "Una empresa corporativa dirigiendo equipos y metas.", category: "BUS" },
    { text: "Un estudio creativo, agencia de diseño o producción.", category: "ART" }
  ]},
  // 9-10
  { text: "¿Qué característica personal destaca más en ti?", options: [
    { text: "Analítico y orientada al detalle técnico.", category: "ENG" },
    { text: "Empático y comprometido con el bienestar de otros.", category: "HEA" },
    { text: "Persuasivo, organizado y estratégico.", category: "BUS" },
    { text: "Creativo, intuitivo y estético.", category: "ART" }
  ]},
  { text: "Al interactuar con un producto o aplicación digital, observas:", options: [
    { text: "La armonía visual, interfaz de usuario y colores.", category: "ART" },
    { text: "Su rendimiento, velocidad y lógica de programación.", category: "ENG" },
    { text: "El modelo de negocio e impacto comercial.", category: "BUS" },
    { text: "El impacto en las personas y su utilidad social.", category: "SOC" }
  ]}
];

const categoryData = {
  ENG: {
    title: "Ingeniería y Tecnología",
    desc: "Tienes un perfil fuertemente orientado al análisis lógico, resolución de problemas complejos y tecnología.",
    careers: [
      { name: "Ingeniería de Sistemas", icon: "ph-gear", color: "#3B82F6", bg: "#EFF6FF" },
      { name: "Ingeniería Civil", icon: "ph-buildings", color: "#2563EB", bg: "#EFF6FF" },
      { name: "Arquitectura", icon: "ph-buildings", color: "#2563EB", bg: "#EFF6FF" }
    ]
  },
  HEA: {
    title: "Ciencias de la Salud",
    desc: "Tienes una marcada vocación de servicio, empatía hacia los demás e interés profundo por la biología y el cuidado del ser humano.",
    careers: [
      { name: "Medicina", icon: "ph-heartbeat", color: "#EF4444", bg: "#FEF2F2" },
      { name: "Odontología", icon: "ph-tooth", color: "#EF4444", bg: "#FEF2F2" },
      { name: "Fisioterapia", icon: "ph-person", color: "#EF4444", bg: "#FEF2F2" }
    ]
  },
  BUS: {
    title: "Ciencias Económicas y Empresariales",
    desc: "Posees visión estratégica, habilidad para el liderazgo, la gestión de proyectos comerciales y el desarrollo de emprendimientos.",
    careers: [
      { name: "Administración de Empresas", icon: "ph-chart-line-up", color: "#10B981", bg: "#ECFDF5" },
      { name: "Marketing", icon: "ph-megaphone", color: "#8B5CF6", bg: "#F5F3FF" },
      { name: "Ingeniería Comercial", icon: "ph-briefcase", color: "#10B981", bg: "#ECFDF5" }
    ]
  },
  SOC: {
    title: "Ciencias Sociales y Humanidades",
    desc: "Te interesan las leyes, la justicia social, la comunicación, la enseñanza y el análisis profundo de la sociedad humana.",
    careers: [
      { name: "Psicología", icon: "ph-brain", color: "#EC4899", bg: "#FDF2F8" },
      { name: "Trabajo Social", icon: "ph-users", color: "#8B5CF6", bg: "#F5F3FF" },
      { name: "Comunicación Social", icon: "ph-chats", color: "#8B5CF6", bg: "#F5F3FF" }
    ]
  },
  ART: {
    title: "Arte, Diseño y Creatividad Visual",
    desc: "Cuentas con alta sensibilidad estética, originalidad y destreza para transmitir conceptos complejos a través de medios visuales.",
    careers: [
      { name: "Diseño Gráfico", icon: "ph-paint-brush-broad", color: "#F59E0B", bg: "#FFFBEB" },
      { name: "Diseño de Interiores", icon: "ph-house-line", color: "#F59E0B", bg: "#FFFBEB" },
      { name: "Animación Digital", icon: "ph-video-camera", color: "#F59E0B", bg: "#FFFBEB" }
    ]
  }
};

let currentQuestionIndex = 0;
let scores = { ENG: 0, HEA: 0, BUS: 0, SOC: 0, ART: 0 };
let selectedCategory = null;

document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const startScreen = document.getElementById("intro-container");
  const quizScreen = document.getElementById("quiz-container");
  const resultsScreen = document.getElementById("result-container");
  
  const questionText = document.getElementById("question-text");
  const optionsContainer = document.getElementById("options-container");
  const questionCounter = document.getElementById("question-counter");
  const progressBar = document.getElementById("progress-bar");
  const nextBtn = document.getElementById("next-btn");
  
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      startScreen.style.display = "none";
      quizScreen.style.display = "block";
      loadQuestion();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (!selectedCategory) return;
      
      scores[selectedCategory]++;
      currentQuestionIndex++;
      
      if (currentQuestionIndex < questions.length) {
        loadQuestion();
      } else {
        showResults();
      }
    });
  }

  function loadQuestion() {
    selectedCategory = null;
    const q = questions[currentQuestionIndex];
    questionText.textContent = q.text;
    
    // Update Progress Bar
    const progressPctVal = Math.round(((currentQuestionIndex + 1) / questions.length) * 100);
    progressBar.style.width = `${progressPctVal}%`;
    questionCounter.textContent = `Pregunta ${currentQuestionIndex + 1} de ${questions.length}`;

    // Render Options
    optionsContainer.innerHTML = "";
    const letters = ['A', 'B', 'C', 'D'];
    q.options.forEach((opt, index) => {
      const btn = document.createElement("button");
      btn.className = "test-option";
      btn.innerHTML = `
        <span class="radio-circle"></span>
        <span class="option-letter">${letters[index]}.</span>
        <span class="option-text">${opt.text}</span>
      `;
      btn.onclick = () => {
        // Deselect all
        document.querySelectorAll('.test-option').forEach(el => el.classList.remove('selected'));
        // Select this
        btn.classList.add('selected');
        selectedCategory = opt.category;
      };
      
      optionsContainer.appendChild(btn);
    });
  }

  function showResults() {
    if (typeof confetti === 'function') {
      confetti({
        particleCount: 130,
        spread: 90,
        origin: { y: 0.6 }
      });
    }
    
    quizScreen.style.display = "none";
    
    let maxScore = -1;
    let winnerCat = "ENG";
    for (const [cat, score] of Object.entries(scores)) {
      if (score > maxScore) {
        maxScore = score;
        winnerCat = cat;
      }
    }
    
    const result = categoryData[winnerCat];
    
    const careersContainer = document.getElementById("result-careers");
    if (careersContainer) {
      careersContainer.innerHTML = "";
      result.careers.forEach(career => {
        careersContainer.innerHTML += `
          <div class="career-card" style="padding: var(--space-md);">
            <div class="career-icon-wrapper" style="color: ${career.color}; background: ${career.bg}; margin-bottom: var(--space-sm);">
              <i class="ph-fill ${career.icon}"></i>
            </div>
            <span class="title-card" style="text-align: center;">${career.name}</span>
          </div>
        `;
      });
    }
    
    resultsScreen.style.display = "block";
  }
});
