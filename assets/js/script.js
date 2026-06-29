/**
 * WINTOP COFFEE - MAIN JAVASCRIPT
 * Description: Handles smooth scrolling, WhatsApp form submission, reveal-on-scroll animations, and multi-language support.
 */

// --- Translation Dictionary ---
const translations = {
    ar: {
        dir: 'rtl',
        tagline: 'قهوة مختصة ومعدات',
        nav_home: 'الرئيسية',
        nav_flavors: 'نكهاتنا',
        nav_packaging: 'تغليفنا',
        nav_order: 'اطلب الآن',
        order_btn: 'الطلب والاستفسار',
        hero_badge: 'المذاق الذي يوقظ حواسك',
        hero_title_1: 'أجود حبوب',
        hero_title_2: 'القهوة',
        hero_title_3: 'والمعدات',
        hero_desc: 'نستورد، نحمص، ونعبئ أجود أنواع البن لنضمن لك كوب قهوة مثالي. كما نوفر أحدث آلات الإسبريسو ومطاحن القهوة للمقاهي والمنازل.',
        hero_cta_order: 'اطلب الآن',
        hero_cta_products: 'منتجاتنا',
        flavors_title: 'اكتشف درجات التحميص',
        flavors_desc: 'لكل ذائقة درجة تحميص تناسبها، نحن نحمص القهوة بعناية لاستخراج أعمق الإيحاءات العطرية والخصائص الفريدة لكل نوع.',
        roast_light_title: 'تحميص فاتح (Light)',
        roast_light_desc: 'حموضة فاكهية واضحة، إيحاءات زهرية، وقوام خفيف. مثالية لقهوة الفلتر والتقطير V60 والقهوة السوداء.',
        roast_light_notes: 'إيحاءات فاكهية وزهرية',
        roast_medium_title: 'تحميص متوسط (Medium)',
        roast_medium_desc: 'توازن مثالي بين الحموضة والمرارة، حلاوة واضحة وقوام ممتلئ. الخيار الأول للإسبريسو ومشروبات الحليب.',
        roast_medium_notes: 'إيحاءات كراميل وشوكولاتة',
        roast_dark_title: 'تحميص داكن (Dark)',
        roast_dark_desc: 'مرارة محببة، غياب للحموضة، وقوام ثقيل جداً. ممتازة لعشاق القهوة الكلاسيكية والقهوة التركية الغنية.',
        roast_dark_notes: 'إيحاءات كاكاو ومكسرات',
        pkg_title_1: 'تغليف فاخر،',
        pkg_title_2: 'يحفظ النكهة',
        pkg_desc: 'نولي في WINTOP اهتماماً بالغاً بأكياس التعبئة والتغليف. أكياسنا مصممة خصيصاً مع صمام تفريغ هواء أحادي الاتجاه للحفاظ على طزاجة الحبوب، وسحاب محكم الغلق لضمان بقاء الزيوت والنكهات العطرية لأطول فترة ممكنة.',
        pkg_item_1: 'أكياس 250 جرام للاستخدام المنزلي',
        pkg_item_2: 'أكياس 1 كيلو للمقاهي والمطاعم',
        pkg_item_3: 'طحن مخصص (إسبريسو، فلتر، تركي)',
        pkg_cta: 'اطلب قهوتك الآن',
        order_title: 'اطلب قهوتك الآن ☕',
        order_subtitle: 'يرجى تعبئة التفاصيل وسنقوم بتحويل طلبك فوراً لمسؤول المبيعات عبر واتساب.',
        form_name: 'الاسم الكامل',
        form_phone: 'رقم الهاتف للتواصل',
        form_address: 'العنوان الكامل (للتوصيل)',
        form_type: 'نوع الطلبية',
        form_qty: 'الكمية',
        form_submit: 'إرسال الطلب عبر واتساب',
        form_hint: 'ستفتح المحادثة في تطبيق واتساب مع رسالة الطلب جاهزة للإرسال.',
        opt_light: 'قهوة - تحميص فاتح (Light)',
        opt_medium: 'قهوة - تحميص متوسط (Medium)',
        opt_dark: 'قهوة - تحميص داكن (Dark)',
        opt_espresso: 'معدات - آلة إسبريسو',
        opt_grinder: 'معدات - مطحنة قهوة',
        footer_tagline: 'Roastery & Specialty Coffee',
        footer_rights: 'جميع الحقوق محفوظة.',
        footer_dev: 'تصميم وتطوير',
        dev_name: 'عمر الفاروق',
        announcement: '🌟 أهلاً بكم في وينتوب كوفي - خصم للطلبات التجارية وطلبات الجملة 🌟',
        pkg_hover: 'جودة لا تضاهى في كل غلاف',
    },
    en: {
        dir: 'ltr',
        tagline: 'Specialty Coffee & Equipment',
        nav_home: 'Home',
        nav_flavors: 'Our Roasts',
        nav_packaging: 'Packaging',
        nav_order: 'Order Now',
        order_btn: 'Order & Inquire',
        hero_badge: 'The taste that wakes up your senses',
        hero_title_1: 'Premium Coffee',
        hero_title_2: 'Beans',
        hero_title_3: '& Equipment',
        hero_desc: 'We import, roast, and pack the finest coffee beans to ensure you the perfect cup. We also provide the latest espresso machines and coffee grinders for cafes and homes.',
        hero_cta_order: 'Order Now',
        hero_cta_products: 'Our Products',
        flavors_title: 'Discover Our Roasts',
        flavors_desc: 'There is a roast for every taste. We carefully roast our coffee to extract the deepest aromatic notes and unique characteristics of each type.',
        roast_light_title: 'Light Roast',
        roast_light_desc: 'Clear fruity acidity, floral notes, and light body. Perfect for filter coffee, V60 drip, and black coffee.',
        roast_light_notes: 'Fruity & Floral Notes',
        roast_medium_title: 'Medium Roast',
        roast_medium_desc: 'Perfect balance between acidity and bitterness, clear sweetness, and full body. The first choice for espresso and milk drinks.',
        roast_medium_notes: 'Caramel & Chocolate Notes',
        roast_dark_title: 'Dark Roast',
        roast_dark_desc: 'Pleasant bitterness, absence of acidity, and very heavy body. Excellent for lovers of classic coffee and rich Turkish coffee.',
        roast_dark_notes: 'Dark Cocoa & Nut Notes',
        pkg_title_1: 'Premium Packaging,',
        pkg_title_2: 'Preserves Flavor',
        pkg_desc: 'At WINTOP, we pay great attention to our packaging. Our bags are specially designed with a one-way degassing valve to keep the beans fresh, and a tight zipper to ensure the aromatic oils and flavors last as long as possible.',
        pkg_item_1: '250g bags for home use',
        pkg_item_2: '1kg bags for cafes and restaurants',
        pkg_item_3: 'Custom grinding (Espresso, Filter, Turkish)',
        pkg_cta: 'Order Your Coffee Now',
        order_title: 'Order Your Coffee Now ☕',
        order_subtitle: 'Please fill in the details and we will immediately transfer your order to our sales representative via WhatsApp.',
        form_name: 'Full Name',
        form_phone: 'Phone Number',
        form_address: 'Full Address (for delivery)',
        form_type: 'Order Type',
        form_qty: 'Quantity',
        form_submit: 'Send Order via WhatsApp',
        form_hint: 'The conversation will open in the WhatsApp app with the order message ready to send.',
        opt_light: 'Coffee - Light Roast',
        opt_medium: 'Coffee - Medium Roast',
        opt_dark: 'Coffee - Dark Roast',
        opt_espresso: 'Equipment - Espresso Machine',
        opt_grinder: 'Equipment - Coffee Grinder',
        footer_tagline: 'Roastery & Specialty Coffee',
        footer_rights: 'All rights reserved.',
        footer_dev: 'Designed & Developed by',
        dev_name: 'Omar Al-Farouq',
        announcement: '🌟 Welcome to Wintop Coffee - Discounts for commercial and wholesale orders 🌟',
        pkg_hover: 'Unmatched quality in every wrap',
    },
    fr: {
        dir: 'ltr',
        tagline: 'Café de Spécialité et Équipement',
        nav_home: 'Accueil',
        nav_flavors: 'Nos Torréfactions',
        nav_packaging: 'Emballage',
        nav_order: 'Commander',
        order_btn: 'Commander & Infos',
        hero_badge: 'Le goût qui réveille vos sens',
        hero_title_1: 'Grains de Café',
        hero_title_2: 'Premium',
        hero_title_3: '& Équipement',
        hero_desc: 'Nous importons, torréfions et emballons les meilleurs grains de café pour vous garantir une tasse parfaite. Nous proposons également les dernières machines à expresso et moulins à café pour les cafés et les maisons.',
        hero_cta_order: 'Commander',
        hero_cta_products: 'Nos Produits',
        flavors_title: 'Découvrez Nos Torréfactions',
        flavors_desc: 'Il y a une torréfaction pour chaque goût. Nous torréfions soigneusement notre café pour extraire les notes aromatiques les plus profondes et les caractéristiques uniques de chaque type.',
        roast_light_title: 'Torréfaction Légère',
        roast_light_desc: 'Acidité fruitée claire, notes florales et corps léger. Parfait pour le café filtre, le V60 et le café noir.',
        roast_light_notes: 'Notes Fruitées & Florales',
        roast_medium_title: 'Torréfaction Moyenne',
        roast_medium_desc: 'Équilibre parfait entre acidité et amertume, douceur claire et corps plein. Le premier choix pour l\'expresso et les boissons lactées.',
        roast_medium_notes: 'Notes de Caramel & Chocolat',
        roast_dark_title: 'Torréfaction Foncée',
        roast_dark_desc: 'Amertume agréable, absence d\'acidité et corps très lourd. Excellent pour les amateurs de café classique et de café turc riche.',
        roast_dark_notes: 'Notes de Cacao Noir & Noix',
        pkg_title_1: 'Emballage Premium,',
        pkg_title_2: 'Préserve la Saveur',
        pkg_desc: 'Chez WINTOP, nous accordons une grande attention à nos emballages. Nos sacs sont spécialement conçus avec une valve de dégazage unidirectionnelle pour garder les grains frais, et une fermeture éclair étanche pour garantir que les huiles aromatiques et les saveurs durent le plus longtemps possible.',
        pkg_item_1: 'Sacs de 250g pour usage domestique',
        pkg_item_2: 'Sacs de 1kg pour cafés et restaurants',
        pkg_item_3: 'Mouture personnalisée (Expresso, Filtre, Turc)',
        pkg_cta: 'Commandez Votre Café Maintenant',
        order_title: 'Commandez Votre Café Maintenant ☕',
        order_subtitle: 'Veuillez remplir les détails et nous transférerons immédiatement votre commande à notre représentant commercial via WhatsApp.',
        form_name: 'Nom Complet',
        form_phone: 'Numéro de Téléphone',
        form_address: 'Adresse Complète (pour la livraison)',
        form_type: 'Type de Commande',
        form_qty: 'Quantité',
        form_submit: 'Envoyer la Commande via WhatsApp',
        form_hint: 'La conversation s\'ouvrira dans l\'application WhatsApp avec le message de commande prêt à être envoyé.',
        opt_light: 'Café - Torréfaction Légère',
        opt_medium: 'Café - Torréfaction Moyenne',
        opt_dark: 'Café - Torréfaction Foncée',
        opt_espresso: 'Équipement - Machine à Expresso',
        opt_grinder: 'Équipement - Moulin à Café',
        footer_tagline: 'Torréfaction & Café de Spécialité',
        footer_rights: 'Tous droits réservés.',
        footer_dev: 'Conçu et développé par',
        dev_name: 'Omar Al-Farouq',
        announcement: '🌟 Bienvenue chez Wintop Coffee - Remises pour commandes commerciales et en gros 🌟',
        pkg_hover: 'Qualité inégalée dans chaque emballage',
    }
};

