// general JS for page

// testing an onload event on the body (alert!)

// randomisers for hsl number generation
let degree = () => Math.floor(Math.random() * 360);
let cent = () =>  Math.floor(Math.random() * 100);
// e.g. wiz.style.color = hsl(degree(),cent()+'%',cent()+'%')

// invert colours and change size of menu options on mouseover/focus
var navPop = function(e) {
  let nav = document.getElementById('nav-bar');
  let wiz = document.getElementById('wizard');
  let links = Array.from(document.getElementsByClassName('nav-link'));
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
var navPopReset = function(e) {
  let nav = document.getElementById('nav-bar');
  let wiz = document.getElementById('wizard');
  let links = Array.from(document.getElementsByClassName('nav-link'));
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
var invert = function(e) {

  let port = document.getElementById('portfolio-bar');
  let cw = document.getElementById('codewars');
  let links = Array.from(document.getElementsByClassName('portfolio-link'));
  if (links.includes(e.target)) {
    if (e.target == cw) {
      cw.setAttribute('src','./img/codewars-logo-black.png');
      port.style.backgroundColor = "gold";
    } else {
      e.target.style.color = "black";
      port.style.backgroundColor = "gold";
    }
  }
}
var invertReset = function(e) {
  let port = document.getElementById('portfolio-bar');
  let cw = document.getElementById('codewars');
  let links = Array.from(document.getElementsByClassName('portfolio-link'));
  if (links.includes(e.target)) {
    if (e.target == cw) {
      cw.setAttribute('src','./img/codewars-logo-gold.png');
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
var magicHat = function() {
  let result = window.prompt("Choose a colour:", "HotPink");
  let wiz = document.getElementById('wizard');
  wiz.style.color = result;
  trip++;
}
