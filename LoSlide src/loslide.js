/*! lozad.js - v1.6.0 - 2018-07-24
* https://github.com/ApoorvSaxena/lozad.js
* Copyright (c) 2018 Apoorv Saxena; Licensed MIT */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.lozad=e()}(this,function(){"use strict";function t(t){t.setAttribute("data-loaded",!0)}var e=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},r="undefined"!=typeof document&&document.documentMode,o={rootMargin:"0px",threshold:0,load:function(t){if("picture"===t.nodeName.toLowerCase()){var e=document.createElement("img");r&&t.getAttribute("data-iesrc")&&(e.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(e.alt=t.getAttribute("data-alt")),t.appendChild(e)}t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&(t.srcset=t.getAttribute("data-srcset")),t.getAttribute("data-background-image")&&(t.style.backgroundImage="url('"+t.getAttribute("data-background-image")+"')"),t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded:function(){}},n=function(t){return"true"===t.getAttribute("data-loaded")},a=function(e,r){return function(o,a){o.forEach(function(o){o.intersectionRatio>0&&(a.unobserve(o.target),n(o.target)||(e(o.target),t(o.target),r(o.target)))})}},i=function(t){return t instanceof Element?[t]:t instanceof NodeList?t:document.querySelectorAll(t)};return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".lozad",d=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},u=e({},o,d),c=u.rootMargin,s=u.threshold,g=u.load,l=u.loaded,f=void 0;return window.IntersectionObserver&&(f=new IntersectionObserver(a(g,l),{rootMargin:c,threshold:s})),{observe:function(){for(var e=i(r),o=0;o<e.length;o++)n(e[o])||(f?f.observe(e[o]):(g(e[o]),t(e[o]),l(e[o])))},triggerLoad:function(e){n(e)||(g(e),t(e),l(e))}}}});

(function startLozad() {
  const observer = lozad();
  observer.observe();
})();

//Uncomment this for Autoplay
/* 
(function autoPlay() {
  var slidesShown = 0;
  var slideInputs = document.querySelectorAll(".loSlide input");
  var autoplayInterval = setInterval(function () {
    slidesShown++;
    slideInputs[slidesShown % slideInputs.length].checked = true;
    if (slidesShown >= slideInputs.length * 3) clearInterval(autoplayInterval);
  }, 8000);

  [].forEach.call(slideInputs,function(e){e.addEventListener('click',function () {
    clearInterval(autoplayInterval);
  },false)})
})();
*/

//Uncomment this to preload images after window.onload
/*
window.onload = function imagePreload() {
  [].forEach.call(document.querySelectorAll(".loSlide picture.lozad"),function(e){lozad().triggerLoad(e)})
}*/