/**
 * TEST VOCACIONAL INTERACTIVO - VOCACIÓN+
 * 20 Preguntas de Evaluación Rigurosa (Modelo RIASEC Adaptado a Santa Cruz)
 */

const questions = [
  // 1
  {
    text: "1. En tu tiempo libre, ¿cuál de estas actividades despierta más tu entusiasmo y curiosidad?",
    options: [
      { text: "Armar, reparar o configurar dispositivos electrónicos, ensamblar PCs o programar código.", weights: { ENG: 3, COM: 1 } },
      { text: "Investigar sobre primeros auxilios, anatomía humana, salud integral o biotecnología.", weights: { HEA: 3 } },
      { text: "Organizar proyectos, administrar presupuestos, vender o liderar iniciativas comerciales.", weights: { BUS: 3 } },
      { text: "Dibujar, fotografiar, diseñar gráficos, editar videos o crear composiciones artísticas.", weights: { ART: 3, COM: 1 } }
    ]
  },
  // 2
  {
    text: "2. Cuando enfrentas un problema complejo en tu vida diaria o en el colegio, tu enfoque principal es:",
    options: [
      { text: "Buscar una solución lógica, estructurada y basada en fórmulas, sistemas o datos.", weights: { ENG: 3 } },
      { text: "Analizar el bienestar físico y emocional de las personas afectadas para brindar auxilio.", weights: { HEA: 3, SOC: 1 } },
      { text: "Evaluar los costos, beneficios y la estrategia más rentable o eficiente para resolverlo.", weights: { BUS: 3 } },
      { text: "Dialogar, comprender los puntos de vista ajenos y buscar un consenso justo e inclusivo.", weights: { SOC: 3 } }
    ]
  },
  // 3
  {
    text: "3. ¿Qué tipo de lecturas, podcasts o documentales prefieres consumir espontáneamente?",
    options: [
      { text: "Avances tecnológicos, inteligencia artificial, robótica e ingeniería del futuro.", weights: { ENG: 3 } },
      { text: "Descubrimientos médicos, neurociencia, genética e historias de la ciencia clínica.", weights: { HEA: 3 } },
      { text: "Historias de emprendedores de éxito, finanzas personales e inversiones internacionales.", weights: { BUS: 3 } },
      { text: "Debates sociales, leyes, historia de las civilizaciones, política o filosofía.", weights: { SOC: 3, COM: 1 } }
    ]
  },
  // 4
  {
    text: "4. Si fueras el líder de un equipo para un proyecto importante, ¿qué rol asumirías de forma natural?",
    options: [
      { text: "El especialista técnico: resuelves los cálculos, el código o la estructura del prototipo.", weights: { ENG: 3 } },
      { text: "El mediador empático: cuidas el ambiente de trabajo y apoyas a quienes tienen dificultades.", weights: { SOC: 3, HEA: 1 } },
      { text: "El gestor estratégico: defines metas, asignas tareas, controlas el tiempo y la presentación.", weights: { BUS: 3 } },
      { text: "El director creativo: defines la identidad estética, colores, diapositivas y el impacto visual.", weights: { ART: 3, COM: 1 } }
    ]
  },
  // 5
  {
    text: "5. ¿Qué causa social o reto departamental en Santa Cruz te motivaría más a involucrarte activamente?",
    options: [
      { text: "Modernizar la infraestructura urbana, transporte y crear sistemas inteligentes.", weights: { ENG: 3, ART: 1 } },
      { text: "Mejorar la cobertura médica pública y llevar brigadas de salud a zonas periféricas.", weights: { HEA: 3 } },
      { text: "Impulsar pequeñas empresas locales, generar empleo formal y dinamizar la economía.", weights: { BUS: 3 } },
      { text: "Promover el respeto a los derechos ciudadanos, combatir la violencia y mejorar la educación.", weights: { SOC: 3 } }
    ]
  },
  // 6
  {
    text: "6. Al visitar una ciudad o un espacio arquitectónico nuevo, ¿en qué te fijas primero?",
    options: [
      { text: "La armonía estética, los materiales, la iluminación y el diseño de los espacios.", weights: { ART: 3 } },
      { text: "El dinamismo comercial, los negocios locales y el movimiento económico del lugar.", weights: { BUS: 3 } },
      { text: "La diversidad cultural de la gente, las interacciones sociales y la historia del sitio.", weights: { SOC: 3, COM: 1 } },
      { text: "Las condiciones de higiene, centros de salud cercanos y cuidado ambiental del entorno.", weights: { HEA: 3 } }
    ]
  },
  // 7
  {
    text: "7. ¿Qué tipo de herramientas o programas te resultaría más estimulante aprender a dominar?",
    options: [
      { text: "Lenguajes de programación (Python/JS), simuladores de ingeniería o motores 3D.", weights: { ENG: 3 } },
      { text: "Equipos de laboratorio, microscopios, ultrasonido o instrumental de diagnóstico.", weights: { HEA: 3 } },
      { text: "Software de diseño gráfico, edición de video profesional o maquetación web (Figma/Photoshop).", weights: { ART: 3, COM: 2 } },
      { text: "Tableros de control financiero (Excel avanzado), métricas de inversión o sistemas ERP.", weights: { BUS: 3 } }
    ]
  },
  // 8
  {
    text: "8. ¿En cuál de estos ambientes laborales te sentirías con más pasión y realización personal?",
    options: [
      { text: "En un hospital, clínica, consultorio especializado o laboratorio de análisis.", weights: { HEA: 3 } },
      { text: "En un estudio creativo, agencia de publicidad o productora de contenido audiovisual.", weights: { ART: 3, COM: 2 } },
      { text: "En un bufete jurídico, juzgado, institución pública o aula universitaria.", weights: { SOC: 3 } },
      { text: "En una empresa tecnológica, centro de operaciones de datos o consultoría de ingeniería.", weights: { ENG: 3 } }
    ]
  },
  // 9
  {
    text: "9. Durante tus años escolares, ¿cuáles asignaturas te resultaban más fluidas y atractivas?",
    options: [
      { text: "Matemáticas, Física, Química o Computación.", weights: { ENG: 3 } },
      { text: "Biología, Ciencias Naturales y Anatomía.", weights: { HEA: 3 } },
      { text: "Lenguaje, Literatura, Ciencias Sociales y Filosofía.", weights: { SOC: 3, COM: 1 } },
      { text: "Artes Plásticas, Dibujo Técnico y Expresión Creativa.", weights: { ART: 3 } }
    ]
  },
  // 10
  {
    text: "10. Si pudieras entrevistar a un profesional reconocido en Santa Cruz, ¿a quién preferirías?",
    options: [
      { text: "A un cirujano o investigador biomédico con descubrimientos importantes.", weights: { HEA: 3 } },
      { text: "A un arquitecto proyectista que haya transformado el paisaje urbano cruceño.", weights: { ART: 3 } },
      { text: "A un empresario o ejecutivo que haya creado marcas exitosas en Bolivia.", weights: { BUS: 3 } },
      { text: "A un periodista, líder de opinión o comunicador de alto impacto público.", weights: { COM: 3, SOC: 1 } }
    ]
  },
  // 11
  {
    text: "11. ¿Qué cualidad tuya suelen resaltar tus compañeros o profesores con mayor frecuencia?",
    options: [
      { text: "Tu precisión estética, buen gusto y habilidad para hacer las cosas atractivas.", weights: { ART: 3 } },
      { text: "Tu capacidad analítica, lógica matemática y facilidad para resolver acertijos.", weights: { ENG: 3 } },
      { text: "Tu empatía, paciencia y vocación para escuchar y ayudar a otros.", weights: { SOC: 2, HEA: 2 } },
      { text: "Tu capacidad de convicción, visión de oportunidad e iniciativa comercial.", weights: { BUS: 3 } }
    ]
  },
  // 12
  {
    text: "12. ¿Cómo prefieres comunicar una propuesta importante ante una audiencia?",
    options: [
      { text: "Con un discurso articulado, argumentos jurídicos u opiniones escritas profundas.", weights: { SOC: 3 } },
      { text: "Mediante esquemas técnicos, gráficos de datos precisos y demostraciones prácticas.", weights: { ENG: 3, BUS: 1 } },
      { text: "Con una presentación visualmente deslumbrante, infografías o un video bien producido.", weights: { COM: 3, ART: 1 } },
      { text: "Con una propuesta de negocios destacando el retorno de inversión y las oportunidades.", weights: { BUS: 3 } }
    ]
  },
  // 13
  {
    text: "13. Si tuvieras la oportunidad de hacer una pasantía vacacional de 1 mes, elegirías estar en:",
    options: [
      { text: "Un centro médico o clínica aprendiendo sobre diagnóstico y atención de pacientes.", weights: { HEA: 3 } },
      { text: "Una empresa de software o startups tecnológica programando o testeando aplicaciones.", weights: { ENG: 3 } },
      { text: "Una agencia de marketing digital gestionando redes, marcas y estrategias de comunicación.", weights: { COM: 3, BUS: 1 } },
      { text: "Una fundación social o centro comunitario apoyando el desarrollo de la niñez o juventud.", weights: { SOC: 3 } }
    ]
  },
  // 14
  {
    text: "14. ¿Qué aspecto del funcionamiento de la sociedad actual te parece más fascinante?",
    options: [
      { text: "Cómo los algoritmos, sistemas de IA y redes globales conectan y automatizan el mundo.", weights: { ENG: 3 } },
      { text: "Cómo el marco legal y las leyes garantizan los derechos y la justicia social.", weights: { SOC: 3 } },
      { text: "Cómo los avances biológicos y la medicina prolongan la expectativa y calidad de vida.", weights: { HEA: 3 } },
      { text: "Cómo las marcas y el comercio impulsan la innovación y satisfacen necesidades humanas.", weights: { BUS: 3, COM: 1 } }
    ]
  },
  // 15
  {
    text: "15. Frente a una situación de conflicto o problema ético en tu entorno, tu reacción es:",
    options: [
      { text: "Estudiar el reglamento o leyes aplicables para fundamentar una postura objetiva.", weights: { SOC: 3 } },
      { text: "Ofrecer contención emocional inmediata y velar por la integridad de la persona vulnerada.", weights: { HEA: 2, SOC: 2 } },
      { text: "Crear una campaña comunicacional o publicar contenido para concientizar a la comunidad.", weights: { COM: 3 } },
      { text: "Buscar una solución pragmática de negociación donde ambas partes ganen algo.", weights: { BUS: 3 } }
    ]
  },
  // 16
  {
    text: "16. ¿Cuál de estos proyectos personales te causaría mayor satisfacción haber completado?",
    options: [
      { text: "Diseñar la maqueta de una vivienda sostenible o crear la identidad de una marca.", weights: { ART: 3 } },
      { text: "Desarrollar una aplicación móvil o un sistema automatizado funcional.", weights: { ENG: 3 } },
      { text: "Lanzar tu propia tienda o emprendimiento y lograr rentabilidad económica.", weights: { BUS: 3 } },
      { text: "Escribir un libro, guía educativa o liderar un movimiento social en tu ciudad.", weights: { SOC: 3, COM: 1 } }
    ]
  },
  // 17
  {
    text: "17. En una feria científica y tecnológica universitaria, ¿qué módulo te atraería de inmediato?",
    options: [
      { text: "Simuladores de cirugía, prótesis biomédicas y tecnología hospitalaria.", weights: { HEA: 3, ENG: 1 } },
      { text: "Drones, robots autónomos, redes de fibra óptica e inteligencia artificial.", weights: { ENG: 3 } },
      { text: "Plataformas de e-commerce, inversiones en bolsa y modelos de franquicia.", weights: { BUS: 3 } },
      { text: "Estudios de animación 3D, desarrollo de videojuegos y diseño interactivo.", weights: { ART: 3, COM: 1 } }
    ]
  },
  // 18
  {
    text: "18. Al tomar decisiones profesionales cruciales, tu principio orientador sería:",
    options: [
      { text: "El rigor científico, los datos probados y la evidencia lógica imparcial.", weights: { ENG: 3, HEA: 1 } },
      { text: "La vocación de servicio, la ética humana y la ayuda directa al necesitado.", weights: { SOC: 2, HEA: 2 } },
      { text: "La rentabilidad, la eficiencia operativa y la autonomía financiera.", weights: { BUS: 3 } },
      { text: "La libertad de expresión, la innovación estética y la trascendencia cultural.", weights: { ART: 3, COM: 1 } }
    ]
  },
  // 19
  {
    text: "19. ¿Qué tipo de tarea práctica te resulta más gratificante completar en un día de trabajo?",
    options: [
      { text: "Depurar un código informático o resolver un cálculo técnico complejo.", weights: { ENG: 3 } },
      { text: "Realizar una sesión de orientación, consejería o apoyo psicológico a alguien.", weights: { SOC: 3, HEA: 1 } },
      { text: "Ilustrar un cartel, diseñar un empaque o planificar la decoración de un ambiente.", weights: { ART: 3 } },
      { text: "Cerrar una venta importante, negociar un contrato o dirigir una reunión de metas.", weights: { BUS: 3 } }
    ]
  },
  // 20
  {
    text: "20. Al mirar tu vida profesional a 10 años plazo, te gustaría ser reconocido como:",
    options: [
      { text: "Un innovador tecnológico o ingeniero capaz de resolver problemas complejos.", weights: { ENG: 3 } },
      { text: "Un profesional de la salud comprometido que ha salvado o curado a muchas personas.", weights: { HEA: 3 } },
      { text: "Un empresario o ejecutivo de éxito que genera puestos de trabajo e inversión.", weights: { BUS: 3 } },
      { text: "Un defensor de los derechos, educador o comunicador referente en la sociedad.", weights: { SOC: 3, COM: 2 } }
    ]
  }
];

