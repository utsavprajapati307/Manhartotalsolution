  // Header scroll behavior
      const header = document.getElementById("siteHeader");
      function checkScroll() {
        if (window.scrollY > 60) {
          header.classList.add("scrolled");
          header.classList.remove("transparent");
        } else {
          header.classList.remove("scrolled");
          header.classList.add("transparent");
        }
      }
      window.addEventListener("scroll", checkScroll);
      checkScroll();

      // Mobile nav toggle
      const menuBtn = document.getElementById("menuBtn");
      const navLinks = document.getElementById("navLinks");
      menuBtn &&
        menuBtn.addEventListener("click", () => {
          navLinks.classList.toggle("active");
          menuBtn.setAttribute(
            "aria-expanded",
            navLinks.classList.contains("active")
          );
        });

      // Close mobile menu when clicking on a link
      document.querySelectorAll(".nav-links a").forEach((link) => {
        link.addEventListener("click", () => {
          navLinks.classList.remove("active");
          menuBtn.setAttribute("aria-expanded", "false");
        });
      });

      // Fade animations
      document.addEventListener("DOMContentLoaded", () => {
        // Fade in elements
        document
          .querySelectorAll('[data-animate="fade-in"]')
          .forEach((el, i) => {
            el.style.opacity = 0;
            el.style.transform = "translateY(20px)";
            setTimeout(() => {
              el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
              el.style.opacity = 1;
              el.style.transform = "translateY(0)";
            }, 150 * i);
          });
      });

      // Contact form -> open WhatsApp with filled info
      const mainContactForm = document.getElementById("mainContactForm");
      const mainFormStatus = document.getElementById("mainFormStatus");
      if (mainContactForm) {
        mainContactForm.addEventListener("submit", (e) => {
          e.preventDefault();
          const name = document.getElementById("cname").value.trim();
          const phone = document.getElementById("cphone").value.trim();
          const service =
            document.getElementById("cservice").value || "General";
          const message = document.getElementById("cmessage").value.trim();
          const text = encodeURIComponent(
            `Hello Manhar Total Solution,\n\nName: ${name}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}`
          );
          const waUrl = `https://wa.me/919664774496?text=${text}`;
          window.open(waUrl, "_blank");
          mainFormStatus.textContent =
            "Opening WhatsApp... please send from there.";
          mainFormStatus.style.color = "var(--success)";
          setTimeout(() => (mainFormStatus.textContent = ""), 4000);
        });
      }

      // Service cards interaction
      const serviceCards = document.querySelectorAll(".service-card");
      serviceCards.forEach((card) => {
        // Keyboard navigation
        card.addEventListener("keydown", (e) => {
          if (e.key === "Enter") {
            card.classList.toggle("flipped");
          }
        });
      });

      // Add active class to nav links based on scroll position
      window.addEventListener("scroll", () => {
        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll(".nav-links a");

        let current = "";
        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (scrollY >= sectionTop - 200) {
            current = section.getAttribute("id");
          }
        });

        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href").substring(1) === current) {
            link.classList.add("active");
          }
        });
      });