function loadExperiences() {
    const list = JSON.parse(localStorage.getItem("experiences")) || [];
    const ul = document.getElementById("experienceList");
    ul.innerHTML = "";
    
    list.forEach((item, index) => {
        const li = document.createElement("li");
        li.className = "todo-item";
        li.innerHTML = `
            <span>${item}</span>
            <button onclick="deleteExperience(${index})">
                <i class="fas fa-trash"></i>
            </button>
        `;
        ul.appendChild(li);
    });
}

function addExperience() {
    const input = document.getElementById("newExperience");
    const text = input.value.trim();
    
    if (text) {
        const list = JSON.parse(localStorage.getItem("experiences")) || [];
        list.push(text);
        localStorage.setItem("experiences", JSON.stringify(list));
        input.value = "";
        loadExperiences();
    }
}

function deleteExperience(index) {
    const list = JSON.parse(localStorage.getItem("experiences")) || [];
    list.splice(index, 1);
    localStorage.setItem("experiences", JSON.stringify(list));
    loadExperiences();
}

// Accordion functionality
document.addEventListener("DOMContentLoaded", function() {
    const accordions = document.querySelectorAll(".accordion");
    
    accordions.forEach((accordion) => {
        accordion.addEventListener("click", function() {
            this.classList.toggle("active");
            const panel = this.nextElementSibling;
            
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                panel.style.padding = "0 18px";
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
                panel.style.padding = "18px";
            }
        });
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Back to top button
    const backToTop = document.getElementById("backToTop");
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.classList.add("visible");
        } else {
            backToTop.classList.remove("visible");
        }
    });

    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Form submission
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            alert("Thank you for your message! I'll get back to you soon.");
            this.reset();
        });
    }

    // Load experiences on page load
    loadExperiences();
});