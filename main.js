// Defining text characters for the empty and full hearts
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Wait for DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed!");

  // Select all like buttons
  const likeButtons = document.querySelectorAll(".like-glyph");

  likeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      mimicServerCall()
        .then(() => {
          // Toggle heart appearance on successful server response
          if (button.textContent === EMPTY_HEART) {
            button.textContent = FULL_HEART;
            button.classList.add("activated-heart"); // Add a class for styling
          } else {
            button.textContent = EMPTY_HEART;
            button.classList.remove("activated-heart");
          }
        })
        .catch((error) => {
          showError(error);
        });
    });
  });

  // Function to show error modal
  function showError(message) {
    const modal = document.querySelector("#modal");
    const modalMessage = document.querySelector("#modal-message");

    modalMessage.textContent = message;
    modal.style.display = "block";

    setTimeout(() => {
      modal.style.display = "none"; // Hide modal after 3 seconds
    }, 3000);
  }
});