const profilesData = {
  ENG: {
    title: "Ingeniería, Tecnología y Ciencias Exactas",
    badgeBg: "#BFDBFE",
    badgeColor: "#1E3A8A",
    icon: "ph-cpu",
    desc: "Demuestras un perfil altamente analítico, lógico y orientado a la resolución de retos técnicos. Disfrutas entender la estructura de las cosas, trabajar con algoritmos, matemáticas, desarrollo de software o infraestructura física.",
    careers: [
      { name: "Ingeniería de Sistemas / Software", icon: "ph-gear", color: "#2563EB", bg: "#EFF6FF", unis: "UAGRM, UPSA, UCB, UTEPSA, UPDS" },
      { name: "Ingeniería Civil / Industrial", icon: "ph-buildings", color: "#2563EB", bg: "#EFF6FF", unis: "UAGRM, UPSA, UCB" },
      { name: "Ingeniería Mecatrónica / Redes", icon: "ph-cpu", color: "#2563EB", bg: "#EFF6FF", unis: "UPSA, UTEPSA, UAGRM" }
    ]
  },
  HEA: {
    title: "Ciencias de la Salud y Biomédicas",
    badgeBg: "#FBCFE8",
    badgeColor: "#9D174D",
    icon: "ph-heartbeat",
    desc: "Tienes una marcada vocación de servicio humano, empatía profunda e interés genuino por la biología, la prevención de enfermedades y el cuidado del cuerpo humano.",
    careers: [
      { name: "Medicina Humana", icon: "ph-heartbeat", color: "#EF4444", bg: "#FEF2F2", unis: "UAGRM, UCB, UCEBOL" },
      { name: "Odontología / Bioquímica", icon: "ph-first-aid", color: "#EF4444", bg: "#FEF2F2", unis: "UAGRM, UCEBOL" },
      { name: "Fisioterapia / Nutrición", icon: "ph-activity", color: "#EF4444", bg: "#FEF2F2", unis: "UCEBOL, UAGRM" }
    ]
  },
  BUS: {
    title: "Ciencias Económicas, Administrativas y Negocios",
    badgeBg: "#A7F3D0",
    badgeColor: "#065F46",
    icon: "ph-chart-line-up",
    desc: "Posees visión estratégica, destreza para el liderazgo, la planificación de proyectos y la gestión financiera. Te estimula el mundo corporativo, el comercio y el emprendimiento.",
    careers: [
      { name: "Administración de Empresas", icon: "ph-chart-line-up", color: "#059669", bg: "#ECFDF5", unis: "UAGRM, UPSA, UCB, UPDS" },
      { name: "Ingeniería Comercial / Finanzas", icon: "ph-briefcase", color: "#059669", bg: "#ECFDF5", unis: "UPSA, UCB, UAGRM" },
      { name: "Marketing & Ecommerce", icon: "ph-trend-up", color: "#059669", bg: "#ECFDF5", unis: "UPSA, UTEPSA, UPDS" }
    ]
  },
  SOC: {
    title: "Ciencias Sociales, Humanidades y Derecho",
    badgeBg: "#E9D5FF",
    badgeColor: "#7C3AED",
    icon: "ph-scales",
    desc: "Destacas por tu capacidad crítica, sensibilidad social, habilidades de comunicación verbal y pensamiento ético. Te apasionan las leyes, la psicología humana, la justicia y la enseñanza.",
    careers: [
      { name: "Derecho", icon: "ph-scales", color: "#7C3AED", bg: "#F5F3FF", unis: "UAGRM, UCB, UPSA, UPDS" },
      { name: "Psicología", icon: "ph-brain", color: "#7C3AED", bg: "#F5F3FF", unis: "UAGRM, UCB, UPSA" },
      { name: "Educación / Pedagogía", icon: "ph-chalkboard-teacher", color: "#7C3AED", bg: "#F5F3FF", unis: "UAGRM, UCB" }
    ]
  },
  ART: {
    title: "Arte, Arquitectura y Diseño Visual",
    badgeBg: "#FCD34D",
    badgeColor: "#92400E",
    icon: "ph-paint-brush-broad",
    desc: "Cuentas con alta sensibilidad estética, capacidad espacial y un talento creativo para comunicar ideas a través de imágenes, arquitectura, diseño gráfico e identidad de marcas.",
    careers: [
      { name: "Arquitectura", icon: "ph-house", color: "#D97706", bg: "#FFFBEB", unis: "UAGRM, UPSA, UCB" },
      { name: "Diseño Gráfico / Digital", icon: "ph-paint-brush-broad", color: "#D97706", bg: "#FFFBEB", unis: "UPSA, UAGRM, UTEPSA" },
      { name: "Diseño de Interiores", icon: "ph-palette", color: "#D97706", bg: "#FFFBEB", unis: "UPSA, UTEPSA" }
    ]
  },
  COM: {
    title: "Comunicación, Periodismo y Medios Digitales",
    badgeBg: "#CFFAFE",
    badgeColor: "#155E75",
    icon: "ph-megaphone",
    desc: "Posees gran fluidez expresiva, facilidad para sintetizar información y conectar con audiencias a través de redes, medios audiovisuales, publicidad y periodismo.",
    careers: [
      { name: "Comunicación Social", icon: "ph-megaphone", color: "#0891B2", bg: "#ECFEFF", unis: "UAGRM, UCB, UPSA" },
      { name: "Publicidad & Medios Digitales", icon: "ph-video-camera", color: "#0891B2", bg: "#ECFEFF", unis: "UPSA, UTEPSA" },
      { name: "Periodismo Digital", icon: "ph-broadcast", color: "#0891B2", bg: "#ECFEFF", unis: "UCB, UAGRM" }
    ]
  }
};

