/* ==========================================================================
   Générateurs XLSForm — données produits partagées (FR / EN)
   Utilisé par index.html, commande.html et mise-a-jour.html
   Les textes visibles sont au format { fr: "...", en: "..." } et lus avec xlsL().
   « highlights » = version courte affichée sur les cartes de l'accueil.
   « deliverables » = version détaillée affichée sur la page de commande.
   ========================================================================== */

var WEBHOOK_BASE = "https://davy77.app.n8n.cloud/webhook/";
var CONTACT_EMAIL = "armanddavy7@gmail.com";
/* Boutique Chariow : chaque pack y a sa page de paiement (formule unique ou abonnement).
   Après paiement, le client reçoit sa clé d'accès via activer.html. */
var CHARIOW_STORE = "https://ymkecnxg.mychariow.com/";
var ACTIVATION_PATH = "activer-xlsform";

/* [valeur envoyée au workflow, libellé FR, libellé EN] */
var TYPE_ETUDE = [
  ["enquete_quantitative", "Enquête quantitative (population générale)", "Quantitative survey (general population)"],
  ["kap", "Étude KAP (Connaissances, Attitudes, Pratiques)", "KAP study (Knowledge, Attitudes, Practices)"],
  ["evaluation_impact", "Évaluation d'impact", "Impact evaluation"],
  ["baseline_endline", "Étude de référence / mi-parcours / fin de projet (baseline · midline · endline)", "Baseline / midline / endline study"],
  ["evaluation_projet", "Évaluation de projet ou de programme", "Project or programme evaluation"],
  ["etude_marche", "Étude de marché", "Market study"],
  ["enquete_satisfaction", "Enquête de satisfaction / perception", "Satisfaction / perception survey"],
  ["evaluation_besoins", "Évaluation des besoins", "Needs assessment"],
  ["etude_qualitative", "Étude qualitative (entretiens, focus groups)", "Qualitative study (interviews, focus groups)"],
  ["etude_mixte", "Étude à méthodes mixtes (quantitatif + qualitatif)", "Mixed-methods study (quantitative + qualitative)"],
  ["autre", "Autre", "Other"]
];

