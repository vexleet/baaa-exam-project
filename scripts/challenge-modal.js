const modal = document.getElementById("challengeModal");
const fields = document.querySelectorAll(".field");
const completeBtn = document.querySelector(".close-challenge-modal");

// Loop through all the fields and add them a click event listener
fields.forEach((field) => {
// When the user clicks on the button, open the modal
  field.addEventListener('click', () => {
    modal.style.display = "block";
  })
})

// When the user clicks on complete button, close the modal
completeBtn.addEventListener('click', () => {
  modal.style.display = "none";
})
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}