var bulb = document.querySelector('#bulb');
var btn = document.querySelector('.btn');

var flag = 0;

btn.addEventListener('click', function(){
    if (flag == 0){
    bulb.style.backgroundColor = 'yellow';
    console.log('ON');
    flag = 1;
    }else{
        bulb.style.backgroundColor = 'transparent';
    console.log('OFF');
    flag = 0;
    }
})
