// The word "toggle" means turn on/off.
function toggleButton(selector) {
    const button = document.querySelector(selector);
    if (!button.classList.contains('is-toogled')) {
  
      // Before turning this button ON, check if there's
      // already a button that's turned ON and turn it OFF.
      turnOffPreviousButton();
  
      button.classList.add('is-toogled');
    } else {
      button.classList.remove('is-toogled');
    }
  }
  
  function turnOffPreviousButton() {
    const previousButton = document.querySelector('.is-toogled');
    if (previousButton) {
      previousButton.classList.remove('is-toogled');
    }
  }