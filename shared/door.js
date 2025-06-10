document.addEventListener("DOMContentLoaded", () => {
  const doorToFatima = document.querySelector("#door-to-fatima");
  const doorToAlex = document.querySelector("#door-to-alex");
  const doorToFatou = document.querySelector("#door-to-fatou");

  if (doorToFatima) {
    doorToFatima.addEventListener("click", () => {
      window.location.href = "fatima.html";
    });
  }

  if (doorToAlex) {
    doorToAlex.addEventListener("click", () => {
      window.location.href = "alex.html";
    });
  }

  if (doorToFatou) {
    doorToFatou.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }
});
