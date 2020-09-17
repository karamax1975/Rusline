function slidePhoto($, index) {
    if ($.querySelectorAll('.modal-item') && $.querySelector('.modal-item_slide-footer')) {
        const arrSlide = $.querySelectorAll('.modal-item');
        const controlPanel = $.querySelector('.modal-item_slide-footer');

        const buttonPrev = controlPanel.querySelector('.slide-nav_back');
        const buttonNext = controlPanel.querySelector('.slide-nav_next');

        let counter = index;

        function runSlide(arr, counter) {
            arr.forEach((item, index) => {
                if (index !== counter) {
                    item.classList.remove('active');
                }
                else item.classList.add('active');
            })
        }

        // устанавливаю колличество слайдов в controlPanel
        controlPanel.querySelector('.total-slide').textContent = arrSlide.length;
        // устанавливаю номер выбранного слайда в controlPanel
        controlPanel.querySelector('.number-slide').textContent = index + 1;

        buttonPrev.addEventListener('click', () => {
            counter <= 0 ? counter = arrSlide.length - 1 : counter--;
            controlPanel.querySelector('.number-slide').textContent = counter + 1;
            runSlide(arrSlide, counter)


        })
        buttonNext.addEventListener('click', () => {

            counter >= arrSlide.length - 1 ? counter = 0 : counter++;
            controlPanel.querySelector('.number-slide').textContent = counter + 1;
            runSlide(arrSlide, counter)
        })

    }
}

// ===================== modal window ==============

function modalWindow($target, $modal, $modalSection) {


    if ($target && $modal) {
        const targetList = []; // массив превью
        const modalList = []; // массив слайдов
        const body = document.querySelector("body");

        const buttonCloseModal = $modal.querySelector('.hamburger-close');

        function closeModal(index) {
            $modalSection.classList.remove('active');
            modalList[index].classList.remove('active');
            body.style.overflow = "auto";
            body.style.marginRight = '0';
            modalList.forEach(item => {
                item.classList.remove('active');
            })
        }

        function getModalElem($, arr) {
            $.childNodes.forEach(item => {
                if (item.tagName == 'DIV')
                    arr.push(item)
            })
        }


        getModalElem($target, targetList);
        getModalElem($modal, modalList);


        if (targetList.length == modalList.length) {

            targetList.forEach((item, index) => {
                item.addEventListener('click', () => {
                    $modalSection.classList.add('active');
                    modalList[index].classList.add('active');
                    body.style.overflow = "hidden";
                    body.style.marginRight = '17px';

                    slidePhoto($modal, index)

                    // при клике по закрывашке
                    buttonCloseModal.addEventListener('click', () => closeModal(index))
                    // если клик не в слайд, закрываю модальное окно
                    $modalSection.addEventListener("click", (e) => {
                        if (e.target.contains(modalList[index])) {
                            closeModal(index);
                        }
                    });
                })
            })


        }

    }

}
modalWindow(
    document.querySelector('.cards-list'),
    document.querySelector('.modal-wrapper'),
    document.querySelector('.modal-window'),
);

