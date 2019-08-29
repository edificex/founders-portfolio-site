// general JS for page

// invert colours and change size of menu options on mouseover
var underline = function(e) {
  let nav = document.getElementById('nav-bar');
  let links = Array.from(document.getElementsByClassName('nav-link'));
  if (links.includes(e.target)) {
    e.target.style.fontSize = '3em';
    e.target.style.color = 'gold';
    nav.style.backgroundColor = 'black';
  }
}
var underlineReset = function(e) {
  let nav = document.getElementById('nav-bar');
  let links = Array.from(document.getElementsByClassName('nav-link'));
  if (links.includes(e.target)) {
    e.target.style.fontSize = '2em';
    e.target.style.color = 'black';
    nav.style.backgroundColor = 'gold';
  }
}
addEventListener('mouseover', underline);
addEventListener('mouseout', underlineReset);

// invert colours on portfolio bar on mouseover
var invert = function(e) {

  let port = document.getElementById('portfolio-bar');
  let cw = document.getElementById('codewars');
  let links = Array.from(document.getElementsByClassName('portfolio-link'));
  if (links.includes(e.target)) {
    if (e.target == cw) {
      cw.setAttribute('src','./img/codewars-logo-black.png');
      port.style.backgroundColor = "gold";
    }
    else {
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
    }
    else {
      e.target.style.color = "gold";
      port.style.backgroundColor = "black";
    }
  }
}
addEventListener('mouseover', invert);
addEventListener('mouseout', invertReset);
