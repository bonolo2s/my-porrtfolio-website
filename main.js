var typed = new Typed(".roles",{
  strings:["Software Developer.","Email Developer."],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
})

const menuIcon = document.querySelector('.menu-icon');

menuIcon.addEventListener('click',function(){
  const navbar = document.querySelector('.navbar');
  menuIcon.classList.toggle('active')
  navbar.classList.toggle('active')
})

 const navlinks = document.querySelectorAll('.navLinks')
function active(){
  navlinks.forEach((i) =>
  i.classList.remove('active'));
  this.classList.add('active');
}

navlinks.forEach((i) =>
i.addEventListener('click',active))