const pluss = document.querySelectorAll('.plus');
const minus = document.querySelectorAll('minus');

console.log(pluss[0]);

pluss.forEach((plus)=>{
    plus.addEventListener('click',(e)=>{
        console.log(e.currentTarget.parentElement);
    })
})