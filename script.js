// ==========================================
// NATURE SIP PREMIUM JAVASCRIPT
// ==========================================

document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu Toggle ---
    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");
    const header = document.querySelector(".header");
    const navItems = document.querySelectorAll(".nav-links a");

    function toggleMenu() {
        menuBtn.classList.toggle("open");
        navLinks.classList.toggle("active");
        header.classList.toggle("nav-open");
        document.body.style.overflow = navLinks.classList.contains("active") ? "hidden" : "";
    }

    menuBtn.addEventListener("click", toggleMenu);

    // Close menu when a link is clicked
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            if (navLinks.classList.contains("active")) {
                toggleMenu();
            }
        });
    });


    // --- Scroll Navbar Effect ---
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });


    // --- Intersection Observer for Scroll Reveals ---
    const revealElements = document.querySelectorAll(".reveal, .form-reveal");

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });


    // --- Counter Animation ---
    const counters = document.querySelectorAll(".counter");
    let hasCounted = false;

    const counterObserver = new IntersectionObserver((entries) => {
        if(entries[0].isIntersecting && !hasCounted) {
            hasCounted = true;
            counters.forEach(counter => {
                const target = +counter.getAttribute("data-target");
                let count = 0;
                const duration = 2000; // ms
                const increment = target / (duration / 16); // 60fps

                const updateCounter = () => {
                    count += increment;
                    if (count < target) {
                        counter.innerText = Math.floor(count);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.innerText = target.toLocaleString() + "+";
                    }
                };
                updateCounter();
            });
        }
    }, { threshold: 0.5 });

    const statsSection = document.querySelector(".stats-grid");
    if(statsSection) {
        counterObserver.observe(statsSection);
    }


    // --- WhatsApp Order Form Submission ---
    const orderForm = document.getElementById("orderForm");

    if (orderForm) {
        orderForm.addEventListener("submit", function(e) {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const business = document.getElementById("business").value.trim();
            const address = document.getElementById("address").value.trim();
            const product = document.getElementById("product").value;
            const quantity = parseInt(document.getElementById("quantity").value);

            if (quantity < 2) {
                alert("Minimum order requirement is 2 boxes/cans.");
                return;
            }

            const businessText = business ? `\nCompany: ${business}` : "";

            const message = `*New Order Request - Nature Sip*\n\nName: ${name}${businessText}\nPhone: ${phone}\nDelivery Address: ${address}\n\n*Order Details:*\nProduct: ${product}\nQuantity: ${quantity}\n\nPlease confirm my order.`;

            const whatsappURL = `https://wa.me/918448417564?text=${encodeURIComponent(message)}`;
            window.open(whatsappURL, "_blank");
        });
    }

    // --- Smooth Active Link Highlight ---
    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute("id");
            }
        });

        navItems.forEach(a => {
            a.classList.remove("active");
            if (a.getAttribute("href") === `#${current}`) {
                a.classList.add("active");
            }
        });
    });

});