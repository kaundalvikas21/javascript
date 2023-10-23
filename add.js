var button = document.querySelector('button');
let input1 = document.querySelector('.num1');
let input2 = document.querySelector('.num2');
let showVal = document.querySelector('.showVal');

button.addEventListener('click', function(e){
    e.preventDefault();
    let sum = parseInt(input1.value) + parseInt(input2.value);
    // console.log(sum);
    // console.log(typeof(sum));
    showVal.textContent = sum;
    // return sum;
})
