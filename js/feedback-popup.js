const feedback = document.querySelector(".button-feedback");
const feedbackPopup = document.querySelector(".popup-overlay");
const feedbackClose = feedbackPopup.querySelector(".button-close");
const feedbackForm = feedbackPopup.querySelector(".popup-feedback-form");
const nameUser = feedbackPopup.querySelector(".feedback-name-input");
const emailUser = feedbackPopup.querySelector(".feedback-email-input");
const textUser = feedbackPopup.querySelector(".field-textarea");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("nameUser");
} catch (err) {
  isStorageSupport = false;
}

feedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("popup-overlay-show");

  if (storage) {
    nameUser.value = storage;
    emailUser.focus();
  } else {
    nameUser.focus();
  }
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("popup-overlay-show");
  feedbackPopup.classList.remove("popup-feedback-error");
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!nameUser.value || !emailUser.value || !textUser.value) {
    evt.preventDefault();
    feedbackPopup.classList.remove("popup-feedback-error");
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add("popup-feedback-error");
  } else {
    if (isStorageSupport) {
    localStorage.setItem("nameUser", nameUser.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackPopup.classList.contains("popup-overlay-show")) {
      evt.preventDefault();
      feedbackPopup.classList.remove("popup-overlay-show");
      feedbackPopup.classList.remove("popup-feedback-error");
    }
  }
});
