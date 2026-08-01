/**
 * Vocational Test Logic
 * 20 questions mapping to 5 main categories:
 * - ENG: Ingeniería y Tecnología
 * - HEA: Ciencias de la Salud
 * - BUS: Negocios y Economía
 * - SOC: Ciencias Sociales y Humanidades
 * - ART: Arte y Diseño
 */

const questions = [
  // 1-4
  { text: "¿Qué actividad disfrutas más en tu tiempo libre?", options: [
    { text: "Armar, desarmar o reparar aparatos electrónicos.", category: "ENG", icon: "ph-wrench" },
    { text: "Leer sobre avances médicos o primeros auxilios.", category: "HEA", icon: "ph-first-aid" },
    { text: "Organizar eventos, planificar finanzas o liderar un grupo.", category: "BUS", icon: "ph-chart-bar" },
    { text: "Dibujar, pintar, o diseñar elementos visuales.", category: "ART", icon: "ph-palette" }
  ]},
  { text: "En un trabajo de equipo en el colegio, usualmente tú eres quien:", options: [
    { text: "Redacta el informe y cuida la ortografía y el mensaje.", category: "SOC", icon: "ph-pen-nib" },
    { text: "Aporta ideas creativas sobre cómo presentar el proyecto (diseño visual).", category: "ART", icon: "ph-paint-brush" },
    { text: "Asigna las tareas y asegura que se cumplan los plazos.", category: "BUS", icon: "ph-users" },
    { text: "Se encarga de la parte de investigación matemática o lógica.", category: "ENG", icon: "ph-calculator" }
  ]},
  { text: "¿Qué tipo de documentales o videos prefieres ver?", options: [
    { text: "El universo, tecnología espacial o construcción de megaestructuras.", category: "ENG", icon: "ph-rocket" },
    { text: "Misterios del cuerpo humano, biología o rescates médicos.", category: "HEA", icon: "ph-heartbeat" },
    { text: "Historia antigua, psicología humana o problemas sociales.", category: "SOC", icon: "ph-brain" },
    { text: "Biografías de emprendedores exitosos y empresas.", category: "BUS", icon: "ph-briefcase" }
  ]},
  { text: "Si pudieras resolver un problema mundial, ¿cuál elegirías?", options: [
    { text: "Desarrollar una cura para enfermedades incurables.", category: "HEA", icon: "ph-pill" },
    { text: "Erradicar la pobreza mejorando la economía global.", category: "BUS", icon: "ph-globe-hemisphere-west" },
    { text: "Crear energías 100% limpias usando nueva tecnología.", category: "ENG", icon: "ph-lightning" },
    { text: "Garantizar educación y justicia para todos.", category: "SOC", icon: "ph-scales" }
  ]},
  // 5-8
  { text: "¿Cómo prefieres expresar tus ideas?", options: [
    { text: "A través de gráficos, diagramas o modelos físicos.", category: "ENG", icon: "ph-graph" },
    { text: "Mediante dibujos, fotografías o música.", category: "ART", icon: "ph-camera" },
    { text: "Escribiendo ensayos, artículos o debatiendo.", category: "SOC", icon: "ph-chat-circle-text" },
    { text: "Exponiendo presentaciones de negocios o ventas.", category: "BUS", icon: "ph-presentation-chart" }
  ]},
  { text: "Si te regalan un libro, prefieres que sea sobre:", options: [
    { text: "Anatomía, nutrición o cuidados de la salud.", category: "HEA", icon: "ph-apple-logo" },
    { text: "Historia del arte, diseño de interiores o moda.", category: "ART", icon: "ph-scissors" },
    { text: "Cómo iniciar tu propio negocio de éxito.", category: "BUS", icon: "ph-money" },
    { text: "Sociología, filosofía o leyes fundamentales.", category: "SOC", icon: "ph-book-open" }
  ]},
  { text: "¿Qué materia escolar se te hace más fácil o interesante?", options: [
    { text: "Matemáticas y Física.", category: "ENG", icon: "ph-math-operations" },
    { text: "Biología y Química.", category: "HEA", icon: "ph-flask" },
    { text: "Artes plásticas o Música.", category: "ART", icon: "ph-music-note" },
    { text: "Historia, Literatura o Filosofía.", category: "SOC", icon: "ph-books" }
  ]},
  { text: "¿Qué ambiente de trabajo te imaginas en el futuro?", options: [
    { text: "Un hospital, clínica o laboratorio clínico.", category: "HEA", icon: "ph-hospital" },
    { text: "Un bufete de abogados, una ONG o un aula de clases.", category: "SOC", icon: "ph-chalkboard-teacher" },
    { text: "Una oficina corporativa tomando decisiones directivas.", category: "BUS", icon: "ph-buildings" },
    { text: "Un estudio de diseño, agencia de publicidad o taller.", category: "ART", icon: "ph-pen" }
  ]},
  // 9-12
  { text: "¿Qué cualidad te describe mejor?", options: [
    { text: "Analítico y detallista.", category: "ENG", icon: "ph-magnifying-glass" },
    { text: "Empático y cuidadoso con los demás.", category: "HEA", icon: "ph-hands-clapping" },
    { text: "Persuasivo y organizado.", category: "BUS", icon: "ph-trend-up" },
    { text: "Creativo y original.", category: "ART", icon: "ph-lightbulb" }
  ]},
  { text: "Cuando usas una aplicación nueva, lo primero que notas es:", options: [
    { text: "Su diseño visual, los colores y las tipografías.", category: "ART", icon: "ph-swatches" },
    { text: "Cómo está programada y si es rápida o lenta.", category: "ENG", icon: "ph-code" },
    { text: "Si el modelo de negocio detrás es rentable.", category: "BUS", icon: "ph-currency-dollar" },
    { text: "Cómo interactúa la gente en ella (aspecto social).", category: "SOC", icon: "ph-users-three" }
  ]},
  { text: "¿Qué te causa más frustración?", options: [
    { text: "Que las cosas no funcionen lógicamente o estén rotas.", category: "ENG", icon: "ph-warning" },
    { text: "Ver a alguien sufrir sin poder ayudarle.", category: "HEA", icon: "ph-bandaids" },
    { text: "La injusticia o la falta de ética en la sociedad.", category: "SOC", icon: "ph-scales" },
    { text: "Un entorno desordenado, feo o sin armonía estética.", category: "ART", icon: "ph-x-circle" }
  ]},
  { text: "En un videojuego, tú prefieres:", options: [
    { text: "Administrar recursos, construir ciudades y manejar la economía.", category: "BUS", icon: "ph-city" },
    { text: "Juegos con una historia profunda y diálogos complejos.", category: "SOC", icon: "ph-book-bookmark" },
    { text: "Construir máquinas, resolver puzzles o programar sistemas.", category: "ENG", icon: "ph-puzzle-piece" },
    { text: "Crear personajes, diseñar sus atuendos y el mundo.", category: "ART", icon: "ph-t-shirt" }
  ]},
  // 13-16
  { text: "Si tuvieras que organizar un campamento, te encargarías de:", options: [
    { text: "El botiquín de primeros auxilios y el menú saludable.", category: "HEA", icon: "ph-medical-cross" },
    { text: "El presupuesto, la logística y cobrar las cuotas.", category: "BUS", icon: "ph-wallet" },
    { text: "Montar las tiendas y armar el sistema de iluminación.", category: "ENG", icon: "ph-tent" },
    { text: "Dinamizar al grupo, mediar conflictos y hacer juegos.", category: "SOC", icon: "ph-smiley" }
  ]},
  { text: "¿Qué noticia te llamaría más la atención?", options: [
    { text: "\"Nuevo descubrimiento genético para curar enfermedades\".", category: "HEA", icon: "ph-dna" },
    { text: "\"Se aprueba nueva ley de protección ciudadana\".", category: "SOC", icon: "ph-gavel" },
    { text: "\"Lanzamiento del nuevo procesador cuántico superrápido\".", category: "ENG", icon: "ph-cpu" },
    { text: "\"Startup tecnológica alcanza valor de mil millones de dólares\".", category: "BUS", icon: "ph-rocket-launch" }
  ]},
  { text: "¿Qué te gustaría aprender a hacer perfecto?", options: [
    { text: "Animación 3D e ilustración digital.", category: "ART", icon: "ph-cube" },
    { text: "Invertir en la bolsa de valores y finanzas.", category: "BUS", icon: "ph-chart-line" },
    { text: "Suturar heridas e inyectar correctamente.", category: "HEA", icon: "ph-syringe" },
    { text: "Programar en múltiples lenguajes informáticos.", category: "ENG", icon: "ph-terminal" }
  ]},
  { text: "¿Qué objeto te parece más interesante?", options: [
    { text: "Un microscopio.", category: "HEA", icon: "ph-microscope" },
    { text: "Una cámara fotográfica profesional.", category: "ART", icon: "ph-camera" },
    { text: "Un contrato legal o un libro antiguo.", category: "SOC", icon: "ph-scroll" },
    { text: "Una placa madre (motherboard) de computadora.", category: "ENG", icon: "ph-hard-drive" }
  ]},
  // 17-20
  { text: "Si te dieran dinero para invertir en un proyecto, sería en:", options: [
    { text: "Una aplicación de software o robótica.", category: "ENG", icon: "ph-robot" },
    { text: "Un hospital o clínica de especialidades.", category: "HEA", icon: "ph-hospital" },
    { text: "Un nuevo restaurante o tienda comercial.", category: "BUS", icon: "ph-storefront" },
    { text: "Una galería de arte o estudio de moda.", category: "ART", icon: "ph-paint-roller" }
  ]},
  { text: "¿Cómo te sientes respecto a hablar en público?", options: [
    { text: "Me encanta, soy bueno debatiendo y expresando ideas sociales.", category: "SOC", icon: "ph-megaphone" },
    { text: "Lo hago bien si es para vender una idea o producto.", category: "BUS", icon: "ph-handshake" },
    { text: "Prefiero mostrar mi trabajo visual (arte, diseño) que hablar.", category: "ART", icon: "ph-monitor" },
    { text: "Prefiero explicar datos exactos o cómo funciona un sistema.", category: "ENG", icon: "ph-database" }
  ]},
  { text: "Cuando vas a un museo, ¿qué sección prefieres?", options: [
    { text: "Ciencia, tecnología e inventos históricos.", category: "ENG", icon: "ph-gear" },
    { text: "Arte contemporáneo, esculturas y pinturas.", category: "ART", icon: "ph-frame-corners" },
    { text: "Antropología, historia antigua y evolución humana.", category: "SOC", icon: "ph-globe" },
    { text: "Biología, anatomía y ciencias naturales.", category: "HEA", icon: "ph-leaf" }
  ]},
  { text: "En tu futuro ideal, al final del día sientes que aportaste al mundo porque:", options: [
    { text: "Lideraste un equipo hacia el éxito comercial.", category: "BUS", icon: "ph-star" },
    { text: "Defendiste los derechos de alguien o educaste a jóvenes.", category: "SOC", icon: "ph-student" },
    { text: "Salvaste una vida o mejoraste la salud de un paciente.", category: "HEA", icon: "ph-heart" },
    { text: "Creaste belleza visual que inspira a los demás.", category: "ART", icon: "ph-image" }
  ]}
];

