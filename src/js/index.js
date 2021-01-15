import jQuery from "jquery";
import popper from "popper.js";
import bootstrap from "bootstrap";
import mapFly from "./map_fly";
import flightScoreboard from './flight-scoreboard'
import timetable from './calendar';
import select_widget from './select_widget';
import form_referens from './form_referens';
import dropUl from './drop-ul';
import slide_photo from './slide_photo'; // слайд-шоу стр. "Фотогалерея"
import partners from './partners'; // страница "Партнеры"

// Mobile
import mobileWiget from './mobileWiget';

// Выбор города в категории Продукты на главной
import mobil_products_selectCity from './mobil_products_selectCity' 
// дополнительное меню (мобильное)
import mobile_additional_menu from './mobile_additional-menu'


import tabs from "./tabs";

const screenWidth = document.querySelector('body').clientWidth;
const mobileWidth = 500;

function showTabWidget() {



  const widgetButton = document.querySelectorAll(".nav-widget button");
  const widgetContent = document.querySelectorAll(".offer");
  widgetButton.forEach((elem, index) => {
    elem.addEventListener("click", () => {
      widgetButton.forEach((elem, index) => {
        widgetContent[index].classList.add("hidden");
        elem.classList.remove("active");
      });
      elem.classList.toggle("active");
      widgetContent[index].classList.toggle("hidden");
    });
  });
}

function showIndexDropDown() {
  if (document.querySelector(".drop-down-title")) {
    const dropDownTitle = document.querySelector(".drop-down-title");
    const dropDownList = document.querySelector(".drop-down-list");
    const contentList = document.querySelector(".content-list");
    dropDownList.classList.add("hidden");

    const listCity = document.querySelectorAll(".drop-down-item .city");

    let event = false;

    dropDownTitle.addEventListener("click", (e) => {
      event = !event;

      dropDownTitle.classList.toggle("active");
      dropDownList.classList.toggle("hidden");
      contentList.classList.toggle("hidden");

      ChanceCity();

      // ----------------------------------------------
      function ChanceCity() {
        listCity.forEach((item) => {
          const nameCity = item.innerHTML;
          const slideCity = document.querySelector(".slide-citys");

          if (event) {
            item.addEventListener("click", () => {
              let titleCity = document.querySelector(
                ".slide-citys .drop-down-title h3"
              );
              titleCity.textContent = nameCity;

              dropDownTitle.classList.remove("active");
              dropDownList.classList.add("hidden");
              contentList.classList.remove("hidden");
              if (nameCity == "Москва")
                slideCity.style.background = `url('./img/moskow.jpg')`;
              else if (nameCity == "Воронеж")
                slideCity.style.background = `url('./img/Voronezh.jpg')`;
              else if (nameCity == "Сант-Петербург")
                slideCity.style.background = `url('./img/spp.jpg')`;
            });
          }
        });
      }
    });
  }
}

function openHamburgerMenu() {
  if (
    document.querySelector(".hamburger") &&
    document.querySelector(".top_menu")
  ) {
    const hamburger = document.querySelector(".hamburger");
    const hamburgerClose = document.querySelector(".hamburger-close");
    const topMenu = document.querySelector(".top_menu");

    hamburger.addEventListener("click", () => {
      topMenu.classList.toggle("active");
    });
    hamburgerClose.addEventListener("click", () => {
      topMenu.classList.toggle("active");
    });
  }
}

function additionalMenu() {
  if (
    document.querySelector(".additional-menu") &&
    document.querySelector(".add-menu__drop_menu")
  ) {
    const additionalMenu = document.querySelector(".additional-menu");
    const dropMenu = document.querySelector(".add-menu__drop_menu");

    additionalMenu.addEventListener("click", (e) => {
      if (e.target.classList.contains("additional-menu_item")) {
        dropMenu.classList.remove("hidden");

        // Получаю текст из элементов меню
        let textTitleMenu = e.target.textContent;

        const arrSectionMenu = document.querySelectorAll(".section-menu");

        function closeAllSectionMenu(arr) {
          arr.forEach((item) => {
            item.style.display = "none";
          });
        }

        switch (textTitleMenu) {  // Чисто для прототипа
          case "Специальные предложения":
            closeAllSectionMenu(arrSectionMenu);
            arrSectionMenu[0].style.display = "flex";
            break;
          case "Сервисы":
            closeAllSectionMenu(arrSectionMenu);
            arrSectionMenu[1].style.display = "flex";
            break;
          case "Пассажирам":
            closeAllSectionMenu(arrSectionMenu);
            arrSectionMenu[2].style.display = "flex";
            break;
          case "О нас":
            closeAllSectionMenu(arrSectionMenu);
            arrSectionMenu[3].style.display = "flex";
            break;
          case "Для бизнеса":
            closeAllSectionMenu(arrSectionMenu);
            arrSectionMenu[4].style.display = "flex";
            break;
          case "Пресс-центр":
            closeAllSectionMenu(arrSectionMenu);
            arrSectionMenu[5].style.display = "flex";
            break;
          default:
            break;
        }
      }
      // По любому клику внутри меню - оно закрывается
    });
    dropMenu.addEventListener("click", (e) => {
      if (!e.target.classList.contains("add-menu__drop_menu"))
        dropMenu.classList.add("hidden");
    });
  }
}



// ------------------dropdown-list_item---------------------

function dropdownList_item(list) {
  if (list) {
    const listItems = [];
    list.childNodes.forEach((item) => {
      if (item.tagName == "DIV") {
        listItems.push(item);
      }
    });

    listItems.forEach((item, index) => {
      item.addEventListener("click", (e) => {
        const content = item.querySelector(".item_content");

        if (!content.contains(e.target)) {
          listItems.forEach((item, j) => {
            if (j != index) item.classList.remove("active");
          });

          item.classList.toggle("active");
        }
      });
    });
  }
}

// ================= magazine tabs =======================

function magazineTabs(yearsList, previewsArr) {
  if (yearsList && previewsArr) {
    // Получаю массив лет
    const arrYear = [];
    yearsList.childNodes.forEach((item) => {
      if (item.tagName == "SPAN") {
        arrYear.push(item);
      }
    });

    if (arrYear.length == previewsArr.length) {
      // устанавливаю последний год активным
      arrYear[arrYear.length - 1].classList.add("active");
      // устанавливаю последний список превью активным
      previewsArr[previewsArr.length - 1].classList.add("active");

      // обработчик нажатий на года
      arrYear.forEach((item, index) => {
        item.addEventListener("click", () => {
          // неактивные все года и превью
          arrYear.forEach((item, index) => {
            item.classList.remove("active");
            previewsArr[index].classList.remove("active");
          });

          // активные выделенный год и соответственно превью
          item.classList.add("active");
          previewsArr[index].classList.add("active");
        });
      });
    }
  }
}

//------ note plaseholdrer


magazineTabs(
  document.querySelector(".year-nav"),
  document.querySelectorAll(".magazine-list")
);
dropdownList_item(document.querySelector(".dropdown-list"));
showTabWidget();
showIndexDropDown();
openHamburgerMenu();
additionalMenu();
form_referens('form-wrapper');
