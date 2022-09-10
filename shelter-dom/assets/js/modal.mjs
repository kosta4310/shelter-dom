import { arrayPets } from "./petsJson.mjs";
export function popUp() {
  let modal = document.querySelector(".our-friends .modal");
  let buttonCloseModal = document.querySelector(".button-close-modal");
  let overlayPopUp = document.querySelector(".overlay-pop-up");
  let modalImage = document.querySelector(".overlay-pop-up .modal__image");
  let sliderLine = document.querySelector(
    ".our-friends .slider .slider-active"
  );
  let card = document.querySelector(".our-friends .card");

  sliderLine.addEventListener("click", (e) => {
    let cardTarget = e.target.closest(".card");
    if (cardTarget) {
      let idCard = cardTarget.dataset.id;
      openModal(arrayPets[idCard]);
    }
  });
  window.addEventListener("click", (e) => {
    let targerClassList = e.target.classList;
    if (
      targerClassList.contains("overlay-pop-up") ||
      targerClassList.contains("button-close-modal") ||
      targerClassList.contains("button-close-modal__image")
    ) {
      closeModal();
      console.log(e.target.classList);
    }
  });

  // idObject обькт из массива обектов под номеро id
  let openModal = (idObject) => {
    overlayPopUp.style.display = "block";

    loadDataForCard(idObject);
    document.body.style.overflow = "hidden";
  };
  let closeModal = () => {
    overlayPopUp.style.display = "none";
    document.body.style.overflow = "";
  };
  // let temp = arrayPets[1];
  let loadDataForCard = (object) => {
    document.querySelector(
      ".overlay-pop-up .modal__image"
    ).innerHTML = `<img src="${object.img}" alt="${object.name}">`;
    document.querySelector(
      ".overlay-pop-up .modal__name h3"
    ).textContent = `${object.name}`;
    document.querySelector(
      ".overlay-pop-up .modal__content .type"
    ).textContent = `${object.type}`;
    document.querySelector(
      ".overlay-pop-up .modal__content .breed"
    ).textContent = `${object.breed}`;
    document.querySelector(
      ".overlay-pop-up .modal__content .content__description"
    ).textContent = `${object.description}`;
    document.querySelector(
      ".overlay-pop-up .modal__content .age h5"
    ).textContent = `${object.age}`;
    document.querySelector(
      ".overlay-pop-up .modal__content .inoculations h5"
    ).textContent = `${object.inoculations}`;
    document.querySelector(
      ".overlay-pop-up .modal__content .diseases h5"
    ).textContent = `${object.diseases}`;
    document.querySelector(
      ".overlay-pop-up .modal__content .parasites h5"
    ).textContent = `${object.parasites}`;
  };
  // =================
  modal.addEventListener("mouseenter", function () {
    buttonCloseModal.style.background = "transparent";
  });

  modal.addEventListener("mouseleave", function () {
    buttonCloseModal.style.background = "#f1cdb3";
  });
  buttonCloseModal.addEventListener("mouseenter", function (e) {
    buttonCloseModal.style.background = "#f1cdb3";
  });
  buttonCloseModal.addEventListener("mouseleave", function (e) {
    buttonCloseModal.style.background = "transparent";
  });
}
export function popUpSecond() {
  let modal = document.querySelector(".our-friends .modal");
  let overlayPopUp = document.querySelector(".overlay-pop-up");
  let buttonCloseModal = document.querySelector(".button-close-modal");
  let sliderLine = document.querySelector(".our-friends .our-friends__row");
  let card = document.querySelector(".our-friends .card");

  sliderLine.addEventListener("click", (e) => {
    let cardTarget = e.target.closest(".card");
    if (cardTarget) {
      let idCard = cardTarget.dataset.id;
      openModal(arrayPets[idCard]);
    }
  });
  window.addEventListener("click", (e) => {
    let targerClassList = e.target.classList;
    if (
      targerClassList.contains("overlay-pop-up") ||
      targerClassList.contains("button-close-modal") ||
      targerClassList.contains("button-close-modal__image")
    ) {
      closeModal();
      console.log(e.target.classList);
    }
  });

  // idObject обькт из массива обектов под номеро id
  let openModal = (idObject) => {
    overlayPopUp.style.display = "block";

    loadDataForCard(idObject);
    document.body.style.overflow = "hidden";
  };
  let closeModal = () => {
    overlayPopUp.style.display = "none";
    document.body.style.overflow = "";
  };
  // let temp = arrayPets[1];
  let loadDataForCard = (object) => {
    document.querySelector(
      ".overlay-pop-up .modal__image"
    ).innerHTML = `<img src="${object.img}" alt="${object.name}">`;
    document.querySelector(
      ".overlay-pop-up .modal__name h3"
    ).textContent = `${object.name}`;
    document.querySelector(
      ".overlay-pop-up .modal__content .type"
    ).textContent = `${object.type}`;
    document.querySelector(
      ".overlay-pop-up .modal__content .breed"
    ).textContent = `${object.breed}`;
    document.querySelector(
      ".overlay-pop-up .modal__content .content__description"
    ).textContent = `${object.description}`;
    document.querySelector(
      ".overlay-pop-up .modal__content .age h5"
    ).textContent = `${object.age}`;
    document.querySelector(
      ".overlay-pop-up .modal__content .inoculations h5"
    ).textContent = `${object.inoculations}`;
    document.querySelector(
      ".overlay-pop-up .modal__content .diseases h5"
    ).textContent = `${object.diseases}`;
    document.querySelector(
      ".overlay-pop-up .modal__content .parasites h5"
    ).textContent = `${object.parasites}`;
  };
  modal.addEventListener("mouseenter", function () {
    buttonCloseModal.style.background = "transparent";
  });

  modal.addEventListener("mouseleave", function () {
    buttonCloseModal.style.background = "#f1cdb3";
  });
  buttonCloseModal.addEventListener("mouseenter", function (e) {
    buttonCloseModal.style.background = "#f1cdb3";
  });
  buttonCloseModal.addEventListener("mouseleave", function (e) {
    buttonCloseModal.style.background = "transparent";
  });
}