// --- Language Switching Logic ---
function switchLanguage(lang) {
    const translation = translations[lang];
    if (!translation) return;

    // Update HTML attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = translation.dir;

    // Update translatable elements
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translation[key]) {
            el.textContent = translation[key];
        }
    });

    // Update navigation spacing based on direction
    const navMenu = document.querySelector('nav .hidden.lg\\:flex');
    if (navMenu) {
        if (translation.dir === 'rtl') {
            navMenu.classList.add('space-x-reverse');
        } else {
            navMenu.classList.remove('space-x-reverse');
        }
    }

    // Save preference
    localStorage.setItem('preferredLanguage', lang);
}

document.addEventListener('DOMContentLoaded', () => {

    // --- Initialize Language ---
    const savedLang = localStorage.getItem('preferredLanguage') || 'ar';
    switchLanguage(savedLang);

    // --- Smooth Scrolling ---
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            e.preventDefault();
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // --- WhatsApp Order Form Logic ---
    const whatsappForm = document.getElementById('whatsappForm');
    if (whatsappForm) {
        whatsappForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const name = document.getElementById('clientName').value;
            const phone = document.getElementById('clientPhone').value;
            const address = document.getElementById('clientAddress').value;
            const type = document.getElementById('orderType').value;
            const qty = document.getElementById('orderQty').value;

            const orderId = 'WT-' + Math.floor(Math.random() * 90000 + 10000);

            const currentLang = document.documentElement.lang;
            let message = "";

            if (currentLang === 'en') {
                message = `Hello Wintop Coffee! ☕\nI would like to place a new order:\n\n🔢 *Order ID:* ${orderId}\n👤 *Name:* ${name}\n📞 *Phone:* ${phone}\n📍 *Address:* ${address}\n🛍️ *Product:* ${type}\n📦 *Qty:* ${qty}\n\nWaiting for confirmation, thank you!`;
            } else if (currentLang === 'fr') {
                message = `Bonjour Wintop Coffee ! ☕\nJe souhaite passer une nouvelle commande :\n\n🔢 *ID Commande :* ${orderId}\n👤 *Nom :* ${name}\n📞 *Téléphone :* ${phone}\n📍 *Adresse :* ${address}\n🛍️ *Produit :* ${type}\n📦 *Qté :* ${qty}\n\nEn attente de confirmation, merci !`;
            } else {
                message = `مرحباً وينتوب كوفي! ☕\nأود تقديم طلب جديد:\n\n🔢 *رقم الطلب:* ${orderId}\n👤 *الاسم:* ${name}\n📞 *الهاتف:* ${phone}\n📍 *العنوان:* ${address}\n🛍️ *المنتج المطلوب:* ${type}\n📦 *الكمية:* ${qty}\n\nبانتظار تأكيدكم، شكراً!`;
            }

            const encodedMessage = encodeURIComponent(message);
            const whatsappNumber = "213562163900";
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

            window.open(whatsappUrl, '_blank');
        });
    }

    // --- Reveal on Scroll ---
    const revealElements = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        for (let i = 0; i < revealElements.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = revealElements[i].getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                revealElements[i].classList.add('active');
            }
        }
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    // --- Dynamic Year ---
    const footerYear = document.querySelector('.current-year');
    if (footerYear) {
        footerYear.textContent = new Date().getFullYear();
    }
});
