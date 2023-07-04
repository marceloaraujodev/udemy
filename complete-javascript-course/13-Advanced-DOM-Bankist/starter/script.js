'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to')
const section1 = document.querySelector('#section--1')

// Modal Window
// Prevent link click from going to the top of the page
const openModal = function (e) {
  e.preventDefault()
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


// Button Scrolling
btnScrollTo.addEventListener('click', (e) => {
  const s1coords = section1.getBoundingClientRect()
  // console.log(s1coords)

  // console.log(e.target.getBoundingClientRect())

  // console.log('current scroll (x/y)', window.scrollX, window.scrollY)
  // console.log('viewport height/width', document.documentElement.clientHeight, document.documentElement.clientWidth) // gets viewport heights and width

  //// Scrolling with smooth, create a object in the window.scrollTo with left, top and behavior
  //// old school way of doing it
  // window.scrollTo({
  //   left: s1coords.left + window.scrollX, 
  //   top: s1coords.top + window.scrollY,
  //   behavior: 'smooth'
  // })
 
  section1.scrollIntoView({behavior: 'smooth'})
}) // ****


//// Page Navigation


////                                  TITLE Event Delegation - Using Bubling
// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e){
  e.preventDefault() // prevents from going to link position then goes to link with scrollIntoView!

  // Matching Strategy for the right items
  if(e.target.classList.contains('nav__link')){
    const id = e.target.getAttribute('href')
    document.querySelector(id).scrollIntoView({behavior: 'smooth'})
  }
})



// Tabbed component
const tabs = document.querySelectorAll('.operations__tab')
const tabsContainer = document.querySelector('.operations__tab-container')
const tabsContent = document.querySelectorAll('.operations__content')


//// Event Delegation
// 1. Add event listener to common parent element
// 2. Determine what element originated the event
// To try, click on the span or on the button and console log it!
// closest(): if I click on the button using e.target will return the <button></button>. If I click on top of the <span></span> element that is 01 or 03 it will return the span element. And I need to return the button in both instances! So the closest its the toll, since it will return itself if clicked on top of the <button>

// Container Tabs
tabsContainer.addEventListener('click', function (e){
  const clicked = e.target.closest('.operations__tab')

  // Guard Clause
  if(!clicked) return
  // or 
  // if(clicked){
  //   clicked.classList.add('operations__tab--active')
  // }

  // Remove Active
  tabs.forEach(t => t.classList.remove('operations__tab--active')) // removes class from all 
  tabsContent.forEach(c => c.classList.remove('operations__content--active'))

  //Active tab
  clicked.classList.add('operations__tab--active') // adds class to clicked

  // Activete content area
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')
})


















////                                          TITLE DOM TRAVERSING

// const h1 = document.querySelector('h1')


// // Going downwards: child
// console.log(h1.querySelectorAll('.highlight'))
// console.log(h1.childNodes)
// console.log(h1.children)
// h1.firstElementChild.style.color = 'white'
// h1.lastElementChild.style.color = 'orangered'

// // Going upwards: parents

// console.log(h1.parentNode)
// console.log(h1.parentElement)

//                                          IMPORTANT
// closest(): if I click on the ELEMENT using e.target will return the <ELEMENT>. If I click on top of the <span ELEMENT INSIDE OF THE ELEMENT> it will return the span element. And I need to return the ELEMENT in both instances, NOT THE <SPAN INSIDE THE ELEMENT>! So the closest its the toll, since it will return itself if clicked on top of the <button>

// h1.closest('.header').style.background = 'var(--gradient-secondary)'
// h1.closest('h1').style.background = 'var(--gradient-primary)'


// // Going sideways: siblings

// console.log(h1.previousElementSibling)
// console.log(h1.nextElementSibling)

// console.log(h1.previousSibling)
// console.log(h1.nextSibling)

// console.log(h1.parentElement.children)
// const x = [...h1.parentElement.children].forEach(function(el) {
//   if(el !== h1) el.style.transform = 'scale(0.5)'
// })






//// BUBLING PROPAGATION 

// const randomInt = (min,max) => Math.floor(Math.random() * (max - min + 1) + min)
// const randomColor = () => `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`
// // console.log(randomColor(0,255))

// document.querySelector('.nav__link').addEventListener('click',function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, '---CURRENT T----',e.currentTarget)

//   //// Stop propagation
//   // e.stopPropagation()
// })
// document.querySelector('.nav__links').addEventListener('click',function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target, '---CURRENT T----',e.currentTarget)
// })
// document.querySelector('.nav').addEventListener('click',function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', e.target, '---CURRENT T----', e.currentTarget)
// }, /*true*/) //****






