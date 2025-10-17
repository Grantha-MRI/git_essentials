'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function () {
  const body = document.body;

  if (body.classList.contains('light-theme')) {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    this.textContent = 'Medium';
  } else if (body.classList.contains('dark-theme')) {
    body.classList.remove('dark-theme');
    body.classList.add('medium-theme');
    this.textContent = 'Light';
  } else {
    body.classList.remove('medium-theme');
    body.classList.add('light-theme');
    this.textContent = 'Dark';
  }

  console.log('Current class name: ' + body.className);
});