if(document.querySelector('.additional-menu')&& document.body.clientWidth<500){
    const $additionalMenu = document.querySelector('.additional-menu_list');
    const menuItems = document.querySelectorAll('.additional-menu_item');
    const toggle = document.querySelector('.toggle');
    menuItems[0].style.display='block';
    const subMenu = document.querySelector('.add-menu__drop_menu');

    // const showBack = document.querySelector('.menu_back');
    
    


    toggle.addEventListener('click', (e)=>{
        if($additionalMenu.className==='additional-menu_list row'){
            
            // showBack.style.display="block"
        }
        if($additionalMenu.className==='additional-menu_list row selected'){
            // закрываю SubMenu
            subMenu.classList.add('hidden');
            // showBack.style.display="none"
            
        }

        $additionalMenu.classList.toggle('selected');

        
    })
}