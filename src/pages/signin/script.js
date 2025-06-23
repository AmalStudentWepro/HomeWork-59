import axios from "axios";
import { redirect } from "../../utils/helpers";


function generateToken() {
  return Math.random().toString(36).substr(2);
}

let signup = document.querySelector('#signup');

if (signup) {
  signup.onclick = () => {
    redirect("/signup")
  };
}

let form = document.forms.Signin;

if (form) {
  form.onsubmit = async function (e) {
    e.preventDefault();
    let fn = new FormData(form);

    let email = fn.get("email");
    let password = fn.get("password");


   
    let user = {
        email: email,
        password: password,
        strategy: "local",
    }

    try {
        let res = await axios.post("https://blog-n7ue.onrender.com/authentication", user);
        console.log(res);
        redirect("/")
    } catch (error) {
      console.error(error);
    }
  };
}
