import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Welcome Kannadigas to the Kannadiga group of Trollhättan in Sweden! We are so happy to have you here and hope you feel at home in our community.",
          "ಸ್ವೀಡನ್‌ನ ಟ್ರಾಲ್‌ಹಾಟ್ಟನ್‌ನ ಕನ್ನಡಿಗ ಸಮುದಾಯಕ್ಕೆ ಕನ್ನಡಿಗರು ಸ್ವಾಗತ! ನಮ್ಮ ಸಮುದಾಯದಲ್ಲಿ ನೀವು ಇರುವುದಕ್ಕೆ ನಮ್ಮ ಹೃದಯದಲ್ಲಿ ಹಾರ್ದಿಕ ಸ್ವಾಗತವಿದೆ ಮತ್ತು ನೀವು ನಮ್ಮ ಸಮುದಾಯದಲ್ಲಿ ಸುಖವಾಗಿರುವಂತೆ ನಿಮಗೆ ಆಶಿಸುತ್ತೇವೆ.",
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
