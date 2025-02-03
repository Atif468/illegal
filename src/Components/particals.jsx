import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import React from "react";
export default function Particle() {
  const [init, setInit] = useState(false);
  useEffect(() => {
    console.log("init");
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: "-1",
          }}
          options={{
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "repulse",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 300,
                },
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ff0000",
              },
              links: {
                color: "#ff0000",
                distance: 150,
                enable: true,
                opacity: 2,
                width: 2,
              },
              move: {
                direction: "none",
                enable: false,
                outModes: {
                  default: "out",
                },
                random: true,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 1100,
                },
                value: 80,
              },
              opacity: {
                value: 5,
                random: true,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
                random: true,
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </>
  );
}