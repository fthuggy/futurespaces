window.addEventListener('DOMContentLoaded', () => {
  const bgMusic = document.querySelector('#bgMusic');
  const phoenixHitbox = document.querySelector('#phoenix-hitbox');
  const mushroomHitbox = document.querySelector('#mushroom-hitbox');
  const rumHitbox = document.querySelector('#rum-hitbox');
  const ganeshHitbox = document.querySelector('#ganesh-hitbox');

  // Background music starts after user interaction
  const playBackgroundMusic = () => {
    if (bgMusic?.components?.sound) bgMusic.components.sound.playSound();
    window.removeEventListener('click', playBackgroundMusic);
    window.removeEventListener('touchstart', playBackgroundMusic);
    window.removeEventListener('keydown', playBackgroundMusic);
  };

  window.addEventListener('click', playBackgroundMusic);
  window.addEventListener('touchstart', playBackgroundMusic);
  window.addEventListener('keydown', playBackgroundMusic);

  // Phoenix sound on hover
  phoenixHitbox?.addEventListener('mouseenter', () => {
    phoenixHitbox.components.sound?.playSound();
  });

  // Mushroom click sound
  mushroomHitbox?.addEventListener('click', () => {
    mushroomHitbox.components.sound?.playSound();
  });

  // Rum toggle sound
  if (rumHitbox) {
    let rumPlaying = false;
    rumHitbox.addEventListener('click', () => {
      const sound = rumHitbox.components.sound;
      if (!sound) return;
      rumPlaying ? sound.stopSound() : sound.playSound();
      rumPlaying = !rumPlaying;
    });
  }

  // Ganesh toggle sound
  if (ganeshHitbox) {
    let ganeshPlaying = false;
    ganeshHitbox.addEventListener('click', () => {
      const sound = ganeshHitbox.components.sound;
      if (!sound) return;
      ganeshPlaying ? sound.stopSound() : sound.playSound();
      ganeshPlaying = !ganeshPlaying;
    });
  }
});