// Mobile nav toggle
var toggle = document.getElementById('navToggle');
var links = document.getElementById('navLinks');

toggle.addEventListener('click', function () {
  links.classList.toggle('open');
});

links.addEventListener('click', function (e) {
  if (e.target.tagName === 'A') links.classList.remove('open');
});
