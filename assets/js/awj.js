/* ============================================================
   AWJ · أوج — shared behaviour
   i18n (ar / fr / en) + RTL, nav, reveals, demo widgets
   ============================================================ */

const I18N = {
  ar:{
    dir:"rtl",
    "nav.platform":"المنصة","nav.pricing":"الباقات","nav.trust":"الأخلاقيات","nav.demo":"العرض الحي","nav.contact":"تواصل",
    "cta.start":"ابدأ الآن","cta.demo":"شاهد المنصة","cta.book":"احجز عرضاً",

    "hero.eyebrow":"ذكاء السمعة الرقمية",
    "hero.title":"سمعتك في <span class='gold'>الأوج</span>.<br>ومحميّة على مدار الساعة.",
    "hero.lead":"منصة ذكاء اصطناعي ترصد كل ما يُقال عنك عبر الإنترنت والشبكات الاجتماعية — بالعربية وبكل اللغات — تُحلّله، تُنبّهك للحظة الخطر، وتُدير الدفاع والتعزيز عبر أسراب من الوكلاء الأذكياء.",
    "hero.m1":"مصدر مُراقَب","hero.m2":"لغة","hero.m3":"زمن الرصد",
    "hero.m1v":"+180","hero.m2v":"12","hero.m3v":"لحظي",

    "layers.eyebrow":"البنية","layers.title":"أربع طبقات. نظام واحد لا يهدأ.",
    "layers.lead":"من الرصد إلى الدفاع، تعمل الطبقات كسلسلة واحدة: ما يلتقطه الراصد يحلّله المحلّل، ما يُنذر به الحارس يتصرّف فيه المُستجيب.",
    "l1.t":"الرصد","l1.d":"وكلاء يمسحون الويب والشبكات ومواقع المراجعات والأخبار دون توقّف، ويلتقطون كل ذكرٍ لاسمك نصاً وصورةً وفيديو.",
    "l2.t":"التقارير","l2.d":"تقارير استخبارية واضحة: المشاعر، حصّة الصوت، مصادر النفوذ، والاتجاهات — مُلخّصة بالعربية بلغة صانع القرار.",
    "l3.t":"التنبيهات","l3.d":"إنذار لحظي عند أول إشارة أزمة أو حملة مسيئة، عبر البريد وواتساب والتطبيق، مُرتّب حسب الخطورة.",
    "l4.t":"الحلول والدفاع","l4.d":"تعزيز المحتوى الإيجابي المشروع، وإدارة طلبات الإزالة النظامية للمحتوى المخالف فعلاً عبر القنوات الرسمية والقانونية.",

    "agents.eyebrow":"وكلاء الأوج","agents.title":"سربٌ من الوكلاء، لكل مهمّته.",
    "a1.t":"الراصد","a1.d":"يجمع الإشارات","a2.t":"المحلّل","a2.d":"يقرأ المشاعر والسياق",
    "a3.t":"الحارس","a3.d":"يكشف التهديد","a4.t":"الاستراتيجي","a4.d":"يبني خطة الرد",
    "a5.t":"المُستجيب","a5.d":"يُنفّذ التعزيز والإزالة",

    "why.eyebrow":"لماذا الأوج","why.title":"مبنيّ ليتفوّق، لا ليُقلَّد.",
    "why.lead":"معظم الأدوات تكتفي بالرصد. الأوج يُغلق الحلقة كاملة: يرى، يفهم، يُنذر، ثم يتصرّف — بالعربية أولاً.",
    "why.i1":"<b>عربيّ أصيل.</b> تحليل يفهم اللهجات والسياق الثقافي، لا ترجمة سطحية.",
    "why.i2":"<b>حلقة مُغلقة.</b> من الإشارة إلى الإجراء داخل منصّة واحدة.",
    "why.i3":"<b>دفاع مشروع.</b> إزالة عبر القنوات الرسمية والقانون — لا تلاعب يُعرّضك للخطر.",
    "why.i4":"<b>متعدّد اللغات.</b> اثنتا عشرة لغة عالمية والعربية في القلب.",
    "why.i5":"<b>تسعير حسب المنطقة.</b> المغرب والخليج وأوروبا والأمريكتان بأسعار عادلة محلياً.",

    "demo.eyebrow":"العرض الحي","demo.title":"غرفة عمليات سمعتك.",
    "demo.lead":"لوحة تحكّم واحدة: المؤشرات، تدفّق الإشارات اللحظي، والتنبيهات مرتّبة حسب الأثر.",
    "demo.try":"جرّب: اكتب اسماً أو علامة تجارية",
    "demo.run":"حلّل السمعة",
    "demo.k1":"إشارات إيجابية","demo.k2":"إشارات سلبية","demo.k3":"محايدة",
    "demo.feedtitle":"تدفّق الإشارات",
    "demo.note":"* عرض توضيحي ببيانات نموذجية. الربط الحيّ بالمصادر يتم عند التفعيل.",

    "trust.eyebrow":"ميثاق الأوج","trust.title":"القوة بلا نزاهة تُدمّر السمعة التي تحميها.",
    "trust.lead":"إدارة السمعة الجادّة تُبنى على الشرعية. هذا ما نفعله — وما لن نفعله أبداً.",
    "do.t":"ما نفعله","dont.t":"ما لا نفعله",
    "do.1":"نُعزّز محتوىً إيجابياً حقيقياً ونصنعه بمهنية.",
    "do.2":"نرصد ونُحلّل الرأي العام حول عميلنا بشفافية.",
    "do.3":"نُصحّح المعلومات المغلوطة بالحقائق والمصادر.",
    "do.4":"نُدير إزالة التشهير والانتحال والتسريبات عبر القنوات الرسمية والقانون.",
    "dont.1":"لا نصنع مراجعات أو حسابات أو تفاعلاً مزيّفاً.",
    "dont.2":"لا نُنظّم حملات إبلاغ كاذبة لإسكات محتوى مشروع.",
    "dont.3":"لا نطمس النقد الصحفي أو الرأي المشروع.",
    "dont.4":"لا نُروّج تضليلاً لأي جهة كانت.",

    "pricing.eyebrow":"الباقات","pricing.title":"تسعيرٌ يوازي قيمة ما تحميه.",
    "pricing.lead":"السمعة أصلٌ لا يُقدّر بثمن — والتسعير مبنيّ على القيمة، متدرّج حسب الطموح، وقابل للتوطين حسب منطقتك.",
    "t1.name":"الأفراد","t1.who":"للمهنيين والمؤثّرين وصنّاع الرأي الذين يحمون اسمهم.",
    "t1.p":"٤٩$","t1.per":"/ شهرياً",
    "t1.f1":"هوية واحدة مُراقَبة","t1.f2":"رصد الويب والشبكات","t1.f3":"تقرير شهري","t1.f4":"تنبيهات أساسية","t1.f5":"قوالب ردّ موجّهة",
    "t2.name":"الشركات","t2.who":"للعلامات والمؤسسات التي تحمي سمعتها وتراقب سوقها.","t2.badge":"الأكثر طلباً",
    "t2.p":"٣٩٩$","t2.per":"/ شهرياً",
    "t2.f1":"كلمات مفتاحية ومنافسون","t2.f2":"تقارير غير محدودة","t2.f3":"تنبيهات لحظية + واتساب","t2.f4":"إدارة المراجعات","t2.f5":"دليل إدارة الأزمات","t2.f6":"حتى ٢٠ مستخدماً",
    "t3.name":"الكيانات السياسية","t3.who":"لِلحملات والمؤسسات العامة — ضمن نطاق تواصل مشروع.","t3.badge":"مُخصّص",
    "t3.p":"حسب الطلب","t3.per":"يبدأ من ٢٥٠٠$",
    "t3.f1":"رصد ٢٤/٧ بمحلّل مُخصّص","t3.f2":"غرفة أزمات واستجابة سريعة","t3.f3":"تصحيح التضليل بالحقائق","t3.f4":"رصد متعدّد اللغات","t3.f5":"وسيط قانوني للإزالات",
    "pricing.foot":"الأسعار بالدولار كمرجع، وتُوطَّن حسب المنطقة (المغرب العربي · إفريقيا والشرق الأوسط · الخليج · أوروبا والأمريكتان). خصم سنوي حتى ٢٠٪.",

    "cta.title":"سمعتك تُكتب الآن على الإنترنت. من يكتبها؟",
    "cta.sub":"دع الأوج يمسك القلم. ابدأ بتحليل مجاني لاسمك اليوم.",

    "contact.eyebrow":"تواصل","contact.title":"لنؤمّن سمعتك.",
    "contact.lead":"أخبرنا من أنت وما الذي تريد حمايته، ويصلك تحليل أوّليّ مجاني خلال ٤٨ ساعة.",
    "f.name":"الاسم الكامل","f.email":"البريد الإلكتروني","f.type":"نوع الحساب","f.msg":"ما الذي تريد حمايته؟","f.send":"أرسِل الطلب",
    "f.opt1":"فرد","f.opt2":"شركة","f.opt3":"كيان سياسي",

    "foot.tag":"ذكاء السمعة الرقمية — يرى، يفهم، يحمي.",
    "foot.product":"المنتج","foot.company":"الشركة","foot.legal":"قانوني",
    "foot.rights":"© 2026 الأوج. جميع الحقوق محفوظة.","foot.made":"صُمّم بالعربية أولاً."
  },

  fr:{
    dir:"ltr",
    "nav.platform":"Plateforme","nav.pricing":"Tarifs","nav.trust":"Éthique","nav.demo":"Démo","nav.contact":"Contact",
    "cta.start":"Commencer","cta.demo":"Voir la plateforme","cta.book":"Réserver une démo",

    "hero.eyebrow":"Intelligence de réputation",
    "hero.title":"Votre réputation, à son <span class='gold'>apogée</span>.<br>Protégée en continu.",
    "hero.lead":"Une plateforme d'IA qui surveille tout ce qui se dit sur vous en ligne et sur les réseaux — en arabe et dans toutes les langues — l'analyse, vous alerte à l'instant du risque, et pilote défense et valorisation via un essaim d'agents intelligents.",
    "hero.m1":"Sources surveillées","hero.m2":"Langues","hero.m3":"Détection",
    "hero.m1v":"+180","hero.m2v":"12","hero.m3v":"Temps réel",

    "layers.eyebrow":"Architecture","layers.title":"Quatre couches. Un système qui ne dort jamais.",
    "layers.lead":"De la veille à la défense, les couches forment une seule chaîne : ce que capte l'Écouteur, l'Analyste le lit ; ce que signale la Sentinelle, le Répondeur l'exécute.",
    "l1.t":"Veille","l1.d":"Des agents scrutent sans relâche le web, les réseaux, les avis et l'actualité, et captent chaque mention — texte, image, vidéo.",
    "l2.t":"Rapports","l2.d":"Des rapports clairs : sentiment, part de voix, foyers d'influence et tendances — synthétisés dans la langue du décideur.",
    "l3.t":"Alertes","l3.d":"Alerte immédiate au premier signe de crise ou d'attaque, par e-mail, WhatsApp et application, triée par gravité.",
    "l4.t":"Défense","l4.d":"Valorisation du contenu positif légitime et gestion des retraits de contenu réellement illicite via les voies officielles et légales.",

    "agents.eyebrow":"Agents AWJ","agents.title":"Un essaim d'agents, chacun sa mission.",
    "a1.t":"L'Écouteur","a1.d":"Collecte les signaux","a2.t":"L'Analyste","a2.d":"Lit sentiment et contexte",
    "a3.t":"La Sentinelle","a3.d":"Détecte la menace","a4.t":"Le Stratège","a4.d":"Bâtit la réponse",
    "a5.t":"Le Répondeur","a5.d":"Exécute valorisation et retrait",

    "why.eyebrow":"Pourquoi AWJ","why.title":"Conçu pour dépasser, pas pour être copié.",
    "why.lead":"La plupart des outils se contentent de surveiller. AWJ ferme toute la boucle : voir, comprendre, alerter, agir — en arabe d'abord.",
    "why.i1":"<b>Arabe natif.</b> Une analyse qui comprend dialectes et contexte culturel, pas une traduction de surface.",
    "why.i2":"<b>Boucle fermée.</b> Du signal à l'action dans une seule plateforme.",
    "why.i3":"<b>Défense légitime.</b> Retrait par les voies officielles et le droit — sans manipulation à risque.",
    "why.i4":"<b>Multilingue.</b> Douze langues mondiales, l'arabe au cœur.",
    "why.i5":"<b>Tarif régional.</b> Maghreb, Golfe, Europe et Amériques à des prix justes localement.",

    "demo.eyebrow":"Démo","demo.title":"La salle de contrôle de votre réputation.",
    "demo.lead":"Un seul tableau de bord : indicateurs, flux de signaux en direct, alertes triées par impact.",
    "demo.try":"Essayez : un nom ou une marque",
    "demo.run":"Analyser",
    "demo.k1":"Signaux positifs","demo.k2":"Signaux négatifs","demo.k3":"Neutres",
    "demo.feedtitle":"Flux de signaux",
    "demo.note":"* Démonstration à données fictives. La connexion en direct s'active à l'abonnement.",

    "trust.eyebrow":"Charte AWJ","trust.title":"La puissance sans intégrité détruit la réputation qu'elle protège.",
    "trust.lead":"Une gestion de réputation sérieuse repose sur la légitimité. Voici ce que nous faisons — et ce que nous ne ferons jamais.",
    "do.t":"Ce que nous faisons","dont.t":"Ce que nous refusons",
    "do.1":"Valoriser et produire du contenu positif réel, avec professionnalisme.",
    "do.2":"Surveiller et analyser l'opinion sur notre client en toute transparence.",
    "do.3":"Corriger les fausses informations par des faits et des sources.",
    "do.4":"Gérer le retrait de diffamation, usurpation et fuites par les voies légales.",
    "dont.1":"Aucun faux avis, faux compte ni faux engagement.",
    "dont.2":"Aucune campagne de signalement mensongère pour faire taire un contenu légitime.",
    "dont.3":"Aucune suppression de journalisme critique ou d'opinion légitime.",
    "dont.4":"Aucune diffusion de désinformation, pour qui que ce soit.",

    "pricing.eyebrow":"Tarifs","pricing.title":"Un prix à la hauteur de ce que vous protégez.",
    "pricing.lead":"La réputation est un actif inestimable — tarification à la valeur, graduée selon l'ambition, localisée selon votre région.",
    "t1.name":"Particuliers","t1.who":"Pour les professionnels et personnalités qui protègent leur nom.",
    "t1.p":"49 $","t1.per":"/ mois",
    "t1.f1":"1 identité surveillée","t1.f2":"Veille web et réseaux","t1.f3":"Rapport mensuel","t1.f4":"Alertes de base","t1.f5":"Modèles de réponse",
    "t2.name":"Entreprises","t2.who":"Pour les marques qui protègent leur image et surveillent leur marché.","t2.badge":"Le plus choisi",
    "t2.p":"399 $","t2.per":"/ mois",
    "t2.f1":"Mots-clés et concurrents","t2.f2":"Rapports illimités","t2.f3":"Alertes temps réel + WhatsApp","t2.f4":"Gestion des avis","t2.f5":"Playbook de crise","t2.f6":"Jusqu'à 20 utilisateurs",
    "t3.name":"Entités politiques","t3.who":"Pour campagnes et institutions — communication légitime.","t3.badge":"Sur mesure",
    "t3.p":"Sur devis","t3.per":"dès 2 500 $",
    "t3.f1":"Veille 24/7, analyste dédié","t3.f2":"Cellule de crise, réponse rapide","t3.f3":"Correction factuelle","t3.f4":"Veille multilingue","t3.f5":"Liaison juridique pour retraits",
    "pricing.foot":"Prix en USD à titre indicatif, localisés par région (Maghreb · Afrique et Moyen-Orient · Golfe · Europe et Amériques). Remise annuelle jusqu'à 20 %.",

    "cta.title":"Votre réputation s'écrit en ligne, maintenant. Par qui ?",
    "cta.sub":"Laissez AWJ tenir la plume. Commencez par une analyse gratuite de votre nom.",

    "contact.eyebrow":"Contact","contact.title":"Sécurisons votre réputation.",
    "contact.lead":"Dites-nous qui vous êtes et ce que vous voulez protéger — une première analyse gratuite sous 48 h.",
    "f.name":"Nom complet","f.email":"E-mail","f.type":"Type de compte","f.msg":"Que voulez-vous protéger ?","f.send":"Envoyer",
    "f.opt1":"Particulier","f.opt2":"Entreprise","f.opt3":"Entité politique",

    "foot.tag":"Intelligence de réputation — voir, comprendre, protéger.",
    "foot.product":"Produit","foot.company":"Entreprise","foot.legal":"Légal",
    "foot.rights":"© 2026 AWJ. Tous droits réservés.","foot.made":"Conçu en arabe d'abord."
  },

  en:{
    dir:"ltr",
    "nav.platform":"Platform","nav.pricing":"Pricing","nav.trust":"Ethics","nav.demo":"Live demo","nav.contact":"Contact",
    "cta.start":"Get started","cta.demo":"See the platform","cta.book":"Book a demo",

    "hero.eyebrow":"Reputation intelligence",
    "hero.title":"Your reputation, at its <span class='gold'>zenith</span>.<br>Guarded around the clock.",
    "hero.lead":"An AI platform that watches everything said about you across the web and social — in Arabic and every language — reads it, alerts you the moment risk appears, and runs defense and amplification through a swarm of intelligent agents.",
    "hero.m1":"Sources watched","hero.m2":"Languages","hero.m3":"Detection",
    "hero.m1v":"180+","hero.m2v":"12","hero.m3v":"Real-time",

    "layers.eyebrow":"Architecture","layers.title":"Four layers. One system that never rests.",
    "layers.lead":"From listening to defense, the layers work as a single chain: what the Listener catches, the Analyst reads; what the Sentinel flags, the Responder acts on.",
    "l1.t":"Monitoring","l1.d":"Agents sweep the web, social, review sites and news non-stop, capturing every mention of your name — text, image, and video.",
    "l2.t":"Reports","l2.d":"Clear intelligence: sentiment, share of voice, sources of influence, and trends — summarized in the decision-maker's language.",
    "l3.t":"Alerts","l3.d":"Instant warning at the first sign of a crisis or hostile campaign — via email, WhatsApp and app, ranked by severity.",
    "l4.t":"Defense","l4.d":"Amplify legitimate positive content, and manage lawful removal of genuinely violating material through official and legal channels.",

    "agents.eyebrow":"AWJ Agents","agents.title":"A swarm of agents, each with its mission.",
    "a1.t":"Listener","a1.d":"Gathers signals","a2.t":"Analyst","a2.d":"Reads sentiment & context",
    "a3.t":"Sentinel","a3.d":"Detects threats","a4.t":"Strategist","a4.d":"Builds the response",
    "a5.t":"Responder","a5.d":"Executes amplify & removal",

    "why.eyebrow":"Why AWJ","why.title":"Built to surpass, not to be copied.",
    "why.lead":"Most tools only monitor. AWJ closes the whole loop: see, understand, alert, then act — Arabic first.",
    "why.i1":"<b>Natively Arabic.</b> Analysis that understands dialect and cultural context, not surface translation.",
    "why.i2":"<b>Closed loop.</b> From signal to action inside one platform.",
    "why.i3":"<b>Lawful defense.</b> Removal through official and legal channels — no risky manipulation.",
    "why.i4":"<b>Multilingual.</b> Twelve world languages, Arabic at the core.",
    "why.i5":"<b>Regional pricing.</b> Maghreb, Gulf, Europe and the Americas at locally fair rates.",

    "demo.eyebrow":"Live demo","demo.title":"Your reputation war room.",
    "demo.lead":"One dashboard: the metrics, a live signal feed, and alerts ranked by impact.",
    "demo.try":"Try it: type a name or brand",
    "demo.run":"Analyze reputation",
    "demo.k1":"Positive signals","demo.k2":"Negative signals","demo.k3":"Neutral",
    "demo.feedtitle":"Signal feed",
    "demo.note":"* Illustrative demo with sample data. Live source connection activates on subscription.",

    "trust.eyebrow":"The AWJ charter","trust.title":"Power without integrity destroys the reputation it guards.",
    "trust.lead":"Serious reputation work rests on legitimacy. Here is what we do — and what we will never do.",
    "do.t":"What we do","dont.t":"What we refuse",
    "do.1":"Amplify and create real positive content, professionally.",
    "do.2":"Monitor and analyze public opinion about our client, transparently.",
    "do.3":"Correct false information with facts and sources.",
    "do.4":"Manage removal of defamation, impersonation and leaks through lawful channels.",
    "dont.1":"No fake reviews, fake accounts, or fake engagement.",
    "dont.2":"No false-reporting campaigns to silence legitimate content.",
    "dont.3":"No burying of critical journalism or legitimate opinion.",
    "dont.4":"No spreading of disinformation, for anyone.",

    "pricing.eyebrow":"Pricing","pricing.title":"Priced to match what you protect.",
    "pricing.lead":"Reputation is a priceless asset — value-based pricing, tiered by ambition, localized to your region.",
    "t1.name":"Individuals","t1.who":"For professionals and public figures protecting their name.",
    "t1.p":"$49","t1.per":"/ month",
    "t1.f1":"1 monitored identity","t1.f2":"Web & social monitoring","t1.f3":"Monthly report","t1.f4":"Basic alerts","t1.f5":"Guided response templates",
    "t2.name":"Companies","t2.who":"For brands protecting their image and watching their market.","t2.badge":"Most chosen",
    "t2.p":"$399","t2.per":"/ month",
    "t2.f1":"Keywords & competitors","t2.f2":"Unlimited reports","t2.f3":"Real-time + WhatsApp alerts","t2.f4":"Review management","t2.f5":"Crisis playbook","t2.f6":"Up to 20 seats",
    "t3.name":"Political entities","t3.who":"For campaigns and public institutions — within legitimate comms.","t3.badge":"Custom",
    "t3.p":"Custom","t3.per":"from $2,500",
    "t3.f1":"24/7 monitoring, dedicated analyst","t3.f2":"Crisis room & rapid response","t3.f3":"Fact-based misinformation correction","t3.f4":"Multilingual monitoring","t3.f5":"Legal liaison for removals",
    "pricing.foot":"Prices shown in USD as reference, localized by region (Maghreb · Africa & Middle East · Gulf · Europe & Americas). Annual discount up to 20%.",

    "cta.title":"Your reputation is being written online right now. By whom?",
    "cta.sub":"Let AWJ hold the pen. Start with a free analysis of your name today.",

    "contact.eyebrow":"Contact","contact.title":"Let's secure your reputation.",
    "contact.lead":"Tell us who you are and what you want to protect — a free first analysis within 48 hours.",
    "f.name":"Full name","f.email":"Email","f.type":"Account type","f.msg":"What do you want to protect?","f.send":"Send request",
    "f.opt1":"Individual","f.opt2":"Company","f.opt3":"Political entity",

    "foot.tag":"Reputation intelligence — see, understand, protect.",
    "foot.product":"Product","foot.company":"Company","foot.legal":"Legal",
    "foot.rights":"© 2026 AWJ. All rights reserved.","foot.made":"Designed Arabic-first."
  }
};

