document.addEventListener('click', (e) => {
  let dropdownButton = e.target.matches('[data-dropdown-button]');

  if (!dropdownButton && e.target.closest('[data-dropdown]') !== null) {
    return;
  }

  let currentDropdown;

  if (dropdownButton) {
    currentDropdown = e.target.closest('[data-dropdown]');
    currentDropdown.classList.toggle('active');
  }

  document.querySelectorAll('[data-dropdown].active').forEach((dropdown) => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove('active');
  });
});

// Track active page and make it bold
const currentPath = window.location.pathname;
let activePage = document.querySelectorAll('nav li a');

activePage.forEach((link) => {
  const hrefFragments = link.href.split('/');
  const hrefPath = '/' + hrefFragments[hrefFragments.length - 1];

  if (hrefPath === currentPath) {
    link.classList.add('active');
  }
});

const swiper = new Swiper('.swiper', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
// debugger;
// Play button

const videoBox = document.querySelectorAll('.video-box');
videoBox.forEach((box) => {
  const playButton = box.querySelector('.overlay > .play-btn');
  playButton.addEventListener('click', (e) => {
    let overlay = e.currentTarget.parentElement;
    overlay.classList.toggle('play');
    let video = e.currentTarget.parentElement.previousElementSibling;
    video.paused ? video.play() : video.pause();
  });
});

//This below worked but only for first video start...
// const playButton = document.querySelectorAll('.play-btn');
// console.log(videos);

// playButton.addEventListener('click', togglePlay);

// function togglePlay() {
//   video.paused ? video.play() : video.pause();
//   playButton.classList.toggle('play');
// }
// end.....

//Responsive Nav bar

let navButton = document.querySelector('.burger');
let nav = document.querySelector('nav');

navButton.addEventListener('click', (e) => {
  if (e.target == navButton) {
    document.body.classList.toggle('lock-body');
    nav.classList.toggle('active-nav');
  }
});

//end.
