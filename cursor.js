var main = document.querySelector('#main');
var crsr = document.querySelector('.cursor');

crsr.style.backgroundColor = 'red';

main.addEventListener('mousemove', function(details){
crsr.style.top = details.y+ 'px';
crsr.style.left = details.x+ 'px';

})
