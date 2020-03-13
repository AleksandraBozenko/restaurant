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

const option = document.querySelectorAll('.eat__option--header');
const description = document.querySelector('.eat__description');

option.forEach(('eat__option--header') =>{
  option.addEventListener('click',(e) =>{
    description.classList.toggle('eat__description--js')
  })
})
// option.addEventListener('click', (e) =>{
//   description.classList.toggle('eat__description--js');
// })