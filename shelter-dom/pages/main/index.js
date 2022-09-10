import * as hamburger from "../../assets/js/hamburger.mjs";
import { popUp } from "../../assets/js/modal.mjs";
import { Card } from "../../assets/js/card.mjs";
import { arrayPets } from "../../assets/js/petsJson.mjs";
hamburger.hamburger();

popUp();
let cntCards = 3;
const initialArray = ["0", "1", "2", "3", "4", "5", "6", "7"];
const slider = document.querySelector(".slider__wrapper .slider");
const left = document.querySelector(".our-friends__row .left");
const right = document.querySelector(".our-friends__row .right");

let sliderLeft = generateCards(".slider-left", [4, 5, 6]);
let sliderRight = generateCards(".slider-right", [3, 4, 7]);
let sliderActive = document.querySelector(".slider-active");

if (window.matchMedia("(max-width: 1279px)").matches) {
  cntCards = 2;
  sliderLeft = generateCards(".slider-left", [3, 5]);
  sliderRight = generateCards(".slider-right", [4, 7]);
  sliderActive = generateCards(".slider-active", [0, 1]);
}
if (window.matchMedia("(max-width: 767px)").matches) {
  cntCards = 1;
  sliderLeft = generateCards(".slider-left", [3]);
  sliderRight = generateCards(".slider-right", [5]);
  sliderActive = generateCards(".slider-active", [0]);
}

addButtonEventListener();
addSliderEventListener();
function addButtonEventListener() {
  left.addEventListener("click", moveLeft);
  right.addEventListener("click", moveRight);
}

function addSliderEventListener() {
  slider.addEventListener("animationend", (animationEvent) => {
    if (
      animationEvent.animationName == "move-left" ||
      animationEvent.animationName == "move-left-laptop" ||
      animationEvent.animationName == "move-left-tablet"
    ) {
      slider.classList.remove("transition-left");
      let innerHtmlLeft = sliderLeft.innerHTML;
      sliderActive.innerHTML = innerHtmlLeft;
    } else {
      slider.classList.remove("transition-right");
      let innerHtmlRight = sliderRight.innerHTML;
      sliderActive.innerHTML = innerHtmlRight;
    }

    addButtonEventListener();
  });
}
function moveLeft() {
  changeLeftContent();
  slider.classList.add("transition-left");
  left.removeEventListener("click", moveLeft);
}
function moveRight() {
  changeRightContent();
  slider.classList.add("transition-right");
  right.removeEventListener("click", moveRight);
}
// arrayIdObject массив Card.id которые не должны повторяться и быть как на предыдущем слайде(цифры от 0 до 7)

// getArrayInstancesPets() создает обьекты Card с полями из json файла. Нужно вызвать у них метод createCard чтобы создать элемент our-friends__item.
function getArrayInstancesPets(arrayIdObject) {
  let cards = [];
  for (let index = 0; index < cntCards; index++) {
    for (let ind = 0; ind < arrayPets.length; ind++) {
      if (arrayIdObject[index] == arrayPets[ind].id) {
        cards.push(new Card(arrayPets[ind]));
        break;
      }
    }
  }
  return cards;
}
function getEmptyContainer(container) {
  let emptyContainer = document.querySelector(`${container}`);

  emptyContainer.innerHTML = "";
  return emptyContainer;
}

function generateCards(container, arrayAllow) {
  let containerNew = getEmptyContainer(container);

  let instancesCards = getArrayInstancesPets(arrayAllow);
  instancesCards.forEach((elem) => {
    containerNew.appendChild(elem.createCard());
  });
  return containerNew;
}
function changeLeftContent() {
  let arrayIdPets = getIdPetsFromActive();
  console.log("Left content arrayIdPets: " + arrayIdPets);
  let arrayAllowId = getArrayAllowId(arrayIdPets);

  let randomArrayId = generateArrayId(arrayAllowId);
  console.log(arrayAllowId, randomArrayId);
  generateCards(".slider-left", randomArrayId);
}
function changeRightContent() {
  let arrayIdPets = getIdPetsFromActive();
  console.log("Right content arrayIdPets: " + arrayIdPets);
  let arrayAllowId = getArrayAllowId(arrayIdPets);

  let randomArrayId = generateArrayId(arrayAllowId);

  generateCards(".slider-right", randomArrayId);
}
function getIdPetsFromActive() {
  let sliderActiveCards = document.querySelectorAll(".slider-active .card");
  let temp = [];
  sliderActiveCards.forEach((element) => {
    temp.push(element.dataset.id);
  });

  return temp;
}
function getArrayAllowId(arrayIdPets) {
  return initialArray.filter((elem) => !arrayIdPets.includes(elem));
}
function generateArrayId(arrayAllowId) {
  return shuffleSattolo(arrayAllowId);
}
function shuffleSattolo(array) {
  let arraySorted = array;
  for (let i = arraySorted.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arraySorted[i], arraySorted[j]] = [arraySorted[j], arraySorted[i]];
  }
  console.log("arraySorted: " + arraySorted);
  return arraySorted;
}
