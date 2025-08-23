import "./style.css";
import gcLogo from "./resources/imgs/gcLogo.png";
import loadHome from "./modules/home.js";
import loadMenu from "./modules/menu.js";

let page = 1;

// Navbar
document.querySelector(".header").appendChild(document.createElement("nav"))

for (let i = 0; i < 3; i++) {
    let text;
    const link = document.createElement("a");
    const button = document.createElement("button");

    switch (i) {
        case 0:
            text = "Home";
            break;
        case 1:
            text = "Menu";
            break;
        case 2:
            text = "Location";
            break;
    }
    if (i == page) {
        link.className = "selected";
    }
    link.textContent = text

    button.appendChild(link)

    document.querySelector(".header nav").appendChild(button);
}

switch (page) {
    case 0:
        loadHome();
        break;
    case 1:
        loadMenu();
        break;
}

export {gcLogo};    