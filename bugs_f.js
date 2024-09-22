// Disgust sound for the bug interaction
const disgustSound = new Audio('sounds/bugs.mp3');
disgustSound.preload = 'auto';
disgustSound.volume = 0.2; // Adjust the volume if needed

// Handle the Bug It button
document.getElementById('bug-it').addEventListener('click', () => {
  // Stop any currently playing music and clear bugs
  closeAndStopMusic();
  clearBugs(); // Clear any bugs from previous interactions

  // Play disgust sound for 2 seconds
  disgustSound.play().then(() => {
    setTimeout(() => {
      disgustSound.pause(); // Pause the sound after 2 seconds
      disgustSound.currentTime = 0; // Reset the audio to the start
    }, 5000); // 2000ms = 2 seconds
  }).catch(error => {
    console.error('Error playing disgust sound:', error);
  });

  // Show many bugs flying towards the pillow
  showBugs();
});

// Function to show many bugs flying towards the pillow
function showBugs() {
  const numberOfBugs = 10; // Adjust the number of bugs as needed
  const bugsArray = [];

  for (let i = 0; i < numberOfBugs; i++) {
    setTimeout(() => {
      const bug = document.createElement('img');
      bug.src = 'img/bug.gif'; // Path to your bug GIF
      bug.style.position = 'absolute';
      bug.style.width = '30px';  // Adjust size as needed
      bug.style.height = '30px'; // Adjust size as needed
      bug.style.top = `${Math.random() * window.innerHeight}px`;
      bug.style.left = `${Math.random() * window.innerWidth}px`;
      document.body.appendChild(bug);

      // Add the bug to the array so we can remove them later
      bugsArray.push(bug);

      // Animate the bug flying towards the pillow
      bug.animate([
        { transform: `translate(${window.innerWidth / 2 - 100}px, ${window.innerHeight / 2}px)`, opacity: 1 },
        { transform: 'translate(0, 0)', opacity: 0 }
      ], {
        duration: 3000, // Duration for flying animation
        easing: 'ease-out',
        fill: 'forwards'
      });

      // Remove the bug element after the animation is done
      setTimeout(() => {
        bug.remove();
      }, 3000); // Match this with the duration of the animation
    }, i * 300); // Stagger the bugs
  }

  // Store the bugs array globally so it can be cleared
  window.bugsArray = bugsArray;
}

// Function to clear bugs when another folder is clicked
function clearBugs() {
  if (window.bugsArray) {
    window.bugsArray.forEach(bug => {
      if (bug) bug.remove(); // Remove each bug
    });
    window.bugsArray = []; // Clear the array
  }
}
