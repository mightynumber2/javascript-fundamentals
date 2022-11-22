'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Old loop - using newer forEach() instead
/* for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal); */

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal))

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Select parts of the document////////////////////////////
/* console.log(document.documentElement) // entire document, html
console.log(document.head)
console.log(document.body) */
// Selects all as NODES; more modern way to select
const header = document.querySelector('.header')
const allSections = document.querySelectorAll('.section')
// Selects all as LIVE HTMLCollections, which update in real time unlike NODES
const allButtons = document.getElementsByTagName('button')
// console.log(allButtons)
// console.log(document.getElementsByClassName('btn'))

// Creating and inserting elements/////////////////////////
// .insertAdjacentHTML
const message = document.createElement('div')
message.classList.add('cookie-message')
// message.textContent = 'We use cookies to annoy the crud out of you and force you to click off this box'
message.innerHTML = 'We use cookies to annoy the crud out of you and force you to click off this box. <button class="btn btn--close--cookie">Got it!</button>'

// Adds as the first child
// header.prepend(message)
// last child
header.append(message)
// clone to have two of the same message
// header.append(message.cloneNode(true))

// Adds as siblings, rather than children
// header.before(message)
// header.after(message)

// Delete elements
document.querySelector('.btn--close--cookie').addEventListener('click', function() {
  message.remove()
  // message.parentElement.removeChild(message) // old way via dom traversing
})