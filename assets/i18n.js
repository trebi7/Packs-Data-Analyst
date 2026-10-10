/* ==========================================================================
   Traductions FR / EN — partagées par index.html, commande.html et mise-a-jour.html
   La langue choisie est mémorisée sous la même clé que les autres formulaires
   (xlsform_lang) : elle suit donc le visiteur d'une page à l'autre.
   ========================================================================== */

var XLS_LANG = (function(){
  try {
    var saved = localStorage.getItem("xlsform_lang");
    if (saved === "fr" || saved === "en") return saved;
  } catch (e) { /* localStorage indisponible */ }
  var nav = (navigator.language || navigator.userLanguage || "fr").toLowerCase();
  return nav.indexOf("en") === 0 ? "en" : "fr";
})();

var I18N = {
  fr: {
    /* --- commun --- */
    nav_logo: '📋 L\'Analyse des données, de la conception des outils au rapport',
    nav_see_packs: "Voir les packs →",
    nav_update: "🔄 Mise à jour",
    nav_all_packs: "← Tous les packs",
    crumb_back: "← retour aux packs",
    choose: "Choisir…",
    f_project: "Nom du projet",
    f_subject: "Sujet / objectif de l’étude",
    f_domain: "Domaine / secteur",
    ph_domain: "santé, éducation, agriculture…",
    f_type: "Type d’étude",
    f_type_other: "Précisez le type d’étude",
    f_format: "Format du XLSForm",
    file_hint: "Formats acceptés : {f} — 25 Mo maximum.",
    file_bad_ext: "Format .{e} non pris en charge. Utilisez {f}.",
    file_too_big: "Fichier trop volumineux ({s} Mo). 25 Mo maximum.",
    file_ok: "{n} — {s} Mo. Fichier prêt.",
    one_off: "Exécution unique",
    subscription: "Pass 30 jours (10 crédits)",

    /* --- index.html --- */
    title_index: "XLSForm Pro — Convertisseur de questionnaires KoboToolbox",
    audience: 'Vous êtes <strong>Data Analyst</strong>, <strong>Statisticien</strong>, <strong>passionné de la data ou chargé de l\'analyse des données d\'une étude</strong> — vous êtes au bon endroit.',
    how_title: "Comment ça marche",
    how_sub: "Un paiement, une clé, et vos fichiers arrivent par email.",
    step1_t: "Choisissez votre pack",
    step1_d: "KoboConvert, CTOConvert, DataReady, FormR Stats ou FormR Premium.",
    step2_t: "Payez sur Chariow",
    step2_d: "Réglez votre pack sur Chariow, en exécution unique ou en pass 30 jours (10 crédits).",
    step3_t: "Recevez votre clé",
    step3_d: "Saisissez l’email du paiement sur la page d’activation : votre clé d’accès arrive par email.",
    step4_t: "Envoyez votre questionnaire",
    step4_d: "Le formulaire du pack vérifie votre clé, puis vos livrables arrivent par email en quelques minutes.",
    packs_title: "Choisissez votre pack",
    packs_sub: "Payez le pack sur Chariow, puis ouvrez son formulaire avec la clé reçue par email.",
    update_q: "Déjà payé ? Recevez votre clé, ou renvoyez un questionnaire modifié.",
    update_link: "🔑 Recevoir ma clé d’accès",
    price_from: "Dès",
    popular: "⭐ Le plus choisi",
    open_form: "Ouvrir le formulaire",
    plan_note: "Le formulaire demande la clé reçue par email après le paiement.",

    /* --- commande.html --- */
    title_order: "Commande — XLSForm Pro",
    title_order_pack: "{b} — Commande — XLSForm Pro",
    ph_order: "Commande",
    ph_loading: "Chargement du pack sélectionné…",
    pack_not_found: "Pack introuvable",
    pack_not_found_sub: "Le pack demandé n'existe pas. Retournez à la liste des packs pour en choisir un.",
    form_title: "Vos informations",
    form_sub_default: "Renseignez votre projet et joignez votre questionnaire.",
    form_sub: "Renseignez votre projet, votre clé d’accès et joignez votre questionnaire. Traitement {d}.",
    order_sending: "Envoi de votre questionnaire en cours…",
    order_sent: "Commande envoyée",
    pay_label: "Paiement",
    pay_btn: "Payer {b} sur Chariow",
    pay_note: "Après le paiement, recevez votre clé sur la page d’activation, avec l’email utilisé sur Chariow.",
    f_email: "Email utilisé sur Chariow",
    f_email_hint: "Vos livrables seront envoyés à cette adresse.",
    f_lang: "Langue des livrables",
    f_file: "Questionnaire à convertir",
    f_notes: "Observations",
    ph_notes: "Toute précision utile pour votre commande (délai souhaité, particularités du questionnaire…).",
    submit: "Envoyer ma commande",
    sending_btn: "Envoi en cours…",
    res_ok_text: "Merci ! Votre clé a été vérifiée et votre questionnaire transmis. Vous recevrez vos livrables par email, généralement en quelques minutes. En cas de doute, écrivez à {e}.",
    unknown_err: "erreur inconnue",

    /* --- mise-a-jour.html --- */
    title_update: "Mise à jour — XLSForm Pro",
    up_h1: "🔄 Mise à jour de votre formulaire",
    up_intro: "Votre questionnaire a changé ? Renvoyez-le avec votre clé d’accès. Chaque envoi utilise un crédit, sans repayer tant que la clé a des crédits et moins de 30 jours.",
    up_form_title: "Votre demande de mise à jour",
    up_form_sub: "L’email et la clé doivent être ceux de votre paiement Chariow.",
    up_notice: "<strong>Vérification automatique.</strong> Votre email et votre clé sont vérifiés par notre serveur avant tout envoi de fichier : clé active, crédits restants et délai de 30 jours. Une erreur est signalée tout de suite, sans que votre fichier ne soit transmis.",
    f_pack: "Pack concerné",
    choose_pack: "Choisir votre pack…",
    f_email_purchase: "Email utilisé à l’achat",
    f_key: "Clé d’accès",
    ph_key: "Ex. FRP-4F2A-9QRT",
    f_file_updated: "Questionnaire mis à jour",
    f_changes: "Qu’est-ce qui a changé ?",
    ph_changes: "Décrivez les modifications apportées au questionnaire depuis votre dernière commande.",
    submit_choose_first: "Choisissez d’abord un pack",
    submit_update: "Envoyer ma mise à jour — {b}",
    up_sending: "Envoi de votre demande en cours…",
    up_sent: "Demande de mise à jour envoyée",
    checking: "Vérification de votre clé…",
    sending_file: "Envoi du questionnaire…",
    up_ok_title: "Mise à jour acceptée",
    up_ok_text: "Votre email et votre clé ont été vérifiés. Votre questionnaire mis à jour a été transmis et vous recevrez vos livrables par email, généralement en quelques minutes.",
    credits_left: " Après cet envoi, il restera {n} crédit(s) sur cette clé.",
    up_ko_title: "Mise à jour refusée",
    up_ko_text: "Votre email ou votre clé ne correspond à aucun accès actif pour ce pack. Vérifiez-les, ou écrivez à {e}.",
    verif_unreadable: "Réponse du serveur illisible.",
    verif_unreachable: "Impossible de joindre le serveur de vérification. Réessayez dans un instant.",
    ts_missing: "Cochez la case du contrôle anti-robot, juste au-dessus du bouton, puis renvoyez.",
    ts_unavailable: "Le contrôle anti-robot n'a pas pu se charger. Désactivez un éventuel bloqueur de publicités, puis rechargez la page.",
    aside_brand: "Rappel",
    aside_title: "Comment ça marche",
    aside_1: "Votre clé arrive par email après le paiement, depuis la page d’activation",
    aside_2: "Pass 30 jours : 10 crédits, payés une seule fois, sans renouvellement. Exécution unique : 1 crédit",
    aside_3: "Valable 30 jours à partir de la date d’achat",
    aside_4: "Clé perdue ? Recevez-la à nouveau sur la page d’activation",

    /* --- activation, paiement --- */
    update_link2: "🔄 Mettre à jour un questionnaire",
    buy_chariow: "Payer sur Chariow",
    buy_soon: "Bientôt sur Chariow",
    nav_activate: "🔑 Ma clé",
    pay_soon: "Le paiement Chariow de {b} arrive bientôt. Pour commander dès maintenant, écrivez à {e}.",
    activate_link: "🔑 Déjà payé ? Recevoir ma clé",
    f_key_hint: "Reçue par email après votre paiement Chariow.",
    order_ko_title: "Commande refusée",
    ko_text: "Cet email et cette clé ne donnent pas accès à ce pack. Vérifiez-les, ou recevez à nouveau votre clé sur la page d’activation.",
    title_activate: "Recevoir ma clé — XLSForm Pro",
    act_h1: "🔑 Recevoir ma clé d’accès",
    act_intro: "Vous avez payé un pack sur Chariow ? Saisissez l’email utilisé pour le paiement : nous retrouvons votre achat et vous envoyons votre clé par email.",
    act_form_title: "Email du paiement",
    act_form_sub: "Le même email que sur Chariow. Les achats des 30 derniers jours sont pris en compte.",
    act_email: "Email utilisé sur Chariow",
    act_submit: "Recevoir ma clé",
    act_sending: "Recherche de votre paiement…",
    act_ok_title: "Clé envoyée",
    act_ko_title: "Paiement introuvable",
    act_ko_default: "Aucun paiement de pack n’a été trouvé pour cet email. Vérifiez l’adresse, ou écrivez à {e}.",
    act_unreachable: "Le serveur d’activation n’a pas répondu. Réessayez dans un instant.",
    act_next: "Ouvrez ensuite le formulaire de votre pack et saisissez la clé avec cette même adresse email.",
    act_aside_1: "Une clé par pack acheté, envoyée à l’email du paiement",
    act_aside_2: "Exécution unique : 1 génération. Pass 30 jours : 10 générations, sans renouvellement automatique",
    act_aside_3: "Valable 30 jours à partir de la date d’achat",
    act_aside_4: "Vous pouvez redemander votre clé à tout moment : c’est toujours la même"
  },

  en: {
    /* --- common --- */
    nav_logo: '📋 Data analysis, from tool design to final report',
    nav_see_packs: "See the packs →",
    nav_update: "🔄 Update",
    nav_all_packs: "← All packs",
    crumb_back: "← back to packs",
    choose: "Choose…",
    f_project: "Project name",
    f_subject: "Study topic / objective",
    f_domain: "Field / sector",
    ph_domain: "health, education, agriculture…",
    f_type: "Study type",
    f_type_other: "Specify the study type",
    f_format: "XLSForm format",
    file_hint: "Accepted formats: {f}. 25 MB maximum.",
    file_bad_ext: "The .{e} format is not supported. Use {f}.",
    file_too_big: "File too large ({s} MB). 25 MB maximum.",
    file_ok: "{n} ({s} MB). File ready.",
    one_off: "One-off run",
    subscription: "30-day pass (10 credits)",

    /* --- index.html --- */
    title_index: "XLSForm Pro — KoboToolbox questionnaire converter",
    audience: 'Are you a <strong>Data Analyst</strong>, a <strong>Statistician</strong>, <strong>passionate about data or in charge of analyzing a study\'s data</strong>? You are in the right place.',
    how_title: "How it works",
    how_sub: "One payment, one key, and your files arrive by email.",
    step1_t: "Choose your pack",
    step1_d: "KoboConvert, CTOConvert, DataReady, FormR Stats or FormR Premium.",
    step2_t: "Pay on Chariow",
    step2_d: "Pay for your pack on Chariow, as a one-off run or a 30-day pass (10 credits).",
    step3_t: "Get your key",
    step3_d: "Enter your payment email on the activation page and your access key arrives by email.",
    step4_t: "Send your questionnaire",
    step4_d: "The pack's form checks your key, then your deliverables arrive by email within minutes.",
    packs_title: "Choose your pack",
    packs_sub: "Pay for the pack on Chariow, then open its form with the key you receive by email.",
    update_q: "Already paid? Get your key, or send an updated questionnaire.",
    update_link: "🔑 Get my access key",
    price_from: "From",
    popular: "⭐ Most popular",
    open_form: "Open the form",
    plan_note: "The form asks for the key you receive by email after payment.",

    /* --- commande.html --- */
    title_order: "Order — XLSForm Pro",
    title_order_pack: "{b} — Order — XLSForm Pro",
    ph_order: "Order",
    ph_loading: "Loading the selected pack…",
    pack_not_found: "Pack not found",
    pack_not_found_sub: "This pack does not exist. Go back to the list of packs to choose one.",
    form_title: "Your details",
    form_sub_default: "Tell us about your project and attach your questionnaire.",
    form_sub: "Tell us about your project, enter your access key and attach your questionnaire. Processing time: {d}.",
    order_sending: "Sending your questionnaire…",
    order_sent: "Order sent",
    pay_label: "Payment",
    pay_btn: "Pay for {b} on Chariow",
    pay_note: "Prices in US dollars are indicative: Chariow may charge the equivalent in your local currency. After payment, get your key on the activation page, using the email you paid with on Chariow.",
    f_email: "Email used on Chariow",
    f_email_hint: "Your deliverables will be sent to this address.",
    f_lang: "Deliverables language",
    f_file: "Questionnaire to convert",
    f_notes: "Comments",
    ph_notes: "Anything useful for your order (preferred deadline, specifics of the questionnaire…).",
    submit: "Send my order",
    sending_btn: "Sending…",
    res_ok_text: "Thank you! Your key was verified and your questionnaire sent. You will receive your deliverables by email, usually within minutes. If in doubt, write to {e}.",
    unknown_err: "unknown error",

    /* --- mise-a-jour.html --- */
    title_update: "Update — XLSForm Pro",
    up_h1: "🔄 Update your form",
    up_intro: "Your questionnaire has changed? Send it again with your access key. Each submission uses one credit, with nothing more to pay while the key has credits and is under 30 days old.",
    up_form_title: "Your update request",
    up_form_sub: "The email and key must be those of your Chariow payment.",
    up_notice: "<strong>Automatic check.</strong> Our server checks your email and key before any file is sent: active key, remaining credits and 30-day period. Any error is flagged right away, and your file is not sent.",
    f_pack: "Pack",
    choose_pack: "Choose your pack…",
    f_email_purchase: "Email used at purchase",
    f_key: "Access key",
    ph_key: "e.g. FRP-4F2A-9QRT",
    f_file_updated: "Updated questionnaire",
    f_changes: "What has changed?",
    ph_changes: "Describe the changes made to the questionnaire since your last order.",
    submit_choose_first: "Choose a pack first",
    submit_update: "Send my update ({b})",
    up_sending: "Sending your request…",
    up_sent: "Update request sent",
    checking: "Checking your key…",
    sending_file: "Sending the questionnaire…",
    up_ok_title: "Update accepted",
    up_ok_text: "Your email and key have been verified. Your updated questionnaire was sent and you will receive your deliverables by email, usually within minutes.",
    credits_left: " After this request, {n} credit(s) will remain on this key.",
    up_ko_title: "Update rejected",
    up_ko_text: "Your email or key does not match any active access for this pack. Check them, or write to {e}.",
    verif_unreadable: "The server response could not be read.",
    verif_unreachable: "Could not reach the verification server. Please try again in a moment.",
    ts_missing: "Please tick the anti-bot check box just above the button, then send again.",
    ts_unavailable: "The anti-bot check could not load. Disable any ad blocker, then reload the page.",
    aside_brand: "Reminder",
    aside_title: "How it works",
    aside_1: "Your key arrives by email after payment, from the activation page",
    aside_2: "30-day pass: 10 credits, paid once, no renewal. One-off run: 1 credit",
    aside_3: "Valid for 30 days from the purchase date",
    aside_4: "Lost your key? Get it again on the activation page",

    /* --- activation, paiement --- */
    update_link2: "🔄 Update a questionnaire",
    buy_chariow: "Pay on Chariow",
    buy_soon: "Coming soon on Chariow",
    nav_activate: "🔑 My key",
    pay_soon: "Chariow payment for {b} is coming soon. To order now, write to {e}.",
    activate_link: "🔑 Already paid? Get my key",
    f_key_hint: "Sent to you by email after your Chariow payment.",
    order_ko_title: "Order refused",
    ko_text: "This email and key do not give access to this pack. Check them, or get your key again on the activation page.",
    title_activate: "Get my key — XLSForm Pro",
    act_h1: "🔑 Get my access key",
    act_intro: "You paid for a pack on Chariow? Enter the email you used to pay: we find your purchase and send your key by email.",
    act_form_title: "Payment email",
    act_form_sub: "The same email as on Chariow. Purchases from the last 30 days are included.",
    act_email: "Email used on Chariow",
    act_submit: "Get my key",
    act_sending: "Looking for your payment…",
    act_ok_title: "Key sent",
    act_ko_title: "Payment not found",
    act_ko_default: "No pack payment was found for this email. Check the address, or write to {e}.",
    act_unreachable: "The activation server did not respond. Please try again in a moment.",
    act_next: "Then open your pack's form and enter the key with this same email address.",
    act_aside_1: "One key per pack purchased, sent to the payment email",
    act_aside_2: "One-off run: 1 generation. 30-day pass: 10 generations, no automatic renewal",
    act_aside_3: "Valid for 30 days from the purchase date",
    act_aside_4: "You can ask for your key again at any time: it is always the same one"
  }

};

