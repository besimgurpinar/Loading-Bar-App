const progressBar = document.querySelector('.progress-bar');
    const startButton = document.getElementById('start-button');
    let progress = 0;
    
    function updateProgressBar() {
      progressBar.style.width = `${progress}%`;
      progress++;
      if (progress <= 100) {
        setTimeout(updateProgressBar, 10);
      }
    }
    
    startButton.addEventListener('click', () => {
      progress = 0;
      updateProgressBar();
    });