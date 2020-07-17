function flightBoard (){
    if(document.querySelector('.flight-board')){
        const filtersList = document.querySelector('.flight-board-filters-list');

        const arrFilters = filtersList.querySelectorAll()

        filtersList.addEventListener('click', (e)=>{
            console.log(e.target.parentElement)
            if(e.target.classList.contains('filter-item')){
            }
            
            // if(e.target.classList.contains('filter-item'))
            // console.log(e.target.parentNode.className=='filter-item today')
        })

    }
    
}
flightBoard ();