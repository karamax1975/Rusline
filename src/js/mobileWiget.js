const screenWidth = document.querySelector('body').clientWidth;
const mobileWidth = 500;


if (document.querySelector('.index-widget') && screenWidth <= mobileWidth) {

    const ButtonOn_Of = document.querySelector('.widget_many-services');
    const WidgetButton = document.querySelector('.widget-button');
    const arrayButton = document.querySelectorAll('.widget-button button');

    let flagOn_Of = false;

    arrayButton.forEach((button, index) => {
        button.classList.add('hidden')
    })
    arrayButton[0].classList.remove('hidden');
    arrayButton[0].classList.add('selected');

    let selectedButton=0;
    function selectButton(arr) {
        arr.forEach((button, index) => {
            button.classList.remove('selected');
            arrayButton[0].classList.add('selected');    
            if (flagOn_Of) {
                button.classList.remove('hidden')
                button.addEventListener('click', (e) => {
                    selectedButton=index;

                })
            }
            else {
                arr.forEach((button, index) => {
                    button.classList.add('hidden')
                    // button.classList.remove('selected');
                })
                arr[selectedButton].classList.remove('hidden')
                arrayButton[selectedButton].classList.add('selected');
            }

        });
    }

    function ChangeButton(button) {
        if (flagOn_Of) {
            button.classList.add('button-close');
            WidgetButton.classList.add('mobile-show')

        }
        else {
            button.classList.remove('button-close')
            WidgetButton.classList.remove('mobile-show')
        }
    }


    function showButtonWidget(e, flag) {
        flagOn_Of = !flag;
        ChangeButton(ButtonOn_Of)
        selectButton(arrayButton)

    }

    WidgetButton.addEventListener('click', (e) => showButtonWidget(e, flagOn_Of))

}