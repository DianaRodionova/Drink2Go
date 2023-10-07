// Навигация

const navMain = document.querySelector(".main-nav");
const navToggle = document.querySelector(".main-nav__toggle");
const userList = document.querySelector(".user-list");

navMain.classList.remove("main-nav--nojs");
userList.classList.remove("user-list--nojs");

navToggle.addEventListener("click", () => {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

// Слайдер

let swiper = new Swiper(".mySwiper", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  keyboard: true,
});

// Сортировка

const selectSingle = document.querySelector(".sorting__select");
const selectSingle_title = selectSingle.querySelector(".sorting__title");
const selectSingle_labels = selectSingle.querySelectorAll(".sorting__label");

selectSingle_title.addEventListener("click", () => {
  if ("active" === selectSingle.getAttribute("data-state")) {
    selectSingle.setAttribute("data-state", "");
  } else {
    selectSingle.setAttribute("data-state", "active");
  }
});

for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener("click", (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute("data-state", "");
  });
}

// Карта

const mapImage = document.querySelector(".map__image");

mapImage.classList.remove("map__image--nojs");

let map = L.map("map").setView([59.96827103239834, 30.31740755877877], 16);

let iconMap = L.icon({
  iconUrl: "img/map/pin.svg",
  iconSize: [38, 50],
  iconAnchor: [19, 50],
});

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: `&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>`,
}).addTo(map);

L.marker([59.96827103239834, 30.31740755877877], {icon: iconMap, alt: "HTMLAcademy"}).addTo(map).bindPopup("Офис компании по адресу Санкт-Петербург, набережная реки Карповки, дом 5");
