// ===== Dark mode =====
const toggle = document.getElementById('darkToggle');
const html = document.documentElement;
toggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
});
if (localStorage.getItem('theme') === 'dark') html.classList.add('dark');


// ===== Mobile navbar =====
const toggleButton = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
toggleButton.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));


// ===== Scroll to top button =====
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
window.addEventListener("scroll", () => {
    scrollToTopBtn.classList.toggle("hidden", window.scrollY <= 200);
});
scrollToTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));



function validation() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let namemass = document.getElementById("namemass");
    let emailmass = document.getElementById("emailmass");
    let textmass = document.getElementById("textmass");

    namemass.textContent = "";
    emailmass.textContent = "";
    textmass.textContent = "";

    let valid = true;

    if (name === "") {
        namemass.textContent = "❌ Enter Your Name";
        valid = false;
    }

    if (email === "") {
        emailmass.textContent = "❌ Enter Your Email";
        valid = false;
    } else if (!email.includes("@")) {
        emailmass.textContent = "❌ Enter a valid Email";
        valid = false;
    } else {
        emailmass.textContent = "";
    }
    if (message === "") {
        textmass.textContent = "❌ Enter Your Message";
        valid = false;
    }

    return valid;
}


// Animation 

const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.remove('opacity-0', 'translate-y-10');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

