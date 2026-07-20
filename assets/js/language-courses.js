const languageConfigs = {
    anglais: {
        name: "Anglais",
        lowerName: "anglais",
        image: "../assets/img/anglais.jpg",
        intro: "Programmes complets de A1 a C2 pour communiquer, travailler, etudier et preparer vos examens.",
        overviewTitle: "Progressez en anglais avec un parcours clair",
        overviewText: "Nos formations d'anglais sont organisees par niveau, avec un test de placement, des objectifs precis et un suivi regulier. Chaque apprenant travaille l'oral, l'ecrit, l'ecoute, la lecture et la confiance en situation reelle.",
        teachers: ["Mme Sarah Bennett", "Mr James Wilson", "Mme Lydia Carter", "Mr Adam Smith", "Dr Emily Johnson", "Mr Daniel Brooks"],
        teacherNotes: [
            "A1 et prononciation de base",
            "A2 et communication quotidienne",
            "B1 et conversation guidee",
            "B2 et anglais professionnel",
            "C1 et examens internationaux",
            "C2 et expression avancee"
        ]
    },
    francais: {
        name: "Fran&ccedil;ais",
        lowerName: "fran&ccedil;ais",
        image: "../assets/img/france.jpg",
        intro: "Cours de fran&ccedil;ais de A1 a C2 pour ameliorer l'oral, l'ecrit, les etudes et la vie professionnelle.",
        overviewTitle: "Maitrisez le fran&ccedil;ais avec des cours progressifs",
        overviewText: "Le programme de fran&ccedil;ais renforce la grammaire, la conversation, la production ecrite et la comprehension. Les groupes sont classes par niveau pour avancer avec methode et confiance.",
        teachers: ["Mme Claire Martin", "Mr Karim Moreau", "Mme Nadia Lefevre", "Mr Antoine Bernard", "Dr Elise Laurent", "Mme Ines Dupont"],
        teacherNotes: [
            "A1 et bases de communication",
            "A2 et vocabulaire pratique",
            "B1 et expression orale",
            "B2 et redaction avancee",
            "C1 et fran&ccedil;ais academique",
            "C2 et perfectionnement"
        ]
    },
    espagnol: {
        name: "Espagnol",
        lowerName: "espagnol",
        image: "../assets/img/espagne.jpg",
        intro: "Cours d'espagnol de A1 a C2 avec pratique orale, vocabulaire utile et decouverte culturelle.",
        overviewTitle: "Apprenez l'espagnol avec une methode vivante",
        overviewText: "Nos cours d'espagnol combinent communication, grammaire, ecoute et expression. Vous progressez par situations concretes : voyage, etudes, travail, conversation et examens.",
        teachers: ["Mme Lucia Garcia", "Mr Pablo Ruiz", "Mme Sofia Martinez", "Mr Diego Alvarez", "Dr Elena Torres", "Mme Carla Navarro"],
        teacherNotes: [
            "A1 et premiers dialogues",
            "A2 et situations de voyage",
            "B1 et conversation fluide",
            "B2 et espagnol professionnel",
            "C1 et examens",
            "C2 et culture avancee"
        ]
    },
    italien: {
        name: "Italien",
        lowerName: "italien",
        image: "../assets/img/italy.jpg",
        intro: "Cours d'italien de A1 a C2 pour parler, comprendre, ecrire et decouvrir la culture italienne.",
        overviewTitle: "Decouvrez l'italien avec un parcours complet",
        overviewText: "Le programme d'italien developpe les bases, la conversation, la grammaire et la comprehension. Les niveaux avances travaillent aussi l'argumentation, la redaction et les contextes professionnels.",
        teachers: ["Mme Giulia Rossi", "Mr Marco Bianchi", "Mme Chiara Romano", "Mr Luca Conti", "Dr Valentina Ricci", "Mme Alessia Ferri"],
        teacherNotes: [
            "A1 et prononciation",
            "A2 et communication simple",
            "B1 et conversation",
            "B2 et italien professionnel",
            "C1 et redaction",
            "C2 et perfectionnement culturel"
        ]
    },
    allemand: {
        name: "Allemand",
        lowerName: "allemand",
        image: "../assets/img/Allemagne.jpg",
        intro: "Cours d'allemand de A1 a C2 pour les etudes, le travail, les voyages et les certifications.",
        overviewTitle: "Apprenez l'allemand avec rigueur et pratique",
        overviewText: "Nos groupes d'allemand avancent etape par etape : vocabulaire, structures, prononciation, conversation et redaction. Le suivi aide chaque apprenant a consolider ses bases avant de monter de niveau.",
        teachers: ["Mme Anna Schneider", "Mr Lukas Weber", "Mme Hannah Fischer", "Mr Jonas Klein", "Dr Maria Hoffmann", "Mr Felix Wagner"],
        teacherNotes: [
            "A1 et bases grammaticales",
            "A2 et situations quotidiennes",
            "B1 et expression orale",
            "B2 et allemand professionnel",
            "C1 et examens",
            "C2 et precision avancee"
        ]
    },
    turc: {
        name: "Turc",
        lowerName: "turc",
        image: "../assets/img/turc.jpg",
        intro: "Cours de turc de A1 a C2 pour apprendre progressivement la langue et mieux comprendre la culture turque.",
        overviewTitle: "Progressez en turc avec des cours adaptes",
        overviewText: "Le programme de turc commence par les bases de lecture, prononciation et conversation, puis avance vers l'expression fluide, la comprehension detaillee et les usages academiques ou professionnels.",
        teachers: ["Mme Aylin Demir", "Mr Emre Yilmaz", "Mme Selin Kaya", "Mr Can Arslan", "Dr Elif Sahin", "Mme Derya Aydin"],
        teacherNotes: [
            "A1 et alphabet pratique",
            "A2 et phrases courantes",
            "B1 et conversation",
            "B2 et turc professionnel",
            "C1 et redaction",
            "C2 et perfectionnement"
        ]
    }
};

