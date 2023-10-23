var btn1 =document.querySelector('.red');
// var btn2 =document.querySelector('.green');
// var reset = document.querySelector(".Reset");


btn1.addEventListener('click', function(){
    
    var a = Math.floor(Math.random() * 1000) + 1;
    var b = Math.floor(Math.random() * 1000) + 1;
    var c = Math.floor(Math.random() * 1000) + 1;
    var prefix = 'rgb';
    let color = prefix + "("+a + "," + b +"," + c+")";
    console.log(color)
    document.body.style.backgroundColor = color;
});
// btn2.addEventListener('click', function(){
//     document.body.style.backgroundColor = 'green';
//     console.log('green');
// });
// reset.addEventListener('click', function(){
//     document.body.style.backgroundColor = '';
//     console.log('green');
// });
