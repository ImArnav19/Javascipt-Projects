const btns = document.querySelectorAll('.b');

const timer = document.getElementById('main').getElementsByTagName('h1')[0];

var index = 0;

// btn[0].addEventListener('click',(e)=>{
//     if(index<=0){
//         index=0;
//     }
//     else{
//     index--;
//     }
//     timer.innerText = index;
// })

// btn[1].addEventListener('click',()=>{
//     index = 0;
//     timer.innerText = index;
// })

// btn[2].addEventListener('click',()=>{
//     index++;
//     timer.innerText = index;
// })

btns.forEach((btn)=>{
    btn.addEventListener('click',function(e){

        

        if(e.currentTarget.classList.contains("next")){
            index++;
            }
        else if(e.currentTarget.classList.contains("reset")){
            index =0;
            
        }
        else{
            if(index<=0){
                index=0;
            }
            else{
                index--;
            }
        }
    
    
        timer.innerText = index;
    })
        
})

    
    
