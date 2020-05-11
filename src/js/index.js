import jQuery from "jquery";
import popper from "popper.js";
import bootstrap from "bootstrap";

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
    const dropMenu= document.querySelector('.add-menu__drop_menu');
    additionalMenu.addEventListener('click', (e)=>{
      if(e.target.classList.contains('additional-menu_item')){
        console.log(dropMenu)
        dropMenu.classList.remove('hidden');
      }
      
    })
    dropMenu.addEventListener('click', (e)=>{
      if(!e.target.classList.contains('add-menu__drop_menu'))
      dropMenu.classList.add('hidden');
    })
    
  }
}

showTabWidget();
showIndexDropDown();
openHamburgerMenu();
additionalMenu();
