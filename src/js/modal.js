(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
      backdrop: document.querySelector('.js-modal-backdrop'),
    };
  
    refs.openModalBtn.addEventListener('click', onOpenModal);
    refs.closeModalBtn.addEventListener('click', onCloseModal);
    refs.backdrop.addEventListener('click', onBackdropClick);
  
    function onOpenModal() {
      window.addEventListener('keydown', onEscKeyPress);
      console.log('open click');
      refs.modal.classList.remove('is-hidden');
    }
  
    function onCloseModal() {
      window.removeEventListener('keydown', onEscKeyPress);
      console.log('close click');
      refs.modal.classList.add('is-hidden');
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