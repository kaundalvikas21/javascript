var btn1 =document.querySelector('.red');
var btn2 =document.querySelector('.blue');

btn1.addEventListener('click', function(){
    btn1.style.backgroundColor = 'red';
    btn2.style.backgroundColor = ''; //reset backgroundColor of btn-2
    console.log('red');
});
btn2.addEventListener('click', function(){
    btn2.style.backgroundColor = 'green';
    btn1.style.backgroundColor = ''; //reset backgroundColor of btn-1
    console.log('green');
    
});
