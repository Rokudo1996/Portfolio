var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });}


  let burger = document.querySelector('.header-menu')
  let menu= document.querySelector('.header-nav')


  burger.addEventListener('click', ()=>{
    menu.classList.toggle('nav--active')
  })

  let search = document.querySelector('.header-search')
  let form= document.querySelector('.form')


  search.addEventListener('click', ()=>{
    form.classList.toggle('nav--active')
  })