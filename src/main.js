import { router } from "./router/router";
import { getTheme } from "./utils/theme.js"; 
import { toggleTheme } from "./utils/theme.js";

document.addEventListener("click", function (e) {
  if (e.target.closest(".theme-toggle")) {
    toggleTheme();
  }
});

router();
getTheme();

