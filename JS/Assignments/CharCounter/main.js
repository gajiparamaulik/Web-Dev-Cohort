const textInput = document.getElementById("inputField");
const charCount = document.getElementById("RemainingTextChar");

textInput.addEventListener("input", () => {
  const remaining = 50 - textInput.value.length;
  charCount.textContent = remaining;
});
