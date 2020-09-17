// для демки

if(document.querySelector('.select-middle')){
  
  const $drop = document.querySelector('.select-middle__drop')  
  $drop.classList.add('hidden');
  
  
   function showDrop(flag){
        if(flag){
            $drop.classList.remove('hidden');
            $title.classList.add('active');  
        }
        else {
            $drop.classList.add('hidden');
            $title.classList.remove('active');  
        }
   } 

  let flag = false;
  const $select=document.querySelector('.select-middle');
  const  $title = $select.querySelector('.select-middle_placeholder')

  $select.addEventListener('click', ()=>{
    flag=!flag;
    showDrop(flag);

  })

 

}