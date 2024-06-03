const list=document.querySelector('.style_test');
const result=list.classList.contains('style_test');
console.log(result)

function checkisToggled(buttonName){
    if(document.querySelector(`.classic_btn_${buttonName}`).classList.contains("is-toogled")){
        
        document.querySelector(`.classic_btn_${buttonName}`).classList.remove("is-toogled");

    }else{
        document.querySelector(`.classic_btn_${buttonName}`).classList.add("is-toogled");
    }

}