const levelPlans = [
    {
        code: "A1",
        title: "Debutant",
        summary: "Comprendre et utiliser des phrases tres simples du quotidien.",
        days: "Samedi et lundi",
        time: "09:00 - 10:30",
        duration: "8 semaines",
        group: "8 a 12 etudiants",
        type: "Cours general",
        goals: ["Se presenter et poser des questions simples", "Comprendre des consignes courtes", "Construire les premieres phrases correctes"],
        skills: ["Prononciation", "Vocabulaire de base", "Petits dialogues", "Ecoute lente"]
    },
    {
        code: "A2",
        title: "Elementaire",
        summary: "Parler de soi, de ses habitudes, de sa famille et de ses besoins.",
        days: "Dimanche et mardi",
        time: "10:30 - 12:00",
        duration: "8 semaines",
        group: "8 a 12 etudiants",
        type: "Cours general + conversation",
        goals: ["Tenir une conversation simple", "Lire des textes courts", "Ecrire des messages simples"],
        skills: ["Questions et reponses", "Temps de base", "Situations de voyage", "Vocabulaire quotidien"]
    },
    {
        code: "B1",
        title: "Intermediaire",
        summary: "Discuter de sujets familiers et raconter des experiences.",
        days: "Samedi et mercredi",
        time: "14:00 - 15:30",
        duration: "10 semaines",
        group: "8 a 14 etudiants",
        type: "Conversation active",
        goals: ["Exprimer une opinion simple", "Raconter un evenement", "Comprendre des documents authentiques faciles"],
        skills: ["Fluidite orale", "Redaction guidee", "Ecoute naturelle", "Debats courts"]
    },
    {
        code: "B2",
        title: "Intermediaire avance",
        summary: "Argumenter, rediger clairement et communiquer avec aisance.",
        days: "Lundi et jeudi",
        time: "16:00 - 17:30",
        duration: "10 semaines",
        group: "6 a 12 etudiants",
        type: "Langue professionnelle",
        goals: ["Participer a une discussion structuree", "Presenter un sujet", "Rediger des textes organises"],
        skills: ["Argumentation", "Presentation orale", "Ecriture professionnelle", "Vocabulaire specialise"]
    },
    {
        code: "C1",
        title: "Avance",
        summary: "Utiliser une langue fluide, nuancee et adaptee aux contextes exigeants.",
        days: "Mardi et jeudi",
        time: "18:00 - 19:30",
        duration: "12 semaines",
        group: "6 a 10 etudiants",
        type: "Preparation examens",
        goals: ["Comprendre des textes complexes", "Defendre un point de vue detaille", "Produire des ecrits academiques ou professionnels"],
        skills: ["Nuances", "Synthese", "Expression avancee", "Correction stylistique"]
    },
    {
        code: "C2",
        title: "Maitrise",
        summary: "Perfectionner la precision, la spontaneite et la qualite de l'expression.",
        days: "Mercredi et samedi",
        time: "18:00 - 20:00",
        duration: "14 semaines",
        group: "4 a 8 etudiants",
        type: "Perfectionnement intensif",
        goals: ["Parler avec spontaneite", "Analyser des documents complexes", "Produire un discours clair, naturel et precis"],
        skills: ["Style avance", "Debat expert", "Correction fine", "Expression academique"]
    }
];

