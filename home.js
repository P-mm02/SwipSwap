const navbar = document.querySelector('.navbar');
const secondBar = document.querySelector('.secondBar');
const topBackground = document.querySelector('.topBackground');
topBackground.style.height = navbar.clientHeight + 'px';
const searchImg = document.querySelector('.searchImg');
const secondBarRect = secondBar.getBoundingClientRect();
searchImg.style.marginTop = secondBarRect.height -50 + 'px';



