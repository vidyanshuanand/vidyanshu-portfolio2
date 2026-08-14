const navLinks=[...document.querySelectorAll('.nav nav a')];
const sections=[...document.querySelectorAll('main section[id]')];
window.addEventListener('scroll',()=>{
  let current='home';
  sections.forEach(s=>{if(window.scrollY>=s.offsetTop-180) current=s.id});
  navLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+current));
});
document.querySelector('.menu-toggle').addEventListener('click',()=>{
  const nav=document.querySelector('.nav nav');
  nav.classList.toggle('open');
  nav.style.display=nav.classList.contains('open')?'flex':'';
  nav.style.position='absolute';nav.style.top='75px';nav.style.left='0';nav.style.right='0';
  nav.style.padding='20px';nav.style.background='#090d11';nav.style.flexDirection='column';
});
function downloadCV(e){
  e.preventDefault();
  alert('Add your final CV PDF as "cv.pdf" in this folder, then change this button link to href="cv.pdf".');
}
