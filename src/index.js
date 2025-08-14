import "./style.css";
import gcLogo from "./gcLogo.png";

const image = document.createElement("img");
image.src = gcLogo;

document.querySelector(".gc-logo").appendChild(image);