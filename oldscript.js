'use strict';

// NOTE: SMOOTH SCROLL

function scroll(e) {
  var href = $(this).attr('href');

  e.preventDefault();

  $('html, body').animate(
    {
      scrollTop: $(href).offset().top,
    },
    800
  );

  location.hash = href;
}

$('a[href*="#"]').click(scroll);

// NOTE: GALLERY

const galleryModal = document.querySelector('.modal-gallery');
const overlay = document.querySelector('.overlay');
const btnOpenGallery = document.querySelectorAll('.gallery-image');
const btnCloseGallery = document.querySelector('.btn-close-modal');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const modalGalleryImage = document.querySelector('.modal-gallery-img');

// for (let i = 0; i < btnOpenGallery.length; i++) {
//   btnOpenGallery[i].addEventListener('click', function () {
//     openGallery();
//     modalGalleryImage.setAttribute('src', `img/yacht/yacht${i + 1}.jpg`);
//     let currentImage = btnOpenGallery[i];
//     let nextImage = btnOpenGallery[i + 1];
//     btnNext.addEventListener('click', function () {
//       console.log('>> Next Clicked');
//       modalGalleryImage.setAttribute('src', `img/yacht/yacht${i + 1}.jpg`);
//     });
//     btnPrev.addEventListener('click', function () {
//       console.log('<< Prev Clicked');
//       modalGalleryImage.setAttribute('src', `img/yacht/yacht${i}.jpg`);
//     });
//   });
// }
// let galleryModal = [];
// let createGallery = function () {
//   for (let i = 0; i < btnOpenGallery.length; i++) {
//     let currentImage = document.createElement('img');
//     currentImage.setAttribute('src', `img/yacht/yacht${i + 1}.jpg`);
//     currentImage.setAttribute('id', `yacht${i + 1}`);
//     currentImage.classList.add('modal-gallery-img');
//     currentImage.classList.add('hidden');
//     galleryModal.appendChild(currentImage);
//     modalImages.push(currentImage);
//   }
// };
// console.log(modalGalleryImage.length);
// console.log(modalGalleryImage[i]);
const openGallery = function () {
  overlay.classList.remove('hidden');
  // galleryModal.classList.remove('hidden');
  btnCloseGallery.classList.remove('hidden');
  // modalGalleryImage.classList.remove('hidden');
  btnPrev.classList.remove('hidden');
  btnNext.classList.remove('hidden');
};
for (let i = 0; i < modalGalleryImage.length; i++) {
  modalGalleryImage[i].addEventListener('click', openGallery);
}

// modalGalleryImage.addEventListener('click', function () {
//   for (let i = 0; i < btnOpenGallery.length; i++) {
//     modalGalleryImage[i].classList.remove('hidden');
//     console.log(modalGalleryImage[i]);
//     openGallery();
//   }
// });

const closeGallery = function () {
  overlay.classList.add('hidden');
  galleryModal.classList.add('hidden');
  btnCloseGallery.classList.add('hidden');
  modalGalleryImage.classList.add('hidden');
  btnPrev.classList.add('hidden');
  btnNext.classList.add('hidden');
};

// console.log(btnOpenGallery[1]);

btnCloseGallery.addEventListener('click', function () {
  console.log('cross clicked');
  closeGallery();
});

overlay.addEventListener('click', function () {
  console.log('Overlay clicked');
  closeGallery();
});

// let currentImage = btnOpenGallery[i];
// console.log(currentImage);
// // console.log(currentImage);

// btnNext.addEventListener('click', function () {
//   console.log('>> Next Clicked');
//   modalImages[i].classList.add('hidden');
//   modalImages[i + 1].classList.remove('hidden');
// });
