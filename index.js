AOS.init({
    duration: 1000,
    easing: 'ease-in-out', 
    once: false,        
    mirror: true,       
    offset: 120,        
    anchorPlacement: 'top-bottom',
});

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('naWinScroll');
    } else {
        navbar.classList.remove('naWinScroll');
    }
});
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you Shrey! Your message has been sent successfully.');
});













// let nav=document.querySelector('nav');
// window.addEventListener('scroll',()=>{
//     nav.classList.toggle('nawinScroll',window,scrollY>0)
// })  
