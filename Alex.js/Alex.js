// Alex.js
window.addEventListener('DOMContentLoaded', () => {
  const bgMusic = document.querySelector('#bgMusic');

  const playBackgroundMusic = () => {
    if (bgMusic.components.sound) {
      bgMusic.components.sound.playSound();
    }
    // Only trigger once
    window.removeEventListener('click', playBackgroundMusic);
    window.removeEventListener('touchstart', playBackgroundMusic);
    window.removeEventListener('keydown', playBackgroundMusic);
  };

  // Trigger on first user interaction
  window.addEventListener('click', playBackgroundMusic);
  window.addEventListener('touchstart', playBackgroundMusic);
  window.addEventListener('keydown', playBackgroundMusic);
});