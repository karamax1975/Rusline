
export default function formReferens(element){
    if(document.querySelector(`.${element}`)){
        const $el=document.querySelector(`.${element}`);

        const buttonOnOf=$el.querySelector('.form-link .button ');
        const $formReferens = $el.querySelector('.form-referens');
        

        const state={
            flagOn:false
        }

        
        const checks = $el.querySelectorAll('.checkbox input');

        
        checks.forEach(item=>{

            item.addEventListener('click', (e)=>{

                
                switch (e.target.id){
                    case 'entity':{
                        const entity = document.createElement('div');
                        entity.id='insert_entity';
                        entity.innerHTML='<input class="input middle mb15" type="text" placeholder="НАЗВАНИЕ ОРГАНИЗАЦИИ *:">'
                        const wrapper = $el.querySelector('.individual');
                        wrapper.prepend(entity);
                        break;
                    }
                    case 'individual':{
                        if($el.querySelector('#insert_entity')){
                            $el.querySelector('#insert_entity').remove();;
                            
                        }

                        break;
                    }
                    case 'not-resident':{
                        const notResident = document.createElement('div');
                        notResident.id='insert_notResident';
                        notResident.innerHTML='<input class="input middle mb15" type="text" placeholder="ГРАЖДАНСТВО *">'
                        const nodeAfter = $el.querySelector('#pasport');
                        nodeAfter.after(notResident);
                        break
                    }
                    case 'resident':{
                        if($el.querySelector('#insert_notResident')){
                            $el.querySelector('#insert_notResident').remove();
                        }
                        break;
                    }
                    case 'payment_score':{
                        const paymentBank = document.createElement('div');
                        paymentBank.id='payment';
                        paymentBank.innerHTML = `
                            <div class="payment_props">
                            <span>Информация для оплаты справок</span>
                            <div>
                                <p class="p2 mb15">
                                Реквизиты для перечислений: 
                                <br>АО АК "РусЛайн"
                                <br>ИНН 7713141247
                                <br>Р/сч 40702810938040101494
                                <br>Московский банк Сбербанка России ПАО г.Москва
                                <br>БИК 044525225
                                <br>К/сч 30101810400000000225
                                </p>
                                <a href="#">
                                <p class="p2 red file-icon">Скачать реквизиты</p>
                                </a>
                            </div>
                            </div>
        
                            <div class="inputs_in-two mb30">
                            <span>Вложить копию счета<br>
                                (в формате pdf, jpg, jpeg):</span>
                            <div>
                                <label class="input file middle" for="change-file">Выберите файлы
                                    <input class="input-file middle" type='file' id="change-file" multiple>
                                </label>
                            </div>
                            </div>
                        `;
                        const wrapperPayment = $el.querySelector('.payment_card');
                        wrapperPayment.prepend(paymentBank);
                        break;
                    }
                    case 'payment_card':{
                        if($el.querySelector('#payment')){
                            $el.querySelector('#payment').remove();
                        }
                        break;
                    }
                    default:
                        return 
                }
            })

        })

        



        buttonOnOf.addEventListener('click', ()=>{
            state.flagOn=!state.flagOn;
            if(state.flagOn){
                $formReferens.classList.add('active');
                buttonOnOf.classList.remove('red');
                buttonOnOf.classList.add('bright');
                buttonOnOf.textContent='Отменить';
            }
            else {
                $formReferens.classList.remove('active');
                buttonOnOf.classList.remove('bright');
                buttonOnOf.classList.add('red');
                buttonOnOf.textContent='Перейти к заполнению';
            }
        })

    }
    
    document.querySelector('.form-wrapper')
}