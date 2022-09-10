export function hamburger() {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".header__menu .menu");
  const linksMenu = document.querySelectorAll(".menu a");

  let overlay = document.querySelector(".header .overlay");

  linksMenu.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      setTimeout(() => window.location.replace(e.target.href), 500);
    });
  });

  hamburger.addEventListener("click", () => {
    if (menu.dataset.id == "closed") {
      console.log("open");
      openAll();
    } else {
      console.log("close");
      closeAll();
    }
  });

  menu.addEventListener("click", (e) => {
    if (e.target.classList.contains("link-menu")) {
      closeAll();
    }
  });

  overlay.addEventListener("click", () => {
    closeAll();
  });

  function openAll() {
    hamburger.style.transform = "rotate(90deg)";
    openOverlay();
    openMenu();
    document.body.style.overflow = "hidden";
    menu.dataset.id = "open";
  }
  function closeAll() {
    hamburger.style.transform = "rotate(0deg)";
    closeMenu();
    closeOverlay();
    document.body.style.overflow = "";
    menu.dataset.id = "closed";
  }

  let openMenu = () => {
    menu.style.right = "0px";
  };

  let closeMenu = () => {
    menu.style.right = "-320px";
  };
  let openOverlay = () => {
    overlay.style.display = "block";
  };
  let closeOverlay = () => {
    overlay.style.display = "none";
  };
}
