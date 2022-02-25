const navbar = document.querySelector('.menu');
const list = document.querySelector('.hide-menu');

list.classList.add("d-none");

navbar.addEventListener('click', () => {
  navbar.classList.add("d-none");
  list.classList.remove("d-none");
});

list.addEventListener('click', () => {
  list.classList.add('d-none');
  navbar.classList.remove("d-none");
})