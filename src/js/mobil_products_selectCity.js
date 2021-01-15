const screenWidth = document.querySelector('body').clientWidth;
const mobileWidth = 500;

if(document.querySelector('.product-list')&&screenWidth <= mobileWidth){
    const $selectCity=document.querySelector('.select-city');
    const $title = $selectCity.querySelector('.select-city-title');

    const $listCities=$selectCity.querySelector('.list-cities');

    function onOf(target, list){
        target.classList.toggle('active');
        list.classList.toggle('active');
    }
    function close(target, list){
        target.classList.remove('active');
        list.classList.remove('active');
    }


    $title.addEventListener('click', ()=>{
        onOf($title, $listCities)
        changeCity(arrayCityImg, arrayCityName, titleCityName)
    })
    

    // ---------------------------- выбор города
    // для демонстрации (переписать)
    const arrayCityImg = $selectCity.querySelectorAll('.city-img');
    const arrayCityName=$selectCity.querySelectorAll('.city-item')

    let titleCityName=$title.querySelector('h3');

    function changeCity(arrImg, arrName, title){
        arrName.forEach((cityName, index) => {
            cityName.addEventListener('click', ()=>{
                title.textContent=cityName.querySelector('p').textContent;
                close($title, $listCities);
                arrImg.forEach(img=>{
                    img.style.display='none'
                })
                arrImg[index].style.display='block'
            })
        });
    }


    for(let key of arrayCityImg){
        key.style.display="none"
    }
    arrayCityImg[0].style.display="block";



}