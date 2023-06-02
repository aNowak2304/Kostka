const navMobile = document.querySelector('.nav-content');
const navBtn = document.querySelector('.hamburger');
const footerYear = document.querySelector('.footer__year');
const rightBtn = document.querySelector('#next')
const leftBtn = document.querySelector('#prev')
const allNavLinks = document.querySelectorAll('.nav__item');

let users = document.querySelectorAll('.user')
            let index = 0;

            function next(){
                users[index].classList.remove('active')
                index = (index + 1) % users.length;
                users[index].classList.add('active')
            }

            function prev(){
                users[index].classList.remove('active')
                index = (index - 1 + users.length) % users.length;
                users[index].classList.add('active')
            }




const handleNav = () => {
    navBtn.classList.toggle('is-active');
    navMobile.classList.toggle('nav-active');

    allNavLinks.forEach(link => {
        link.addEventListener('click', () =>{
            navMobile.classList.remove('nav-active')
            navBtn.classList.remove('is-active');
        })
    })
}


const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}
handleCurrentYear();

rightBtn.addEventListener('click', next)
leftBtn.addEventListener('click', prev)
navBtn.addEventListener('click', handleNav);