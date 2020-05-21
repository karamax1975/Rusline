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
