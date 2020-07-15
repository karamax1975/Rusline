
// Временная функция для демонстрации UI 

function mapFly (map){
    if(map){

        let flag=false;

        const inputFrom = map.querySelector('.from');
        const cityPoint = document.querySelector('.map-select-city');


        inputFrom.addEventListener('click', (e)=>{

            let selectCity;

            const routeList = map.querySelector('.route-list')
            
            routeList.classList.add('active');
            
            if(flag) {
                routeList.classList.remove('active');
                flag=!flag;
            }
            
            let formListCities;

            if(document.querySelector('.mapflight_list-cities')){
               formListCities=document.querySelector('.mapflight_list-cities');
            }

            // получаю массив городов в списке
            const arrRouteListItems = map.querySelectorAll('.route-list-item');
            arrRouteListItems.forEach(item=>{
                item.addEventListener('click', ()=>{

                    arrRouteListItems.forEach(item=>{
                        item.classList.remove('active');
                    })

                    item.classList.add('active');
                    // получаю выбранный город и обрезаю пробелы
                    selectCity=item.textContent.replace(/\s+/g, ' ').trim();
                    
                    flag=true;
                    // открываю форму рейсов из выбранного города
                    formListCities.classList.add('active');
                    //получаю город из шапки формы и переписываю в него выбранный город
                    let titleCity=formListCities.querySelector('.title_city');

                    titleCity.textContent=`из ${selectCity}`;

                    // и в город на карте
                    // временно
                    const cityMap = document.querySelector('.map-select-city .p3');
                    cityMap.textContent=selectCity;
                    cityPoint.classList.add('active');

                })

            })


            // отключение метки на карте и отключение
            cityPoint.querySelector('.close-city').addEventListener('click', (e)=>{
                cityPoint.classList.remove('active');
                routeList.classList.remove('active');
                formListCities.classList.remove('active');
            })


            // отключение 
            const reset = map.querySelector('.reset-button')
            reset.addEventListener('click', ()=>{
                routeList.classList.remove('active');
                formListCities.classList.remove('active');
                cityPoint.classList.remove('active');
            })
        })
        


    }
    
}

mapFly(document.querySelector('.header-map'))