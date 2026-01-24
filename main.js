/* ================= THEME (DARK / LIGHT) ================= */

const root = document.documentElement;
const themeToggle = document.querySelector(".theme-toggle");

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  root.classList.add("light");
}

// Toggle theme
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    root.classList.toggle("light");

    if (root.classList.contains("light")) {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
  });
}

/* ================= ACTIVE LINK ================= */
document.querySelectorAll("a").forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

/* ================= MOBILE NAV ================= */
const toggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (toggle && navLinks) {
  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

/* ================= FORM (UI ONLY) ================= */
document.querySelectorAll("form").forEach(form => {
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Form submitted (UI only)");
  });
});




if (themeToggle) {
  themeToggle.textContent = root.classList.contains("light") ? "🌞" : "🌙";

  themeToggle.addEventListener("click", () => {
    setTimeout(() => {
      themeToggle.textContent = root.classList.contains("light") ? "🌞" : "🌙";
    }, 50);
  });
}