var PRODUCTS = [
  {
    id: "kobo",
    packLabel: { fr: "Pack 1", en: "Pack 1" },
    brand: "KoboConvert",
    tag: "xlsform · kobo/odk",
    tagline: {
      fr: "La base : un questionnaire transformé en formulaire de collecte fiable.",
      en: "The foundation: your questionnaire turned into a reliable collection form."
    },
    desc: {
      fr: "Votre questionnaire Word, PDF ou Excel devient un fichier .xlsx prêt à importer dans KoboToolbox ou ODK Central.",
      en: "Your Word, PDF or Excel questionnaire becomes an .xlsx file ready to import into KoboToolbox or ODK Central."
    },
    webhookPath: "xlsform-questionnaire",
    chariowProduct: "prd_uqezzv3g",
    standaloneFormUrl: "https://trebi7.github.io/Generateur-XLSForm-Automatique/",
    fields: "simple",
    formats: [".docx", ".xlsx", ".xls", ".pdf"],
    duration: { fr: "en 4 à 5 minutes après envoi", en: "4 to 5 minutes after submission" },
    popular: false,
    progress: 20,
    inheritsFrom: null,
    highlights: {
      fr: ["XLSForm prêt pour Kobo / ODK Central", "Sauts, contraintes et validations inclus", "Livré par email en quelques minutes"],
      en: ["XLSForm ready for Kobo / ODK Central", "Skip logic, constraints and checks included", "Delivered by email within minutes"]
    },
    deliverables: {
      fr: [
        "XLSForm (.xlsx) prêt à importer dans KoboToolbox ou ODK Central",
        "Sauts conditionnels, contraintes et validations calculés automatiquement",
        "Validation automatique de la structure avant envoi — zéro erreur à l'import",
        "Livré par email en quelques minutes"
      ],
      en: [
        "XLSForm (.xlsx) ready to import into KoboToolbox or ODK Central",
        "Skip logic, constraints and validations generated automatically",
        "Automatic structure check before delivery, for a clean import",
        "Delivered by email within minutes"
      ]
    },
    plans: {
      unique: {
        label: { fr: "Exécution unique", en: "One-off run" }, amount: 3000, usd: 5,
        detail: { fr: "Un XLSForm généré à partir de votre questionnaire.", en: "One XLSForm generated from your questionnaire." }
      },
      abonnement: {
        label: { fr: "Abonnement", en: "Subscription" }, amount: 5000, usd: 9, credits: 10, days: 30,
        detail: { fr: "10 créations ou corrections de formulaire, avec clé d'accès valable 30 jours.", en: "10 form creations or corrections, with an access key valid for 30 days." }
      }
    }
  },
  {
    id: "surveycto",
    packLabel: { fr: "Pack 2", en: "Pack 2" },
    brand: "CTOConvert",
    tag: "xlsform · surveycto",
    tagline: {
      fr: "Le même moteur, taillé pour les exigences de SurveyCTO.",
      en: "The same engine, built for SurveyCTO's requirements."
    },
    desc: {
      fr: "Même pipeline que KoboConvert, adapté aux spécificités de SurveyCTO : field-plans, contraintes et types propres à la plateforme.",
      en: "The same pipeline as KoboConvert, adapted to SurveyCTO: field options, constraints and platform-specific types."
    },
    webhookPath: "surveycto-questionnaire",
    chariowProduct: "prd_ahooc9cb",
    standaloneFormUrl: "https://trebi7.github.io/Generateur-SurveyCTO_XLSForm-Automatique/",
    fields: "simple",
    formats: [".docx", ".xlsx", ".pdf"],
    duration: { fr: "en 4 à 5 minutes après envoi", en: "4 to 5 minutes after submission" },
    popular: false,
    progress: 20,
    inheritsFrom: null,
    highlights: {
      fr: ["XLSForm prêt pour SurveyCTO", "Types et contraintes propres à SurveyCTO", "Livré par email en quelques minutes"],
      en: ["XLSForm ready for SurveyCTO", "SurveyCTO-specific types and constraints", "Delivered by email within minutes"]
    },
    deliverables: {
      fr: [
        "XLSForm (.xlsx) prêt à importer dans SurveyCTO",
        "Field-plans, contraintes et types propres à SurveyCTO respectés",
        "Même rigueur de validation que la version KoboConvert",
        "Livré par email en quelques minutes"
      ],
      en: [
        "XLSForm (.xlsx) ready to import into SurveyCTO",
        "SurveyCTO field options, constraints and types respected",
        "The same validation standard as KoboConvert",
        "Delivered by email within minutes"
      ]
    },
    plans: {
      unique: {
        label: { fr: "Exécution unique", en: "One-off run" }, amount: 3000, usd: 5,
        detail: { fr: "Un XLSForm SurveyCTO généré à partir de votre questionnaire.", en: "One SurveyCTO XLSForm generated from your questionnaire." }
      },
      abonnement: {
        label: { fr: "Abonnement", en: "Subscription" }, amount: 5000, usd: 9, credits: 10, days: 30,
        detail: { fr: "10 créations ou corrections de formulaire, avec clé d'accès valable 30 jours.", en: "10 form creations or corrections, with an access key valid for 30 days." }
      }
    }
  },
  {
    id: "plan-analyse",
    packLabel: { fr: "Pack 3", en: "Pack 3" },
    brand: "DataReady",
    tag: "xlsform + plan",
    tagline: {
      fr: "Le formulaire, et déjà la moitié du rapport d'analyse.",
      en: "The form, with half of your analysis report already done."
    },
    desc: {
      fr: "Le XLSForm validé, plus un plan d'analyse structuré sur vos propres indicateurs — prêt à collecter et à analyser.",
      en: "A validated XLSForm plus an analysis plan built on your own indicators, ready for collection and analysis."
    },
    webhookPath: "plan-analyse-questionnaire",
    chariowProduct: "prd_h2j3v2c7",
    standaloneFormUrl: "https://trebi7.github.io/XLSForm-Plan-Analyse/",
    fields: "extended",
    formats: [".docx", ".xlsx", ".pdf"],
    duration: { fr: "en 7 à 8 minutes après envoi", en: "7 to 8 minutes after submission" },
    popular: true,
    progress: 50,
    inheritsFrom: { id: "kobo", label: { fr: "Tout KoboConvert", en: "Everything in KoboConvert" } },
    highlights: {
      fr: ["Dictionnaire des variables", "Plan d'analyse Word par objectif", "Calcul détaillé de chaque indicateur"],
      en: ["Variable dictionary", "Word analysis plan by objective", "Calculation method for each indicator"]
    },
    deliverables: {
      fr: [
        "Dictionnaire des variables prêt pour votre rapport ou votre demande d'autorisation",
        "Plan d'analyse (Word) structuré par objectif, aligné sur les standards du secteur",
        "Mode de calcul détaillé pour chaque indicateur clé",
        "Sortie XLSForm au choix : KoboToolbox/ODK ou SurveyCTO"
      ],
      en: [
        "Variable dictionary ready for your report or your approval request",
        "Analysis plan (Word) organised by objective, in line with sector standards",
        "Detailed calculation method for each key indicator",
        "XLSForm output of your choice: KoboToolbox/ODK or SurveyCTO"
      ]
    },
    plans: {
      unique: {
        label: { fr: "Exécution unique", en: "One-off run" }, amount: 5000, usd: 9,
        detail: { fr: "Un XLSForm, son dictionnaire des variables et son plan d'analyse.", en: "One XLSForm with its variable dictionary and analysis plan." }
      },
      abonnement: {
        label: { fr: "Abonnement", en: "Subscription" }, amount: 10000, usd: 17, credits: 10, days: 30,
        detail: { fr: "10 créations ou corrections de formulaire, avec clé d'accès valable 30 jours.", en: "10 form creations or corrections, with an access key valid for 30 days." }
      }
    }
  },
  {
    id: "scripts-r",
    packLabel: { fr: "Pack 4", en: "Pack 4" },
    brand: "FormR Stats",
    tag: "xlsform + plan + r",
    tagline: {
      fr: "De la collecte aux premiers tableaux, sans ressaisie.",
      en: "From data collection to first tables, with no re-entry."
    },
    desc: {
      fr: "Ajoute un projet R complet : apurement statistique contrôlé et tracé, un script d'analyse par section du plan et un rapport Word, bâtis sur la structure exacte de votre questionnaire.",
      en: "Adds a complete R project: controlled, traceable statistical cleaning, one analysis script per plan section and a Word report, built on your questionnaire's exact structure."
    },
    webhookPath: "177a8632-f1ae-4062-bd9b-2a7bdd6c4d70",
    chariowProduct: "prd_5ojovb4m",
    standaloneFormUrl: "https://trebi7.github.io/XLSForm-Plan-Analyse-Scripts-R/",
    fields: "extended",
    formats: [".docx", ".xlsx", ".pdf"],
    duration: { fr: "environ 16 minutes après envoi", en: "about 16 minutes after submission" },
    popular: false,
    progress: 75,
    inheritsFrom: { id: "plan-analyse", label: { fr: "Tout DataReady", en: "Everything in DataReady" } },
    highlights: {
      fr: ["Apurement statistique tracé", "Un script R par section du plan", "Rapport Word automatique"],
      en: ["Traceable statistical cleaning", "One R script per plan section", "Automatic Word report"]
    },
    deliverables: {
      fr: [
        "Apurement rigoureux : doublons, codes invalides, bornes et sauts du XLSForm, valeurs extrêmes (Tukey, z robuste) signalées sans suppression",
        "Journal de chaque correction et rapport qualité Excel ; données brutes jamais modifiées, aucune imputation",
        "Un script d'analyse par section du plan (indicateurs, graphiques, tableaux) et un rapport Word",
        "Import direct de votre export Kobo, ODK, Ona ou SurveyCTO (CSV ou Excel), sans connexion API"
      ],
      en: [
        "Rigorous cleaning: duplicates, invalid codes, XLSForm ranges and skip logic, outliers (Tukey, robust z) flagged, never deleted",
        "Log of every correction and Excel quality report; raw data never modified, no imputation",
        "One analysis script per plan section (indicators, charts, tables) and a Word report",
        "Direct import of your Kobo, ODK, Ona or SurveyCTO export (CSV or Excel), no API connection"
      ]
    },
    plans: {
      unique: {
        label: { fr: "Exécution unique", en: "One-off run" }, amount: 10000, usd: 17,
        detail: { fr: "Un XLSForm avec son dictionnaire, son plan d'analyse et son projet R (apurement et analyse).", en: "One XLSForm with its dictionary, analysis plan and R project (cleaning and analysis)." }
      },
      abonnement: {
        label: { fr: "Abonnement", en: "Subscription" }, amount: 15000, usd: 26, credits: 10, days: 30,
        detail: { fr: "10 générations complètes, création ou correction : XLSForm, plan et scripts R refaits à chaque fois. Clé valable 30 jours.", en: "10 full runs, new or corrected questionnaire: XLSForm, plan and R scripts rebuilt each time. Key valid for 30 days." }
      }
    }
  },
  {
    id: "dashboard",
    packLabel: { fr: "Pack 5", en: "Pack 5" },
    brand: "FormR Premium",
    tag: "xlsform + plan + r + dashboard",
    tagline: {
      fr: "La formule complète : de la collecte à la décision.",
      en: "The complete package: from data collection to decision."
    },
    desc: {
      fr: "XLSForm, dictionnaire, plan d'analyse, scripts R et dashboard interactif, tous bâtis sur les variables de votre questionnaire.",
      en: "XLSForm, variable dictionary, analysis plan, R scripts and interactive dashboard, all built on your questionnaire's variables."
    },
    webhookPath: "afac4eba-5ba6-4783-a7e6-9cc15dc05b8e",
    chariowProduct: "prd_h7cwryq1",
    fields: "extended",
    formats: [".docx", ".xlsx", ".pdf"],
    duration: {
      fr: "environ 20 minutes après envoi",
      en: "about 20 minutes after submission"
    },
    popular: false,
    progress: 100,
    inheritsFrom: { id: "scripts-r", label: { fr: "Tout FormR Stats", en: "Everything in FormR Stats" } },
    highlights: {
      fr: ["Dashboard HTML interactif", "S'ouvre dans un navigateur", "Power BI ou Shiny sur devis"],
      en: ["Interactive HTML dashboard", "Opens in any browser", "Power BI or Shiny on quote"]
    },
    deliverables: {
      fr: [
        "XLSForm Kobo/ODK ou SurveyCTO, dictionnaire des variables (Excel) et plan d'analyse (Word)",
        "Projet R complet : apurement statistique tracé (journal, rapport qualité), un script par section du plan, rapport Word",
        "Dashboard HTML interactif : indicateurs et graphiques sur les variables réelles du questionnaire",
        "Il s'ouvre dans un navigateur, avec des données de démonstration ; chargez votre export CSV ou Excel pour voir vos chiffres",
        "Dashboard Power BI ou Shiny sur mesure : sur devis, délai convenu séparément"
      ],
      en: [
        "XLSForm for Kobo/ODK or SurveyCTO, variable dictionary (Excel) and analysis plan (Word)",
        "Complete R project: traceable statistical cleaning (log, quality report), one script per plan section, Word report",
        "Interactive HTML dashboard: indicators and charts on your questionnaire's real variables",
        "Opens in a web browser with demo data; load your CSV or Excel export to see your own figures",
        "Custom Power BI or Shiny dashboard: on quote, with a separately agreed timeline"
      ]
    },
    plans: {
      unique: {
        label: { fr: "Exécution unique", en: "One-off run" }, amount: 15000, usd: 26,
        detail: { fr: "Un XLSForm avec son dictionnaire, son plan d'analyse, ses scripts R et son dashboard HTML interactif.", en: "One XLSForm with its dictionary, analysis plan, R scripts and interactive HTML dashboard." }
      },
      abonnement: {
        label: { fr: "Abonnement", en: "Subscription" }, amount: 25000, usd: 43, credits: 10, days: 30,
        detail: { fr: "10 générations complètes, création ou correction : XLSForm, plan, scripts R et dashboard refaits à chaque fois. Clé valable 30 jours.", en: "10 full runs, new or corrected questionnaire: XLSForm, plan, R scripts and dashboard rebuilt each time. Key valid for 30 days." }
      }
    }
  }
];

