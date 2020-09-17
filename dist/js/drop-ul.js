function dropUl($arrDrop) {
    if ($arrDrop) {
        $arrDrop.forEach((item, index) => {
            item.querySelector('.drop-ul_item-description').classList.add('hidden')
            const title = item.querySelector('.drop-ul_item-title');
            const dropElem = item.querySelector('.drop-ul_item-description');
            item.addEventListener('click', (e) => {

                    $arrDrop.forEach((elem, index2) => {
                        // скрываю все активные
                        if (index != index2) {
                            elem.querySelector('.drop-ul_item-title').classList.remove('active');
                            elem.querySelector('.drop-ul_item-description').classList.add('hidden');
                        }
                    })
                    if (item.contains(e.target)) {
                        title.classList.toggle('active');
                        dropElem.classList.toggle('hidden')
                    }

            })
        });
    }

}

dropUl(document.querySelectorAll('.drop-ul_item'));