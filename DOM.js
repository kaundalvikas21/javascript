//4 PILLARS OF DOM.

// 1> SELECTION OF AN ELEMENT
var a = document.querySelector('h1');
console.log('a');


document.querySelector('#headerID'); //GET USing ID 
document.querySelector('.classONE'); //GET USing CLASS 


// 2> CHANGING HTML?
var a = document.querySelector('h1');
a.innerHTML = 'hello world!'; //CHANGE HTML USING innerHTML



// 3> CHANGING CSS?
var a = document.querySelector('h1');

a.style.fontSize = '8rem'; //CHANGE & STYLE CSS
a.style.textAlign = "center";
a.style.backgroundColor = 'red';
a.style.color = 'white';

// 4> EVENT LISTENER?
var a = document.querySelector('h1');
a.addEventListener('click', function () {
    a.style.backgroundColor = "black";
    console.log('you clicked me!');

});


//SELECTING MULTIPLE ELEMENTS AT A SAME TIME ?

var h = document.querySelectorAll('h2');

h.forEach(function(e){
    e.style.backgroundColor = 'black';
    e.style.fontSize = '6rem'
    e.style.color = 'red'
    console.log(e)
})

var box = document.getElementById('box')
box.innerHTML ='<h1>hello</h1>' //use to change html
// box.textContent = '<h1>hello</h1>' //use to change the text content
box.style.fontSize = '5rem'
box.style.width= '40rem'
box.style.height= '35rem'
box.style.alignItems = 'center'
box.style.backgroundColor = 'salmon'
console.log('box')

var class1 = document.getElementsByClassName('class1')
class1[0].textContent ='<h2>hello</h2>' //Specified the index value case of GET 'className'
class1[0].style.fontSize = '10rem'
console.log(class1)