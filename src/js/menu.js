(() => {
  const refs = {
    menuBtnRef: document.querySelector('[data-menu-button]'),
    mobileMenuRef: document.querySelector('[data-menu]'),
    mobileMenuLink: document.querySelector('[data-link]'),
    backdropMenu: document.querySelector('body'),
  };

  refs.backdropMenu.addEventListener('click', onBackdropClick);

  function onBackdropClick(event) {
    // console.log(refs.backdropMenu);
    // console.log(event.target);
    // console.log(event.currentTarget);
    // if (event.currentTarget === event.target) {
    //   console.log('Кликнули именно в бекдроп!!!!');
    //   // onCloseModal();
    // }
  }

  function onMenuOpen() {
    refs.menuBtnRef.classList.add('is-open');
    refs.mobileMenuRef.classList.add('is-open');
  }

  function onMenuClose() {
    refs.menuBtnRef.classList.remove('is-open');
    // refs.menuBtnRef.setAttribute('aria-expanded', !expanded);
    refs.mobileMenuRef.classList.remove('is-open');
  }

  refs.menuBtnRef.addEventListener('click', () => {
    const expanded =
      refs.menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
    console.log(expanded);

    if (expanded === false) {
      onMenuOpen();
      refs.menuBtnRef.setAttribute('aria-expanded', !expanded);
    } else {
      onMenuClose();
      refs.menuBtnRef.setAttribute('aria-expanded', !expanded);
    }
  });

  refs.mobileMenuLink.addEventListener('click', () => {
    // console.log("link click")
    const isOpen =
      refs.mobileMenuRef.getAttribute('is-open') === 'true' || false;
    // console.log(isOpen)
    refs.mobileMenuRef.classList.toggle('is-open');
    refs.mobileMenuRef.setAttribute('is-open', !isOpen);

    const expanded =
      refs.menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    refs.menuBtnRef.classList.toggle('is-open');
    refs.menuBtnRef.setAttribute('aria-expanded', !expanded);
  });
})();

// (() => {
//   const refs = {
//     menuBtnRef: document.querySelector('[data-menu-button]'),
//     mobileMenuRef: document.querySelector('[data-menu]'),
//     mobileMenuLink: document.querySelector('[data-link]'),
//     backdropMenu: document.querySelector('body'),
//   };

//   refs.backdropMenu.addEventListener('click', onBackdropClick);

//   // function onCloseModal() {
//   //   // window.removeEventListener('keydown', onEscKeyPress);
//   //   console.log('close click');
//   //   refs.mobileMenuRef.classList.add('is-hidden');
//   // }

//   function onBackdropClick(event) {
//         // console.log(refs.backdropMenu);
//     // console.log(event.target);
//     // console.log(event.currentTarget);
//     // if (event.currentTarget === event.target) {
//     //   console.log('Кликнули именно в бекдроп!!!!');
//     //   // onCloseModal();
//     // }
//   }

//   refs.menuBtnRef.addEventListener('click', () => {
//     const expanded =
//       refs.menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
//       console.log(expanded);

//       if(expanded === true)
//     refs.menuBtnRef.classList.toggle('is-open');

//     refs.menuBtnRef.setAttribute('aria-expanded', !expanded);

//     refs.mobileMenuRef.classList.toggle('is-open');

//     // mobileMenuRef.setAttribute("aria-expanded", !expanded);
//   });

//   refs.mobileMenuLink.addEventListener('click', () => {
//     // console.log("link click")
//     const isOpen =
//       refs.mobileMenuRef.getAttribute('is-open') === 'true' || false;
//     // console.log(isOpen)
//     refs.mobileMenuRef.classList.toggle('is-open');
//     refs.mobileMenuRef.setAttribute('is-open', !isOpen);

//     const expanded =
//       refs.menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

//     refs.menuBtnRef.classList.toggle('is-open');
//     refs.menuBtnRef.setAttribute('aria-expanded', !expanded);
//   });
// })();
