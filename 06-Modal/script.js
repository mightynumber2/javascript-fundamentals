'use strict';

// When you click each of the 3 buttons, it opens a new window with text
const button = document.getElementsByClassName('show-modal');

for (let i = 0; i < button.length; i++)
  button[i].onclick = openWindow;

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');

function openWindow() {
  modal.classList.remove('hidden'); 
  overlay.classList.remove('hidden');
}

//You can exit the the new window by clicking X, outside the window, or with the esc key
closeModal.onclick = closeWindow;
overlay.onclick = closeWindow;
document.onkeydown = escapeKey;

function closeWindow() {
  modal.classList.add('hidden'); 
  overlay.classList.add('hidden');
}

function escapeKey(event) {
  // console.log(event);
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeWindow();
      console.log(closeWindow);
  }
};