const teacherImages = [
    "../assets/img/teacher1.jpg",
    "../assets/img/teacher2.jpg",
    "../assets/img/teacher3.jpg",
    "../assets/img/teacher4.jpg",
    "../assets/img/teacher5.jpg",
    "../assets/img/teacher6.jpg"
];

function listItems(items) {
    return items.map((item) => `<li>${item}</li>`).join("");
}

function getCourseTypes(config) {
    const name = config.name;
    const lowerName = config.lowerName;

    return [
        {
            icon: "fa-solid fa-book-open-reader",
            title: `${name} general`,
            text: `Grammaire, vocabulaire, oral et ecrit pour progresser regulierement en ${lowerName}.`,
            details: [
                "Cours adaptes aux niveaux A1, A2, B1 et B2.",
                "Exercices pratiques a chaque seance.",
                "Revision des bases, vocabulaire utile et production orale.",
                "Supports numeriques fournis apres le cours."
            ]
        },
        {
            icon: "fa-solid fa-comments",
            title: "Conversation",
            text: "Pratique orale intensive pour parler avec plus de confiance dans les situations reelles.",
            details: [
                "Jeux de role, dialogues, debats courts et mises en situation.",
                "Correction de la prononciation et des erreurs frequentes.",
                "Ideal pour les niveaux A2, B1, B2 et C1.",
                "Travail de la fluidite et du vocabulaire actif."
            ]
        },
        {
            icon: "fa-solid fa-briefcase",
            title: `${name} professionnel`,
            text: "Reunions, emails, presentations et vocabulaire utile pour le travail.",
            details: [
                "Redaction de mails, CV, lettres et messages professionnels.",
                "Simulation d'entretien, reunion et presentation.",
                "Vocabulaire adapte aux etudes, au commerce et au bureau.",
                "Conseils pour communiquer de fa&ccedil;on claire et polie."
            ]
        },
        {
            icon: "fa-solid fa-graduation-cap",
            title: "Preparation examens",
            text: "Entrainement cible pour les tests, entretiens et dossiers d'etudes.",
            details: [
                "Tests blancs, comprehension orale, comprehension ecrite et production.",
                "Methodes pour gerer le temps pendant l'examen.",
                "Correction detaillee avec conseils personnalises.",
                "Disponible surtout pour B1, B2, C1 et C2."
            ]
        },
        {
            icon: "fa-solid fa-bolt",
            title: "Stage intensif",
            text: "Formation acceleree pour progresser rapidement avant un voyage, un concours ou une rentree.",
            details: [
                "Programme court avec plusieurs seances par semaine.",
                "Objectifs fixes des le premier jour.",
                "Petits groupes pour parler davantage.",
                "Bilan final avec recommandations pour la suite."
            ]
        }
    ];
}

function renderCourseTypes(config) {
    return getCourseTypes(config).map((type) => `
        <details class="type-card expandable-card">
            <summary>
                <span class="summary-main">
                    <i class="${type.icon}"></i>
                    <span>
                        <strong>${type.title}</strong>
                        <small>${type.text}</small>
                    </span>
                </span>
                <span class="summary-more">Voir plus</span>
            </summary>
            <div class="type-more">
                <h4>Ce que vous allez trouver</h4>
                <ul>${listItems(type.details)}</ul>
            </div>
        </details>
    `).join("");
}

