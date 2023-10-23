var istatus = document.querySelector('h5')

var btn = document.querySelector('#add')
var check = 0
// var remove = document.querySelector('#remove')

add.addEventListener('click', function () {
    if (check == 0) {
        istatus.innerHTML = 'Friends'
        istatus.style.color = 'blue'
        btn.innerHTML = 'Remove Friend'
        check = 1
    }else {
    istatus.innerHTML = 'Stranger'
    istatus.style.color = 'salmon'
    btn.innerHTML = 'Add Friend'
    check = 0
        }
    
})

// remove.addEventListener('click', function(){
//     istatus.innerHTML = 'Removed'
//     istatus.style.color = 'salmon'
// })