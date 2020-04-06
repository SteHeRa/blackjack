var modal = document.getElementById("instructions");
var instrBtn = document.getElementById("instrBtn");
var closeBtn = document.getElementsByClassName("close")[0];

//When user clicks 'show instructions' display modal
instrBtn.addEventListener("click", () => modal.style.display = "block");

//When user clicks the (x) in the modal the modal closes
closeBtn.addEventListener("click", () => modal.style.display = "none");

//When user clicks outside the modal, it closes
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }