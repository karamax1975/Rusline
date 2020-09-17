

const arrImgSlider = document.querySelectorAll('.feet-slide_image img'); // массив картинок
const arrTitle = document.querySelectorAll('.feet-slide-nav__title'); // массив заголовков
const buttonPrev = document.querySelector('.btn_prev');
const buttonNext = document.querySelector('.btn_next');

const lenght = arrImgSlider.length;

let count = 0;

function init(){
    for (let i=0; i<lenght; i++){
        arrImgSlider[i].style.display='none'
        arrTitle[i].style.display='none'
    }
    arrImgSlider[count].style.display='block';
    arrTitle[count].style.display='block';
}

function show(count, arr){
    arr.forEach(item => {
        item.style.display='none'
    });
    arr[count].style.display='block';
}


init();

buttonNext.addEventListener('click', ()=>{
    count++
    count=(count>lenght-1)?count=0:count++
    show(count, arrImgSlider)
    show(count, arrTitle)
})
buttonPrev.addEventListener('click', ()=>{
    count--
    count=(count<0)?count=lenght-1:count--
    show(count, arrImgSlider)
    show(count, arrTitle)
})

