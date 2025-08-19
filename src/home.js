import { gcLogo } from "./index.js";

function loadHome() {
    const home = document.createElement("div");
            // Welcome Section
            const welcomeDiv = document.createElement("div");
            welcomeDiv.className = "welcome";
    
            const gcImage = document.createElement("img");
            gcImage.src = gcLogo;
            welcomeDiv.appendChild(gcImage);
    
            const welcomeH2 = document.createElement("h2");
            welcomeH2.textContent = "Bold Street"
            welcomeDiv.appendChild(welcomeH2);
    
            const welcomeH1 = document.createElement("h1");
            welcomeH1.innerHTML = "How Tea is <br> Meant to Be";
            welcomeDiv.appendChild(welcomeH1);
    
            const welcomeP = document.createElement("p")
            welcomeP.innerHTML = "Freshly brewed, whole leaf tea crafted by our tea experts for a rich, smooth flavour. <br> Experience the taste of real tea, done right.";
            welcomeDiv.appendChild(welcomeP);
    
            // Second Section
            const s2Div = document.createElement("div");
            s2Div.className = "section2";
    
            const s2New = document.createElement("div");
            s2New.className = "new";
            s2Div.appendChild(s2New);
    
            const s2P = document.createElement("p");
            s2P.className = "new-header"
            s2P.textContent = "Our Latest Release";
            s2New.appendChild(s2P);
    
            const s2Img = document.createElement("img");
            s2Img.src = "https://gongchausofficial.com/wp-content/uploads/2025/05/Mini-768x384.jpg";
            s2New.appendChild(s2Img);
    
            home.appendChild(welcomeDiv);
            home.appendChild(s2Div);
    
            document.querySelector("#content").appendChild(home);
}

export default loadHome();