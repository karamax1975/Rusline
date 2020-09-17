if(document.querySelector('.partner-section')){

    function partnersShow($arrElem){

        $arrElem.forEach(item => {
            const arrTarget = item.querySelectorAll('.card-item');
            const arrContent = item.querySelectorAll('.partner_description-item')

            if(arrTarget.length==arrContent.length){

                arrTarget.forEach((target,indexTarget)=>{
                    arrContent[indexTarget].classList.add('hidden');
                    target.addEventListener('click', (e)=>{
                        if(e.target.tagName=="A"){
                            e.preventDefault();
                        }
                        $arrElem.forEach(elem=>{
                            elem.querySelectorAll('.partner_description-item').forEach(item=>{
                                item.classList.add("hidden");
                            })
                        })
                        arrContent[indexTarget].classList.remove('hidden')

                    })
                })
            }
        });
        
    }
    partnersShow(document.querySelectorAll('.partner-section'))
}