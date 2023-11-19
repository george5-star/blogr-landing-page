"use strict";

const hamburgerEl = document.querySelector(".hamburger");
const closeEl = document.querySelector(".close");
const navBar = document.querySelector(".mobile-wrapper");
const navLists = document.querySelectorAll(".nav-list__item");

hamburgerEl.addEventListener("click", () => {
  hamburgerEl.classList.add("hide");
  closeEl.classList.add("show");
  navBar.classList.add("show");
});

closeEl.addEventListener("click", () => {
  closeEl.classList.remove("show");
  navBar.classList.remove("show");
  hamburgerEl.classList.remove("hide");
});

navLists.forEach((navListItem) => {
  navListItem.addEventListener("click", function (e) {
    const navSubList = e.target.parentElement.children[1];
    navSubList.classList.toggle("show");
  });
});
