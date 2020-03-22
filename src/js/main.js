"use strict";


if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// Hamburger menu

const hamburger = document.querySelector('.header__hamburger');
const cross = document.querySelector('.nav__close--cross');

const header = document.querySelector('.header');
const nav = document.querySelector('.nav');


hamburger.addEventListener('click', (e) =>{
  header.classList.toggle('header--js');
  nav.classList.toggle('nav--js');
})

cross.addEventListener('click', (e) =>{
  header.classList.toggle('header--js');
  nav.classList.toggle('nav--js');
})

// Menu descriptions

// const option = document.querySelectorAll('.eat__option--header');
// const description = document.querySelector('.eat__description');

// option.addEventListener('click', (e) =>{
// description.classList.toggle('eat__description--js');
// })


// try1
// option.forEach(('eat__option--header') =>{
//   option.addEventListener('click',(e) =>{
//     description.classList.toggle('eat__description--js')
//   })
// })
// try 2
// document.addEventListener("DOMContentLoaded", function(){
//   const option = document.querySelectorAll('.eat__option--header');
//   const description = document.querySelector('.eat__description');

//   option.addEventListener('click', (e) =>{
//     description.classList.toggle('eat__description--js');
//   })
// })


// const menuLink = document.querySelector('.nav__list--link-item');

// menuLink.addEventListener('click', (e) =>{
//   nav.classList.toggle('nav--js');
//   header.classList.toggle('header--js');
// })

const home = document.getElementById("home");

 home.addEventListener('click', (e) =>{
  nav.classList.toggle('nav--js');
  header.classList.toggle('header--js');
 })

const menu = document.getElementById("menu");

menu.addEventListener('click', (e) =>{
  nav.classList.toggle('nav--js');
  header.classList.toggle('header--js');
 })

 const open = document.getElementById("open");

 open.addEventListener('click', (e) =>{
  nav.classList.toggle('nav--js');
  header.classList.toggle('header--js');
 })

const contact = document.getElementById("contact");

contact.addEventListener('click', (e) =>{
  nav.classList.toggle('nav--js');
  header.classList.toggle('header--js');
 })







