(() => {
  const refs = {
    openModalTermsBtn: document.querySelector('[data-modal-terms-open]'),
    closeModalTermsBtn: document.querySelector('[data-modal-close-terms]'),
    closeModalOkTermsBtn: document.querySelector('[data-modal-close-ok-terms]'),
    modalTerms: document.querySelector('[data-modal-terms]'),
    backdrop: document.querySelector('.js-backdrop'),
  };

  refs.openModalTermsBtn.addEventListener('click', onOpenModal);
  refs.closeModalTermsBtn.addEventListener('click', onCloseModal);
  refs.closeModalOkTermsBtn.addEventListener('click', onCloseModal);
  refs.backdrop.addEventListener('click', onBackdropClick);

  function onOpenModal() {
    window.addEventListener('keydown', onEscKeyPress);
    console.log('open click');
    refs.modalTerms.classList.remove('is-hidden');
  }

  function onCloseModal() {
    window.removeEventListener('keydown', onEscKeyPress);
    console.log('close click');
    refs.modalTerms.classList.add('is-hidden');
  }

  function onBackdropClick(event) {
    if (event.currentTarget === event.target) {
      console.log('Кликнули именно в бекдроп!!!!');
      onCloseModal();
    }
  }

  function onEscKeyPress(event) {
    const ESC_KEY_CODE = 'Escape';
    const isEscKey = event.code === ESC_KEY_CODE;

    if (isEscKey) {
      onCloseModal();
    }
  }
})();
