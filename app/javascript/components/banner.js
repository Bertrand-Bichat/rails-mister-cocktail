import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  debugger;
  new Typed('#banner-typed-text', {
    strings: ["Search one cocktail here !"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
