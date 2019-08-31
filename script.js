// general JS for page

// testing an onload event
// addEventListener('load',function() {alert("Welcome :)")});

// randomisers for hsl number generation
let degree = () => Math.floor(Math.random() * 360);
let cent = () =>  Math.floor(Math.random() * 100);
// e.g. wiz.style.color = hsl(degree(),cent()+'%',cent()+'%')

// invert colours and change size of menu options on mouseover/focus
const navPop = function(e) {
  let nav = document.querySelector('.nav');
  let wiz = document.getElementById('wizard');
  let links = Array.from(document.getElementsByClassName('nav__link'));
  if (links.includes(e.target)) {
    if (e.target == wiz && trip > 0) {
      e.target.style.fontSize = '3em';
      nav.style.backgroundColor = 'black';
    } else {
      e.target.style.fontSize = '3em';
      e.target.style.color = 'gold';
      nav.style.backgroundColor = 'black';
    }
  }
}
const navPopReset = function(e) {
  let nav = document.querySelector('.nav');
  let wiz = document.getElementById('wizard');
  let links = Array.from(document.getElementsByClassName('nav__link'));
  if (links.includes(e.target)) {
    if (e.target == wiz && trip > 0) {
      e.target.style.fontSize = '2em';
      nav.style.backgroundColor = 'gold';
    } else {
    e.target.style.fontSize = '2em';
    e.target.style.color = 'black';
    nav.style.backgroundColor = 'gold';
    }
  }
}
addEventListener('mouseover', navPop);
addEventListener('mouseout', navPopReset);
addEventListener('focus', navPop, true); // focus/blur do not bubble
addEventListener('blur', navPopReset, true);

// invert colours on portfolio bar on mouseover
const invert = function(e) {
  let port = document.querySelector('.portfolio');
  let cw = document.getElementById('codewars');
  let links = Array.from(document.getElementsByClassName('portfolio__link'));
  if (links.includes(e.target)) {
    if (e.target == cw) {
      cw.setAttribute('src','img/codewars-logo-black.png');
      port.style.backgroundColor = "gold";
    } else {
      e.target.style.color = "black";
      port.style.backgroundColor = "gold";
    }
  }
}
const invertReset = function(e) {
  let port = document.querySelector('.portfolio');
  let cw = document.getElementById('codewars');
  let links = Array.from(document.getElementsByClassName('portfolio__link'));
  if (links.includes(e.target)) {
    if (e.target == cw) {
      cw.setAttribute('src','img/codewars-logo-gold.png');
      port.style.backgroundColor = "black";
    } else {
      e.target.style.color = "gold";
      port.style.backgroundColor = "black";
    }
  }
}
addEventListener('mouseover', invert);
addEventListener('mouseout', invertReset);
addEventListener('mouseout', navPopReset);
addEventListener('focus', invert, true);
addEventListener('blur', invertReset, true);

// make wizard hat change colour according to user input
let trip = false; // global variable to feed into navPop functions
const magicHat = function() {
  let result = window.prompt("Choose a colour:", "HotPink");
  let wiz = document.getElementById('wizard');
  wiz.style.color = result;
  trip++;
}

// need a JS fix to account for fixed header by offsetting HTML anchors (unfinished)
// line of attack: for any nav link clicked, use window.scrollBy to move up page
/* const offset = function() {
  let links = [...document.getElementsByClassName('nav__link')];
  window.scrollBy(0,-50); // scrolls 60px (height of nav bar + 10) up screen
} */

// show a different profile photo on click
const profileFlick = function(event) {
  let currentImage = document.querySelector('.main__img');
  if (event.target == currentImage) {
    let source = currentImage.src.split(""); // return array of characters in src
    let n = source.length;
    let i = parseInt(source[n-5]); // count back through .jpg to get i, then convert to integer
    if (i == 5) { // loop back round
      currentImage.setAttribute('src','img/profile1.jpg')
    } else {
      let k = i + 1;
      let newSource = 'img/profile' + k + '.jpg';
      currentImage.setAttribute('src',newSource);
    }
  }
}
// flip photo on mouseover (buggy)
/* const profileFlip = function() {
    let currentImage = document.querySelector('.main__img');
    if (event.target == currentImage) {
      currentImage.style.transform = "rotate(0.5turn)";
  }
} */
addEventListener('click',profileFlick);
// addEventListener('mouseover',profileFlip);
