export function getTheme() {
  let theme = localStorage.getItem("theme");

  if (theme === "dark") {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
    updateThemeUI("dark");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
    updateThemeUI("light");
  }
}

export function toggleTheme() {
  let isDark = document.body.classList.contains("dark");
  let newTheme = isDark ? "light" : "dark";
  localStorage.setItem("theme", newTheme);
  getTheme();
}

function updateThemeUI(theme) {
  const icon = document.querySelector(".theme-icon");
  const dot = document.querySelector(".theme-dot");

  if (icon) {
    icon.src = theme === "dark" ? "/img/moon.png" : "/img/sun.png";
    icon.style.order = theme === "dark" ? "2" : "0";
  }

  if (dot) {
    dot.style.transform = theme === "dark" ? "translateX(0)" : "translateX(30px)";
  }
}
