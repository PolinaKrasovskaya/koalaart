(() => {
    const refs = {
      openModalPrivacyBtn: document.querySelector('[data-modal-privacy-open]'),
      closeModalPrivacyBtn: document.querySelector('[data-modal-close-privacy]'),
      closeModalOkBtn: document.querySelector('[data-modal-close-ok]'),
      modalPrivacy: document.querySelector('[data-modal-privacy]'),
      backdrop: document.querySelector('.js-backdrop-privacy'),
    };
  
    refs.openModalPrivacyBtn.addEventListener('click', onOpenModal);
    refs.closeModalPrivacyBtn.addEventListener('click', onCloseModal);
    refs.closeModalOkBtn.addEventListener('click', onCloseModal);
    refs.backdrop.addEventListener('click', onBackdropClick);
  
    // function toggleModal() {
    //   console.log('modal click privacy')
    //   refs.modalPrivacy.classList.toggle('is-hidden');
    // }

    function onOpenModal() {
      window.addEventListener('keydown', onEscKeyPress);
      console.log('open click');
      refs.modalPrivacy.classList.remove('is-hidden');
    }
  
    function onCloseModal() {
      window.removeEventListener('keydown', onEscKeyPress);
      console.log('close click');
      refs.modalPrivacy.classList.add('is-hidden');
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