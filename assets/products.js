/* ==========================================================================
   Générateurs XLSForm — données produits partagées
   Utilisé par index.html, commande.html et mise-a-jour.html
   ========================================================================== */

var WEBHOOK_BASE = "https://davy77.app.n8n.cloud/webhook/";
var CONTACT_EMAIL = "armanddavy7@gmail.com";

var TYPE_ETUDE = [
  ["enquete_quantitative", "Enquête quantitative (population générale)"],
  ["kap", "Étude KAP (Connaissances, Attitudes, Pratiques)"],
  ["evaluation_impact", "Évaluation d'impact"],
  ["baseline_endline", "Étude de référence / mi-parcours / fin de projet (baseline · midline · endline)"],
  ["evaluation_projet", "Évaluation de projet ou de programme"],
  ["etude_marche", "Étude de marché"],
  ["enquete_satisfaction", "Enquête de satisfaction / perception"],
  ["evaluation_besoins", "Évaluation des besoins"],
  ["etude_qualitative", "Étude qualitative (entretiens, focus groups)"],
  ["etude_mixte", "Étude à méthodes mixtes (quantitatif + qualitatif)"],
  ["autre", "Autre"]
];

var PRODUCTS = [
  {
    id: "kobo",
    packLabel: "Pack 1",
    brand: "KoboConvert",
    tag: "xlsform · kobo/odk",
    tagline: "La base : un questionnaire transformé en formulaire de collecte fiable.",
    desc: "Votre questionnaire Word, PDF ou Excel devient un fichier .xlsx prêt à importer dans KoboToolbox ou ODK Central.",
    webhookPath: "xlsform-questionnaire",
    fields: "simple",
    formats: [".docx", ".xlsx", ".xls", ".pdf"],
    duration: "en 4 à 5 minutes après envoi",
    popular: false,
    progress: 20,
    inheritsFrom: null,
    deliverables: [
      "XLSForm (.xlsx) prêt à importer dans KoboToolbox ou ODK Central",
      "Sauts conditionnels, contraintes et validations calculés automatiquement",
      "Validation automatique de la structure avant envoi — zéro erreur à l'import",
      "Livré par email en quelques minutes"
    ],
    plans: {
      unique:     { label: "Exécution unique", amount: 3000, detail: "Un XLSForm généré à partir de votre questionnaire." },
      abonnement: { label: "Abonnement", amount: 5000, credits: 10, days: 30, detail: "10 créations ou corrections de formulaire, avec clé d'accès valable 30 jours." }
    }
  },
  {
    id: "surveycto",
    packLabel: "Pack 2",
    brand: "CTOConvert",
    tag: "xlsform · surveycto",
    tagline: "Le même moteur, taillé pour les exigences de SurveyCTO.",
    desc: "Même pipeline que KoboConvert, adapté aux spécificités de SurveyCTO : field-plans, contraintes et types propres à la plateforme.",
    webhookPath: "surveycto-questionnaire",
    fields: "simple",
    formats: [".docx", ".xlsx", ".pdf"],
    duration: "en 4 à 5 minutes après envoi",
    popular: false,
    progress: 20,
    inheritsFrom: null,
    deliverables: [
      "XLSForm (.xlsx) prêt à importer dans SurveyCTO",
      "Field-plans, contraintes et types propres à SurveyCTO respectés",
      "Même rigueur de validation que la version KoboConvert",
      "Livré par email en quelques minutes"
    ],
    plans: {
      unique:     { label: "Exécution unique", amount: 3000, detail: "Un XLSForm SurveyCTO généré à partir de votre questionnaire." },
      abonnement: { label: "Abonnement", amount: 5000, credits: 10, days: 30, detail: "10 créations ou corrections de formulaire, avec clé d'accès valable 30 jours." }
    }
  },
  {
    id: "plan-analyse",
    packLabel: "Pack 3",
    brand: "DataReady",
    tag: "xlsform + plan",
    tagline: "Le formulaire, et déjà la moitié du rapport d'analyse.",
    desc: "Le XLSForm validé, plus un plan d'analyse structuré sur vos propres indicateurs — prêt à collecter et à analyser.",
    webhookPath: "plan-analyse-questionnaire",
    fields: "extended",
    formats: [".docx", ".xlsx", ".pdf"],
    duration: "en 7 à 8 minutes après envoi",
    popular: true,
    progress: 50,
    inheritsFrom: { id: "kobo", label: "Tout KoboConvert" },
    deliverables: [
      "Dictionnaire des variables prêt pour votre rapport ou votre demande d'autorisation",
      "Plan d'analyse (Word) structuré par objectif, aligné sur les standards du secteur",
      "Mode de calcul détaillé pour chaque indicateur clé",
      "Sortie XLSForm au choix : KoboToolbox/ODK ou SurveyCTO"
    ],
    plans: {
      unique:     { label: "Exécution unique", amount: 5000, detail: "Un XLSForm, son dictionnaire des variables et son plan d'analyse." },
      abonnement: { label: "Abonnement", amount: 10000, credits: 10, days: 30, detail: "10 créations ou corrections de formulaire, avec clé d'accès valable 30 jours." }
    }
  },
  {
    id: "scripts-r",
    packLabel: "Pack 4",
    brand: "FormR Stats",
    tag: "xlsform + plan + r",
    tagline: "De la collecte aux premiers tableaux, sans ressaisie.",
    desc: "Ajoute des scripts R d'import, de nettoyage et de tableaux croisés, générés à partir de la structure exacte de votre questionnaire.",
    webhookPath: "177a8632-f1ae-4062-bd9b-2a7bdd6c4d70",
    fields: "extended",
    formats: [".docx", ".xlsx", ".pdf"],
    duration: "en environ 6 minutes après envoi",
    popular: false,
    progress: 75,
    inheritsFrom: { id: "plan-analyse", label: "Tout DataReady" },
    deliverables: [
      "Script R d'import et de nettoyage (manquants, doublons, valeurs aberrantes)",
      "Script R de tableaux croisés prêts à l'emploi dès réception des données",
      "Fichier de données fictives pour tester les scripts avant la collecte",
      "Abonnement : corrections de formulaire ou de script incluses"
    ],
    plans: {
      unique:     { label: "Exécution unique", amount: 10000, detail: "Un XLSForm, son plan d'analyse et ses scripts R." },
      abonnement: { label: "Abonnement", amount: 15000, credits: 10, days: 30, detail: "10 créations ou corrections de formulaire, ou 10 corrections de script selon les changements du questionnaire." }
    }
  },
  {
    id: "dashboard",
    packLabel: "Pack 5",
    brand: "FormR Premium",
    tag: "xlsform + plan + dashboard",
    tagline: "La formule complète : de la collecte à la décision.",
    desc: "Tout FormR Stats, plus un tableau de bord connecté à la structure de vos données.",
    webhookPath: "afac4eba-5ba6-4783-a7e6-9cc15dc05b8e",
    fields: "extended",
    formats: [".docx", ".xlsx", ".pdf"],
    duration: "communiqué après réception de votre questionnaire — le dashboard ajoute une étape de conception",
    popular: false,
    progress: 100,
    inheritsFrom: { id: "scripts-r", label: "Tout FormR Stats" },
    deliverables: [
      "Dashboard Power BI connecté à la structure exacte de vos données",
      "Dashboard Shiny — sur devis, délai convenu séparément",
      "Formule complète : collecte, nettoyage, analyse et visualisation",
      "Abonnement : corrections incluses, avec mise à jour du modèle de données"
    ],
    plans: {
      unique:     { label: "Exécution unique", amount: 15000, detail: "Un XLSForm, son plan d'analyse, ses scripts R et son dashboard Power BI." },
      abonnement: { label: "Abonnement", amount: 25000, credits: 10, days: 30, detail: "10 créations ou corrections de formulaire, ou 10 corrections de script, avec correction du modèle de données selon les changements du questionnaire." }
    }
  }
];

function xlsFindProduct(id){
  for (var i = 0; i < PRODUCTS.length; i++){ if (PRODUCTS[i].id === id) return PRODUCTS[i]; }
  return null;
}

function xlsFmtFCFA(n){
  return n.toLocaleString("fr-FR") + " FCFA";
}

/* Clé d'abonnement lisible, générée côté client au moment de la commande.
   Elle est communiquée au client ET transmise à l'opérateur (dans le champ
   observations de l'email de commande) afin qu'il puisse la rapprocher
   manuellement des futures demandes de mise à jour tant qu'aucune
   vérification automatique n'est en place côté serveur. */
function xlsGenerateKey(productId){
  var part = function(){ return Math.random().toString(36).slice(2, 6).toUpperCase(); };
  var prefix = (productId || "XLS").slice(0, 3).toUpperCase();
  return prefix + "-" + part() + "-" + part();
}
