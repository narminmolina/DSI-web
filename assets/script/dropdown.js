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