function renderLevels(config) {
    return levelPlans.map((level, index) => {
        const teacher = config.teachers[index];
        const certificate = `Attestation ${config.name} ${level.code}`;

        return `
            <details class="level-card expandable-card">
                <summary>
                    <span class="level-top">
                        <span class="level-badge">${level.code}</span>
                        <span>
                            <strong>${level.title}</strong>
                            <small>${level.summary}</small>
                        </span>
                    </span>
                    <span class="summary-more">Voir plus</span>
                </summary>
                <div class="level-more">
                    <div class="level-details-grid">
                        <div class="detail-block">
                            <h4>Horaires et organisation</h4>
                            <ul class="level-info">
                                <li><i class="fa-regular fa-clock"></i> ${level.days}, ${level.time}</li>
                                <li><i class="fa-regular fa-calendar"></i> Duree: ${level.duration}</li>
                                <li><i class="fa-solid fa-user-tie"></i> Professeur: ${teacher}</li>
                                <li><i class="fa-solid fa-users"></i> Groupe: ${level.group}</li>
                                <li><i class="fa-solid fa-layer-group"></i> Type: ${level.type}</li>
                            </ul>
                        </div>
                        <div class="detail-block">
                            <h4>Objectifs du niveau</h4>
                            <ul>${listItems(level.goals)}</ul>
                        </div>
                        <div class="detail-block">
                            <h4>Competences travaillees</h4>
                            <ul>${listItems(level.skills)}</ul>
                        </div>
                        <div class="detail-block">
                            <h4>Suivi et validation</h4>
                            <ul>
                                <li>Test de niveau avant inscription.</li>
                                <li>Exercices pratiques a chaque seance.</li>
                                <li>Evaluation orale et ecrite en fin de parcours.</li>
                                <li>${certificate} remise apres validation.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="level-actions">
                        <a href="inscription.html" class="level-btn">S'inscrire</a>
                        <a href="contact.html" class="ghost-btn">Poser une question</a>
                    </div>
                </div>
            </details>
        `;
    }).join("");
}

function renderSchedule(config) {
    return levelPlans.map((level, index) => `
        <tr>
            <td>${level.code}</td>
            <td>${level.type}</td>
            <td>${level.days}</td>
            <td>${level.time}</td>
            <td>${level.duration}</td>
            <td>${config.teachers[index]}</td>
        </tr>
    `).join("");
}

function renderTeachers(config) {
    return config.teachers.map((teacher, index) => `
        <article class="teacher-card">
            <img src="${teacherImages[index]}" alt="Professeur ${teacher}">
            <h3>${teacher}</h3>
            <p>${config.teacherNotes[index]}</p>
        </article>
    `).join("");
}

function renderLanguagePage() {
    const page = document.querySelector("[data-language-page]");
    if (!page) return;

    const key = document.body.dataset.language;
    const config = languageConfigs[key];
    if (!config) return;

    document.title = `Cours de ${config.name.replace(/&ccedil;/g, "c")}`;
    document.documentElement.style.setProperty("--language-hero-image", `url("${config.image}")`);

    document.querySelectorAll("[data-language-name]").forEach((element) => {
        element.innerHTML = config.name;
    });

    const intro = document.querySelector("[data-language-intro]");
    const overviewTitle = document.querySelector("[data-overview-title]");
    const overviewText = document.querySelector("[data-overview-text]");
    const overviewImage = document.querySelector("[data-overview-image]");
    const typeGrid = document.querySelector("[data-type-grid]");
    const levelGrid = document.querySelector("[data-level-grid]");
    const scheduleRows = document.querySelector("[data-schedule-rows]");
    const teacherGrid = document.querySelector("[data-teacher-grid]");

    if (intro) intro.innerHTML = config.intro;
    if (overviewTitle) overviewTitle.innerHTML = config.overviewTitle;
    if (overviewText) overviewText.innerHTML = config.overviewText;
    if (overviewImage) {
        overviewImage.src = config.image;
        overviewImage.alt = `Cours de ${config.name}`;
    }
    if (typeGrid) typeGrid.innerHTML = renderCourseTypes(config);
    if (levelGrid) levelGrid.innerHTML = renderLevels(config);
    if (scheduleRows) scheduleRows.innerHTML = renderSchedule(config);
    if (teacherGrid) teacherGrid.innerHTML = renderTeachers(config);

    document.querySelectorAll("details.expandable-card").forEach((details) => {
        details.addEventListener("toggle", () => {
            const label = details.querySelector(".summary-more");
            if (label) label.textContent = details.open ? "Voir moins" : "Voir plus";
        });
    });
}

document.addEventListener("DOMContentLoaded", renderLanguagePage);
