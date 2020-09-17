import _flying from "./_flying";

function selectWidget(name) {
  if (document.querySelector(`#${name}`)) {
    const $el = document.querySelector(`#${name}`);

    let state = {
      flagOn: false,
      arrFly:[] // массив вылетов
    };

    _flying().then((res) => {
        res.forEach((element) => {
          state.arrFly.push(element);
        });
      });

    const listCity = document.createElement("div");
    listCity.className = "list-city";

    document.addEventListener("click", (e) => { // при клике не в элемент - выключает выпадайку
      if (!$el.contains(e.target)) {
        state.flagOn = false;
        listCity.remove();
      }
    });


    function render() {
      if (state.flagOn) {
        $el.appendChild(listCity);
        const item = state.arrFly.map((item) => {
          return `<div class='city-item' data-value=${item.id}>
                            <div>
                                <span class='name'>${item[name]}</span>
                                <span class='country'>${
                                  item[`country_${name}`]
                                }</span>
                            </div>
                            <span class='airport'>${item[`ap_${name}`]}</span>
                       </div>`;
        });
        listCity.innerHTML = item.join("");
      } else listCity.remove();
    }

    $el.addEventListener("click", (e) => {
      state.flagOn = !state.flagOn;
      render();
      

      // записываю имя и страну из выбранного элемента списка в инпут 
      const listItems = document.querySelectorAll('.city-item');
      listItems.forEach((item, index)=>{
        item.addEventListener('click', ()=>{
            const element = state.arrFly[index];
            const input = $el.querySelector('input');
            input.value=`${element[name]}, ${element[`country_${name}`]}`
        })
      })

    });
  }
}


// для демонстрации - модальное окно
function modal (element){
  if(document.querySelectorAll(`.${element}`) && document.querySelector('.modal-window')){
    if(document.querySelectorAll(`.${element}`).length>0){
      const $arrEl = document.querySelectorAll(`.${element}`)

      let flagOpen=false;
      const modalWindow=document.querySelector('.modal-window');
      const details=document.querySelector('.details');



      function render(){
        if(flagOpen){
          modalWindow.classList.add('active');
        }
        else modalWindow.classList.remove('active')
     
      }
      function close(){
        const closeBtn = document.querySelector('.close');
        closeBtn.addEventListener('click', ()=>{
          modalWindow.classList.remove('active');
          flagOpen=false
        })
      }




      $arrEl.forEach(item=>{
        item.addEventListener('click',(e)=>{
          flagOpen=!flagOpen;
          render();
          close();
        })
      })



      
    }
    
  } 
}


selectWidget("from");
selectWidget("to");

modal('time-tape_day');



