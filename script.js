const shareMenu = document.querySelector('.share-menu');
const button = document.querySelector('.share');
const shareIcon = document.querySelector('.share-icon');

function toggleShareMenu() {
  const isVisible = shareMenu.style.display === 'flex';
  shareMenu.style.display = isVisible ? 'none' : 'flex';
  button.classList.toggle('active', !isVisible);
  shareIcon.classList.toggle('bright', !isVisible);
}

button.addEventListener('click', toggleShareMenu);