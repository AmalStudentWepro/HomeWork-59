import { getCookie } from "../utils/cookie";


export function Header() {
  const header = document.createElement("header");
  header.className = "header";

  header.innerHTML = `
    <div class="container">
      <div class="nav">
        <div class="nav-left">Your Name</div>
        <div class="nav-right">
          <a href="#" class="blog-btn" style="display:none">Войти</a>
          <a href="#" class="prof-btn" style="display:none">Профиль</a>
          <div class="theme-toggle">
            <img src="/img/sun.png" alt="Sun Icon" class="theme-icon">
            <div class="theme-dot"></div>
          </div>
        </div>
      </div>
      <h1 class="main-title">THE BLOG</h1>
      <p class="subtitle">© 2025 Twitter · LinkedIn · Email · RSS feed · Add to Feedly</p>
    </div>
  `;

  const blogBtn = header.querySelector(".blog-btn");
  const profBtn = header.querySelector(".prof-btn");
  const token = getCookie("accessToken");

  if (token) {
    profBtn.style.display = "inline-block";
  } else {
    blogBtn.style.display = "inline-block";
  }

  return header;
}
