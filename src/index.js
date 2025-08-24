import "./style.css";
import gcLogo from "./resources/imgs/gcLogo.png";
import gcShop from "./resources/imgs/gcShop.png";
import loadHome from "./modules/home.js";
import loadMenu from "./modules/menu.js";
import loadLocation from "./modules/location.js";

function clearContents() {
    document.getElementById(0).style.textDecoration = "none";
    document.getElementById(1).style.textDecoration = "none";
    document.getElementById(2).style.textDecoration = "none";

    const content = document.getElementById("content");
    
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

function switchPage(page) {
    document.getElementById(page).style.textDecoration = "underline";

    switch (page) {
        case 0:
            loadHome();
            break;
        case 1:
            loadMenu();
            break;
        case 2:
            loadLocation();
            break;
    }
}

// Navbar
document.querySelector(".header").appendChild(document.createElement("nav"))

for (let i = 0; i < 3; i++) {
    let text;
    let id;
    const link = document.createElement("a");
    const button = document.createElement("button");

    switch (i) {
        case 0:
            text = "Home";
            id = 0;
            break;
        case 1:
            text = "Menu";
            id = 1;
            break;
        case 2:
            text = "Location";
            id = 2;
            break;
    }
    link.textContent = text
    link.id = id;

    button.appendChild(link)

    button.addEventListener("click", () => {
        clearContents();
        switchPage(id);
    })

    document.querySelector(".header nav").appendChild(button);
    
    
}

export {gcLogo, gcShop};    