let currentQuestionIndex = 0;
let userScores = { ENG: 0, HEA: 0, BUS: 0, SOC: 0, ART: 0, COM: 0 };
let currentSelection = null;

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

  // Reset State
  function resetTest() {
    currentQuestionIndex = 0;
    userScores = { ENG: 0, HEA: 0, BUS: 0, SOC: 0, ART: 0, COM: 0 };
    currentSelection = null;
  }
  
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      resetTest();
      startScreen.style.display = "none";
      resultsScreen.style.display = "none";
      quizScreen.style.display = "block";
      loadQuestion();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (!currentSelection) {
        alert("Por favor selecciona una opción antes de continuar.");
        return;
      }
      
      // Accumulate Weights
      for (const [code, pts] of Object.entries(currentSelection.weights)) {
        userScores[code] = (userScores[code] || 0) + pts;
      }
      
      currentQuestionIndex++;
      
      if (currentQuestionIndex < questions.length) {
        loadQuestion();
      } else {
        showResults();
      }
    });
  }

  function loadQuestion() {
    currentSelection = null;
    const q = questions[currentQuestionIndex];
    questionText.textContent = q.text;
    
    // Disable next button until selection
    if (nextBtn) {
      nextBtn.style.opacity = "0.6";
      nextBtn.style.cursor = "not-allowed";
    }

    // Progress Bar
    const totalQ = questions.length;
    const currentNum = currentQuestionIndex + 1;
    const progressPct = Math.round((currentNum / totalQ) * 100);
    
    if (progressBar) progressBar.style.width = `${progressPct}%`;
    if (questionCounter) questionCounter.textContent = `Pregunta ${currentNum} de ${totalQ}`;

    // Render Options
    optionsContainer.innerHTML = "";
    const letters = ['A', 'B', 'C', 'D'];

    q.options.forEach((opt, index) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "test-option";
      btn.setAttribute("aria-label", `Opción ${letters[index]}: ${opt.text}`);
      
      btn.innerHTML = `
        <span class="radio-circle"></span>
        <span class="option-letter">${letters[index]}</span>
        <span class="option-text">${opt.text}</span>
      `;

      btn.onclick = () => {
        // Deselect all
        document.querySelectorAll('.test-option').forEach(el => el.classList.remove('selected'));
        // Select this
        btn.classList.add('selected');
        currentSelection = opt;

        // Enable Next Button
        if (nextBtn) {
          nextBtn.style.opacity = "1";
          nextBtn.style.cursor = "pointer";
        }
      };
      
      optionsContainer.appendChild(btn);
    });
  }

  function showResults() {
    if (typeof confetti === 'function') {
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.5 }
      });
    }
    
    quizScreen.style.display = "none";
    
    // Sort profiles by score
    const sortedProfiles = Object.keys(userScores).map(code => ({
      code,
      score: userScores[code]
    })).sort((a, b) => b.score - a.score);

    const winnerCode = sortedProfiles[0].code;
    const runnerUpCode = sortedProfiles[1].code;
    const winnerData = profilesData[winnerCode];
    const runnerUpData = profilesData[runnerUpCode];

    // Calculate total points
    const totalPoints = Object.values(userScores).reduce((a, b) => a + b, 0) || 1;
    const matchPct = Math.min(99, Math.round((sortedProfiles[0].score / totalPoints) * 220));

    // Render Results HTML
    const resultContainer = document.getElementById("result-container");
    if (resultContainer) {
      resultContainer.innerHTML = `
        <div style="max-width: 780px; margin: 0 auto; text-align: center;">
          
          <div style="display: inline-block; background: ${winnerData.badgeBg}; color: ${winnerData.badgeColor}; font-family: 'Fredoka', sans-serif; font-size: 0.9rem; font-weight: 700; padding: 6px 18px; border-radius: 9999px; margin-bottom: 12px;">
            PERFIL DOMINANTE (${matchPct}% DE COMPATIBILIDAD)
          </div>

          <h2 style="font-family: 'Fredoka', sans-serif; font-size: clamp(1.8rem, 3.5vw, 2.4rem); color: #1a1a2e; margin-bottom: 12px; line-height: 1.2;">
            ${winnerData.title}
          </h2>

          <p style="font-family: 'Nunito', sans-serif; font-size: 1rem; color: #4B5563; line-height: 1.6; max-width: 650px; margin: 0 auto 24px;">
            ${winnerData.desc}
          </p>

          <!-- CARRERAS RECOMENDADAS -->
          <div style="background: #FFFFFF; border-radius: 20px; border: 2px solid #E9D5FF; padding: 24px; margin-bottom: 24px; text-align: left;">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 16px;">
              <span style="font-size: 1.2rem; color: #7C3AED;"><i class="ph-fill ph-star-four"></i></span>
              <h3 style="font-family: 'Fredoka', sans-serif; font-size: 1.1rem; color: #1a1a2e;">CARRERAS RECOMENDADAS EN SANTA CRUZ</h3>
            </div>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 14px;">
              ${winnerData.careers.map(c => `
                <div style="background: #F9FAFB; border: 1.5px solid #E5E7EB; border-radius: 14px; padding: 16px; display: flex; flex-direction: column; gap: 8px;">
                  <div style="width: 44px; height: 44px; border-radius: 12px; background: ${c.bg}; color: ${c.color}; display: flex; align-items: center; justify-content: center; font-size: 1.4rem;">
                    <i class="ph-fill ${c.icon}"></i>
                  </div>
                  <strong style="font-family: 'Fredoka', sans-serif; font-size: 1rem; color: #1a1a2e;">${c.name}</strong>
                  <span style="font-family: 'Nunito', sans-serif; font-size: 0.78rem; color: #6B7280; font-weight: 600;">Universidades: ${c.unis}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- ÁREA COMPLEMENTARIA -->
          <div style="background: #F5F3FF; border-radius: 16px; border: 2px solid #E9D5FF; padding: 20px; margin-bottom: 28px; text-align: left; display: flex; align-items: center; gap: 16px; flex-wrap: wrap;">
            <div style="width: 48px; height: 48px; border-radius: 50%; background: #E9D5FF; color: #7C3AED; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; flex-shrink: 0;">
              <i class="ph-fill ph-arrows-merge"></i>
            </div>
            <div style="flex: 1; min-width: 240px;">
              <span style="font-family: 'Fredoka', sans-serif; font-size: 0.8rem; font-weight: 700; color: #7C3AED; text-transform: uppercase;">Área Complementaria Recomenda</span>
              <h4 style="font-family: 'Fredoka', sans-serif; font-size: 1.05rem; color: #1a1a2e; margin-top: 2px;">${runnerUpData.title}</h4>
              <p style="font-family: 'Nunito', sans-serif; font-size: 0.85rem; color: #6B7280; margin-top: 2px;">
                Tus respuestas muestran también una fuerte inclinación secundaria hacia esta área.
              </p>
            </div>
          </div>

          <!-- CTAS -->
          <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
            <a href="carreras.html" class="hero-btn hero-btn-primary">EXPLORAR CARRERAS →</a>
            <a href="universidades.html" class="hero-btn hero-btn-outline">VER UNIVERSIDADES</a>
            <button id="restart-btn" class="hero-btn hero-btn-outline" style="border-color: #7C3AED; color: #7C3AED;">
              <i class="ph-bold ph-arrow-counter-clockwise"></i> REPETIR TEST
            </button>
          </div>

        </div>
      `;

      const restartBtn = document.getElementById("restart-btn");
      if (restartBtn) {
        restartBtn.addEventListener("click", () => {
          resultsScreen.style.display = "none";
          startScreen.style.display = "block";
        });
      }
    }
    
    resultsScreen.style.display = "block";
  }
});
