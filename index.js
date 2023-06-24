const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click', function (){
    alert ('I knew you would say yes :D')
});

const notBtn = document.querySelector('#notBtn');

notBtn.addEventListener('mouseover', function(){
    width = window.innerWidth;
    height = window.innerHeight;
    const randomX = parseInt(Math.random()* 400);
    const randomY = parseInt(Math.random()* 400);
    notBtn.style.setProperty('top',randomY+'%');
    notBtn.style.setProperty('left',randomX+'%');
    notBtn.style.setProperty('transform', `translate(-${randomX}%, -${randomY}%)`);
})