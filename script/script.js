const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector("nav ul");

const addRemoveClass = (name, className) => {
  if (name.classList.contains(className)) {
    name.classList.remove(className);
  } else {
    name.classList.add(className);
  }
};

menuBtn.addEventListener("click", () => {
  addRemoveClass(menuBtn, "close");
  addRemoveClass(menu, "active");
});
