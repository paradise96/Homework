"use strict";

function toggleMenu() {
  var menu = document.getElementById('mobile_menu').classList.toggle('open');
  var button = document.getElementById('btn-toggle').classList.toggle('cross');
} // document.addEventListener('scroll', function(){
//     // if(window.scrollY >= 600) {
//     if(window.scrollY>=document.getElementById('first_screen').offsetHeight) {
//         document.getElementById('header').classList.add('fixed');
//     } else {
//         document.getElementById('header').classList.add('remove');
//     }
// });