import "./style.css";
import gcLogo from "./gcLogo.png";

// Navbar
document.querySelector(".header").appendChild(document.createElement("nav"))

for (let i = 0; i < 3; i++) {
    let text;
    const button = document.createElement("button");
    switch (i) {
        case 0:
            text = "Home";
            break;
        case 1:
            text = "News";
            break;
        case 2:
            text = "Location";
            break;
    }
    button.textContent = text
    document.querySelector(".header nav").appendChild(button);
}

// Welcome Section
const welcomeDiv = document.createElement("div");
welcomeDiv.className = "welcome";
document.querySelector("#content").appendChild(welcomeDiv);

const welcomeSelector = document.querySelector(".welcome");

const gcImage = document.createElement("img");
gcImage.src = gcLogo;
welcomeSelector.appendChild(gcImage);

const welcomeH2 = document.createElement("h2");
welcomeH2.textContent = "Bold Street"
welcomeSelector.appendChild(welcomeH2);

const welcomeH1 = document.createElement("h1");
welcomeH1.innerHTML = "How Tea is <br> Meant to Be";
welcomeSelector.appendChild(welcomeH1);

const welcomeP = document.createElement("p")
welcomeP.innerHTML = "Freshly brewed, whole leaf tea crafted by our tea experts for a rich, smooth flavour. <br> Experience the taste of real tea, done right.";
welcomeSelector.appendChild(welcomeP);

// Second Section
const s2Div = document.createElement("div");
s2Div.className = "section2";
document.querySelector("#content").appendChild(s2Div);

const s2New = document.createElement("div");
s2New.className = "new";
document.querySelector(".section2").appendChild(s2New);

const s2P = document.createElement("p");
s2P.className = "new-header"
s2P.textContent = "Our Latest Release";
document.querySelector(".new").appendChild(s2P);

const s2Img = document.createElement("img");
s2Img.src = "https://gongchausofficial.com/wp-content/uploads/2025/05/Mini-768x384.jpg";
document.querySelector(".new").appendChild(s2Img);

