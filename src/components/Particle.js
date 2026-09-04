import React from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const particleOptions = {
  particles: {
    number: {
      value: 160,
      density: {
        enable: true,
        area: 1500,
      },
    },
    links: {
      enable: false,
      opacity: 0.03,
    },
    move: {
      direction: "right",
      speed: 0.05,
    },
    size: {
      value: 1,
    },
    opacity: {
      animation: {
        enable: true,
        speed: 1,
        minimumValue: 0.05,
      },
    },
  },
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
    },
    modes: {
      push: {
        quantity: 1,
      },
    },
  },
  detectRetina: true,
};

function Particle() {
  return (
    <ParticlesProvider init={loadSlim}>
      <Particles id="tsparticles" options={particleOptions} />
    </ParticlesProvider>
  );
}

export default Particle;
