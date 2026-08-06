/**
 * CARRERAS UNIVERSITARIAS - INFORMACIÓN Y MALLA CURRICULAR ESTÁNDAR
 */

const careersData = {
  ingenieria: {
    title: "Ingeniería de Sistemas",
    category: "TECNOLOGÍA & CIENCIAS EXACTAS",
    categoryBg: "#BFDBFE",
    categoryColor: "#1E3A8A",
    degree: "Licenciatura (5 Años / 10 Semestres)",
    icon: "ph-gear",
    color: "#2563EB",
    bg: "#EFF6FF",
    description: "La carrera de Ingeniería de Sistemas forma profesionales capaces de analizar, diseñar, desarrollar e implementar soluciones de software, arquitecturas de red e inteligencia artificial para optimizar procesos en empresas y la sociedad.",
    fieldOfWork: [
      "Desarrollo de Software Web, Móvil y Cloud",
      "Ciberseguridad y Administración de Redes",
      "Gestión de Proyectos de Inteligencia Artificial y Datos",
      "Consultoría Tecnológica para Startups y Empresas"
    ],
    mallaCurricular: [
      { semestre: "1er Semestre", materias: ["Cálculo I", "Álgebra Lineal", "Introducción a la Programación", "Física General I", "Taller de Redacción Técnica"] },
      { semestre: "2do Semestre", materias: ["Cálculo II", "Física General II", "Programación Orientada a Objetos", "Estructuras Discretas", "Estadística I"] },
      { semestre: "3er Semestre", materias: ["Estructura de Datos", "Arquitectura de Computadoras", "Bases de Datos I", "Ecuaciones Diferenciales", "Estadística II"] },
      { semestre: "4to Semestre", materias: ["Sistemas Operativos", "Bases de Datos II", "Análisis y Diseño de Sistemas", "Redes de Computadoras I", "Investigación Operativa"] },
      { semestre: "5to Semestre", materias: ["Ingeniería de Software I", "Redes de Computadoras II", "Desarrollo de Aplicaciones Web", "Lenguajes de Programación", "Gestión Empresarial"] },
      { semestre: "6to Semestre", materias: ["Ingeniería de Software II", "Sistemas Distribuidos", "Desarrollo Móvil", "Seguridad Informática", "Economía Digital"] },
      { semestre: "7mo Semestre", materias: ["Inteligencia Artificial I", "Arquitectura de Software", "Auditoría de Sistemas", "Gestión de Proyectos TI (Agile/Scrum)", "Derecho Informático"] },
      { semestre: "8vo Semestre", materias: ["Ciencia de Datos & Big Data", "Cloud Computing & DevOps", "Taller de Grado I", "Emprendimiento Tecnológico", "Ética Profesional"] },
      { semestre: "9no & 10mo Semestre", materias: ["Taller de Grado II / Tesis", "Práctica Profesional Controlada en Empresa", "Seminario de Titulación"] }
    ],
    universities: [
      { name: "UAGRM", desc: "Facultad de Ciencias de la Computación (Pública)", link: "universidades.html" },
      { name: "UPSA", desc: "Facultad de Ingeniería (Privada - CAINCO)", link: "universidades.html" },
      { name: "UCB San Pablo", desc: "Campus Santa Cruz (Privada)", link: "universidades.html" },
      { name: "UTEPSA", desc: "Facultad de Tecnología (Privada)", link: "universidades.html" },
      { name: "UPDS", desc: "Modalidad Modular (Privada)", link: "universidades.html" }
    ]
  },

  medicina: {
    title: "Medicina Humana",
    category: "CIENCIAS DE LA SALUD",
    categoryBg: "#FBCFE8",
    categoryColor: "#9D174D",
    degree: "Licenciatura y Médico Cirujano (6 Años / 12 Semestres)",
    icon: "ph-heartbeat",
    color: "#EF4444",
    bg: "#FEF2F2",
    description: "Formación científica, humanista y ética orientada a la prevención, diagnóstico, tratamiento y rehabilitación de las enfermedades del ser humano, con un alto sentido de responsabilidad social.",
    fieldOfWork: [
      "Medicina General en Hospitales Públicos y Clínicas Privadas",
      "Especialización Médica (Pediatría, Cirugía, Cardiología, etc.)",
      "Investigación Biomédica y Salud Pública",
      "Gestión de Servicios de Salud y Epidemiología"
    ],
    mallaCurricular: [
      { semestre: "1er Año (Biomédico)", materias: ["Anatomía Humana I", "Histología y Embriología", "Bioquímica Médica", "Salud Pública I", "Genética Humana"] },
      { semestre: "2do Año (Pre-Clínico)", materias: ["Anatomía Humana II", "Fisiología Médica", "Microbiología y Parasitología", "Farmacología General", "Semiología Médica I"] },
      { semestre: "3er Año (Clínico I)", materias: ["Pathología General y Especial", "Semiología Médica II", "Farmacología Aplicada", "Medicina Interna I (Cardiología, Neumología)", "Psicología Médica"] },
      { semestre: "4to Año (Clínico II)", materias: ["Medicina Interna II (Gastroenterología, Nefrología)", "Cirugía General I", "Ginecología y Obstetricia I", "Pediatría I", "Epidemiología"] },
      { semestre: "5to Año (Especialidades)", materias: ["Cirugía General II", "Ginecología y Obstetricia II", "Pediatría II", "Traumatología y Ortopedia", "Medicina Legal y Deontología"] },
      { semestre: "6to Año (Internado Rotatorio)", materias: ["Rotación Hospitalaria en Cirugía", "Rotación en Pediatría", "Rotación en Ginecología", "Rotación en Medicina Interna y Salud Rural (SSSRO)"] }
    ],
    universities: [
      { name: "UAGRM", desc: "Facultad de Ciencias de la Salud Humana (Pública)", link: "universidades.html" },
      { name: "UCB San Pablo", desc: "Facultad de Medicina (Privada)", link: "universidades.html" },
      { name: "UCEBOL", desc: "Facultad de Ciencias de la Salud (Privada - Hospital propio)", link: "universidades.html" }
    ]
  },

  psicologia: {
    title: "Psicología",
    category: "CIENCIAS SOCIALES & SALUD MENTAL",
    categoryBg: "#E9D5FF",
    categoryColor: "#7C3AED",
    degree: "Licenciatura (5 Años / 10 Semestres)",
    icon: "ph-brain",
    color: "#EC4899",
    bg: "#FDF2F8",
    description: "Estudio integral de la mente y la conducta humana. Forma profesionales capacitados en evaluación clínica, psicología organizacional en empresas, apoyo educativo y bienestar psicosocial.",
    fieldOfWork: [
      "Psicología Clínica y Psicoterapia Privada",
      "Gestión de Talento Humano y Selección de Personal en Empresas",
      "Psicología Educativa y Orientación Escolar",
      "Intervención Comunitaria y Salud Mental Pública"
    ],
    mallaCurricular: [
      { semestre: "1er Semestre", materias: ["Introducción a la Psicología", "Bases Biológicas del Comportamiento", "Epistemología de la Psicología", "Sociología", "Taller de Expresión"] },
      { semestre: "2do Semestre", materias: ["Neuroanatomía", "Psicología del Desarrollo I (Niñez)", "Teorías de la Personalidad I", "Métodos de Investigación", "Estadística Aplicada"] },
      { semestre: "3er Semestre", materias: ["Neurofisiología", "Psicología del Desarrollo II (Adolescencia)", "Teorías Psicoanalíticas", "Psicometría I", "Psicología Social I"] },
      { semestre: "4to Semestre", materias: ["Psicopatología I", "Psicología del Desarrollo III (Adultez)", "Teorías Cognitivo-Conductuales", "Psicometría II", "Psicología Educativa"] },
      { semestre: "5to Semestre", materias: ["Psicopatología II", "Evaluación Psicológica Clínica", "Psicología Organizacional I", "Técnicas de Entrevista", "Psicología Sistémica"] },
      { semestre: "6to Semestre", materias: ["Psicoterapia de Adultos", "Psicología Organizacional II (Recursos Humanos)", "Psicología Comunitaria", "Técnicas de Intervención", "Ética Profesional"] },
      { semestre: "7mo & 8vo Semestre", materias: ["Psicoterapia Infantil", "Orientación Vocacional", "Gestión del Talento Humano", "Taller de Grado I", "Psicología Forense"] },
      { semestre: "9no & 10mo Semestre", materias: ["Práctica Pre-Profesional (Clínica/Organizacional/Educativa)", "Taller de Grado II / Tesis"] }
    ],
    universities: [
      { name: "UAGRM", desc: "Facultad de Humanidades (Pública)", link: "universidades.html" },
      { name: "UCB San Pablo", desc: "Departamento de Psicología (Privada)", link: "universidades.html" },
      { name: "UPSA", desc: "Facultad de Humanidades y Comunicación (Privada)", link: "universidades.html" }
    ]
  },

  derecho: {
    title: "Derecho y Ciencias Jurídicas",
    category: "LEYES & JUSTICIA",
    categoryBg: "#E9D5FF",
    categoryColor: "#7C3AED",
    degree: "Licenciatura y Abogado (5 Años / 10 Semestres)",
    icon: "ph-scales",
    color: "#D97706",
    bg: "#FFFBEB",
    description: "Formación en el sistema normativo, leyes constitucionales, derecho civil, comercial, penal y corporativo para la defensa de los derechos, el ejercicio de la abogacía y la asesoría jurídica.",
    fieldOfWork: [
      "Abogacía en Litigios Civiles, Penales y Laborales",
      "Asesoría Jurídica Corporativa y Empresarial",
      "Carrera Judicial (Juez, Fiscal, Defensor Público)",
      "Gestión Pública, Notariado y Diplomacia"
    ],
    mallaCurricular: [
      { semestre: "1er Semestre", materias: ["Introducción al Derecho", "Derecho Romano", "Derecho Constitucional I", "Sociología Jurídica", "Oratoria y Argumentación"] },
      { semestre: "2do Semestre", materias: ["Derecho Civil I (Personas)", "Derecho Constitucional II", "Derecho Político", "Historia del Derecho", "Filosofía del Derecho"] },
      { semestre: "3er Semestre", materias: ["Derecho Civil II (Bienes)", "Derecho Penal I (Parte General)", "Derecho Administrativo I", "Derecho Internacional Público", "Economía Política"] },
      { semestre: "4to Semestre", materias: ["Derecho Civil III (Obligaciones)", "Derecho Penal II (Parte Especial)", "Derecho Administrativo II", "Derecho Laboral I", "Derecho de Familia"] },
      { semestre: "5to Semestre", materias: ["Derecho Civil IV (Contratos)", "Derecho Procesal Penal I", "Derecho Comercial I", "Derecho Laboral II", "Derecho Tributario"] },
      { semestre: "6to Semestre", materias: ["Derecho Procesal Civil I", "Derecho Procesal Penal II", "Derecho Comercial II (Sociedades)", "Derecho Ambiental y Agrario", "Criminología"] },
      { semestre: "7mo & 8vo Semestre", materias: ["Derecho Procesal Civil II", "Derecho Corporativo & Arbitraje", "Medios Alternativos de Resolución de Conflictos", "Taller de Litigación Oral", "Deontología Jurídica"] },
      { semestre: "9no & 10mo Semestre", materias: ["Práctica Forense en Consultorio Jurídico", "Taller de Grado I y II / Examen de Grado"] }
    ],
    universities: [
      { name: "UAGRM", desc: "Facultad de Ciencias Jurídicas (Pública)", link: "universidades.html" },
      { name: "UCB San Pablo", desc: "Facultad de Derecho (Privada)", link: "universidades.html" },
      { name: "UPSA", desc: "Facultad de Ciencias Jurídicas y Sociales (Privada)", link: "universidades.html" },
      { name: "UPDS", desc: "Facultad de Ciencias Jurídicas (Privada)", link: "universidades.html" }
    ]
  },

  arquitectura: {
    title: "Arquitectura y Urbanismo",
    category: "DISEÑO & CONSTRUCCIÓN",
    categoryBg: "#FCD34D",
    categoryColor: "#92400E",
    degree: "Licenciatura (5 Años / 10 Semestres)",
    icon: "ph-house",
    color: "#8B5CF6",
    bg: "#F5F3FF",
    description: "Disciplina que integra el arte del diseño espacial, la tecnología constructiva y el ordenamiento urbano para proyectar edificaciones sostenibles, funcionales y estéticamente destacadas.",
    fieldOfWork: [
      "Diseño y Proyección de Edificaciones Residenciales y Comerciales",
      "Planificación Urbana y Ordenamiento Territorial",
      "Dirección y Supervisión de Obras de Construcción",
      "Diseño 3D, Renderizado y Modelado BIM"
    ],
    mallaCurricular: [
      { semestre: "1er Semestre", materias: ["Taller de Diseño Arquitectónico I", "Dibujo Arquitectónico & Geometría", "Matemática Aplicada", "Teoría e Historia de la Arquitectura I", "Sistemas Constructivos I"] },
      { semestre: "2do Semestre", materias: ["Taller de Diseño II", "Expresión Gráfica y Bocetos", "Física para Arquitectos", "Historia de la Arquitectura II", "Estructuras I"] },
      { semestre: "3er Semestre", materias: ["Taller de Diseño III", "Modelado digital 2D/3D (AutoCAD/Revit)", "Estructuras II (Hormigón)", "Sistemas Constructivos II", "Arquitectura Bioclimática"] },
      { semestre: "4to Semestre", materias: ["Taller de Diseño IV", "Visualización 3D & Render (V-Ray/Lumion)", "Estructuras III (Metálicas)", "Instalaciones Sanitarias y Eléctricas", "Urbanismo I"] },
      { semestre: "5to & 6to Semestre", materias: ["Taller de Diseño V y VI (Equipamiento)", "Planificación Urbana II", "Gestión y Presupuesto de Obras", "Arquitectura Paisajista", "Restauración del Patrimonio"] },
      { semestre: "7mo & 8vo Semestre", materias: ["Taller de Diseño Complejo", "Metodología BIM Avanzada", "Legislación Urbana y Catastro", "Taller de Proyecto de Grado I", "Arquitectura Sostenible"] },
      { semestre: "9no & 10mo Semestre", materias: ["Taller de Proyecto de Grado II / Proyecto Final", "Práctica Profesional en Empresa de Construcción"] }
    ],
    universities: [
      { name: "UAGRM", desc: "Facultad de Ciencias del Hábitat (Pública)", link: "universidades.html" },
      { name: "UPSA", desc: "Facultad de Arquitectura, Diseño y Arte (Privada)", link: "universidades.html" },
      { name: "UCB San Pablo", desc: "Carrera de Arquitectura (Privada)", link: "universidades.html" }
    ]
  },

  educacion: {
    title: "Educación y Pedagogía",
    category: "HUMANIDADES & ENSEÑANZA",
    categoryBg: "#A7F3D0",
    categoryColor: "#065F46",
    degree: "Licenciatura (4 Años / 8 Semestres)",
    icon: "ph-chalkboard-teacher",
    color: "#10B981",
    bg: "#ECFDF5",
    description: "Formación en teorías del aprendizaje, diseño curricular, tecnologías educativas y gestión de instituciones escolares para liderar la enseñanza del siglo XXI.",
    fieldOfWork: [
      "Docencia en Niveles Primario, Secundario y Universitario",
      "Asesoría Pedagogía y Diseño Curricular en Unidades Educativas",
      "Creación de Contenidos Educativos Digitales e E-Learning",
      "Dirección y Administración de Instituciones Educativas"
    ],
    mallaCurricular: [
      { semestre: "1er Semestre", materias: ["Introducción a la Pedagogía", "Psicología General", "Filosofía de la Educación", "Sociología Educativa", "Taller de Redacción"] },
      { semestre: "2do Semestre", materias: ["Didáctica General", "Psicología del Aprendizaje", "Historia de la Educación en Bolivia", "Investigación Educativa I", "Expresión Oral"] },
      { semestre: "3er Semestre", materias: ["Diseño Curricular I", "Evaluación de Aprendizajes", "Tecnología Educativa I", "Psicopedagogía", "Estadística Educativa"] },
      { semestre: "4to Semestre", materias: ["Diseño Curricular II", "Educación Inclusiva y Necesidades Especiales", "Tecnología Educativa II (E-learning)", "Investigación Educativa II", "Orientación Escolar"] },
      { semestre: "5to & 6to Semestre", materias: ["Gestión y Administración Escolar", "Elaboración de Material Didáctico Digital", "Políticas Educativas y Normativa", "Taller de Práctica Docente I y II"] },
      { semestre: "7mo & 8vo Semestre", materias: ["Práctica Profesional Intensiva en Aula", "Taller de Licenciatura / Tesis de Grado"] }
    ],
    universities: [
      { name: "UAGRM", desc: "Facultad de Humanidades (Pública)", link: "universidades.html" },
      { name: "UCB San Pablo", desc: "Departamento de Educación (Privada)", link: "universidades.html" }
    ]
  },

  comunicacion: {
    title: "Comunicación Social y Digital",
    category: "MEDIOS & CONTENIDO",
    categoryBg: "#CFFAFE",
    categoryColor: "#155E75",
    degree: "Licenciatura (4 Años / 8 Semestres)",
    icon: "ph-megaphone",
    color: "#06B6D4",
    bg: "#ECFEFF",
    description: "Carrera enfocada en la producción informativa, estrategia transmedia, gestión de reputación corporativa, comunicación institucional y creación de contenidos audiovisuales.",
    fieldOfWork: [
      "Periodismo Digital, Prensa, Radio y Televisión",
      "Dirección de Comunicación Institucional y Relaciones Públicas",
      "Estrategia de Contenidos para Redes Sociales y SEO",
      "Producción Audiovisual, Podcasting y Documentales"
    ],
    mallaCurricular: [
      { semestre: "1er Semestre", materias: ["Teoría de la Comunicación I", "Redacción Periodística I", "Historia de la Comunicación", "Sociología de la Comunicación", "Taller de Fotografía"] },
      { semestre: "2do Semestre", materias: ["Teoría de la Comunicación II", "Redacción Periodística II", "Lenguaje Audiovisual", "Semiótica", "Taller de Edición de Audio"] },
      { semestre: "3er Semestre", materias: ["Periodismo Digital & Transmedia", "Producción de Televisión y Video", "Comunicación Organizacional I", "Opinión Pública", "Metodología de la Investigación"] },
      { semestre: "4to Semestre", materias: ["Comunicación Estratégica", "Producción Audiovisual Avanzada", "Comunicación Organizacional II", "Legislación de la Comunicación", "Diseño Editorial"] },
      { semestre: "5to & 6to Semestre", materias: ["Estrategia de Redes Sociales & Analytics", "Periodismo de Investigación", "Marketing de Contenidos", "Taller de Reportaje", "Ética Periodística"] },
      { semestre: "7mo & 8vo Semestre", materias: ["Práctica Profesional en Medios / Empresas", "Taller de Grado I y II / Proyecto Transmedia"] }
    ],
    universities: [
      { name: "UAGRM", desc: "Facultad de Humanidades (Pública)", link: "universidades.html" },
      { name: "UPSA", desc: "Facultad de Humanidades y Comunicación (Privada)", link: "universidades.html" },
      { name: "UCB San Pablo", desc: "Carrera de Comunicación Social (Privada)", link: "universidades.html" }
    ]
  },

  diseno: {
    title: "Diseño Gráfico y Comunicación Visual",
    category: "ARTE & CREATIVIDAD",
    categoryBg: "#FCD34D",
    categoryColor: "#92400E",
    degree: "Licenciatura (4 Años / 8 Semestres)",
    icon: "ph-paint-brush-broad",
    color: "#F59E0B",
    bg: "#FFFBEB",
    description: "Profesión dedicada a la creación de identidades de marca, publicidad, empaques, diseño de interfaces (UI/UX), ilustración digital y soluciones estéticas innovadoras.",
    fieldOfWork: [
      "Diseño de Branding e Identidad Visual de Marcas",
      "Diseño de Interfaz e Interacción UI/UX para Apps y Web",
      "Dirección de Arte en Agencias de Publicidad",
      "Ilustración Digital, Embalaje (Packaging) y Tipografía"
    ],
    mallaCurricular: [
      { semestre: "1er Semestre", materias: ["Fundamentos del Diseño I", "Dibujo e Ilustración I", "Teoría del Color", "Historia del Arte y Diseño I", "Software de Vectorización (Illustrator)"] },
      { semestre: "2do Semestre", materias: ["Fundamentos del Diseño II", "Dibujo e Ilustración II", "Tipografía I", "Software de Retoque Digital (Photoshop)", "Historia del Diseño II"] },
      { semestre: "3er Semestre", materias: ["Diseño de Identidad Visual (Branding)", "Tipografía II", "Diseño Editorial (InDesign)", "Fotografía Publicitaria", "Taller de Creatividad"] },
      { semestre: "4to Semestre", materias: ["Diseño de Empaques (Packaging)", "Diseño Web & UX/UI I", "Animación 2D / Motion Graphics I", "Publicidad y Dirección de Arte", "Preprensa y Producción"] },
      { semestre: "5to & 6to Semestre", materias: ["Diseño UX/UI Avanzado (Figma)", "Motion Graphics II (After Effects)", "Diseño de Señalética y Espacios", "Estrategia de Portafolio", "Derechos de Autor"] },
      { semestre: "7mo & 8vo Semestre", materias: ["Práctica Profesional en Estudio o Agencia", "Taller de Titulación / Portafolio Profesional final"] }
    ],
    universities: [
      { name: "UPSA", desc: "Facultad de Arquitectura, Diseño y Arte (Privada)", link: "universidades.html" },
      { name: "UAGRM", desc: "Carrera de Diseño Gráfico (Pública)", link: "universidades.html" },
      { name: "UTEPSA", desc: "Facultad de Comunicación y Arte (Privada)", link: "universidades.html" }
    ]
  }
};

