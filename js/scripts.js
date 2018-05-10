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

var link = document.querySelector(".button-open-form");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var inputName = popup.querySelector("[name=name]");
var inputEmail = popup.querySelector("[name=email]");
var inputTextarea = popup.querySelector("[name=text]");

var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

  if (storageName) {
    inputName.value = storageName;
    inputEmail.focus();
  } if (storageEmail) {
    inputEmail.value = storageEmail;
    inputTextarea.focus();
  } else {
    inputName.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!inputName.value || !inputEmail.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", inputName.value);
      localStorage.setItem("email", inputEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});
