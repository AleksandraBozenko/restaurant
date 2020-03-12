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
