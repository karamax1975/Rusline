import jQuery from "jquery";
import popper from "popper.js";
import bootstrap from "bootstrap";

import tabs from "./tabs";

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
        console.log(dropMenu);
        dropMenu.classList.remove("hidden");
      }
    });
    dropMenu.addEventListener("click", (e) => {
      if (!e.target.classList.contains("add-menu__drop_menu"))
        dropMenu.classList.add("hidden");
    });
  }
}

// ===================== modal window ==============

function modalWindow(target, modal) {
  if (modal && target) {
    // цель - массив элементов а не единичный элемент
    if (target.length !== undefined) {
      let modalElements = []; // список элементов в модальном окне

      // ---- в модальном окне есть список элементов
      modal.childNodes.forEach((item) => {
        if (item.tagName == "DIV" && item.className == "modal-list") {
          // получаю элементы в списке
          item.childNodes.forEach((item) => {
            if (item.tagName == "DIV") modalElements.push(item);
          });
        }
      });

      // -------------------------------

      target.forEach((item, index) => {
        item.addEventListener("click", () => {
          const body = document.querySelector("body");

          if (index < modalElements.length) {
            // если длинна масива с целями меньше длинны массива элементов в модальном окне (на случай несовпадения количества)
            modal.classList.add("active"); // модальное окно активно
            body.style.overflow = "hidden";

            modalElements[index].classList.add("active"); // элемент в модальном окне активен

            // получаю кнопоку закрытия в активном модальном окне
            const buttonClose = modalElements[index].querySelector(
              ".hamburger-close"
            );
            buttonClose.addEventListener("click", () => {
              modalElements[index].classList.remove("active");
              modal.classList.remove("active");
              body.style.overflow = "auto";
            });

            // ---------- закрытие окна при клике в фон модального окна
            modal.addEventListener("click", (e) => {
              if (e.target.contains(modalElements[index])) {
                // клик не в элемент модального окна
                modal.classList.remove("active");
                body.style.overflow = "auto";
                modalElements.forEach((item) => {
                  // закрываю все элементы
                  item.classList.remove("active");
                });
              }
            });
          }
        });
      });
    } else console.log("Element"); // цель - единичный элемент
  }
}

modalWindow(
  document.querySelectorAll(".food-item"),
  document.querySelector(".modal-window")
);

// ------------------dropdown-list_item---------------------

function dropdownList_item(list) {
  if (list) {
    const listItems = [];
    list.childNodes.forEach((item) => {
      if (item.tagName == "DIV") {
        listItems.push(item);
      }
    });

    listItems.forEach((item,index) => {
      item.addEventListener("click", (e) => {
        const content = item.querySelector('.item_content');

        if(!content.contains(e.target)){
          
          listItems.forEach((item,j)=>{
            if(j!=index)
            item.classList.remove('active');
          }) 
  
  
          item.classList.toggle("active");
        }

      });
    });
  }
}

// ================= magazine tabs =======================

function magazineTabs(yearsList, previewsArr){
  if(yearsList && previewsArr){
    
    // Получаю массив лет
    const arrYear = [];
    yearsList.childNodes.forEach(item=>{
      if(item.tagName=="SPAN"){
        arrYear.push(item);
      }
    })
    
    if(arrYear.length==previewsArr.length){
      
      // устанавливаю последний год активным
      arrYear[arrYear.length-1].classList.add('active');
      // устанавливаю последний список превью активным
      previewsArr[previewsArr.length-1].classList.add('active');


      // обработчик нажатий на года
      arrYear.forEach((item,index)=>{
        item.addEventListener('click', ()=>{
          

          // неактивные все года и превью 
          arrYear.forEach((item, index)=>{
            item.classList.remove('active');
            previewsArr[index].classList.remove('active');
          })

          // активные выделенный год и соответственно превью
          item.classList.add('active');
          previewsArr[index].classList.add('active');
        })
      })


    }
    

  }
}



magazineTabs(document.querySelector('.year-nav'), document.querySelectorAll('.magazine-list'))
dropdownList_item(document.querySelector(".dropdown-list"));
showTabWidget();
showIndexDropDown();
openHamburgerMenu();
additionalMenu();
