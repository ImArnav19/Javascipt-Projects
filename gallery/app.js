(function(){

    const buttons = document.getElementsByClassName('b');

    const img_list = document.getElementsByClassName('img');

    Array.from(buttons).forEach(btn => {

        btn.addEventListener('click',(e)=>{
            e.preventDefault();
            const filter = e.target.dataset.filter;

            Array.from(img_list).forEach((img)=>{
                if(filter ==='all'){
                    img.style.display = 'block';
                }
                else{
                    if(img.classList.contains(filter)){
                        img.style.display = 'block';
                    }
                    else{
                        img.style.display = 'none';
                    }
                }

            })



        })
        
    });


})();