function applyLang(lang){
  const dict = I18N[lang] || I18N.ar;
  const html = document.documentElement;
  html.lang = lang;
  html.dir = dict.dir;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if(dict[key]!==undefined) el.innerHTML = dict[key];
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el=>{
    const key = el.getAttribute("data-i18n-ph");
    if(dict[key]!==undefined) el.setAttribute("placeholder", dict[key]);
  });
  document.querySelectorAll(".lang button").forEach(b=>{
    b.setAttribute("aria-pressed", b.dataset.lang===lang ? "true":"false");
  });
  try{ localStorage.setItem("awj_lang", lang); }catch(e){}
}

function initLang(){
  let saved = "ar";
  try{ saved = localStorage.getItem("awj_lang") || "ar"; }catch(e){}
  applyLang(saved);
  document.querySelectorAll(".lang button").forEach(b=>{
    b.addEventListener("click", ()=>applyLang(b.dataset.lang));
  });
}

function initNav(){
  const t = document.querySelector(".menu-toggle");
  const links = document.querySelector(".nav-links");
  if(t&&links) t.addEventListener("click", ()=>links.classList.toggle("open"));
}

function initReveal(){
  const els = document.querySelectorAll(".reveal");
  if(!("IntersectionObserver" in window)){els.forEach(e=>e.classList.add("in"));return;}
  const io = new IntersectionObserver((ents)=>{
    ents.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target);} });
  },{threshold:.12});
  els.forEach(e=>io.observe(e));
}

