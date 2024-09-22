// Currently playing music reference
let currentMusic = null;
let musicTimeout = null;
let musicOptions = null; // To store the music options div for later removal

// Handle the Sounds button to show music options with GIFs
document.getElementById('sounds').addEventListener('click', () => {
  closeAndStopMusic(); // Stop any music and close options if already open

  // Create a div to display music options
  musicOptions = document.createElement('div');
  musicOptions.classList.add('music-options');
  
  // Add three music options with GIFs
  const music1 = createMusicOption('sounds/kurt_alarm.mp3', 'img/purge.gif');
  const music2 = createMusicOption('sounds/gdmorning_alarm.mp3', 'img/pineapple.gif');
  const music3 = createMusicOption('sounds/aypon_alarm.mp3', 'img/aypon.gif');

  musicOptions.appendChild(music1);
  musicOptions.appendChild(music2);
  musicOptions.appendChild(music3);

  // Append the music options to the game area
  document.body.appendChild(musicOptions);
});


// Function to play the selected music and stop any previously playing music
function playMusic(musicPath) {
    // Stop the snoring sound
    snoringSound.pause();
  
    // Stop any previously playing music
    if (currentMusic) {
      currentMusic.pause();
      currentMusic.currentTime = 0;
      clearTimeout(musicTimeout); // Clear the previous timer
    }
  
    // Play the new music
    currentMusic = new Audio(musicPath);
    currentMusic.preload = 'auto';
    currentMusic.play().catch(error => {
      console.error('Error playing music:', error);
    });
  
    // Play the selected music for 10 seconds, then stop it and resume snoring
    musicTimeout = setTimeout(() => {
      currentMusic.pause();
      currentMusic.currentTime = 0; // Reset the music to the beginning
      snoringSound.play(); // Resume snoring sound
    }, 10000); // 10 seconds
  }