const categoryData = {
  ENG: {
    title: "Ingeniería y Tecnología",
    desc: "Tienes un fuerte interés por la resolución de problemas lógicos, el uso de tecnología y la construcción de sistemas físicos o virtuales.",
    careers: ["Ingeniería de Sistemas", "Ingeniería Civil", "Ingeniería Industrial", "Arquitectura", "Redes y Telecom."]
  },
  HEA: {
    title: "Ciencias de la Salud",
    desc: "Tienes una fuerte vocación de servicio, empatía y un gran interés por la biología y el cuidado del bienestar humano.",
    careers: ["Medicina", "Odontología", "Bioquímica y Farmacia", "Fisioterapia", "Nutrición"]
  },
  BUS: {
    title: "Ciencias Económicas y Empresariales",
    desc: "Destacas por tu capacidad de liderazgo, persuasión, organización y visión para los negocios y la optimización de recursos.",
    careers: ["Administración de Empresas", "Ingeniería Comercial", "Marketing", "Ingeniería Financiera", "Comercio Internacional"]
  },
  SOC: {
    title: "Ciencias Sociales y Humanidades",
    desc: "Te interesan las relaciones humanas, la justicia, la comunicación y el análisis del comportamiento de la sociedad.",
    careers: ["Derecho", "Psicología", "Comunicación Social", "Relaciones Internacionales", "Pedagogía"]
  },
  ART: {
    title: "Arte y Diseño",
    desc: "Posees una gran creatividad, sensibilidad estética y habilidad para comunicar conceptos a través de medios visuales o sonoros.",
    careers: ["Diseño Gráfico", "Diseño de Interiores", "Artes Plásticas", "Animación Digital", "Moda"]
  }
};

