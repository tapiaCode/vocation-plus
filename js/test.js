/**
 * Vocational Test Logic
 * 20 questions mapping to 5 main categories:
 * - ENG: Ingeniería y Tecnología
 * - HEA: Ciencias de la Salud
 * - BUS: Ciencias Económicas y Empresariales
 * - SOC: Ciencias Sociales y Humanidades
 * - ART: Arte y Diseño
 */

const questions = [
  // 1-4
  { text: "¿Qué actividad disfrutas más en tu tiempo libre?", options: [
    { text: "Armar, desarmar o reparar aparatos electrónicos o software.", category: "ENG", icon: "ph-wrench" },
    { text: "Leer sobre avances médicos, biología o primeros auxilios.", category: "HEA", icon: "ph-first-aid" },
    { text: "Organizar proyectos, planificar presupuestos o liderar equipos.", category: "BUS", icon: "ph-chart-bar" },
    { text: "Dibujar, pintar o crear diseños y contenido visual.", category: "ART", icon: "ph-palette" }
  ]},
  { text: "En un trabajo de equipo en el colegio, usualmente tú eres quien:", options: [
    { text: "Redacta el informe y cuida la ortografía y el mensaje.", category: "SOC", icon: "ph-pen-nib" },
    { text: "Aporta ideas creativas sobre la presentación estética del proyecto.", category: "ART", icon: "ph-paint-brush" },
    { text: "Asigna tareas y asegura que se cumplan las metas y tiempos.", category: "BUS", icon: "ph-users" },
    { text: "Se encarga del análisis lógico, matemático o técnico.", category: "ENG", icon: "ph-calculator" }
  ]},
  { text: "¿Qué tipo de documentales o contenidos prefieres ver?", options: [
    { text: "El universo, tecnología espacial o ingeniería de infraestructura.", category: "ENG", icon: "ph-rocket" },
    { text: "El cuerpo humano, ciencias biológicas o avances clínicos.", category: "HEA", icon: "ph-heartbeat" },
    { text: "Historia, comportamiento humano y problemas de la sociedad.", category: "SOC", icon: "ph-brain" },
    { text: "Emprendedores de éxito, startups y estrategias comerciales.", category: "BUS", icon: "ph-briefcase" }
  ]},
  { text: "Si pudieras aportar a resolver un reto mundial, ¿cuál elegirías?", options: [
    { text: "Desarrollar soluciones médicas para enfermedades complejas.", category: "HEA", icon: "ph-pill" },
    { text: "Impulsar la economía y crear oportunidades de empleo.", category: "BUS", icon: "ph-globe-hemisphere-west" },
    { text: "Crear tecnologías sostenibles y energías limpias.", category: "ENG", icon: "ph-lightning" },
    { text: "Garantizar la justicia, educación y derechos ciudadanos.", category: "SOC", icon: "ph-scales" }
  ]},
  // 5-8
  { text: "¿Cómo prefieres estructurar y comunicar tus ideas?", options: [
    { text: "Mediante diagramas, mapas de procesos o modelos lógicos.", category: "ENG", icon: "ph-graph" },
    { text: "A través de expresiones visuales, bocetos o producciones.", category: "ART", icon: "ph-camera" },
    { text: "Escribiendo ensayos, debatiendo o argumentando oralmente.", category: "SOC", icon: "ph-chat-circle-text" },
    { text: "Presentando propuestas comerciales y metas cuantificables.", category: "BUS", icon: "ph-presentation-chart" }
  ]},
  { text: "Si te regalan un libro para leer el fin de semana, prefieres que sea de:", options: [
    { text: "Anatomía, salud integral o biotecnología.", category: "HEA", icon: "ph-apple-logo" },
    { text: "Diseño, historia del arte o producción audiovisual.", category: "ART", icon: "ph-scissors" },
    { text: "Estrategia de negocios y modelos de innovación.", category: "BUS", icon: "ph-money" },
    { text: "Derecho, sociología o filosofía aplicada.", category: "SOC", icon: "ph-book-open" }
  ]},
  { text: "¿Qué materias escolares te resultan más estimulantes?", options: [
    { text: "Matemáticas, Física o Computación.", category: "ENG", icon: "ph-math-operations" },
    { text: "Biología y Química.", category: "HEA", icon: "ph-flask" },
    { text: "Artes plásticas, Música o Expresión.", category: "ART", icon: "ph-music-note" },
    { text: "Historia, Ciencias Sociales o Literatura.", category: "SOC", icon: "ph-books" }
  ]},
  { text: "¿En qué entorno profesional te proyectas a futuro?", options: [
    { text: "Un centro médico, hospital o laboratorio de análisis.", category: "HEA", icon: "ph-hospital" },
    { text: "Un bufete, juzgado, institución social o aula.", category: "SOC", icon: "ph-chalkboard-teacher" },
    { text: "Una empresa corporativa dirigiendo equipos y metas.", category: "BUS", icon: "ph-buildings" },
    { text: "Un estudio creativo, agencia de diseño o producción.", category: "ART", icon: "ph-pen" }
  ]},
  // 9-12
  { text: "¿Qué característica personal destaca más en ti?", options: [
    { text: "Analítico y orientada al detalle técnico.", category: "ENG", icon: "ph-magnifying-glass" },
    { text: "Empático y comprometido con el bienestar de otros.", category: "HEA", icon: "ph-hands-clapping" },
    { text: "Persuasivo, organizado y estratégico.", category: "BUS", icon: "ph-trend-up" },
    { text: "Creativo, intuitivo y estético.", category: "ART", icon: "ph-lightbulb" }
  ]},
  { text: "Al interactuar con un producto o aplicación digital, observas:", options: [
    { text: "La armonía visual, interfaz de usuario y colores.", category: "ART", icon: "ph-swatches" },
    { text: "Su rendimiento, velocidad y lógica de programación.", category: "ENG", icon: "ph-code" },
    { text: "El modelo de negocio e impacto comercial.", category: "BUS", icon: "ph-currency-dollar" },
    { text: "El impacto en las personas y su utilidad social.", category: "SOC", icon: "ph-users-three" }
  ]},
  { text: "¿Qué situación te genera mayor motivación para actuar?", options: [
    { text: "Resolver un fallo técnico o sistema defectuoso.", category: "ENG", icon: "ph-warning" },
    { text: "Brindar alivio o atención médica a alguien necesitado.", category: "HEA", icon: "ph-bandaids" },
    { text: "Defender una causa justa frente a una arbitrariedad.", category: "SOC", icon: "ph-scales" },
    { text: "Transformar un espacio feo en una obra armónica y funcional.", category: "ART", icon: "ph-sparkle" }
  ]},
  { text: "En un proyecto interactivo o de simulación, prefieres:", options: [
    { text: "Administrar recursos, presupuestos y crecimiento económico.", category: "BUS", icon: "ph-city" },
    { text: "Desarrollar la narrativa, guión y profundidad de historia.", category: "SOC", icon: "ph-book-bookmark" },
    { text: "Programar la lógica, mecánicas y resolver acertijos complejos.", category: "ENG", icon: "ph-puzzle-piece" },
    { text: "Diseñar los personajes, escenarios y estética del mundo.", category: "ART", icon: "ph-t-shirt" }
  ]},
  // 13-16
  { text: "Si organizas una actividad comunitaria o escolar, te ocupas de:", options: [
    { text: "El protocolo de primeros auxilios y salud de los asistentes.", category: "HEA", icon: "ph-medical-cross" },
    { text: "El presupuesto, administración y cobro de inscripciones.", category: "BUS", icon: "ph-wallet" },
    { text: "El montaje de equipos, sonido e infraestructura técnica.", category: "ENG", icon: "ph-tent" },
    { text: "Mediación de grupo, acogida y conducción del evento.", category: "SOC", icon: "ph-smiley" }
  ]},
  { text: "¿Qué noticia captaría de inmediato tu atención?", options: [
    { text: "\"Avance biológico prometedor en investigación clínica\".", category: "HEA", icon: "ph-dna" },
    { text: "\"Aprobación de marco legal para protección de garantías\".", category: "SOC", icon: "ph-gavel" },
    { text: "\"Innovación en arquitectura de procesadores de alto rendimiento\".", category: "ENG", icon: "ph-cpu" },
    { text: "\"Empresa emergente regional duplica su valor en el mercado\".", category: "BUS", icon: "ph-rocket-launch" }
  ]},
  { text: "¿Qué competencia técnica te gustaría perfeccionar?", options: [
    { text: "Modelado 3D, animación e iluminación digital.", category: "ART", icon: "ph-cube" },
    { text: "Gestión de inversiones, finanzas y mercado comercial.", category: "BUS", icon: "ph-chart-line" },
    { text: "Procedimientos de diagnóstico clínico y laboratorio.", category: "HEA", icon: "ph-syringe" },
    { text: "Desarrollo de software y arquitectura de redes.", category: "ENG", icon: "ph-terminal" }
  ]},
  { text: "¿Qué instrumento o herramienta te resulta más fascinante?", options: [
    { text: "Un microscopio de laboratorio.", category: "HEA", icon: "ph-microscope" },
    { text: "Una cámara fotográfica cinematográfica.", category: "ART", icon: "ph-camera" },
    { text: "Un texto o tratado jurídico histórico.", category: "SOC", icon: "ph-scroll" },
    { text: "Una tarjeta de circuito impreso o procesador.", category: "ENG", icon: "ph-hard-drive" }
  ]},
  // 17-20
  { text: "Si tuvieras recursos para emprender, invertirías en:", options: [
    { text: "Una empresa de desarrollo tecnológico o robótica.", category: "ENG", icon: "ph-robot" },
    { text: "Un centro médico o clínica especializada.", category: "HEA", icon: "ph-hospital" },
    { text: "Una cadena comercial o consultora de negocios.", category: "BUS", icon: "ph-storefront" },
    { text: "Un estudio de diseño, moda o galería cultural.", category: "ART", icon: "ph-paint-roller" }
  ]},
  { text: "¿Cuál es tu fortaleza al presentar un trabajo ante un público?", options: [
    { text: "Mi facilidad de palabra, debate y defensa de derechos.", category: "SOC", icon: "ph-megaphone" },
    { text: "Mi capacidad de convicción y negociación estratégica.", category: "BUS", icon: "ph-handshake" },
    { text: "La calidad visual de mis diapositivas y soporte estético.", category: "ART", icon: "ph-monitor" },
    { text: "El rigor de mis datos, estadísticas y evidencia lógica.", category: "ENG", icon: "ph-database" }
  ]},
  { text: "Al visitar un centro cultural o exposición, disfrutas más de:", options: [
    { text: "La sala de inventos tecnológicos e ingeniería.", category: "ENG", icon: "ph-gear" },
    { text: "La exhibición de pintura, escultura y diseño.", category: "ART", icon: "ph-frame-corners" },
    { text: "La sección de historia social, leyes y civilizaciones.", category: "SOC", icon: "ph-globe" },
    { text: "La sala de ciencias naturales, anatomía y biodiversidad.", category: "HEA", icon: "ph-leaf" }
  ]},
  { text: "Al concluir tu formación profesional, tu mayor satisfacción será haber:", options: [
    { text: "Liderado proyectos sostenibles y con alta eficiencia comercial.", category: "BUS", icon: "ph-star" },
    { text: "Defendido causas justas o contribuido a la educación.", category: "SOC", icon: "ph-student" },
    { text: "Salvado vidas o mejorado la salud física de las personas.", category: "HEA", icon: "ph-heart" },
    { text: "Creaciones estéticas visuales que inspiran a la comunidad.", category: "ART", icon: "ph-image" }
  ]}
];

