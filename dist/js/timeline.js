


function timeLine() {
    if (document.querySelector('.timeline') && document.querySelector('.timeline_description')) {


        const arrSlideYear = document.querySelectorAll('.timeline-year'); // года в слайдере
        const arrDescriptionYear=document.querySelectorAll('.timeline_description h3'); // года заголовки
        const arrDescriptionItems=document.querySelectorAll('.description-item'); // описание
        let counterYear = arrSlideYear.length-1; // последний год активный
        

        // по умолчанию скрывает все описания годов и заголовки кроме последнего
        if(arrDescriptionYear.length==arrDescriptionItems.length){
            for(let i=0; i<arrDescriptionYear.length; i++){
                if(i!==arrDescriptionYear.length-1){
                    arrDescriptionYear[i].style.display='none'
                    arrDescriptionItems[i].style.display='none'    
                }
            }
            arrSlideYear[counterYear].classList.add('red')
        }

        function ShowDescription(counter){
            for(let i=0; i<arrDescriptionYear.length; i++){
                arrDescriptionYear[i].style.display='none'
                arrDescriptionItems[i].style.display='none'
                // в слайдере 
                arrSlideYear[i].classList.remove('red')
            }
            arrDescriptionYear[counter].style.display='block'
            arrDescriptionItems[counter].style.display='block'
            // в слайдере 
            arrSlideYear[counter].classList.add('red')

        }

        const buttonDown = document.querySelector('.nav_prev').addEventListener('click', () => {
            if (counterYear > 0){
                counterYear--;
                ShowDescription(counterYear)
            }

        })
        const buttonUIp = document.querySelector('.nav_next').addEventListener('click', () => {
            if (counterYear < arrSlideYear.length-1){
                counterYear++;
                ShowDescription(counterYear)
            }

        })
        
        // клики в слайдере
        arrSlideYear.forEach((item, index)=>{
            item.addEventListener('click', ()=>{
                arrSlideYear.forEach(item=>{
                    item.classList.remove('red')
                })
                item.classList.add('red');
                ShowDescription(index)
            })
        })
    }

}


document.addEventListener("DOMContentLoaded", timeLine) // чтобы owl создал кнопки слайдера

