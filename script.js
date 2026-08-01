const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');

toggle?.addEventListener('click', () => links.classList.toggle('open'));
links?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => links.classList.remove('open')));
document.getElementById('year').textContent = new Date().getFullYear();

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    const darkModeEnabled =
      document.body.classList.contains("dark-theme");

    themeToggle.textContent = darkModeEnabled ? "☀️" : "🌙";

    localStorage.setItem(
      "peernet-theme",
      darkModeEnabled ? "dark" : "light"
    );
  });

  const savedTheme = localStorage.getItem("peernet-theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    themeToggle.textContent = "☀️";
  }
}
