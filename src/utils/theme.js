export function getTheme() {
    let theme = localStorage.getItem("theme");
  
    if (theme === "dark") {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }
  
  export function toggleTheme() {
    let currentTheme = document.body.classList.contains("dark") ? "dark" : "light";
    let newTheme = currentTheme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    getTheme();
  }
  