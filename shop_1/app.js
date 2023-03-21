const search = ()=>{
    const value = document.getElementById('search_bar').value.toUpperCase();
    const sorted = document.getElementById('prod_list');
    const products = document.getElementsByClassName('prod');
    const pname = sorted.getElementsByTagName('h2');
    for(var i =0;i<pname.length;i++){
        const temp = products[i].getElementsByTagName('h2')[0].innerText;
        
        if((temp.toUpperCase()).indexOf(value)>-1){
            products[i].style.display = "";

        }
        else{
            products[i].style.display = "none";
            
        }
    }


}