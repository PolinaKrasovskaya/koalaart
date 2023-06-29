  
(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const mobileMenuLink = document.querySelector("[data-link]");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
    // mobileMenuRef.setAttribute("aria-expanded", !expanded);
  });

  mobileMenuLink.addEventListener("click", () => {
    console.log("link click")
    const isOpen = mobileMenuRef.getAttribute("is-open") === "true" || false;
    console.log(isOpen)
    mobileMenuRef.classList.toggle("is-open");
    mobileMenuRef.setAttribute("is-open", !isOpen);

    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);
  })
})();