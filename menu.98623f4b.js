parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"i0CD":[function(require,module,exports) {
!function(){var e={menuBtnRef:document.querySelector("[data-menu-button]"),mobileMenuRef:document.querySelector("[data-menu]"),mobileMenuLink:document.querySelector("[data-link]"),backdropMenu:document.querySelector("body")};e.backdropMenu.addEventListener("click",function(e){}),e.menuBtnRef.addEventListener("click",function(){var t="true"===e.menuBtnRef.getAttribute("aria-expanded")||!1;console.log(t),!1===t?(e.menuBtnRef.classList.add("is-open"),e.mobileMenuRef.classList.add("is-open"),e.menuBtnRef.setAttribute("aria-expanded",!t)):(e.menuBtnRef.classList.remove("is-open"),e.mobileMenuRef.classList.remove("is-open"),e.menuBtnRef.setAttribute("aria-expanded",!t))}),e.mobileMenuLink.addEventListener("click",function(){var t="true"===e.mobileMenuRef.getAttribute("is-open")||!1;e.mobileMenuRef.classList.toggle("is-open"),e.mobileMenuRef.setAttribute("is-open",!t);var n="true"===e.menuBtnRef.getAttribute("aria-expanded")||!1;e.menuBtnRef.classList.toggle("is-open"),e.menuBtnRef.setAttribute("aria-expanded",!n)})}();
},{}]},{},["i0CD"], null)
//# sourceMappingURL=/koalaart/menu.98623f4b.js.map