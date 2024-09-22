// Giggle sound for the fling interaction
const giggleSound = new Audio('sounds/giggle.mp3');
giggleSound.preload = 'auto';
giggleSound.volume = 0.2; // Adjust the volume if needed

// Handle the Fling Things button
document.getElementById('fling-things').addEventListener('click', () => {
    // Close and stop music if open
    closeAndStopMusic();
  
    // Play the giggle sound when flinging things
    giggleSound.play().catch(error => {
      console.error('Error playing giggle sound:', error);
    });
  
    // Stop giggle sound after 2 seconds
    setTimeout(() => {
      giggleSound.pause();
      giggleSound.currentTime = 0; // Reset sound to the beginning
    }, 2000); // 2000 ms = 2 seconds
    
    flingItem();
  });


  // Animation to fling things (like a pillow)
function flingItem() {
    const pillow = document.createElement('div');
    pillow.style.width = '50px';
    pillow.style.height = '50px';
    pillow.style.backgroundColor = '#f9d67e';
    pillow.style.position = 'absolute';
    pillow.style.top = '55%';
    pillow.style.left = '100px';
    pillow.style.right = '100px';
    pillow.style.borderRadius = '50%';
    pillow.style.transform = 'translateX(-200%)';
    document.body.appendChild(pillow);
  
    const pillowAnimation = pillow.animate([
      { transform: 'translateX(0)', opacity: 1 },
      { transform: 'translateX(500px)', opacity: 0.5 }
    ], {
      duration: 1000,
      easing: 'ease-out',
      fill: 'forwards'
    });
  
    // Remove the animated pillow after 2 seconds
    setTimeout(() => {
      pillowAnimation.cancel();  // Stop the animation
      pillow.remove();  // Remove the pillow element from the DOM
    }, 2000); // 2000 ms = 2 seconds
  }
  