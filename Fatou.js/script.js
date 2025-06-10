window.addEventListener("DOMContentLoaded", () => {
  const soffa = document.querySelector("#soffa");
  soffa.addEventListener("model-loaded", () => {
    soffa.object3D.traverse((node) => {
      if (node.isMesh && node.material) {
        node.material.color.set("#DE1F1F");
      }
    });
  });

  // Proximity sound-component
  AFRAME.registerComponent("proximity-sound", {
    schema: {
      target: { type: "selector" },
      threshold: { type: "number", default: 5 },
    },
    tick: function () {
      const player = this.data.target || this.el.sceneEl.camera.el;
      const soundEntity = this.el;
      const distance = soundEntity.object3D.position.distanceTo(
        player.object3D.position
      );

      if (
        distance < this.data.threshold &&
        !soundEntity.components.sound.isPlaying
      ) {
        soundEntity.components.sound.playSound();
      } else if (
        distance >= this.data.threshold &&
        soundEntity.components.sound.isPlaying
      ) {
        soundEntity.components.sound.stopSound();
      }
    },
  });
});

const scene = document.querySelector("a-scene");
