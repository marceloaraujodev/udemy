'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to')
const section1 = document.querySelector('#section--1')
const tabs = document.querySelectorAll('.operations__tab')
const tabsContainer = document.querySelector('.operations__tab-container')
const tabsContent = document.querySelectorAll('.operations__content')
const nav = document.querySelector('.nav')


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



//// Tabbed component

//// Event Delegation
// 1. Add event listener to common parent element
// 2. Determine what element originated the event
// To try, click on the span or on the button and console log it!
// closest(): if I click on the button using e.target will return the <button></button>. If I click on top of the <span></span> element that is 01 or 03 it will return the span element. And I need to return the button in both instances! So the closest its the tool, since it will return itself if clicked on top of the <button>

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


// Menu Fade Animation - Passing 'Arguments' to Event Handlers

const handleHover = function (e) {
  // console.log(this) // the this becomes the opacity, it was set using bind() in the mouseover event!

  if(e.target.classList.contains('nav__link')){
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link')
    const logo = link.closest('.nav').querySelector('img')
    // console.log('link', link, 'siblings', siblings, 'logo', logo)

    siblings.forEach(el => {
      if(el !== link) el.style.opacity = this
    })
    logo.style.opacity = this
  }
}

// Passing 'argument' into handler
nav.addEventListener('mouseover', handleHover.bind(0.5))
nav.addEventListener('mouseout', handleHover.bind(1))


//// Sticky navigation: Intersection observer API
const header = document.querySelector('header')
const navHeight = nav.getBoundingClientRect().height

const stickyNav = function (entries) { // entries are the root and threshold values
  const [entry] = entries;
  // console.log(entry)
  
  if(!entry.isIntersecting) nav.classList.add('sticky')
  else  nav.classList.remove('sticky')
}

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null, 
  threshold: 0, 
  rootMargin: `-${navHeight}px`
});
headerObserver.observe(header)


//// Reveal section--hidden using Intersection observer
const allSections = document.querySelectorAll('.section') // returns a node list

const revealSection = function(entries, observer){
  const [entry] = entries;

  if(!entry.isIntersecting) return
  entry.target.classList.remove('section--hidden')
  observer.unobserve(entry.target)
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15
})

allSections.forEach(function(section) {
  sectionObserver.observe(section)
  // section.classList.add('section--hidden')
})



// Lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]')

const loadImg = function (entries, observer){
  const [entry] = entries

  if (!entry.isIntersecting) return; // if not intersecting return (faz nada)

  // replace image
  entry.target.src = entry.target.dataset.src // replcing the img all data properties are stored at dataset

  // remove the filter class
  entry.target.addEventListener('load', (e) => { // listen to load event, happens behind scenes
    console.log(e.target, 'loaded') 
    e.target.classList.remove('lazy-img') // e.target is the image
  })

  observer.unobserve(entry.target) // stop observing after images are loaded
}

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,  // null = the entire viewport
  threshold: 0,
  rootMargin: '200px'
})

imgTargets.forEach(img => imgObserver.observe(img))


// Slide Component
const slider = function (){
  const slides = document.querySelectorAll('.slide')
  const btnLeft = document.querySelector('.slider__btn--left')
  const btnRight = document.querySelector('.slider__btn--right')
  const dotContainer = document.querySelector('.dots')
  
  let curSlide = 0
  let maxSlide = slides.length
  
            // Funtions
  // Creating Dots
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${i}"></button>`)
    })
  }
  
  // Activating the dot
  const activateDot = function(slide){
    document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'))
    document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active')
  }
  
  
  const gotToSlide = function (slide) {
    slides.forEach((s, i) => s.style.transform = `translateX(${100 * (i - slide)}%)`)
  }
  
  // Next slide
  const nextSlide = function () {
    
    if(curSlide === maxSlide -1){
      curSlide = 0
    }else{
      curSlide++
    }
  
    gotToSlide(curSlide)
    activateDot(curSlide)
  }
  
  // Previous slide
  const previousSlide = function () {
    if(curSlide === 0){
      curSlide = (maxSlide - 1)
      console.log(curSlide)
      console.log(maxSlide)
    }else{
      curSlide--
    }
    gotToSlide(curSlide)
    activateDot(curSlide)
  }
  
  // Initializing - When page loads
  const init = function (){
    createDots()
    activateDot(0)
    gotToSlide(0) // starts the app on the first slide
    gotToSlide(0) // starts the app on the first slide
  }
  init()
  
  
  // Event Handlers
  btnRight.addEventListener('click', nextSlide)
  btnLeft.addEventListener('click', previousSlide)
  
  document.addEventListener('keydown', function (e) {
    if(e.key === 'ArrowRight') nextSlide()
    if(e.key === 'ArrowLeft') previousSlide()
    else return
  })
  
  // Dots functionality
  dotContainer.addEventListener('click', (e) =>{
    
    if(e.target.classList.contains('dots__dot')){
      const {slide} = e.target.dataset
      gotToSlide(slide)
      activateDot(slide)
    }
  })

}
slider()










