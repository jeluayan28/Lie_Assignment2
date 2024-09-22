const snoringSound = new Audio('sounds/snoring.mp3');
snoringSound.preload = 'auto';
snoringSound.loop = true; // Ensure it loops
snoringSound.volume = 0.2; // Adjust volume if needed (0.0 to 1.0)

// Play the snoring sound when the page loads
window.addEventListener('load', () => {
  snoringSound.play().catch(error => {
    console.error('Error playing snoring sound:', error);
  });
});

// Function to close music options and stop any playing music
function closeAndStopMusic() {
  // Remove the music options if they exist
  if (musicOptions) {
    musicOptions.remove();
    musicOptions = null;
  }

  // Stop any currently playing music
  if (currentMusic) {
    currentMusic.pause();
    currentMusic.currentTime = 0; // Reset to the beginning
    clearTimeout(musicTimeout);
    currentMusic = null;
  }

  // Resume snoring sound
  snoringSound.play();
}

// Helper function to create each music option with GIF
function createMusicOption(musicPath, gifPath) {
  const option = document.createElement('img');
  option.src = gifPath;
  option.classList.add('music-gif');
  option.style.width = '100px';  
  option.style.height = '100px'; 
  option.addEventListener('click', () => {
    playMusic(musicPath);
  });
  return option;
}





