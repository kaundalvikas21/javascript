var btn1 =document.querySelector('.red');
var btn2 =document.querySelector('.blue');

btn1.addEventListener('click', function(){
    btn1.style.backgroundColor = 'red';
    btn2.style.backgroundColor = ''; // Reset the background color of btn2
    console.log('red');
});
btn2.addEventListener('click', function(){
    btn2.style.backgroundColor = 'blue';
    btn1.style.backgroundColor = '';
    console.log('blue');
    
});
