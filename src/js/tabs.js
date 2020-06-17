if (document.querySelector(".tabs-list")) {
  const tabsArray = document.querySelectorAll(".tab");
  const contentItem = document.querySelectorAll(".content-item");
  if (tabsArray.length == contentItem.length) {
    tabsArray.forEach((item, index) => {
      item.addEventListener("click", () => {
        tabsArray.forEach((item, index) => {
          item.classList.remove("active");
          contentItem[index].classList.remove("active");
        });
        item.classList.toggle("active");
        contentItem[index].classList.add("active");
      });
    });
  }

}

// === tabs in page > services_service classes.html

function tabsServiceClasses (tabsArr, contentArr){
  if(tabsArr && contentArr){
    if(tabsArr.length && contentArr.length){
          // первый таб и контент активные
    tabsArr[0].classList.add('active');
    contentArr[0].classList.add('active');

// ----------------------------------------------------
    tabsArr.forEach((item, index)=>{

      item.addEventListener('click', ()=>{

        // кнопки табов -------------------
        tabsArr.forEach(item=>{
          item.classList.remove('active');
        })
        item.classList.add('active');
        
        // контент ------------------------
        contentArr.forEach(item=>{
          item.classList.remove('active');
        })
        contentArr[index].classList.add('active')
      })
    })
    }

  }
}
tabsServiceClasses(document.querySelectorAll('.tab'), document.querySelectorAll('.class-content'))