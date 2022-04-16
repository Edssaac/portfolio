// MENU SHOW AND HIDDEN
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

// MENU SHOW
if (navToggle)
{
    navToggle.addEventListener('click', () => 
    {
        navMenu.classList.add('show-menu')
    });
}

// MENU HIDDEN
if (navMenu)
{
    navMenu.addEventListener('click', () => 
    {
        navMenu.classList.remove('show-menu')
    });
}

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav__link');

function linkAction()
{
    const navMenu = document.getElementById('nav__menu');

    navMenu.classList.remove('show-menu');
}
navLink.forEach( n => n.addEventListener('click', linkAction));

// ACCORDION SKILLS
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills()
{
    let itemClass = this.parentNode.className;

    for ( i=0; i<skillsContent.length; i++ )
    {
        skillsContent[i].className = 'skills__content skills__close';
    }

    if ( itemClass === 'skills__content skills__close')
    {
        this.parentNode.className = 'skills__content skills__open';
    }

}
skillsHeader.forEach( (el) => {el.addEventListener('click', toggleSkills)});


// QUALIFICATION TABS
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]');

tabs.forEach( tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active');
        });
        target.classList.add('qualification__active');

        tabs.forEach( tab => {
            tab.classList.remove('qualification__active');
        })
        tab.classList.add('qualification__active');
    });
});


// SERVICES MODAL
const modalViews = document.querySelectorAll('.services__modal'),
      modalButtons = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal');
};

modalButtons.forEach( (modalButton, i) => {
    modalButton.addEventListener('click', () => {
        modal(i);
    });
});

modalCloses.forEach( (modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach( (modalView) => {
            modalView.classList.remove('active-modal');
        });
    });
});


// PORTFOLIO SWIPER
let swiper = new Swiper('.portfolio__container',
    {
    cssMode: true,
    loop: true,
    navigation:
    {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination:
    {
      el: '.swiper-pagination',
      clickable: true,
    },
    // mousewheel: true,
    keyboard: true,
});


// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);


// CHANGE BACKGROUND HEADER
function scrollHeader(){
    const nav = document.getElementById('header');

    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) 
        nav.classList.add('scroll-header'); 
    else 
        nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);


// SCROLL UP
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');

    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-up class
    if(this.scrollY >= 540) 
        scrollUp.classList.add('show-scroll'); 
    else 
        scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);


// DARK THEME
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});

function calcIdade(data) 
{
    var 
    d = new Date,
    ano_atual = d.getFullYear(),
    mes_atual = d.getMonth() + 1,
    dia_atual = d.getDate(),
    split = data.split('/'),
    novadata = split[1] + "/" +split[0]+"/"+split[2],
    data_americana = new Date(novadata),
    vAno = data_americana.getFullYear(),
    vMes = data_americana.getMonth() + 1,
    vDia = data_americana.getDate(),
    ano_aniversario = +vAno,
    mes_aniversario = +vMes,
    dia_aniversario = +vDia,
    quantos_anos = ano_atual - ano_aniversario;

    if (mes_atual < mes_aniversario || mes_atual == mes_aniversario && dia_atual < dia_aniversario) 
    {
        quantos_anos--;
    }

    return quantos_anos < 0 ? 0 : quantos_anos;
}


function updateAge() {
    var campo = document.getElementById("idade");
    campo.innerHTML = calcIdade('24/03/2002');
}


onload = () => {

    updateAge();
}