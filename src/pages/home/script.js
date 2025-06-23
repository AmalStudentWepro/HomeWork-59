import axios from "axios";
import { render } from "../../utils/render.js";
import { Header } from "../../components/header.js";
import { redirect } from "../../utils/helpers.js";



const app = document.querySelector("#app2");
app.prepend(Header()); 


let blog_btn = document.querySelector(".blog-btn");
let prof_btn = document.querySelector(".prof-btn");

blog_btn.onclick = () => {
  redirect("/signin")
};

prof_btn.onclick = () => {
  redirect("/profile")
};

