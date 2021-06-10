'use strict';
// NOTE: HAMBURGER

const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function () {
  console.log('Button clicked!');
  const bar1 = document.querySelector('.bar1');
  const bar2 = document.querySelector('.bar2');
  const bar3 = document.querySelector('.bar3');
  const nav = document.querySelector('nav');
  const menuHamburger = document.querySelector('.menu-container');

  bar1.classList.toggle('transform-bar1');
  bar2.classList.toggle('transform-bar2');
  bar3.classList.toggle('transform-bar3');
  nav.classList.toggle('nav');
  menuHamburger.classList.toggle('menu-hamburger');
});

// NOTE: GALLERY

const galleryModal = document.querySelector('.modal-gallery');
const overlay = document.querySelector('.overlay');
const btnOpenGallery = document.querySelectorAll('.gallery-image');
const btnCloseGallery = document.querySelector('.btn-close-modal');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const modalGalleryImage = document.querySelectorAll('.modal-gallery-img');

const openGallery = function () {
  overlay.classList.remove('hidden');
  galleryModal.classList.remove('hidden');
  btnCloseGallery.classList.remove('hidden');
  btnPrev.classList.remove('hidden');
  btnNext.classList.remove('hidden');
  modalGalleryImage[0].classList.add('first');
};

for (let i = 0; i < btnOpenGallery.length; i++) {
  btnOpenGallery[i].addEventListener('click', function () {
    modalGalleryImage[i].classList.remove('hidden');
    modalGalleryImage[i].classList.add('current');
    openGallery();
  });
}

const resetGallery = function () {
  for (let i = 0; i < modalGalleryImage.length; i++) {
    modalGalleryImage[i].classList.add('hidden');
    modalGalleryImage[i].classList.remove('current');
  }
};

const closeGallery = function () {
  overlay.classList.add('hidden');
  galleryModal.classList.add('hidden');
  btnCloseGallery.classList.add('hidden');
  btnPrev.classList.add('hidden');
  btnNext.classList.add('hidden');
  modalGalleryImage[0].classList.remove('first');
  resetGallery();
};

btnNext.addEventListener('click', function () {
  const currentImage = document.querySelector('.current');
  console.log(currentImage);
  if (currentImage.nextElementSibling === null) {
    closeGallery();
  } else {
    const next = currentImage.nextElementSibling;
    currentImage.classList.remove('current');
    currentImage.classList.add('hidden');
    next.classList.add('current');
    next.classList.remove('hidden');
    console.log(next);
    console.log('Next Clicked');
  }
});

btnPrev.addEventListener('click', function () {
  const currentImage = document.querySelector('.current');
  console.log(currentImage);
  if (currentImage.classList.contains('first')) {
    closeGallery();
  } else {
    const prev = currentImage.previousElementSibling;
    currentImage.classList.remove('current');
    currentImage.classList.add('hidden');
    prev.classList.add('current');
    prev.classList.remove('hidden');
    console.log('Previous Clicked');
  }
});

btnCloseGallery.addEventListener('click', function () {
  console.log('cross clicked');
  closeGallery();
});

overlay.addEventListener('click', function () {
  console.log('Overlay clicked');
  closeGallery();
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !galleryModal.classList.contains('hidden')) {
    closeGallery();
  }
});

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
