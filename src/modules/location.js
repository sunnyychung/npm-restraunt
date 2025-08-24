import { gcShop } from "../index.js";

function loadLocation() {
    const location = document.createElement("div");
        location.className = "location";

        const title = document.createElement("h1");
        title.textContent = "Find us here!";

        const intro = document.createElement("p");
        intro.textContent = "Our branch is located on the infamous Bold Street, L1 4DN in Liverpool, you can reach find more information below alongside a image of the outside of the shop.";

        const info = document.createElement("div");
        const googleMaps = document.createElement("iframe");
        googleMaps.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d608922.8307281829!2d-4.100316268750003!3d53.404008899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b21a472e746a3%3A0x628d5476aabc9294!2sGong%20Cha%20Bold%20Street!5e0!3m2!1sen!2suk!4v1755993617713!5m2!1sen!2suk";
        googleMaps.width = "600";
        googleMaps.height = "450";

        const gcOutside = document.createElement("img");
        gcOutside.src = gcShop;

        info.appendChild(googleMaps);
        info.appendChild(gcOutside);

        location.appendChild(title);
        location.appendChild(intro);
        location.appendChild(info);

        document.querySelector("#content").appendChild(location);
}

export default loadLocation;