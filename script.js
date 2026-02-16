const body = document.body;
const envelope = document.getElementById("envelope");
const resetButton = document.getElementById("reset");

const openLetter = () => {
  if (!body.classList.contains("letter-open")) {
    body.classList.add("letter-open");
  }
};

const resetLetter = () => {
  body.classList.remove("letter-open");
  envelope.style.pointerEvents = "none";
  // Allow the envelope to settle before re-enabling pointer events
  setTimeout(() => {
    envelope.style.pointerEvents = "auto";
  }, 600);
};

envelope?.addEventListener("click", openLetter);
resetButton?.addEventListener("click", resetLetter);