// для демонстрации

if(document.querySelector('.press-filters')){

    let flag = false;

    const arrFilters = document.querySelectorAll('.select-mini');

    arrFilters.forEach((item, index)=>{
        if(index!==0){
           item.style.display='none'
        }

        
        item.addEventListener('click', (e)=>{
            const inputPlaseholder = item.querySelector('.select-mini_placeholder');
            const drop = item.querySelector('.select-mini__drop');
            if(inputPlaseholder.contains(e.target)){
                drop.classList.toggle('active')
                item.classList.toggle('active');
            }
            if(drop.contains(e.target)){
                // меняю в плейсхолдере инпута текст из списка
                const plaseholder = inputPlaseholder.querySelector('span')
                plaseholder.textContent=e.target.textContent;
                drop.classList.toggle('active')
                item.classList.toggle('active');

                // если выбран "за период" - появляется фильтр периода
                flag =(plaseholder.textContent=='за период')?true:false
                if(flag){
                    arrFilters[1].style.display='block'
                    arrFilters[2].style.display='block'
                }
                else {
                    arrFilters[1].style.display='none'
                    arrFilters[2].style.display='none'
                }
            }

        })
        

    })


    

}