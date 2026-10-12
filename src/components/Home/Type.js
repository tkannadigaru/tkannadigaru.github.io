import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Welcome Kannadigas to the Kannadiga group of Trollhättan in Sweden! We are so happy to have you here and hope you feel at home in our community.",
          "ಸ್ವೀಡನ್ನಿನ್ನ ಟ್ರೊಲ್ಹಾಟ್ಟನ್ ಕನ್ನಡಿಗ ಸಮುದಾಯಕ್ಕೆ ನಿಮಗೆ ಆದರದ ಸ್ವಾಗತ.. ಈ ಟ್ರೊಲ್ಹಾಟ್ಟನ್  ಕುಟುಂಬದ ಜೊತೆ ನಿಮ್ಮ ಬಾಂಧವ್ಯವಿರಲೆಂದು ಆಶಿಸುತ್ತೇವೆ...",
          "Välkommen Kannadigas till Kannadiga-gruppen i Trollhättan, Sverige! Vi är så glada att ha er här och hoppas att ni känner er hemma i vår gemenskap.",
        ],
        autoStart: true,
        loop: true,
        delay: 10,
        deleteSpeed: 0,
      }}
    />
  );
}

export default Type;
