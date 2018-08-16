import Typed from 'typed.js';

function loadDynamicBannerText() {
  new Typed('#banner-typed-text', {
    strings: ["Have a Pint", "Treat yourself"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