////**** IMPORTANT Look at the log and see that the first event captured now is the NAV, due to the third parameter on the call back function set to true. This means the event will be captured going down the DOM, while the others are captured going back up the DOM. Going down its rarely used



// // TITLE            Making a event listener to listen only once

// const h1 = document.querySelector('h1')

// const alerth1 = (e) => {
//   alert('uuuuuh')
//   h1.removeEventListener('mouseenter', alerth1)
// }

// h1.addEventListener('mouseenter', alerth1)

// // If not used in 3 seconds the event is removed
// setTimeout(() => h1.removeEventListener('mouseenter', alerth1), 3000)




// IMPORTANT***             TITLE  SCROLL TO WHERE I WANT EXPLAINED 

////.scrollIntoView only works in modern browsers

/*
s1coords.top + window.scrollY Explained

When I scroll down, the distance from the viewport to the top of the section--1 decreases. 
current position + distance to the top section--1 = distance from the top of section--1 to the top of webpage

formula explained : 

DOMRect y: "value" = top of the section where I want to go, to the top of the viewport.
current position from top of webpage = window.scrollY 

(DOMRect y: "Value" + window.scrollY) = top of the section I want to be.

viewport height/width = just the reference to see if everything is ok

*/









////////////////// LECTURES 

// SELECTING ELEMENTS

// console.log(document.documentElement)
// console.log(document.head)
// console.log(document.body)
// const header = document.querySelector('.header')
// const allSections = document.querySelectorAll('.section')
// console.log(allSections)

// document.getElementById('section--1')
// const allButtons = document.getElementsByTagName('button')
// console.log(allButtons)

// console.log(document.getElementsByClassName('btn'))


//                                TITLE HTMLCollection vs NodeList 
/*
The main difference between an HTMLCollection and a NodeList is that one is live and one is static. This means that when an element is appended to the DOM, a live node will recognize the new element while a static node will not

REFERENCE LINK
https://medium.com/@layne_celeste/htmlcollection-vs-nodelist-4b83e3a4fb4b
*/


//                             TITLE CREATING, INSERTING,  DELETING ELEMENTS

// const message = document.createElement('div')
// message.classList.add('cookie-message');
// message.textContent = 'We use cooked for improved functionality and analytics.';
// message.innerHTML = 'We use cooked for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>'

// header.prepend(message) // prepend adds the element as the first child of the header element
// header.append(message) // append adds the element as the last child of the element
//-- The element was only inserted once, that happens because message is a live element, and cant be at 2 places at once!

// To Inser multiple elements 

// header.append(message.cloneNode(true)) // will create on top with the prepend and on the bottom using the cloneNode!


// header.before(message) // inserts before the header element
// header.after(message) // inserts after the header element


// // DELETE ELEMENTS

// document.querySelector('.btn btn--close-cookie')
// addEventListener('click', () => {
//   message.remove()
// })



////                                     TITLE STYLES, ATTRIBUTES, CLASSES

// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// console.log(message.style.width) // only works if we set it manually like in the two lines above!
// console.log(message.style.color) // I havent set the color above, only the backgroundColor but not the color
// console.log(message.style.backgroundColor, 'background color')


// Acessing styles from the style sheet  👇 
// console.log(getComputedStyle(message).color, 'color')
// console.log(getComputedStyle(message).height, 'Height')

// Changing the styles in the css file 

// console.log(getComputedStyle(message).height)
// console.log(Number.parseFloat(getComputedStyle(message).height, 10)) // gets just the number!
// message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px'; // have to convert the string we get to a number the 10 after the height is a default radix value, that means the string should be parsed as a decimal number. The radix parameter helps avoid potential issues with number parsing when dealing with strings that start with leading zeros or contain certain characters.

// console.log(getComputedStyle(message).height)



////                          TITLE CSS CUSTOM PROPERTIES ALSO KNOW AS VARIABLES

// document.documentElement.style.setProperty('--color-primary', 'orangered')



////                          TITLE ATTRIBUTES


// const logo = document.querySelector('.nav__logo')
// console.log(logo.alt)
// console.log(logo.src)
// console.log(logo.className)


// // Reading non-standard attributes
// console.log(logo.getAttribute('designer'))
// logo.setAttribute('company', 'Bankist')
// console.log(logo.getAttribute('company'))


//// DATA ATTRIBUTES
// always stored in the dataset attribute
// console.log(logo.dataset.versionNumber)

// // CLASSES
// .add()
// .remove()
// .toggle()
// .contains()

// Dont use - It will over ride all clases use add or remove
// logo.className = 'jonas'