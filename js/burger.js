(() => {
  const refs = {
    openBurgerBtn: document.querySelector('[data-burger-open]'),
    closeBurgerBtn: document.querySelector('[data-burger-close]'),
    burger: document.querySelector('[data-burger]'),
  };

  refs.openBurgerBtn.addEventListener('click', toggleModal);
  refs.closeBurgerBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.burger.classList.toggle('is-open');
  }
})();
 