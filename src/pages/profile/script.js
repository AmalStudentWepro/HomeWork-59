import axios from "axios";
import { getCookie } from "../../utils/cookie";
import { redirect } from "../../utils/helpers";
import { Header } from "../../components/header.js";

const app = document.querySelector("#app3");
app.prepend(Header()); 

let home_btn = document.querySelector(".home_btn");
home_btn.onclick = () => redirect("/");

let token = getCookie("accessToken");

if (!token) {
  alert("Вы не авторизованы!");
  redirect("/signin");
}

axios
  .get("https://blog-n7ue.onrender.com/users", {
    headers: {
      Authorization: `Bearer ${token}` 
    }
  })
  .then((res) => {
    const user = res.data.data[0]; 

    console.log("Пользователь:", user);

    if (!user) {
      alert("Пользователь не найден");
      redirect("/signin");
      return;
    }

    showUser(user);
  })
  .catch((err) => {
    console.error(err);
    alert("Ошибка при получении пользователя");
  });

function showUser(user) {
  const name = user.fullName || user.name || user.username || "Неизвестно";
  const email = user.email || user.mail || "Неизвестно";

  document.getElementById("user-name").textContent = name;
  document.getElementById("user-email").textContent = email;
}