// Modal Logic for Carreras
document.addEventListener("DOMContentLoaded", () => {
  const modalOverlay = document.getElementById("career-modal-overlay");
  const modalContainer = document.getElementById("career-modal-container");
  const closeBtn = document.getElementById("modal-close-btn");

  if (!modalOverlay || !modalContainer) return;

  function openCareerModal(careerId) {
    const data = careersData[careerId];
    if (!data) return;

    modalContainer.innerHTML = `
      <!-- Header -->
      <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; margin-bottom: 20px; border-bottom: 2px solid #E9D5FF; padding-bottom: 16px;">
        <div style="display: flex; align-items: center; gap: 14px;">
          <div style="width: 56px; height: 56px; border-radius: 16px; background: ${data.bg}; color: ${data.color}; display: flex; align-items: center; justify-content: center; font-size: 1.8rem; flex-shrink: 0;">
            <i class="ph-fill ${data.icon}"></i>
          </div>
          <div>
            <div style="display: inline-block; background: ${data.categoryBg}; color: ${data.categoryColor}; font-family: 'Fredoka', sans-serif; font-size: 0.75rem; font-weight: 700; padding: 4px 12px; border-radius: 9999px; margin-bottom: 4px;">
              ${data.category}
            </div>
            <h2 style="font-family: 'Fredoka', sans-serif; font-size: 1.5rem; color: #1a1a2e; line-height: 1.2;">${data.title}</h2>
            <span style="font-family: 'Nunito', sans-serif; font-size: 0.85rem; font-weight: 700; color: #6B7280;">${data.degree}</span>
          </div>
        </div>
      </div>

      <!-- TABS NAVIGATION -->
      <div class="modal-tabs" style="display: flex; gap: 8px; border-bottom: 2px solid #F3F4F6; margin-bottom: 20px; padding-bottom: 8px; overflow-x: auto;">
        <button class="modal-tab-btn active" data-tab="tab-overview">Visión General</button>
        <button class="modal-tab-btn" data-tab="tab-malla">Malla Curricular Estándar</button>
        <button class="modal-tab-btn" data-tab="tab-unis">Universidades que la Dictan</button>
      </div>

      <!-- TAB 1: VISIÓN GENERAL -->
      <div id="tab-overview" class="modal-tab-content active">
        <p style="font-family: 'Nunito', sans-serif; font-size: 0.95rem; color: #374151; line-height: 1.6; margin-bottom: 20px;">
          ${data.description}
        </p>

        <h3 style="font-family: 'Fredoka', sans-serif; font-size: 1.1rem; color: #1a1a2e; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
          <i class="ph-fill ph-briefcase" style="color: #7C3AED;"></i> Campo Laboral Principal
        </h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 10px; margin-bottom: 20px;">
          ${data.fieldOfWork.map(item => `
            <div style="background: #F9FAFB; border: 1.5px solid #E5E7EB; border-radius: 12px; padding: 12px 14px; font-family: 'Nunito', sans-serif; font-size: 0.88rem; color: #374151; font-weight: 600; display: flex; align-items: center; gap: 8px;">
              <i class="ph-bold ph-check" style="color: #10B981;"></i> ${item}
            </div>
          `).join('')}
        </div>
      </div>

      <!-- TAB 2: MALLA CURRICULAR -->
      <div id="tab-malla" class="modal-tab-content" style="display: none;">
        <div style="display: flex; flex-direction: column; gap: 14px;">
          ${data.mallaCurricular.map(block => `
            <div style="background: #F5F3FF; border: 1.5px solid #E9D5FF; border-radius: 14px; padding: 14px 18px;">
              <h4 style="font-family: 'Fredoka', sans-serif; font-size: 0.95rem; color: #7C3AED; margin-bottom: 8px; text-transform: uppercase;">
                ${block.semestre}
              </h4>
              <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                ${block.materias.map(m => `
                  <span style="background: #FFFFFF; border: 1px solid #DDD6FE; font-family: 'Nunito', sans-serif; font-size: 0.82rem; font-weight: 600; color: #374151; padding: 4px 10px; border-radius: 8px;">
                    ${m}
                  </span>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- TAB 3: UNIVERSIDADES -->
      <div id="tab-unis" class="modal-tab-content" style="display: none;">
        <p style="font-family: 'Nunito', sans-serif; font-size: 0.9rem; color: #6B7280; margin-bottom: 16px;">
          Esta carrera está disponible en las siguientes casas de estudio en Santa Cruz de la Sierra:
        </p>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          ${data.universities.map(u => `
            <div style="background: #FFFFFF; border: 1.5px solid #E9D5FF; border-radius: 14px; padding: 14px 18px; display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap;">
              <div>
                <strong style="font-family: 'Fredoka', sans-serif; font-size: 1.05rem; color: #1a1a2e; display: block;">${u.name}</strong>
                <span style="font-family: 'Nunito', sans-serif; font-size: 0.82rem; color: #6B7280;">${u.desc}</span>
              </div>
              <a href="${u.link}" class="hero-btn hero-btn-outline" style="padding: 6px 14px; font-size: 0.78rem;">
                VER DIRECTORIO →
              </a>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    // Show Overlay
    modalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";

    // Setup Tab Click Listeners inside Modal
    const tabBtns = modalContainer.querySelectorAll(".modal-tab-btn");
    const tabContents = modalContainer.querySelectorAll(".modal-tab-content");

    tabBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const targetId = btn.getAttribute("data-tab");
        tabBtns.forEach(b => b.classList.remove("active"));
        tabContents.forEach(c => c.style.display = "none");

        btn.classList.add("active");
        const targetContent = modalContainer.querySelector(`#${targetId}`);
        if (targetContent) targetContent.style.display = "block";
      });
    });
  }

  function closeModal() {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  // Bind all career cards on page
  const careerCards = document.querySelectorAll("[data-career]");
  careerCards.forEach(card => {
    card.addEventListener("click", (e) => {
      e.preventDefault();
      const careerId = card.getAttribute("data-career");
      openCareerModal(careerId);
    });
  });

  // URL Hash or Query Check (e.g. carreras.html?carrera=ingenieria)
  const urlParams = new URLSearchParams(window.location.search);
  const requestedCareer = urlParams.get("carrera");
  if (requestedCareer && careersData[requestedCareer]) {
    openCareerModal(requestedCareer);
  }
});
