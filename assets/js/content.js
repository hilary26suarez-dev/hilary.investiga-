/* =========================================================================
   CONTENIDO DEL SITIO — edita SOLO este archivo para actualizar textos y links
   -------------------------------------------------------------------------
   · Cada texto tiene versión en español (es) e inglés (en).
   · Donde dice "PENDIENTE" hace falta un dato tuyo (link, fecha, título...).
   · Las imágenes van en assets/img/ con el nombre exacto que aparece aquí.
   ========================================================================= */

window.CONTENT = {

  /* ------------------------------------------------------------------ PERFIL */
  profile: {
    name: "Hilary Suárez",
    fullName: "Hilary Gretchan Suárez Fonseca",

    role: {
      es: "Biotecnología, bioinformática y programación aplicadas a la ciencia.",
      en: "Biotechnology, bioinformatics and programming applied to science."
    },

    heroLead: {
      es: "Transformo datos biológicos en conocimiento. Combino programación y pensamiento científico para construir soluciones a desafíos reales de salud, y creo en una ciencia abierta, interdisciplinaria y con impacto en la sociedad.",
      en: "I turn biological data into knowledge. I combine programming and scientific thinking to build solutions to real health challenges, and I believe in open, interdisciplinary science with real social impact."
    },

    bio: {
      es: "<p>Soy <strong>Hilary Suárez</strong>, científica y programadora costarricense. Estudio <strong>Ingeniería en Biotecnología</strong> en la UCIMED y soy <strong>Diplomada en Laboratorio Clínico</strong>, con práctica hospitalaria en el <strong>Hospital México</strong>.</p><p>Me mueven la investigación científica, la bioinformática y el desarrollo de tecnología para las ciencias de la vida. He construido plataformas computacionales biomédicas y sistemas multi-agente de inteligencia artificial, con proyectos aceptados en congresos científicos.</p><p>Tengo formación complementaria en farmacogenómica, edición genómica (CRISPR), terapia celular y buenas prácticas clínicas, y programo en Python, Java y JavaScript.</p>",
      en: "<p>I'm <strong>Hilary Suárez</strong>, a Costa Rican scientist and programmer. I study <strong>Biotechnology Engineering</strong> at UCIMED and hold a <strong>Diploma in Clinical Laboratory Science</strong>, with hospital practice at <strong>Hospital México</strong>.</p><p>I'm driven by scientific research, bioinformatics and building technology for the life sciences. I have developed biomedical computational platforms and multi-agent AI systems, with projects accepted at scientific conferences.</p><p>I have additional training in pharmacogenomics, genome editing (CRISPR), cell therapy and good clinical practice, and I code in Python, Java and JavaScript.</p>"
    },

    location: { es: "San José, Costa Rica", en: "San José, Costa Rica" },
    email: "hilary26suarez@gmail.com",
    emailInst: "hilary.suarezf@ucimed.ac.cr",
    // phone: se omite a propósito (el repo es público). Si querés mostrarlo, agregalo acá.

    // Poné aquí tus URL completas. Dejá "" para ocultar el ícono.
    links: {
      email:       "mailto:hilary26suarez@gmail.com",
      linkedin:    "https://www.linkedin.com/in/hilary-su%C3%A1rez-fonseca-6bb5761b6/",
      instagram:   "https://www.instagram.com/hilary.investiga/",
      orcid:       "https://orcid.org/0009-0005-8697-5179",
      github:      "https://github.com/hilary26suarez-dev",
      youtube:     "",   // PENDIENTE: tu canal, si tenés
      researchgate:"",   // PENDIENTE
      scholar:     ""    // PENDIENTE
    }
  },

  /* ---------------------------------------------------- ÁREAS DE EXPERIENCIA */
  areas: [
    { icon: "dna",
      title: { es: "Bioinformática", en: "Bioinformatics" },
      desc:  { es: "Análisis genómico, interpretación de variantes y biología computacional aplicada a la salud.",
               en: "Genomic analysis, variant interpretation and computational biology for health." } },

    { icon: "pill",
      title: { es: "Farmacogenómica", en: "Pharmacogenomics" },
      desc:  { es: "CRISPR, terapias dirigidas y cómo el cuerpo responde a fármacos y vacunas.",
               en: "CRISPR, targeted therapies and how the body responds to drugs and vaccines." } },

    { icon: "code",
      title: { es: "Programación científica", en: "Scientific programming" },
      desc:  { es: "Python, Java y JavaScript; estructuras de datos y plataformas web para la ciencia.",
               en: "Python, Java and JavaScript; data structures and scientific web platforms." } },

    { icon: "brain",
      title: { es: "IA y sistemas multi-agente", en: "AI & multi-agent systems" },
      desc:  { es: "Agentes de razonamiento e IA aplicada a la farmacogenómica y al diseño de vacunas.",
               en: "Reasoning agents and AI applied to pharmacogenomics and vaccine design." } },

    { icon: "flask",
      title: { es: "Laboratorio clínico", en: "Clinical laboratory" },
      desc:  { es: "Procesamiento de muestras, hematología y bioseguridad. Práctica en el Hospital México.",
               en: "Sample processing, hematology and biosafety. Practice at Hospital México." } },

    { icon: "megaphone",
      title: { es: "Divulgación científica", en: "Science communication" },
      desc:  { es: "«Hilary ConCiencia»: biotecnología y genética explicadas para todas las personas.",
               en: "“Hilary ConCiencia”: biotech and genetics explained for everyone." } }
  ],

  /* ----------------------------------------------------- HABILIDADES / SKILLS */
  skills: [
    { group: { es: "Lenguajes", en: "Languages" },
      items: [ "Python", "Java", "JavaScript" ] },

    { group: { es: "Bioinformática y datos", en: "Bioinformatics & data" },
      items: [
        { es: "Análisis de variantes genéticas", en: "Genetic variant analysis" },
        { es: "Modelado de datos", en: "Data modeling" },
        { es: "Estructuras de datos", en: "Data structures" },
        { es: "Sistemas multi-agente", en: "Multi-agent systems" }
      ] },

    { group: { es: "Backend y bases de datos", en: "Backend & databases" },
      items: [ "Firebase (Firestore)", "Supabase" ] },

    { group: { es: "Genómica y terapias", en: "Genomics & therapies" },
      items: [
        { es: "Edición genómica (CRISPR)", en: "Genome editing (CRISPR)" },
        { es: "Terapias dirigidas", en: "Targeted therapies" },
        { es: "Terapia celular", en: "Cell therapy" },
        { es: "Farmacogenómica", en: "Pharmacogenomics" }
      ] },

    { group: { es: "Laboratorio clínico", en: "Clinical laboratory" },
      items: [
        { es: "Procesamiento de muestras biológicas", en: "Biological sample processing" },
        { es: "Hematología", en: "Hematology" },
        { es: "Cultivos celulares", en: "Cell culture" },
        { es: "Bioseguridad y asepsia", en: "Biosafety & asepsis" }
      ] },

    { group: { es: "Investigación", en: "Research" },
      items: [
        { es: "Buenas prácticas clínicas (GCP)", en: "Good Clinical Practice (GCP)" },
        { es: "Redacción científica", en: "Scientific writing" },
        { es: "Análisis crítico", en: "Critical analysis" }
      ] }
  ],

  /* --------------------------------------------------------------- PROYECTOS */
  /* areas: "bioinformatica" y/o "programacion" define en qué sección aparece  */
  projects: [
    {
      id: "vaccinegenics",
      name: "VaccineGenics",
      areas: [ "bioinformatica", "programacion" ],
      context: { es: "Microsoft Agents League Hackathon · Junio 2026",
                 en: "Microsoft Agents League Hackathon · June 2026" },
      desc: {
        es: "Plataforma multi-agente para farmacogenómica: simula respuestas inmunológicas y ejecuta análisis computacional para apoyar el diseño de vacunas. La pregunta que la origina: ¿puede el ADN predecir cómo responderá el cuerpo a una vacuna?",
        en: "Multi-agent platform for pharmacogenomics: it simulates immune responses and runs computational analysis to support vaccine design. The founding question: can DNA predict how the body will respond to a vaccine?"
      },
      tags: [ "Multi-agente", "Farmacogenómica", "IA", "Python" ],
      links: [
        { label: { es: "Ver video (UCIMED)", en: "Watch video (UCIMED)" }, url: "https://youtu.be/XEth1ZDuGMg" }
        // { label: { es: "Repositorio", en: "Repository" }, url: "PENDIENTE" }
      ],
      image: "assets/img/proyecto-vaccinegenics.jpg"
    },
    {
      id: "neurohunter",
      name: "NeuroHunter PRO",
      areas: [ "bioinformatica", "programacion" ],
      context: { es: "Framework de investigación · en proceso de protección de propiedad intelectual",
                 en: "Research framework · IP protection in progress" },
      desc: {
        es: "Framework para la estratificación fenotípica temprana de la Mucopolisacaridosis tipo II (síndrome de Hunter): integra biomarcadores del SNC, predicción estructural de variantes del gen IDS y aprendizaje automático. Presentado como revisión narrativa 2018–2026 en el COMPAC 2026 (póster).",
        en: "A framework for early phenotypic stratification of Mucopolysaccharidosis type II (Hunter syndrome): it integrates CNS biomarkers, structural prediction of IDS gene variants and machine learning. Presented as a 2018–2026 narrative review at COMPAC 2026 (poster)."
      },
      tags: [ "MPS II", "Biomarcadores", "AlphaFold2", "Machine learning" ],
      links: [
        { label: { es: "Resumen · COMPAC 2026", en: "Abstract · COMPAC 2026" }, url: "assets/docs/abstract-compac-2026-mps-ii.html" },
        { label: { es: "DOI: 10.5281/zenodo.22089990", en: "DOI: 10.5281/zenodo.22089990" }, url: "https://doi.org/10.5281/zenodo.22089990" }
      ],
      image: "assets/img/proyecto-neurohunter.jpg"
    },
    {
      id: "myconexus",
      name: "MycoNexus",
      areas: [ "bioinformatica", "programacion" ],
      context: { es: "Póster · Congreso Internacional de Biotecnología, Costa Rica 2026 (antes «MycoLab CR»)",
                 en: "Poster · International Biotechnology Congress, Costa Rica 2026 (formerly “MycoLab CR”)" },
      desc: {
        es: "Plataforma de bioprospección fúngica potenciada con IA que integra modelado climático y bases de datos enzimáticas para estudiar la micobiota de Costa Rica. Aceptada como póster en el área de Biotecnología Agrícola y Ambiental.",
        en: "An AI-powered fungal bioprospecting platform that integrates climate modeling and enzymatic databases to study Costa Rican mycobiota. Accepted as a poster in the Agricultural & Environmental Biotechnology track."
      },
      tags: [ "IA", "Bioprospección fúngica", "Modelado climático", "Micobiota CR" ],
      links: [
        { label: { es: "Carta de aceptación", en: "Acceptance letter" }, url: "assets/docs/aceptacion-biotecnologia-2026-myconexus.html" }
      ],
      image: "assets/img/proyecto-myconexus.jpg"
    }
  ],

  /* ------------------------------------------------------ LÍNEAS DE INVESTIGACIÓN */
  research: [
    { title: { es: "Farmacogenómica y respuesta a vacunas", en: "Pharmacogenomics & vaccine response" },
      body:  { es: "¿Puede el ADN predecir cómo responderá una persona a una vacuna? Trabajo con simulación de respuestas inmunológicas y análisis computacional (VaccineGenics).",
               en: "Can DNA predict how a person will respond to a vaccine? I work on immune-response simulation and computational analysis (VaccineGenics)." } },

    { title: { es: "Enfermedades raras y variantes genéticas", en: "Rare diseases & genetic variants" },
      body:  { es: "Predicción de desenlaces terapéuticos en el Síndrome de Hunter (MPS II) mediante modelado computacional (NeuroHunter PRO).",
               en: "Predicting therapeutic outcomes in Hunter Syndrome (MPS II) through computational modeling (NeuroHunter PRO)." } },

    { title: { es: "Bioprospección y biotecnología ambiental", en: "Bioprospecting & environmental biotech" },
      body:  { es: "Descubrimiento de enzimas fúngicas de interés industrial cruzando datos biológicos, climáticos y geográficos (MycoNexus).",
               en: "Discovering industrially relevant fungal enzymes by crossing biological, climate and geographic data (MycoNexus)." } },

    { title: { es: "Laboratorio clínico e investigación traslacional", en: "Clinical lab & translational research" },
      body:  { es: "Del hospital al dato: rotación de 4 meses por el Laboratorio Clínico del Hospital México (hematología, banco de sangre, parasitología, química clínica, tuberculosis) y formación en buenas prácticas clínicas (GCP).",
               en: "From bedside to data: a 4-month rotation through the Clinical Laboratory of Hospital México (hematology, blood bank, parasitology, clinical chemistry, tuberculosis) and Good Clinical Practice (GCP) training." } }
  ],

  /* --------------------------------------------- PRÁCTICA HOSPITALARIA / HOSPITAL */
  hospital: {
    place: "Hospital México (CCSS), San José",
    role: { es: "Práctica profesional clínica · Laboratorio Clínico",
            en: "Clinical professional practice · Clinical Laboratory" },
    period: { es: "Rotación de 4 meses · Diplomado en Laboratorio Clínico (Plerus / ULICORI) · Colegiada ante el CMQCCR",
              en: "4-month rotation · Diploma in Clinical Laboratory Science (Plerus / ULICORI) · Licensed by CMQCCR" },
    summary: {
      es: "Rotación de cuatro meses por el Laboratorio Clínico del Hospital México (CCSS), pasando por distintos servicios: atención en preconsulta y toma de muestras (flebotomía), Emergencias, Banco de Sangre, Parasitología, Química Clínica, Hematología y el Departamento de Tuberculosis (baciloscopía / BK). Trabajo directo con pacientes bajo bioseguridad, técnica aséptica y control de calidad.",
      en: "A four-month rotation through the Clinical Laboratory of Hospital México (CCSS), across several services: pre-consultation care and blood sampling (phlebotomy), Emergency, Blood Bank, Parasitology, Clinical Chemistry, Hematology and the Tuberculosis Department (smear microscopy / AFB). Direct patient contact under biosafety, aseptic technique and quality control."
    },
    // Servicios por los que rotó (se muestran como chips).
    rotations: [
      { es: "Preconsulta", en: "Pre-consultation" },
      { es: "Toma de muestras / flebotomía", en: "Blood sampling / phlebotomy" },
      { es: "Emergencias", en: "Emergency" },
      { es: "Banco de Sangre", en: "Blood Bank" },
      { es: "Parasitología", en: "Parasitology" },
      { es: "Química Clínica", en: "Clinical Chemistry" },
      { es: "Hematología", en: "Hematology" },
      { es: "Tuberculosis (BK / baciloscopía)", en: "Tuberculosis (AFB smear)" }
    ],
    // Poné tus fotos en assets/img/ con estos nombres. Quitá las que no uses.
    photos: [
      { src: "assets/img/hospital-1.jpg", alt: { es: "Hilary en el laboratorio clínico del Hospital México", en: "Hilary in the clinical laboratory at Hospital México" } },
      { src: "assets/img/hospital-2.jpg", alt: { es: "Procesamiento de muestras biológicas", en: "Processing biological samples" } },
      { src: "assets/img/hospital-3.jpg", alt: { es: "Práctica hospitalaria en el laboratorio", en: "Hospital laboratory practice" } },
      { src: "assets/img/hospital-4.jpg", alt: { es: "Trabajo de laboratorio clínico", en: "Clinical laboratory work" } }
    ]
  },

  /* ---------------------------------------------------------------- MEDIOS */
  media: {
    videos: [
      {
        title: { es: "Entrevista en «Nuestra Voz» con Amelia Rueda",
                 en: "Interview on “Nuestra Voz” with Amelia Rueda" },
        desc:  { es: "Conversación sobre genética, farmacogenómica y el proyecto que explora si el ADN puede predecir la respuesta a las vacunas.",
                 en: "A conversation about genetics, pharmacogenomics and the project exploring whether DNA can predict vaccine response." },
        youtubeId: "EGEnsvAd6KI",
        source: { es: "Amelia Rueda", en: "Amelia Rueda" },
        date: { es: "4 de septiembre de 2026", en: "September 4, 2026" }
      },
      {
        title: { es: "¿Puede nuestro ADN ayudar a predecir cómo responderemos a una vacuna?",
                 en: "Can our DNA help predict how we'll respond to a vaccine?" },
        desc:  { es: "Video del proyecto de hackathon (VaccineGenics), publicado por la UCIMED.",
                 en: "Hackathon project video (VaccineGenics), published by UCIMED." },
        youtubeId: "XEth1ZDuGMg",
        source: { es: "UCIMED", en: "UCIMED" },
        date: { es: "25 de agosto de 2026", en: "August 25, 2026" }
      }
    ],

    press: [
      {
        outlet: "UCIMED",
        platform: "linkedin",
        title: { es: "«¿Puede la genética predecir cómo responderá el cuerpo a una vacuna?»",
                 en: "“Can genetics predict how the body will respond to a vaccine?”" },
        desc:  { es: "Publicación de la Universidad de Ciencias Médicas (UCIMED) sobre el proyecto.",
                 en: "Post by Universidad de Ciencias Médicas (UCIMED) about the project." },
        date: "2026",
        // image: "assets/img/prensa-ucimed-2.jpg",   // podés activar una imagen en la tarjeta
        url: "https://www.linkedin.com/posts/universidad-de-ciencias-m%C3%A9dicas-ucimed-_puede-la-gen%C3%A9tica-predecir-c%C3%B3mo-responder%C3%A1-activity-7501674135207530498-z_Jt"
      },
      {
        outlet: "UCIMED",
        platform: "instagram",
        title: { es: "Publicación de la UCIMED en Instagram",
                 en: "UCIMED post on Instagram" },
        desc:  { es: "Difusión del proyecto en las redes de la universidad.",
                 en: "Project featured on the university's social media." },
        date: "2026",
        // image: "assets/img/prensa-ucimed-1.jpg",
        url: "https://www.instagram.com/p/DZ-XWT7k5Yo/"
      },
      {
        outlet: "UCIMED",
        platform: "tiktok",
        title: { es: "Video de la UCIMED en TikTok (1)",
                 en: "UCIMED video on TikTok (1)" },
        desc:  { es: "Cobertura del proyecto en TikTok.",
                 en: "Project coverage on TikTok." },
        date: "2026",
        url: "https://www.tiktok.com/@ucimed.com/video/7655836737264045319"
      },
      {
        outlet: "UCIMED",
        platform: "tiktok",
        title: { es: "Video de la UCIMED en TikTok (2)",
                 en: "UCIMED video on TikTok (2)" },
        desc:  { es: "Cobertura del proyecto en TikTok.",
                 en: "Project coverage on TikTok." },
        date: "2026",
        url: "https://www.tiktok.com/@ucimed.com/video/7655057000069434632"
      }
    ],

    /* Divulgación científica — «Hilary ConCiencia» / @hilary.investiga */
    divulgacion: {
      handle: "@hilary.investiga",
      url: "https://www.instagram.com/hilary.investiga/",
      blurb: {
        es: "«Hilary ConCiencia» es mi archivo fotográfico personal de hongos de Costa Rica: cada hallazgo con su grupo morfológico, nivel de certeza y qué falta para confirmarlo. Documentar es conservar; fotos con datos, no con suposiciones.",
        en: "“Hilary ConCiencia” is my personal photographic archive of Costa Rican fungi: every find with its morphological group, confidence level and what's still needed to confirm it. To document is to conserve; photos with data, not assumptions."
      },
      posts: [
        { src: "assets/img/divulgacion-1.jpg",
          alt: { es: "Amanita muscaria fotografiada en el P.N. Volcán Irazú",
                 en: "Amanita muscaria photographed in Irazú Volcano National Park" } },
        { src: "assets/img/divulgacion-2.jpg",
          alt: { es: "Ficha de posible Coprinellus disseminatus",
                 en: "Field card for a possible Coprinellus disseminatus" } },
        { src: "assets/img/divulgacion-3.jpg",
          alt: { es: "«El verde no es del hongo»: repisas de Trametes colonizadas por algas",
                 en: "“The green isn't the fungus”: Trametes brackets colonised by algae" } }
      ]
    }
  },

  /* -------------------------------------------------------------- CONGRESOS */
  congresos: [
    {
      event: { es: "COMPAC 2026 · XIX Congreso de Microbiología, Parasitología y Química Clínica",
               en: "COMPAC 2026 · 19th Congress of Microbiology, Parasitology and Clinical Chemistry" },
      role:  { es: "Póster · Autora principal y de correspondencia",
               en: "Poster · Lead and corresponding author" },
      talk:  { es: "«Avances en la estratificación fenotípica temprana de la Mucopolisacaridosis tipo II: biomarcadores del SNC, predicción estructural con inteligencia artificial y aprendizaje automático — revisión narrativa 2018–2026».",
               en: "“Advances in early phenotypic stratification of Mucopolysaccharidosis type II: CNS biomarkers, structural prediction with AI and machine learning — narrative review 2018–2026”." },
      date:  { es: "Octubre 2026", en: "October 2026" },
      place: { es: "8–10 oct · Centro de Convenciones de Costa Rica, San José", en: "8–10 Oct · Costa Rica Convention Center, San José" },
      doi: "10.5281/zenodo.22089990",
      // El resumen está en assets/docs/ como página HTML; cambiá a .pdf si guardás el PDF oficial.
      url: "assets/docs/abstract-compac-2026-mps-ii.html"
    },
    {
      event: { es: "Congreso Internacional de Biotecnología · Costa Rica 2026 (5.º Bio Iberoamérica · 11.º BioTica)",
               en: "International Biotechnology Congress · Costa Rica 2026 (5th Bio Iberoamérica · 11th BioTica)" },
      role:  { es: "Póster científico · Autora principal · Área: Biotecnología Agrícola y Ambiental",
               en: "Scientific poster · Lead author · Track: Agricultural & Environmental Biotechnology" },
      talk:  { es: "«MycoLab CR: an AI-powered fungal bioprospecting platform integrating climate modeling and enzymatic databases for Costa Rican mycobiota» (proyecto MycoNexus).",
               en: "“MycoLab CR: an AI-powered fungal bioprospecting platform integrating climate modeling and enzymatic databases for Costa Rican mycobiota” (MycoNexus project)." },
      date:  { es: "Octubre 2026", en: "October 2026" },
      place: { es: "7–9 oct · IICA, San José, Costa Rica", en: "7–9 Oct · IICA, San José, Costa Rica" },
      url: "assets/docs/aceptacion-biotecnologia-2026-myconexus.html"
    },
    {
      event: { es: "Microsoft Agents League Hackathon 2026", en: "Microsoft Agents League Hackathon 2026" },
      role:  { es: "Participante · Proyecto «VaccineGenics»", en: "Participant · “VaccineGenics” project" },
      talk:  { es: "Plataforma pública de farmacogenómica multi-agente para el diseño de vacunas. Parte del AI Skills Fest de Microsoft. Credencial: Agents League – Reasoning Agents (Global AI Community).",
               en: "Public multi-agent pharmacogenomics platform for vaccine design. Part of Microsoft's AI Skills Fest. Credential: Agents League – Reasoning Agents (Global AI Community)." },
      date:  { es: "Junio 2026", en: "June 2026" },
      place: { es: "Global AI Community · en línea", en: "Global AI Community · online" },
      url: ""
    }
  ],

  /* ---------------------------------------------------- FORMACIÓN ACADÉMICA */
  education: [
    { title: { es: "Bachillerato en Ingeniería en Biotecnología", en: "B.Sc. in Biotechnology Engineering" },
      org: "Universidad de Ciencias Médicas (UCIMED)",
      period: { es: "En curso · 3.er cuatrimestre", en: "In progress · 3rd term" } },

    { title: { es: "Diplomado en Laboratorio Clínico", en: "Diploma in Clinical Laboratory Science" },
      org: "Universidad Plerus / ULICORI",
      period: { es: "Práctica clínica en el Hospital México · Colegiada ante el CMQCCR",
                en: "Clinical practice at Hospital México · Licensed by CMQCCR" } }
  ],

  /* ----------------------------------------------------- EXPERIENCIA LABORAL */
  work: [
    { role: { es: "Encargada Comercial y de Ventas", en: "Commercial & Sales Lead" },
      org: "TECOSA — Tecnología en la Construcción S.A.",
      period: { es: "Oct 2023 – Presente", en: "Oct 2023 – Present" } },

    { role: { es: "Ejecutiva de Levantamiento de Fondos", en: "Fundraising Executive" },
      org: "Fundación World Vision",
      period: { es: "Sep 2022 – Jul 2023", en: "Sep 2022 – Jul 2023" } },

    { role: { es: "Cajera Senior / Administradora de Tienda", en: "Senior Cashier / Store Manager" },
      org: "Librería Internacional",
      period: { es: "Dic 2017 – Mar 2022", en: "Dec 2017 – Mar 2022" } }
  ],

  /* ------------------------------------------------------- CERTIFICACIONES */
  certifications: [
    {
      group: { es: "Biotecnología, genómica y terapias avanzadas",
               en: "Biotech, genomics & advanced therapies" },
      items: [
        { name: { es: "Células madre y terapia celular: de la biología a la aplicación biomédica",
                  en: "Stem cells & cell therapy: from biology to biomedical application" },
          org: "CCBIO", date: { es: "Dic 2025", en: "Dec 2025" } },
        { name: { es: "CRISPR y terapias dirigidas: la nueva frontera de la farmacogenómica (conferencia magistral, Ciudad de México)",
                  en: "CRISPR & targeted therapies: the new frontier of pharmacogenomics (keynote, Mexico City)" },
          org: "CCBIO", date: { es: "Oct 2025", en: "Oct 2025" } }
      ]
    },
    {
      group: { es: "Investigación clínica y bioseguridad",
               en: "Clinical research & biosafety" },
      items: [
        { name: { es: "Buenas prácticas clínicas en investigación intervencional (GCP)",
                  en: "Good Clinical Practice in interventional research (GCP)" },
          org: "Universidad Hispanoamericana (CR) / COINS", date: { es: "May 2025", en: "May 2025" } },
        { name: { es: "Soporte Vital Básico (RCP y DEA) — BLS Proveedor, American Heart Association",
                  en: "Basic Life Support (CPR & AED) — BLS Provider, American Heart Association" },
          org: "Universidad Hispanoamericana (CR)", date: { es: "May 2025", en: "May 2025" } },
        { name: { es: "Técnica aséptica médico-quirúrgica", en: "Medical-surgical aseptic technique" },
          org: "Instituto Parauniversitario Plerus", date: { es: "Ago 2023", en: "Aug 2023" } },
        { name: { es: "Manejo de desechos bioinfecciosos", en: "Bio-infectious waste management" },
          org: "Instituto Parauniversitario Plerus", date: { es: "Feb 2023", en: "Feb 2023" } },
        { name: { es: "Manejo de asepsia", en: "Asepsis management" },
          org: "Instituto Parauniversitario Plerus", date: { es: "Mar 2022", en: "Mar 2022" } }
      ]
    },
    {
      group: { es: "Inteligencia artificial, programación y tecnología",
               en: "AI, programming & technology" },
      items: [
        { name: { es: "Agents League – Reasoning Agents", en: "Agents League – Reasoning Agents" },
          org: "Global AI Community", date: { es: "Jul 2026", en: "Jul 2026" } },
        { name: { es: "Master en colecciones y estructuras de datos en Java",
                  en: "Master in Java collections & data structures" },
          org: "Udemy", date: { es: "Jun 2024", en: "Jun 2024" } },
        { name: { es: "Diseño web profesional: el curso completo, práctico desde 0 (42 h)",
                  en: "Professional web design: the complete hands-on course (42 h)" },
          org: "Udemy", date: { es: "Jun 2024", en: "Jun 2024" } },
        { name: { es: "MTA: Introduction to Programming Using Java",
                  en: "MTA: Introduction to Programming Using Java" },
          org: "Udemy", date: { es: "—", en: "—" } },
        { name: { es: "Fundamentos de programación", en: "Programming fundamentals" },
          org: "Udemy", date: { es: "—", en: "—" } },
        { name: { es: "Agile Explorer", en: "Agile Explorer" },
          org: "IBM", date: { es: "Mar 2024", en: "Mar 2024" } },
        { name: { es: "Explore Emerging Tech", en: "Explore Emerging Tech" },
          org: "IBM", date: { es: "Mar 2024", en: "Mar 2024" } },
        { name: { es: "Networking Basics", en: "Networking Basics" },
          org: "Cisco", date: { es: "Ene 2024", en: "Jan 2024" } }
      ]
    }
  ]
};
