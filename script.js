let skip_button_container = document.getElementsByClassName('ytp-ad-skip-button-container');
let skip_button = document.getElementsByClassName('ytp-ad-skip-button ytp-button');


setInterval(()=>{
   // console.log(skip_button_container[0].style)
    if(skip_button_container[0]){
        if(skip_button_container[0].style){
            skip_button[0].click();
        }
    }
   
    
},1000)
