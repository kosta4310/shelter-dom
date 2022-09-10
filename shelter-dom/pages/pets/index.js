import * as hamburger from "../../assets/js/hamburgerBlack.mjs";
import * as popUp from "../../assets/js/modal.mjs";
import { Card } from "../../assets/js/card.mjs";
import { arrayPets } from "../../assets/js/petsJson.mjs";
import { Page } from "../../assets/js/pages.mjs";
import { generateArray } from "../../assets/js/generateArray.mjs";
hamburger.hamburger();
popUp.popUpSecond();
let pages = new Page(1, 8);
// let arrayRandomCards = generateArrayNumbers(8);
let arrayRandomCards = getStartArray();
if (window.matchMedia("(max-width: 1279px)").matches) {
  pages = new Page(1, 6);
  arrayRandomCards = generateArray(6);
}
if (window.matchMedia("(max-width: 767px)").matches) {
  pages = new Page(1, 3);
  arrayRandomCards = generateArray(3);
}

// ================ramdom cards

// let k; /*количество элементов на странице */
// let n = 1; /*номер страницы*/

let arrayIdObject = getArrayIdObject(
  pages.n,
  pages.k
); /*выдает массив id из рендомного массива по нужной странице */

// ==============

// function generateArrayNumbers(cntOfCards) {
//   // let arrayRandomCards = [0, 1, 2, 3, 4, 5, 6, 7];
//   // for (let i = 0; i < 40; i++) {
//   //   let random = Math.floor(Math.random() * 8);
//   //   arrayRandomCards.push(random);
//   // }
//   // return arrayRandomCards;
//   return getArrayAll(cntOfCards);
// }
let emptyContainer = getEmptyContainer();
let cards =
  getArraySortedPets(arrayIdObject); /*получаем карточки на нужной странице */
// подключение карточек в документ
cards.forEach((card) => {
  emptyContainer.appendChild(card.createCard());
});
// выдает массив id из рендомного массива по нужной странице
function getArrayIdObject(n, k) {
  let arrayIdObject = [];
  for (let i = (n - 1) * k; i < n * k; i++) {
    arrayIdObject.push(arrayRandomCards[i]);
  }
  return arrayIdObject;
}
// ===================
addButtonPageEventListener();
function addButtonPageEventListener() {
  document
    .querySelector(".pagination .pagination__row")
    .addEventListener("click", (e) => {
      if (e.target.closest(".page__left-left")) pageLeftLeft();
      if (e.target.closest(".page__left")) pageLeft();
      if (e.target.closest(".page__right-right")) pageRightRight();
      if (e.target.closest(".page__right")) pageRight();
    });
}

function pageLeft() {
  if (pages.n > 1) pages.n -= 1;
  if (pages.n == 1) {
    setButtonDisable(".page__left");
    setButtonDisable(".page__left-left");
  }
  if (pages.n == 48 / pages.k - 1) {
    setButtonEnable(".page__right");
    setButtonEnable(".page__right-right");
  }
  changePage();
  numberShowPage.textContent = `${pages.n}`;
}
function pageRight() {
  if (pages.n == 1) {
    setButtonEnable(".page__left");
    setButtonEnable(".page__left-left");
  }

  if (pages.n < 48 / pages.k) pages.n += 1;
  if (pages.n == 48 / pages.k) {
    setButtonDisable(".page__right");
    setButtonDisable(".page__right-right");
  }
  changePage();
  numberShowPage.textContent = `${pages.n}`;
}
function pageLeftLeft() {
  pages.n = 1;
  setButtonEnable(".page__right");
  setButtonEnable(".page__right-right");
  setButtonDisable(".page__left");
  setButtonDisable(".page__left-left");
  changePage();
  numberShowPage.textContent = `${pages.n}`;
}
function pageRightRight() {
  pages.n = 48 / pages.k;
  setButtonEnable(".page__left");
  setButtonEnable(".page__left-left");
  setButtonDisable(".page__right");
  setButtonDisable(".page__right-right");
  changePage();
  numberShowPage.textContent = `${pages.n}`;
}

// ===================

// =================================
// let cards = [];
// arrayPets.forEach((object) => {
//   cards.push(new Card(object));
// });

function getArraySortedPets(arrayIdObject) {
  let cards = [];
  for (let index = 0; index < arrayIdObject.length; index++) {
    for (let ind = 0; ind < arrayPets.length; ind++) {
      if (arrayIdObject[index] == arrayPets[ind].id) {
        cards.push(new Card(arrayPets[ind]));
      }
    }
  }
  return cards;
}
function setButtonDisable(selectorClass) {
  document
    .querySelector(`.pagination .pagination__row ${selectorClass}`)
    .setAttribute("disabled", "true");
}
function setButtonEnable(selectorClass) {
  document
    .querySelector(`.pagination .pagination__row ${selectorClass}`)
    .removeAttribute("disabled");
}
// ====================
let numberShowPage = document.querySelector(".pagination .page-number span");

function getEmptyContainer() {
  let emptyContainer = document.querySelector(".slider-line");
  emptyContainer.innerHTML = "";
  return emptyContainer;
}
function changePage() {
  let emptyContainer = getEmptyContainer();
  let arrayIdObject = getArrayIdObject(pages.n, pages.k);
  let cards = getArraySortedPets(arrayIdObject);
  cards.forEach((card) => {
    emptyContainer.appendChild(card.createCard());
  });
  return emptyContainer;
}
// function getArrayAll(cntOfCards) {
//   let arrayAll = [];

//   for (let j = 0; j < 48 / cntOfCards; j++) {
//     arrayAll = arrayAll.concat(getRecursionArray(cntOfCards));
//   }
//   return arrayAll;
// }
// let temp = getArrayAll(6);
// console.log(temp);

function getRecursionArray(cntOfCards) {
  let res = [];
  let i = 8;
  let arr = [0, 1, 2, 3, 4, 5, 6, 7];
  function recursion(arr, k) {
    let arrIn = arr;
    if (k == 0) return res;
    let index = Math.floor(Math.random() * i);

    res.push(...arrIn.splice(index, 1));
    i--;
    return recursion(arrIn, k - 1);
  }
  let t = recursion(arr, cntOfCards);
  return t;
}

function getStartArray() {
  let start = [0, 1, 2, 3, 4, 5, 6, 7];
  let temp = [0, 1, 2, 3, 4, 5, 6, 7];
  for (let j = 0; j < 5; j++) {
    temp = shuffleSattolo(temp);
    start.push(...temp);
  }
  return start;
}
function shuffleSattolo(array) {
  let arraySorted = array;
  for (let i = arraySorted.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arraySorted[i], arraySorted[j]] = [arraySorted[j], arraySorted[i]];
  }

  return arraySorted;
}
