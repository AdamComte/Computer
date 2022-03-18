let vu = document.querySelector('.vu');
let cache = document.querySelector('.cache');
let excel = document.querySelector('.excel');
excel.addEventListener('click', function(){
   vu.classList.add('displayNone')
    cache.classList.add('displayBlock')
});

let linkedIn = document.querySelector('.linkedIn');
linkedIn.addEventListener('click', () => {
    window.open("https://www.linkedin.com/in/adam-comte/", "_blank");
})

let closeBtn = document.querySelector('.closeBtn');
closeBtn.addEventListener('click', function(){
    vu.classList.remove('displayNone')
    cache.classList.remove('displayBlock')
});