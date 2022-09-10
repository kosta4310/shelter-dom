export class Card {
  constructor(jsonObject) {
    this.name = jsonObject.name;
    this.id = jsonObject.id;
    this.img = jsonObject.img;
    this.imgSmall = jsonObject.imgSmall;
    this.type = jsonObject.type;
    this.breed = jsonObject.breed;
    this.descriptions = jsonObject.descriptions;
    this.age = jsonObject.age;
    this.inoculations = jsonObject.inoculations;
    this.diseases = jsonObject.diseases;
    this.parasites = jsonObject.parasites;
  }

  createCard() {
    let card = document.createElement("div");
    card.className = "our-friends__item";
    card.innerHTML = "";
    card.innerHTML = ` 
                <div class="card" data-id="${this.id}">
                  <div class="card__image">
                    <img
                      src="${this.imgSmall}"
                      alt="${this.name}"
                    />
                  </div>
                  <div class="card__title">
                    <h4 class="h4_lite">${this.name}</h4>
                  </div>
                  <div class="card__button">
                    <span class="button"> Learn more </span>
                  </div>
                </div>
              `;
    return card;
  }
}
