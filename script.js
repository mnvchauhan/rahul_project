// ==========================================
// NATURE SHEEP WEBSITE JAVASCRIPT
// ==========================================

// Mobile Menu

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// ==========================================
// Scroll Reveal Animation
// ==========================================

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

    revealElements.forEach((element) => {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// ==========================================
// FAQ Accordion
// ==========================================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const button = item.querySelector(".faq-question");

    button.addEventListener("click", () => {

        item.classList.toggle("active");

    });

});

// ==========================================
// Counter Animation
// ==========================================

const counters = document.querySelectorAll(".counter");

let counterStarted = false;

function runCounters() {

    if(counterStarted) return;

    const counterSection =
    document.querySelector(".counter-section");

    const sectionTop =
    counterSection.getBoundingClientRect().top;

    if(sectionTop < window.innerHeight - 100){

        counterStarted = true;

        counters.forEach(counter => {

            const target =
            +counter.getAttribute("data-target");

            let count = 0;

            const speed = target / 150;

            const updateCounter = () => {

                if(count < target){

                    count += speed;

                    counter.innerText =
                    Math.floor(count);

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.innerText =
                    target.toLocaleString() + "+";

                }

            };

            updateCounter();

        });

    }

}

window.addEventListener("scroll", runCounters);
runCounters();

// ==========================================
// Navbar Background Effect
// ==========================================

window.addEventListener("scroll", () => {

    const header =
    document.querySelector(".header");

    if(window.scrollY > 80){

        header.style.background =
        "rgba(255,255,255,0.95)";

        header.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.08)";

    }else{

        header.style.background =
        "rgba(255,255,255,.85)";

        header.style.boxShadow =
        "none";

    }

});

// ==========================================
// WhatsApp Order Form
// ==========================================

const orderForm =
document.getElementById("orderForm");

orderForm.addEventListener("submit", function(e){

    e.preventDefault();

    const name =
    document.getElementById("name").value;

    const phone =
    document.getElementById("phone").value;

    const business =
    document.getElementById("business").value;

    const address =
    document.getElementById("address").value;

    const product =
    document.getElementById("product").value;

    const quantity =
    parseInt(
    document.getElementById("quantity").value
    );

    if(quantity < 2){

        alert(
        "Minimum Order is 2 Peti."
        );

        return;

    }

    const message =

`Hello Nature Sheep,

Name: ${name}

Phone: ${phone}

Business Name: ${business}

Address: ${address}

Product: ${product}

Quantity: ${quantity}

I would like to place a bulk water order.`;

    const whatsappURL =
    `https://wa.me/918448417564?text=${encodeURIComponent(message)}`;

    window.open(
        whatsappURL,
        "_blank"
    );

});

// ==========================================
// Smooth Active Navigation
// ==========================================

const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 150;

        const sectionHeight =
        section.clientHeight;

        if(window.scrollY >= sectionTop){

            current =
            section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if(
            link.getAttribute("href")
            === `#${current}`
        ){
            link.classList.add("active");
        }

    });

});

// ==========================================
// Water Ripple Hover Effect
// ==========================================

document
.querySelectorAll(
".product-card, .glass-card, .feature-card"
)
.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transition =
        "all .4s ease";

    });

});

// ==========================================
// Floating Water Bubble Generator
// ==========================================

const particles =
document.querySelector(".particles");

for(let i = 0; i < 25; i++){

    const bubble =
    document.createElement("span");

    bubble.style.position = "absolute";

    bubble.style.width =
    Math.random()*10 + 8 + "px";

    bubble.style.height =
    bubble.style.width;

    bubble.style.borderRadius = "50%";

    bubble.style.background =
    "rgba(0,153,255,.15)";

    bubble.style.left =
    Math.random()*100 + "%";

    bubble.style.bottom =
    "-50px";

    bubble.style.animation =
    `bubbleFloat ${Math.random()*8+8}s linear infinite`;

    bubble.style.animationDelay =
    `${Math.random()*5}s`;

    particles.appendChild(bubble);

}

// ==========================================
// Bubble Animation CSS Injection
// ==========================================

const style =
document.createElement("style");

style.innerHTML = `

@keyframes bubbleFloat{

    0%{
        transform:
        translateY(0);
        opacity:0;
    }

    20%{
        opacity:1;
    }

    100%{
        transform:
        translateY(-110vh);
        opacity:0;
    }

}

`;

document.head.appendChild(style);

// ==========================================
// End Script
// ==========================================