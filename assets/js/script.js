document.querySelector('.open-menu').addEventListener('click', e => {
  document.querySelector('header .menu').classList.add('open');
});


document.querySelector('.close-menu button').addEventListener('click', e => {
  document.querySelector('header .menu').classList.remove('open');
});

document.querySelector('.menu .back-drop').addEventListener('click', e => {
  document.querySelector('header .menu').classList.remove('open');
});