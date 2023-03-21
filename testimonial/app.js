const cursor = document.querySelector('.cursor');
var timeout;

//cursor movement

document.addEventListener('mousemove',(e)=>{
    let x = e.clientX;
    let y = e.clientY;

    cursor.style.top = y + 'px'
    cursor.style.left = x + 'px';
    cursor.style.display = 'block';

function mousestopp(){
    cursor.style.display='none';

}
    clearTimeout(timeout);
    timeout = setTimeout(mousestopp,2000);

});

//stop animation

document.addEventListener('mouseout',()=>{
    cursor.style.display='none';
})