/* --- demo widget: deterministic "analysis" from a query string --- */
function hashStr(s){let h=0;for(let i=0;i<s.length;i++){h=(h*31+s.charCodeAt(i))>>>0;}return h;}
function runDemo(query){
  const q=(query||"العلامة").trim();
  const h=hashStr(q||"awj");
  const pos=40+(h%41);              // 40..80
  const neg=5+((h>>3)%20);          // 5..24
  const neu=Math.max(0,100-pos-neg);
  const setTxt=(id,v)=>{const el=document.getElementById(id);if(el)el.textContent=v;};
  setTxt("kpiPos",pos+"%");setTxt("kpiNeg",neg+"%");setTxt("kpiNeu",neu+"%");

  // bars = 12 pseudo-random heights
  const bars=document.getElementById("demoBars");
  if(bars){bars.innerHTML="";for(let i=0;i<12;i++){const bh=25+((h>>(i%9))%70);
    const d=document.createElement("div");d.className="bar";d.style.height=bh+"%";
    if(i%5===((h)%5))d.style.background="linear-gradient(180deg,var(--crimson),#a51e22)";
    bars.appendChild(d);}}

  // feed items localized-ish (kept language-neutral labels)
  const lang=document.documentElement.lang||"ar";
  const src=["X","FB","IG","YT","News","Web","Rev"];
  const sample={
    ar:[["مقال يُشيد بمصداقية «"+q+"»","pos"],["تعليق سلبي حول خدمة «"+q+"»","neg"],
        ["ذكرٌ محايد في نقاش عام","neu"],["مراجعة ٥ نجوم جديدة","pos"],["إشارة في خبر عاجل","neu"]],
    fr:[["Article saluant la crédibilité de « "+q+" »","pos"],["Commentaire négatif sur le service","neg"],
        ["Mention neutre dans un débat","neu"],["Nouvel avis 5 étoiles","pos"],["Mention dans l'actualité","neu"]],
    en:[["Article praising the credibility of \""+q+"\"","pos"],["Negative comment about service","neg"],
        ["Neutral mention in a discussion","neu"],["New 5-star review","pos"],["Mention in breaking news","neu"]]
  };
  const rows=(sample[lang]||sample.ar);
  const feed=document.getElementById("demoFeed");
  const tagWord={pos:{ar:"إيجابي",fr:"positif",en:"positive"},neg:{ar:"سلبي",fr:"négatif",en:"negative"},neu:{ar:"محايد",fr:"neutre",en:"neutral"}};
  if(feed){feed.innerHTML="";rows.forEach((r,i)=>{
    const it=document.createElement("div");it.className="item";
    it.innerHTML=`<span class="src">${src[(h>>i)%src.length]}</span>
      <span>${r[0]}</span>
      <span class="tag ${r[1]}">${tagWord[r[1]][lang]||tagWord[r[1]].ar}</span>`;
    feed.appendChild(it);
  });}
}

function initDemo(){
  const btn=document.getElementById("demoRun");
  const input=document.getElementById("demoInput");
  if(btn&&input){
    btn.addEventListener("click",()=>runDemo(input.value));
    input.addEventListener("keydown",e=>{if(e.key==="Enter")runDemo(input.value);});
    runDemo("");   // seed
  }
}

function initYear(){const y=document.getElementById("yr");if(y)y.textContent=new Date().getFullYear();}

document.addEventListener("DOMContentLoaded",()=>{
  initLang();initNav();initReveal();initDemo();initYear();
});