/* Texte traduit, avec remplacement des variables {x} */
function xlsT(key, vars){
  var s = (I18N[XLS_LANG] && I18N[XLS_LANG][key]) || I18N.fr[key] || key;
  if (vars) for (var k in vars) s = s.split("{" + k + "}").join(vars[k]);
  return s;
}

/* Champ produit bilingue { fr, en } -> texte dans la langue courante */
function xlsL(v){
  if (v && typeof v === "object" && !Array.isArray(v) && ("fr" in v)) return v[XLS_LANG] || v.fr;
  return v;
}

/* Applique les traductions aux éléments marqués data-i18n* */
function xlsApplyStatic(){
  document.documentElement.lang = XLS_LANG;
  Array.prototype.forEach.call(document.querySelectorAll("[data-i18n]"), function(el){ el.textContent = xlsT(el.getAttribute("data-i18n")); });
  Array.prototype.forEach.call(document.querySelectorAll("[data-i18n-html]"), function(el){ el.innerHTML = xlsT(el.getAttribute("data-i18n-html")); });
  Array.prototype.forEach.call(document.querySelectorAll("[data-i18n-placeholder]"), function(el){ el.placeholder = xlsT(el.getAttribute("data-i18n-placeholder")); });
  Array.prototype.forEach.call(document.querySelectorAll(".lang-btn"), function(b){
    var on = b.getAttribute("data-lang") === XLS_LANG;
    b.classList.toggle("active", on);
    b.setAttribute("aria-pressed", on ? "true" : "false");
  });
}

/* Branche les boutons FR / EN ; onChange redessine les parties dynamiques de la page */
function xlsInitLangSwitch(onChange){
  Array.prototype.forEach.call(document.querySelectorAll(".lang-btn"), function(b){
    b.addEventListener("click", function(){
      var lang = b.getAttribute("data-lang") === "en" ? "en" : "fr";
      if (lang === XLS_LANG) return;
      XLS_LANG = lang;
      try { localStorage.setItem("xlsform_lang", lang); } catch (e) { /* ignore */ }
      xlsApplyStatic();
      if (onChange) onChange();
    });
  });
  xlsApplyStatic();
}