// //                               TITLE Leaving Site Confirmation
// window.addEventListener('beforeunload', (e) => {
//   e.preventDefault()
//   console.log(e)
//   e.returnValue = ''; // To display leaving confirmation returnValue needs to be empty string
// })




/*                                     TITLE  Logic for the slider 
curSlide = 0; -100%, 0%, 200%; 
100 * (i - curSlide)
first interation , index = 0 and curslide = 0. result =  0
second           , index = 1 and curslide = 1. result = -1
third            , index = 2 and curslide = 2. result = -2

formula 100 (i - curSlide) = 0
formula 100 (i - curSlide) = -100
formula 100 (i - curSlide) = -200
 */



/* TITLE SLIDE COMPONENT
STRATEGY:
1. Slides move side to side.
2. When cliked next slide, hide one slide, display next slide using classes
3. Move the slides with js transform: translateX 0% visible slide, -100 to left, + 100 to right
4. Formula for the slide calc is 100 * the index, 0 * 100 = 0%, 100 * 1 = 100% ...
*/














                          

/*                              TITLE LAZY LOADING IMAGES  Intersection observer 
THE STRATEGY: 

1. Load a very small res image to the page. 
2. Create a class with a filter ( filter: blur(20px) ) for the blur so you dont see pixelations 
3. Use data-src="" to reference the image, then replace the images with javascript
4. The removing of the class that contains the blur filter. Its a bit tricky because the loading of the high res image happens behind the scenes with the load event and when its finished it will ommit the load event! So just listen to the load event on the image.
5. Use the rootMargin '200px' to load the images 200px before the user reaches the image.

*/


/* 
                             TITLE   Intersection observer  OBSERVE() EXPLANATION

const obsCallBack = function (entries, observer) {
    entries.forEach(entry => console.log(entry))
  }
  
  const obsOptions = {
    root: null, // When null it will be the entire viewport
    threshold: [0, 0.2]
  }
  
  const observer = new IntersectionObserver(obsCallBack, obsOptions)
  observer.observe(section1)


                                .observe()  IMPORTANT

 The call back function obsCallBack will be call each time that observe element in this case 'section1' is intercecting the root element in this case the 'viewport' at the threshold we defined.
 Setting the root to null will be only looking for when the 'section1' enters the viewpor for more than 10% or 0.1! Based on a threshold: 0.1


                                            IMPORTANT
The rootMargin Will activate the threshold exactly where the target area start minus the size of the NAV bar, instead of overlapping.

ex. 
rootMargin: '-90px' it will activate the Sticky Nav bar whenever it reaches 90 px before the target. Thats what the -90 is for, if I do it 90 px it will activate 90 px after
obs: It has to be pixels! % wont work neither will rem


                                            IMPORTANT
Look at the target it will tell where the intersecting starts happening.


 Sticky Navigation Bar ---  Not really good, very performance heavy ------------------

If I want to start from the Heading elements 
const h1Header = document.querySelector('.header__title')
const initialCoords = h1Header.getBoundingClientRect()

const initialCoords = section1.getBoundingClientRect()
console.log(initialCoords)

window.addEventListener('scroll', () => {
  // console.log(window.scrollY)
  if(window.scrollY > initialCoords.top){
    nav.classList.add('sticky')
  }else{
    nav.classList.remove('sticky')
  }
})
---------------------------------------------------------------------------------


*/ 




/*   TITLE   Menu Fade Animation - Passing 'Arguments' to Event Handlers --  REMEMBERING WHAT BIND DOES

nav.addEventListener('mouseover', function(e){
  handleHover(e, 0.5)
})

nav.addEventListener('mouseout', function(e){
  handleHover(e, 1)
})


  IMPORTANT When used in a event handler the Bind method will always pass the event as the first parameter
  nav.addEventListener('mouseout', handleHover.bind(1)) this will work because handleHover.bind(1) is also a function. The bind method returns a new function, and in this new function the 'this' variable will be set to bind(1) 1, so this = 1
  If more than one value is need it we could pass a array or a object bind([1, 2, 3])

  // IMPORTANT The mouse enter event does not bubble
*/

//// -------END OF - Menu Fade Animation - Passing 'Arguments' to Event Handlers----------------------




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