function xlsFindProduct(id){
  for (var i = 0; i < PRODUCTS.length; i++){ if (PRODUCTS[i].id === id) return PRODUCTS[i]; }
  return null;
}

/* Prix affiché selon la langue : FCFA en français, dollars américains en anglais.
   Les montants en dollars sont fixes et arrondis (taux de référence : 1 USD ≈ 583 FCFA,
   octobre 2026) ; le paiement Chariow reste facturé dans la devise de la boutique. */
function xlsFmtPrice(plan){
  if (typeof XLS_LANG !== "undefined" && XLS_LANG === "en" && plan.usd) return "US$" + plan.usd;
  return xlsFmtFCFA(plan.amount);
}

function xlsFmtFCFA(n){
  var lang = (typeof XLS_LANG !== "undefined" && XLS_LANG === "en") ? "en-US" : "fr-FR";
  return n.toLocaleString(lang) + " FCFA";
}

/* Page de paiement Chariow du pack (null tant que le produit n'existe pas) */
function xlsChariowUrl(product){
  return product && product.chariowProduct ? CHARIOW_STORE + product.chariowProduct : null;
}

/* Formulaire du pack : page dédiée si elle existe, sinon la page de commande du site */
function xlsFormUrl(product){
  return product.standaloneFormUrl || ("commande.html?pack=" + product.id);
}
