const toggleButton = document.querySelector("#toggle-button");
const moreContent = document.querySelector("#more-content");

toggleButton.addEventListener("click", function () {
  const isHidden = moreContent.hidden;

  moreContent.hidden = !isHidden;

  toggleButton.textContent = isHidden ? "Show Less" : "Show More";
});
