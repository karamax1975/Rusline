
// -------------------------------------------------------

import date from "./date";

function calendar(element) {
  if (document.querySelector(`${element}`)) {
    const $el = document.querySelector(`${element}`);

    let state = {
      flagOn: false,
      year: new Date().getFullYear(),
      mount: new Date().getMonth(),
    };







    let mount = date(state.year,state.mount);

    const wrapper = document.createElement("div");

    wrapper.className = "calWrapper";
    const calendarNav = document.createElement("div");
    calendarNav.classList = "calendar_nav";
    const navBack = document.createElement("div");
    navBack.onclick = mountDown;
    navBack.classList = "calendar-nav_back";
    const navNext = document.createElement("div");
    navNext.onclick = mountUp;
    navNext.classList = "calendar-nav_next";
    const calendar = document.createElement("div");
    calendar.innerHTML = renderCalendar();
    


    $el.addEventListener("click", (e) => {
      state.flagOn=!state.flagOn;
      if(state.flagOn){
        $el.appendChild(wrapper);
        wrapper.appendChild(calendarNav);
        calendarNav.appendChild(navBack);
        calendarNav.appendChild(navNext);
        wrapper.appendChild(calendar);
        
      }
      else if(e.target==navBack || e.target==navNext){
        state.flagOn=true;
      }


      else {
        if(e.target.className=='day'){
          const input = $el.querySelector('input')
          input.value=e.target.dataset.value
        }
        wrapper.remove();
        state.flagOn=false;
      }
    });

    const allClick = document.addEventListener('click', (e)=>{
      if(!$el.contains(e.target)){
        wrapper.remove();
        state.flagOn=false;
      }
    })



    function renderCalendar() {
      const dayItem = mount.days.map((item) => {
        let className = "day";
        if (+item.slice(3, 5) - 1 !== state.mount) className+=' gray'
        return `<span class="${className}" data-value="${item}">${+item.slice(0,2)}</span>`   
      });

      return `<div>
                <div class="calendar_title">
                  <span>${mount.mount}</span>
                  <span>${mount.year}</span>
                </div>
                <div class="calendar_daysWeek">
                  <span>пн</span>
                  <span>вт</span>
                  <span>ср</span>
                  <span>чт</span>
                  <span>пт</span>
                  <span>сб</span>
                  <span>вс</span>
                </div>
                <div class='days'>${dayItem.join("")}</div>
              </div>`;
    }

    function mountDown() {
      state.mount--;
      if (state.mount < 0) {
        state.year--;
        state.mount = 11; 
      }
      mount = date(state.year,state.mount);
      calendar.innerHTML = renderCalendar();
    }

    function mountUp() {
      state.mount++;
      
      if (state.mount>11) {
        state.mount=0;
        state.year++;

      }
      mount = date(state.year,state.mount);
      calendar.innerHTML = renderCalendar();
      
    }
  }
}

calendar("#start");
calendar("#end");
