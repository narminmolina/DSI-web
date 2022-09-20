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
