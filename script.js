// general JS for page

// underline menu options on mouseover
var underline = function(e) {
  let links = Array.from(document.getElementsByClassName('nav-link'));
  if (links.includes(e.target)) e.target.style.textDecoration = 'underline';
}

var resetUnderline = function(e) {
  let links = Array.from(document.getElementsByClassName('nav-link'));
  if (links.includes(e.target)) e.target.style.textDecoration = '';
}

addEventListener('mouseover', underline);
addEventListener('mouseout', resetUnderline);
