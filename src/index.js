import "./style.css";
import gcLogo from "./gcLogo.png";
import loadHome from "./home.js";

let page = 0;

// Navbar
document.querySelector(".header").appendChild(document.createElement("nav"))

for (let i = 0; i < 3; i++) {
    let text;
    let href;
    const link = document.createElement("a");
    const button = document.createElement("button");

    switch (i) {
        case 0:
            text = "Home";
            href = "template.html"
            break;
        case 1:
            text = "Menu";
            href = "menu.html"
            break;
        case 2:
            text = "Location";
            href = "location.html"
            break;
    }
    if (i == page) {
        link.className = "selected";
    }
    link.textContent = text
    link.href = href;

    button.appendChild(link)

    document.querySelector(".header nav").appendChild(button);
}

switch (page) {
    case 0:
        loadHome();
        break;
}

export {gcLogo};