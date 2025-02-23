document.addEventListener("DOMContentLoaded", function () {
    // Animatsiyalarni faollashtirish
    const elements = document.querySelectorAll(".bounce-in, .fade-in, .slide-in, .rotate-in, .flip-in, .spin-in, .pulse, .orbit");
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add("active");
        }, index * 200);
    });

    // Kursorni harakatlantirish
    const cursor = document.querySelector(".cursor");
    document.addEventListener("mousemove", (e) => {
        cursor.style.left = `${e.pageX}px`;
        cursor.style.top = `${e.pageY}px`;
        cursor.style.transform = `translate(-50%, -50%) scale(${e.buttons === 1 ? 1.5 : 1})`;
    });

    // Hamburger menyusini ochish/yopish
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const body = document.body;

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        const isActive = navLinks.classList.contains("active");
        hamburger.textContent = isActive ? "✖" : "☰";

        if (isActive) {
            navLinks.classList.add("show");
            body.style.overflow = "hidden"; // Scrollni bloklash
            updateNavColors(); // Nav-item ranglarini yangilash
        } else {
            navLinks.classList.remove("show");
            body.style.overflow = "auto"; // Scrollni ochish
        }
    });

    // Tema almashish
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("click", () => {
        body.classList.toggle("light-theme");
        const isLight = body.classList.contains("light-theme");
        themeToggle.textContent = isLight ? "☀️" : "🌙";

        updateNavColors(); // Nav-item ranglarini yangilash
        updateThemeStyles(); // Boshqa elementlarning stilini yangilash
    });

    // Nav-item ranglarini yangilash funksiyasi (hamburger rangini o‘zgartirmaydi)
    function updateNavColors() {
        const isLight = body.classList.contains("light-theme");
        const navItems = document.querySelectorAll(".nav-item");

        navItems.forEach(item => {
            item.style.color = isLight ? "#1e293b" : "#22d3ee";
        });
    }

    // Boshqa elementlarning tema stillarini yangilash
    function updateThemeStyles() {
        const isLight = body.classList.contains("light-theme");
        const elements = document.querySelectorAll(".neon, .glow, .neon-btn, .social-btn");

        elements.forEach(element => {
            if (isLight) {
                if (element.classList.contains("neon")) {
                    element.style.textShadow = "0 0 10px #1e293b, 0 0 20px #9333ea, 0 0 30px #4a5568";
                } else if (element.classList.contains("glow")) {
                    element.style.textShadow = "0 0 10px #1e293b, 0 0 20px #9333ea";
                } else if (element.classList.contains("neon-btn")) {
                    element.style.borderColor = "#1e293b";
                    element.style.color = "#1e293b";
                    element.style.boxShadow = "0 0 15px #1e293b";
                } else if (element.classList.contains("social-btn")) {
                    element.style.color = "#1e293b";
                }
            } else {
                if (element.classList.contains("neon")) {
                    element.style.textShadow = "0 0 10px #22d3ee, 0 0 20px #ec4899, 0 0 30px #a5b4fc";
                } else if (element.classList.contains("glow")) {
                    element.style.textShadow = "0 0 10px #22d3ee, 0 0 20px #ec4899";
                } else if (element.classList.contains("neon-btn")) {
                    element.style.borderColor = "#22d3ee";
                    element.style.color = "#22d3ee";
                    element.style.boxShadow = "0 0 15px #22d3ee";
                } else if (element.classList.contains("social-btn")) {
                    element.style.color = "#22d3ee";
                }
            }
        });
    }

    // Forma yuborish
    const forms = document.querySelectorAll("form");
    forms.forEach(form => {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const message = `Ism: ${formData.get('name')}\nBuyurtma: ${formData.get('order')}\nTelefon: ${formData.get('phone')}`;
            alert("Kosmo buyurtma yuborildi!\n" + message + "\nTez orada siz bilan bog‘lanamiz.");
            form.reset();
        });
    });

    // Menyu tugmalari
    const menuButtons = document.querySelectorAll(".menu-item .btn");
    menuButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const itemName = btn.closest(".menu-item").querySelector("h3").textContent;
            alert(`${itemName} kosmo savatchaga qo‘shildi!`);
        });
    });

    // Scroll effektlari va interaktivlik
    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add("active");
            }
        });

        // Hamburger menyusini scroll bo‘yicha yopish (agar ochiq bo‘lsa)
        if (scrollY > 100 && navLinks.classList.contains("active")) {
            navLinks.classList.remove("active", "show");
            hamburger.textContent = "☰";
            body.style.overflow = "auto";
        }
    });

    // Kursor interaktivligi
    document.addEventListener("mousedown", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1.5)";
    });

    document.addEventListener("mouseup", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1)";
    });

    // Hamburger menyusini o‘zgaruvchanlik bilan yopish
    document.addEventListener("click", (e) => {
        if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
            navLinks.classList.remove("active", "show");
            hamburger.textContent = "☰";
            body.style.overflow = "auto";
        }
    });
});