'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo = document.querySelector('.btn--scroll-to')
const section1 = document.getElementById('section--1')

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal))

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////
// Smooth button scrolling

btnScrollTo.addEventListener('click', function() { 
  section1.scrollIntoView({behavior: 'smooth'})
})

///////////////////////////////////////
// Page navigation

// Less efficient
/* document.querySelectorAll('.nav__link').forEach(ele => {
  ele.addEventListener('click', function(e) {
    e.preventDefault()
    const id = this.getAttribute('href')

    document.querySelector(id).scrollIntoView({behavior: 'smooth'})
  })
}) */

// Event delegation
// 1. Add event listener to common parent element
// 2. Determine what element originated the event
document.querySelector('.nav__links').addEventListener('click', function(e) {
  e.preventDefault()

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href')
    document.querySelector(id).scrollIntoView({behavior: 'smooth'})
  }
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// NOTES//
// Select parts of the document////////////////////////////
/* console.log(document.documentElement) // entire document, html
console.log(document.head)
console.log(document.body)
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

// Inline styles
message.style.background = '#37383d'
message.style.width = '120%'
// cannot access styles this way
console.log(message.style.color)
console.log(message.style.backgroundColor)
// rather this way
console.log(getComputedStyle(message).color)
console.log(getComputedStyle(message).height)

message.style.height = Number.parseFloat(getComputedStyle(message).height) + 40 + 'px'

// change the root variable color using setProperty() on the document
document.documentElement.style.setProperty('--color-primary', 'orangered')

// Get standard attributes
const logo = document.querySelector('.nav__logo')
console.log(logo.alt)
console.log(logo.src)
console.log(logo.className)
// assign an attribute
logo.alt = 'Beautiful minimalist logo'
console.log(logo.alt)
// set attributes
logo.setAttribute('company', 'Bankist')
// get non-standard attributes with:
console.log(logo.getAttribute('company'))

// Shows absolute url
console.log(logo.src)
// compared to relative url
console.log(logo.getAttribute('src'))

// Data attributes
logo.setAttribute('data-version-number', '3.0')
console.log(logo.dataset.versionNumber)

// Classes, can do multiple
logo.classList.add('c', 'd')
logo.classList.remove('c', 'd')
logo.classList.toggle()
logo.classList.contains() // not includes!
// do not use; it overrides existing classes
logo.className = 'b'; */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// SMOOTH SCROLLING////////////////////////////////////////
/* const btnScrollTo = document.querySelector('.btn--scroll-to')
const section1 = document.getElementById('section--1')

btnScrollTo.addEventListener('click', function() {
  // Store coordinates of section 1
  const s1coords = section1.getBoundingClientRect()
  
  // window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset)

  // smoothly scroll to section 1's viewport coordinates plus the offset of the left and top of the page for older browsers
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset, 
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: "smooth"
  // })

  // For modern browsers
  section1.scrollIntoView({behavior: 'smooth'})
}) */

// TYPES OF EVENTS AND EVENT HANDLERS//////////////////////
/* const h1 = document.querySelector('h1')

const alertMouse = function(e) {
  alert('addEventListener: Hands off the h1!')

  // h1.removeEventListener('mouseenter', alertMouse)
}

// Modern, flexible way to handle event listeners
h1.addEventListener('mouseenter', alertMouse)

setTimeout(() => h1.removeEventListener('mouseenter', alertMouse), 5000) */

// Old way
// h1.onmouseenter = function(e) {
//   alert('addEventListener: Hands off the h1!')
// }

// EVEN PROPAGATION IN PRACTICE
// rgb(255, 255, 255)

/* const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`

document.querySelector('.nav__link').addEventListener('click', function(e) {
  this.style.background = randomColor()
  // e.target is the event being clicked
  console.log('LINK', e.target, e.currentTarget)
  // e.currentTarget === this

  // Stop propagation from bubbling up
  // e.stopPropagation()
  // not a great idea to use in practice
})
document.querySelector('.nav__links').addEventListener('click', function(e) {
  this.style.background = randomColor()
  console.log('CONTAINER', e.target, e.currentTarget)
})
document.querySelector('.nav').addEventListener('click', function(e) {
  this.style.background = randomColor()
  console.log('NAV', e.target, e.currentTarget)
}, true)
// 'true' toggles listening during the first 'CAPTURING' phase, rather than the last default 'BUBBLING" phase */