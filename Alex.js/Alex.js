window.addEventListener('DOMContentLoaded', () => {
  const bgMusic = document.querySelector('#bgMusic');
  const phoenixHitbox = document.querySelector('#phoenix-hitbox');
  const mushroomHitbox = document.querySelector('#mushroom-hitbox');
  const rumHitbox = document.querySelector('#rum-hitbox');

  // Start background music after user interaction
  const playBackgroundMusic = () => {
    if (bgMusic?.components?.sound) bgMusic.components.sound.playSound();
    window.removeEventListener('click', playBackgroundMusic);
    window.removeEventListener('touchstart', playBackgroundMusic);
    window.removeEventListener('keydown', playBackgroundMusic);
  };

  window.addEventListener('click', playBackgroundMusic);
  window.addEventListener('touchstart', playBackgroundMusic);
  window.addEventListener('keydown', playBackgroundMusic);

  // Phoenix sound on gaze
  phoenixHitbox?.addEventListener('mouseenter', () => {
    phoenixHitbox.components.sound?.playSound();
  });

  // Mushroom click sound
  mushroomHitbox?.addEventListener('click', () => {
    mushroomHitbox.components.sound?.playSound();
  });

  // Rum: toggle play/stop on click
  if (rumHitbox) {
    let rumPlaying = false;

    rumHitbox.addEventListener('click', () => {
      const sound = rumHitbox.components.sound;
      if (!sound) return;

      if (rumPlaying) {
        sound.stopSound();
      } else {
        sound.playSound();
      }

      rumPlaying = !rumPlaying;
    });
  }
});