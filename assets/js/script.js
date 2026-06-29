/**
 * WINTOP COFFEE - MAIN JAVASCRIPT
 * Description: Handles smooth scrolling, WhatsApp form submission, and reveal-on-scroll animations.
 */

document.addEventListener('DOMContentLoaded', () => {

    // --- Smooth Scrolling for Navigation Links ---
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

            // Collect Form Data
            const name = document.getElementById('clientName').value;
            const phone = document.getElementById('clientPhone').value;
            const address = document.getElementById('clientAddress').value;
            const type = document.getElementById('orderType').value;
            const qty = document.getElementById('orderQty').value;

            // Generate a random order ID for organization
            const orderId = 'WT-' + Math.floor(Math.random() * 90000 + 10000);

            // Format WhatsApp Message (Professional Arabic Template)
            const message =
`مرحباً وينتوب كوفي! ☕
أود تقديم طلب جديد:

🔢 *رقم الطلب:* ${orderId}
👤 *الاسم:* ${name}
📞 *الهاتف:* ${phone}
📍 *العنوان:* ${address}
🛍️ *المنتج المطلوب:* ${type}
📦 *الكمية:* ${qty}

بانتظار تأكيدكم، شكراً!`;

            // Encode and Open WhatsApp URL
            const encodedMessage = encodeURIComponent(message);
            const whatsappNumber = "213562163900"; // Provided in the original code
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

            window.open(whatsappUrl, '_blank');
        });
    }

    // --- Reveal on Scroll Animation ---
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
    revealOnScroll(); // Run once on load to show elements already in view

    // --- Dynamic Year for Footer ---
    const footerYear = document.querySelector('.current-year');
    if (footerYear) {
        footerYear.textContent = new Date().getFullYear();
    }
});
