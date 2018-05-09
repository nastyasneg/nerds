var slider = document.querySelector(".features");
var slideToggle1 = slider.querySelector(".toggle-label1");
var slideToggle2 = slider.querySelector(".toggle-label2");
var slideToggle3 = slider.querySelector(".toggle-label3");
var slideCurrent1 = slider.querySelector(".item1");
var slideCurrent2 = slider.querySelector(".item2");
var slideCurrent3 = slider.querySelector(".item3");

slideToggle1.addEventListener("click", function(evt) {
  slideCurrent1.classList.add("features-item-show");
  slideCurrent2.classList.remove("features-item-show");
  slideCurrent3.classList.remove("features-item-show");
});

slideToggle2.addEventListener("click", function(evt) {
  slideCurrent2.classList.add("features-item-show");
  slideCurrent1.classList.remove("features-item-show");
  slideCurrent3.classList.remove("features-item-show");
});

slideToggle3.addEventListener("click", function(evt) {
  slideCurrent3.classList.add("features-item-show");
  slideCurrent1.classList.remove("features-item-show");
  slideCurrent2.classList.remove("features-item-show");
});
