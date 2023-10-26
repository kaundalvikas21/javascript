var arr = [
    {dp:"https://images.unsplash.com/photo-1671938576119-9e1c53d868dc?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story: "https://images.unsplash.com/photo-1693438672953-409b661134fd?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

    {dp:"https://images.unsplash.com/photo-1693898418384-0154975ea330?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story: "https://images.unsplash.com/photo-1693892014156-7de1a64f682f?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

    {dp:"https://images.unsplash.com/photo-1674847059298-765afa839ec7?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:"https://images.unsplash.com/photo-1689778896728-3b3b2170a733?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

    {dp:"https://images.unsplash.com/photo-1695806067207-045446e7a0fa?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:"https://images.unsplash.com/photo-1687331268337-947338e4ff1e?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
]

var storiyan = document.querySelector('#storiyan')
var clutter = ''
arr.forEach(function(elem,idex){
    clutter += `<div class="story">
    <img id = "${idex}" src="${elem.dp}" alt="">
    </div> `                   // MEANS clutter = clutter + hello & + used to add on data
    // console.log(elem,idex)
})
// console.log(clutter)

storiyan.innerHTML = clutter;

storiyan.addEventListener('click', function(dets){
    document.querySelector('#full-screen').style.display = "block"
    document.querySelector('#full-screen').style.backgroundImage = `url(${arr[dets.target.id].story})`
    
    // console.log(arr[det.target.id].story)

    setTimeout(function(){
        document.querySelector('#full-screen').style.display = 'none'
    },2000)
});


