
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header')
    const navbar = document.getElementById('navbar')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 50) { header.classList.add('scroll-header'); navbar.classList.add('nav-active'); }
    else { header.classList.remove('scroll-header'); navbar.classList.remove('nav-active'); }
}
window.addEventListener('scroll', scrollHeader)

/*=============== POPULAR SWIPER ===============*/
let swiperPopular = new Swiper(".bestsellers", {
    loop: true,
    spaceBetween: 24,
    slidesPerView: 'auto',
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
});

/*=============== MIXITUP FILTER FEATURED ===============*/
let mixerFeatured = mixitup('.filter', {
    selectors: {
        target: '.filter_card'
    },
    animation: {
        duration: 300
    }
});

/* Link active  */
const headerlinks = document.querySelectorAll('.nav-link')

function linkactive() {
    headerlinks.forEach(l => l.classList.remove('active'))
    this.classList.add('active')
}
headerlinks.forEach(l => l.addEventListener('click', linkactive))


/* Filter link */
const filterlinks = document.querySelectorAll('.filter_link')

function filterfunct() {
    filterlinks.forEach(l => l.checked = false)
    this.checked = true;
}
filterlinks.forEach(l => l.addEventListener('click', filterfunct))

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
    scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 50) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id')
        console.log(sectionId);
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-item a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.nav-item a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)



