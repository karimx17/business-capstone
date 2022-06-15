import confetti from "https://cdn.skypack.dev/canvas-confetti";

window.addEventListener("load", () => {
  setTimeout(() => {
    confetti();
  }, 200);
});
