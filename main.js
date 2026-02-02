/* ================= THEME (DARK / LIGHT) ================= */

const root = document.documentElement;
const themeToggle = document.querySelector(".theme-toggle");

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  root.classList.add("light");
}

// Toggle theme (Supports multiple buttons)
const themeToggles = document.querySelectorAll(".theme-toggle, .theme-toggle-sidebar");

if (themeToggles.length > 0) {
  themeToggles.forEach(toggle => {
    // Set initial icon
    toggle.innerHTML = root.classList.contains("light")
      ? `🌙 <span class="theme-text">Dark Mode</span>`
      : `🌞 <span class="theme-text">Light Mode</span>`;

    // Simpler icon for navbar toggle if needed based on class
    if (toggle.classList.contains('theme-toggle')) {
      toggle.textContent = root.classList.contains("light") ? "🌞" : "🌙";
    }

    toggle.addEventListener("click", () => {
      root.classList.toggle("light");

      const isLight = root.classList.contains("light");
      localStorage.setItem("theme", isLight ? "light" : "dark");

      // Update ALL toggles
      themeToggles.forEach(t => {
        if (t.classList.contains('theme-toggle')) {
          t.textContent = isLight ? "🌞" : "🌙";
        } else {
          t.innerHTML = isLight
            ? `🌙 <span class="theme-text">Dark Mode</span>`
            : `🌞 <span class="theme-text">Light Mode</span>`;
        }
      });
    });
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

/* ================= DASHBOARD MOBILE DRAWER ================= */
const dashboardToggle = document.querySelector(".dashboard-nav-toggle");
const dashboardSidebar = document.querySelector(".dashboard-sidebar");
const dashboardOverlay = document.querySelector(".dashboard-overlay");

if (dashboardToggle && dashboardSidebar) {
  dashboardToggle.addEventListener("click", () => {
    dashboardSidebar.classList.toggle("open");
    // Also toggle body class for scroll locking/overlay targeting if needed
    document.body.classList.toggle("dashboard-open");
  });
}

if (dashboardOverlay) {
  dashboardOverlay.addEventListener("click", () => {
    dashboardSidebar.classList.remove("open");
    document.body.classList.remove("dashboard-open");
  });
}








