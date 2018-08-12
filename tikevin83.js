//Starts Lozad
const observer = lozad();
observer.observe();

//All JS after this is unnecessary if you don't need autoplay
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