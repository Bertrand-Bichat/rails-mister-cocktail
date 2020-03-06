import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  debugger;
  new Typed('#banner-typed-text', {
    strings: ["Find a cocktail here !"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
