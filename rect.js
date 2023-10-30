var rect = document.querySelector('#rect');

document.addEventListener('mousemove', function (e) {
    let x = e.clientX;
    let y = e.clientY;

    // Get the dimensions of the window
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    // Define the minimum and maximum positions for the #rect element
    let minX = 100;
    let minY = 100;
    
    let maxX = windowWidth - (100+rect.offsetWidth);
    let maxY = windowHeight - (100+rect.offsetHeight);
    // Make sure x and y are within the bounds
    x = Math.max(minX, Math.min(x, maxX));
    y = Math.max(minY, Math.min(y, maxY));

    rect.style.left = x + 'px';
    rect.style.top = y + 'px';
});


// window.addEventListener("mousemove", function (event) {
//   var rect = document.querySelector("#rect");

//   var value = gsap.utils.mapRange(
//     0,
//     window.innerWidth,
//     100,
//     + rect.getBoundingClientRect().width/2,
//     window.innerWidth - (100+rect.getBoundingClientRect().width / 2),
//     event.clientX
//   );

//   gsap.to("#rect", {
//     left: value,
//     ease: Power3,
//   });
// });
