import axios from "axios";
import { setCookie } from "../../utils/cookie";
import { redirect } from "../../utils/helpers";

const signin = document.querySelector('#signin');

if (signin) {
  signin.onclick = () => {
    redirect("/signin");
  };
}

const form = document.querySelector(".form-box form");

if (form) {
  form.onsubmit = async (e) => {
    e.preventDefault();
    const fn = new FormData(form);

    const name = fn.get("name");
    const email = fn.get("email");
    const password = fn.get("password");

    const user = {
      fullName: name,
      email,
      password,
    };

    try {
      const res = await axios.post("https://blog-n7ue.onrender.com/users", user);

      setCookie("accessToken", res.data.accessToken, 1);
      redirect("/");
    } catch (error) {
      console.error(error);
    }
  };
}

