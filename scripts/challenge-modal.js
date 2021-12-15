const modal = document.getElementById("challengeModal");
const fields = document.querySelectorAll(".field");
const completeBtn = document.querySelector(".close-challenge-modal");

// When the user clicks on the button, open the modal
fields.forEach((field) => {
  field.addEventListener('click', () => {
    modal.style.display = "block";
  })
})

// When the user clicks on <span> (x), close the modal
completeBtn.addEventListener('click', () => {
  modal.style.display = "none";
})
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}