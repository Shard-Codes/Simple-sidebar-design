// Sidebar html imports
const Sidebar = document.querySelector('.sidebar'),
      navToggler = document.querySelector('.nav__toggler');

// Togging sidebar
navToggler.addEventListener('click', () => {
  Sidebar.classList.toggle('sidebar__close');
  navToggler.classList.toggle('bx-x');
})