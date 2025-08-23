class Drink {
            constructor(name, info, image) {
                this.name = name;
                this.info = info;
                this.image = image;
            }

            get drinkInfo() {
                return [this.name, this.info, this.image];
            }
        }

function loadMenu() {
        const drink1 = new Drink("Brown Sugar Milk Tea with Pearls", "Indulge in creamy milk tea sweetened with rich, caramel-like brown sugar for a bold, flavourful treat.", "https://assets-us-01.kc-usercontent.com:443/9a573028-2634-00ff-f74d-e14dd5562ac0/c74595e6-2607-42e4-a308-87421a3218dc/Products_ProductImg_OolongMilkFoam%201.png?w=210&h=310&fit=clip&rect=37,55,210,310");
        const drink2 = new Drink("Oolong Milk Tea with Pearls", "Enjoy creamy milk tea paired with chewy tapioca pearls for a delicious and fun drinking experience.", "https://assets-us-01.kc-usercontent.com:443/9a573028-2634-00ff-f74d-e14dd5562ac0/b46ed5bf-9212-4fa7-be78-91021eff78f4/Products_ProductImg_BlackTeaMilkFoam%203.png?w=210&h=310&fit=clip&rect=36,55,210,310");
        const drink3 = new Drink("Matcha Milk Tea", "Experience the rich, earthy matcha tea with a silky creamy base for a refreshing yet indulgent drink.", "https://assets-us-01.kc-usercontent.com:443/9a573028-2634-00ff-f74d-e14dd5562ac0/5cadb2e5-f54d-497d-8a9c-098f2febc65e/Products_ProductImg_BlackTeaMilkFoam%202.png?w=210&h=330&fit=clip&rect=36,39,210,330");
        const drink4 = new Drink("Green Milk Tea", "Enjoy a creamy green milk tea, a refreshing and creamy blend to lighten up your day.", "https://assets-us-01.kc-usercontent.com:443/9a573028-2634-00ff-f74d-e14dd5562ac0/db1879a9-20a9-498c-bd2b-a0e3aee447ae/Green%20Milk%20Tea%28I%29%201.png?w=170&h=240&fit=clip&rect=34,34,170,240");

        let drinkArray = [drink1.drinkInfo, drink2.drinkInfo, drink3.drinkInfo, drink4.drinkInfo]

        const menu = document.createElement("div");
        menu.className = "menu";

        const title = document.createElement("h1");
        title.innerHTML = "Milk Tea Series";

        const drinks = document.createElement("div");
        drinks.className = "drinks";

        menu.appendChild(title);
        menu.appendChild(drinks);

        drinkArray.forEach((drink) => {
            const drinkCard = document.createElement("div");
            drinkCard.className = "drink";

            const drinkImg = document.createElement("img");
            const drinkInfo = document.createElement("div");
            
            const drinkName = document.createElement("h3");
            const drinkDesc = document.createElement("p");

            drinkImg.src = drink[2];

            drinkName.innerHTML = drink[0];
            drinkDesc.innerHTML = drink[1];
            drinkInfo.appendChild(drinkName);
            drinkInfo.appendChild(drinkDesc);

            drinkCard.appendChild(drinkImg);
            drinkCard.appendChild(drinkInfo);

            drinks.appendChild(drinkCard);
        })

        document.querySelector("#content").appendChild(menu);   
}

export default loadMenu;