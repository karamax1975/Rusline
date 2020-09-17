function flightBoard (){
    if(document.querySelector('.flight-board')){
        const filtersList = document.querySelector('.flight-board-filters-list');

        const arrFilters = filtersList.querySelectorAll('.filter-item')

        arrFilters[1].classList.add('active'); // по умолчанию - активный "Сегодня"

        arrFilters.forEach(item =>{
            item.addEventListener('click', ()=>{
                arrFilters.forEach(elem =>{
                    elem.classList.remove('active');
                })
                item.classList.add('active');
            })
        })


        // ------------------ табы

        const formItem_tab = document.querySelectorAll('.form-item_tab');

        formItem_tab[0].classList.add('active');
        const input = document.querySelectorAll('.input-big');
        input[0].classList.add('active');

        formItem_tab.forEach((item, i) =>{
            item.addEventListener('click', ()=>{
                formItem_tab.forEach((elem, j) =>{
                    elem.classList.remove('active');
                    input[j].classList.remove('active');
                })
                item.classList.add('active');
                input[i].classList.add('active');
            })
        })

    }
    
}
flightBoard ();