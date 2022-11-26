const refs = {
  openModalBtn: document.querySelector('[data-open-modal]'),
  closeModalBtn: document.querySelector('[data-close-modal]'),
  backdrop: document.querySelector('[data-backdrop]'),
  modal: document.querySelector('[data-modal]'),
};

refs.openModalBtn.addEventListener('click', tongleModal);
refs.closeModalBtn.addEventListener('click', tongleModal);

function tongleModal() {
  document.body.classList.toggle('modal-open');
  refs.backdrop.classList.toggle('backdrop--is-hidden');
  refs.modal.classList.toggle('modal--active');
}