let currentQuestionIndex = 0;
let scores = { ENG: 0, HEA: 0, BUS: 0, SOC: 0, ART: 0 };

document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const startScreen = document.getElementById("intro-container");
  const quizScreen = document.getElementById("quiz-container");
  const resultsScreen = document.getElementById("result-container");
  
  const questionText = document.getElementById("question-text");
  const optionsContainer = document.getElementById("options-container");
  const questionCounter = document.getElementById("question-counter");
  const progressBar = document.getElementById("progress-bar");
  
  startBtn.addEventListener("click", () => {
    // GSAP Out Start Screen
    gsap.to(startScreen, { 
      opacity: 0, 
      y: -20, 
      duration: 0.4, 
      onComplete: () => {
        startScreen.style.display = "none";
        quizScreen.style.display = "flex";
        gsap.fromTo(quizScreen, { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 0.5 });
        loadQuestion();
      }
    });
  });

  function loadQuestion() {
    const q = questions[currentQuestionIndex];
    questionText.textContent = q.text;
    
    // Update Progress
    const progress = ((currentQuestionIndex) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
    questionCounter.textContent = `Pregunta ${currentQuestionIndex + 1} de ${questions.length}`;

    // Render Options
    optionsContainer.innerHTML = "";
    q.options.forEach((opt, index) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.innerHTML = `
        <div class="option-icon"><i class="ph-bold ${opt.icon}"></i></div>
        <span>${opt.text}</span>
      `;
      btn.onclick = () => handleAnswer(opt.category);
      
      // Animate options in
      gsap.fromTo(btn, 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.4, delay: index * 0.1 }
      );
      
      optionsContainer.appendChild(btn);
    });
  }

  function handleAnswer(category) {
    scores[category]++;
    
    // Animate out current question
    gsap.to(questionText, { opacity: 0, x: -30, duration: 0.3 });
    gsap.to(optionsContainer.children, { 
      opacity: 0, 
      x: -30, 
      duration: 0.3, 
      stagger: 0.05,
      onComplete: () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
          // Reset animation state for next
          gsap.set(questionText, { opacity: 1, x: 0 });
          loadQuestion();
        } else {
          showResults();
        }
      }
    });
  }

  function showResults() {
    // Progress bar to 100%
    progressBar.style.width = "100%";
    
    gsap.to(quizScreen, {
      opacity: 0,
      duration: 0.4,
      onComplete: () => {
        quizScreen.style.display = "none";
        
        // Calculate winner
        let maxScore = -1;
        let winnerCat = "ENG";
        for (const [cat, score] of Object.entries(scores)) {
          if (score > maxScore) {
            maxScore = score;
            winnerCat = cat;
          }
        }
        
        const result = categoryData[winnerCat];
        
        document.getElementById("result-career").textContent = result.title;
        document.getElementById("result-desc").textContent = result.desc;
        
        resultsScreen.style.display = "flex";
        gsap.fromTo(resultsScreen, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.2)" });
      }
    });
  }
});
