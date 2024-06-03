//Calculate function
function calculateTotal(){
    const input = document.querySelector('.cost_input');            
    let cost=Number(input.value);
    cost=Math.round(cost);
    if(cost<0){
       const errorElement=document.querySelector('.js_totalcost');
       errorElement.classList.add('style_error');
       errorElement.innerHTML='Error:cost cannot be less than 0';  
    }else if(cost<=40){
        cost =cost + 10;
        const Element=document.querySelector('.js_totalcost');
        Element.classList.remove('style_error');
        document.querySelector('.js_totalcost')
        .innerHTML=`$${cost}`;  
    }else if(cost>40){
        const freeElement=document.querySelector('.js_totalcost');
        freeElement.classList.add('style_free');
        freeElement.innerHTML='Shipping Free';  

    }

  
 }   
