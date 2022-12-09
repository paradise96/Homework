// "use strict"

// const lazyImages = document.querySelectorAll('img[data-src], source[data-srcset]');
// const loadMapBlock = document.querySelector('._load-map');
// const windowHeight = document.documentElement.clientHeight;

// let lazyImagesPosition = [];
// if(lazyImages.length > 0) {
//     lazyImages.forEach(img => {
//         if(img.dataset.src || img.dataset.srcset) {
//             lazyImagesPosition.push(img.getBoundingClientRect().top + pageYOffset);
//         }
//     });
// }
// function lazyScrollCheck(params) {
//     let imgIndex = lazyImagesPosition.findIndex(
//         item => pageYOffset > item - windowHeight
//     );
//     if(imgIndex >= 0){

//     }
// }