const categoryData = {
  ENG: {
    title: "Ingeniería y Tecnología",
    desc: "Destacas por tu pensamiento analítico, aptitud matemática y capacidad para diseñar soluciones tecnológicas, de software e infraestructura.",
    careers: ["Ingeniería de Sistemas", "Ingeniería Civil", "Ingeniería Industrial", "Arquitectura", "Redes y Telecomunicaciones"]
  },
  HEA: {
    title: "Ciencias de la Salud",
    desc: "Tienes una marcada vocación de servicio, empatía hacia los demás e interés profundo por la biología, la medicina y el cuidado del ser humano.",
    careers: ["Medicina", "Odontología", "Bioquímica y Farmacia", "Fisioterapia", "Nutrición"]
  },
  BUS: {
    title: "Ciencias Económicas y Empresariales",
    desc: "Posees visión estratégica, habilidad para el liderazgo, la gestión de proyectos comerciales y el desarrollo de emprendimientos.",
    careers: ["Administración de Empresas", "Ingeniería Comercial", "Marketing", "Ingeniería Financiera", "Comercio Internacional"]
  },
  SOC: {
    title: "Ciencias Sociales y Humanidades",
    desc: "Te interesan las leyes, la justicia social, la comunicación, la enseñanza y el análisis profundo de la sociedad humana.",
    careers: ["Derecho", "Psicología", "Comunicación Social", "Relaciones Internacionales", "Pedagogía"]
  },
  ART: {
    title: "Arte, Diseño y Creatividad Visual",
    desc: "Cuentas con alta sensibilidad estética, originalidad y destreza para transmitir conceptos complejos a través de medios visuales.",
    careers: ["Diseño Gráfico", "Diseño de Interiores", "Artes Plásticas", "Animación Digital", "Diseño de Moda"]
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
  const progressPercent = document.getElementById("progress-percent");
  
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      gsap.to(startScreen, { 
        opacity: 0, 
        y: -20, 
        duration: 0.4, 
        onComplete: () => {
          startScreen.style.display = "none";
          quizScreen.style.display = "flex";
          gsap.fromTo(quizScreen, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5 });
          loadQuestion();
        }
      });
    });
  }

  function loadQuestion() {
    const q = questions[currentQuestionIndex];
    questionText.textContent = q.text;
    
    // Update Progress Bar & Percentage
    const progressRatio = currentQuestionIndex / questions.length;
    const progressPctVal = Math.round(progressRatio * 100);
    progressBar.style.transform = `scaleX(${progressRatio})`;
    if (progressPercent) progressPercent.textContent = `${progressPctVal}%`;
    questionCounter.innerHTML = `<i class="ph-bold ph-question"></i> Pregunta ${currentQuestionIndex + 1} de ${questions.length}`;

    // Render Options
    optionsContainer.innerHTML = "";
    q.options.forEach((opt, index) => {
      const btn = document.createElement("button");
      btn.className = "option-card-btn";
      btn.innerHTML = `
        <div class="option-icon-box"><i class="ph-bold ${opt.icon}"></i></div>
        <span>${opt.text}</span>
      `;
      btn.onclick = () => handleAnswer(opt.category);
      
      // GSAP Option entrance
      gsap.fromTo(btn, 
        { opacity: 0, y: 15 }, 
        { opacity: 1, y: 0, duration: 0.35, delay: index * 0.08 }
      );
      
      optionsContainer.appendChild(btn);
    });
  }

  function handleAnswer(category) {
    scores[category]++;
    
    gsap.to(questionText, { opacity: 0, x: -20, duration: 0.25 });
    gsap.to(optionsContainer.children, { 
      opacity: 0, 
      x: -20, 
      duration: 0.25, 
      stagger: 0.04,
      onComplete: () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
          gsap.set(questionText, { opacity: 1, x: 0 });
          loadQuestion();
        } else {
          showResults();
        }
      }
    });
  }

  function showResults() {
    progressBar.style.transform = "scaleX(1)";
    if (progressPercent) progressPercent.textContent = "100%";
    
    // Trigger Canvas Confetti if available
    if (typeof confetti === 'function') {
      confetti({
        particleCount: 130,
        spread: 90,
        origin: { y: 0.6 }
      });
    }
    
    gsap.to(quizScreen, {
      opacity: 0,
      duration: 0.4,
      onComplete: () => {
        quizScreen.style.display = "none";
        
        // Calculate category winner
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
        
        const careersContainer = document.getElementById("result-careers");
        if (careersContainer) {
          careersContainer.innerHTML = "";
          result.careers.forEach(careerName => {
            careersContainer.innerHTML += `
              <div class="result-career-chip">
                <i class="ph-bold ph-check-circle" style="color: var(--color-accent-teal);"></i>
                ${careerName}
              </div>
            `;
          });
        }
        
        resultsScreen.style.display = "flex";
        gsap.fromTo(resultsScreen, { opacity: 0, scale: 0.94 }, { opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" });
      }
    });
  }
});
