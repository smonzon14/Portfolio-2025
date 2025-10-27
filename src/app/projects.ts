export type Project = {
  key: string;
  name: string;
  description: string;
  images: {
    src: string;
    caption: string;
  }[];
  size: "sm" | "md" | "lg";
  link?: string;
};

export const researchProjects: Project[] = [
  {
    key: "mage",
    name: "MAGE: Motion-to-Audio Generative autoEncoder",
    description:
      "An ongoing independent research project that uses a variational autoencoder to generate percussive audio from hand gestures. The model builds upon RAVE, a state-of-the-art neural audio synthesis architecture, and trains on high-frame-rate recordings of conga drum performances (played by my dad) to capture fine hand movements. The goal is to make it possible to play any percussive instrument using only hand gestures and a camera.",
    images: [
      {
        src: "/projects/mage_playing_adv2.mp4",
        caption:
          "Hand landmarks are extracted with MediaPipe and augmented with normal vectors to capture hand orientation.",
      },
      {
        src: "/projects/mage_audio_waveform_peaks.png",
        caption:
          "Audio clips are segmented and denoised by aligning to percussive peaks and removing initial audio before the first beat, ensuring the model focuses on the sound itself rather than gesture noise.",
      },
      {
        src: "/projects/mage_hand_landmarks_vs_audio.png",
        caption:
          "Hand landmarks are resampled to match BRAVE's latent rate of 344.5 Hz, while audio is encoded into latent space via BRAVE's encoder.",
      },
    ],
    size: "lg",
  },
  {
    key: "music-spectrogram-inpainting",
    name: "Music-Spectrogram Inpainting",
    description:
      "In collaboration with researchers at the MIT Department of Mechanical Engineering and Media Lab, I develop a Stable Diffusion-based pipeline (inspired by Riffusion) for spectrogram inpainting. The system reconstructs masked audio regions to enhance hydrogel air-water extraction by amplifying specific frequency bands. I am currently experimenting with CLIP soft tokens to improve generative guidance and musical coherence.",
    images: [
      {
        src: "/projects/music-spectrogram-inpainting.png",
        caption:
          "The Riffusion-inspired inpainting framework reconstructs masked spectrogram regions while preserving unmasked context.",
      },
      {
        src: "/projects/music-spectrogram-inpainting-hiphop.png",
        caption:
          "Low-frequency inpainting on a GTZAN track produces a coherent new bassline (<300 Hz) while preserving higher-frequency details.",
      },
    ],
    size: "lg",
  },
  {
    key: "swimsense",
    name: "SwimSense: Computational Sensing for Swimming Analysis",
    description:
      "SwimSense is a wireless, wearable, waterproof device equipped with IMU, PPG, and temperature sensor for realtime health sensing and reporting for aquatic environments. Originally as a research collaboration with MIT Media Lab and Dept. of Mechanical Engineering, I am now independently developing SwimSense to improve comfort, battery life, and data quality. The device aims to provide swimmers and coaches with detailed insights into performance and physiological metrics during training.",
    images: [
      {
        src: "/projects/swimsense-heartrate.jpeg",
        caption:
          "The SwimSense device measures heart rate underwater using a PPG sensor positioned behind the ear.",
      },
      {
        src: "/projects/swimsense-stripped.jpg",
        caption: "The soldered SwimSense v2 prototype with waterproof top removed. The device is housed in a 3D-printed waterproof case and glued using silicone sealant to a swim-cap.",
      },
      {
        src: "/projects/swimsense-single.jpg",
        caption:
          "The device without a second layer swim-cap. External wires include a charging/ data port, power button, and PPG sensor.",
      },
      {
        src: "/projects/swimsense-doubled.jpg",
        caption:
          "The SwimSense v2 prototype is designed to be worn under two swim-caps for waterproofing and stability during swimming.",
      },
      {
        src: "/projects/swimsense-rx.jpg",
        caption: "Data is transmitted and received via LoRa to a nearby computer for real-time monitoring and analysis.",
      },
      {
        src: "/projects/swimsense-v1.mp4",
        caption: "The SwimSense v1 prototype had a battery that was too large. For human safety, I am now using 250mAh LiPo with protection circuit.",
      },
    ],
    size: "lg",
    link: "https://github.com/smonzon14/SwimSense",
  },
  {
    key: "honors",
    name: "Honors Thesis",
    description:
      "As a music producer, I searched for ways to design the right timbre and texture. That curiosity led me to research Generative Adversarial Networks for timbre synthesis in my undergraduate honors thesis at UMass Amherst. With limited resources, I built a multiclass classification model for instrument identification as a foundation for future GAN-based synthesis. The long-term vision was to generate novel sounds directly from text descriptions like “soothing piano with warm overtones.”",
    images: [
      {
        src: "/projects/honors-confusion-matrix.png",
        caption:
          "A confusion matrix showing 76% test accuracy, with most confusion between psychoacoustically similar instruments.",
      },
      {
        src: "/projects/honors-title.png",
        caption:
          "Undergraduate thesis at the UMass Amherst Commonwealth Honors College exploring GANs for timbre synthesis.",
      },
      {
        src: "/projects/honors-gan.png",
        caption:
          "The GAN architecture I studied as the basis for the thesis; the classifier served as a starting point for a future discriminator.",
      },
      {
        src: "/projects/honors-spectrograms.png",
        caption:
          "Spectrogram examples from the NSynth dataset used to train the classifier.",
      },
      {
        src: "/projects/honors-nsynth-dataset.png",
        caption:
          "NSynth dataset distribution showing class imbalance across instrument families—an issue discussed in the thesis.",
      },
    ],
    size: "lg",
    link: "https://docs.google.com/document/d/1Xb-1g6tz4VSmXon9N6VQUGq1lYzuSttLNalpCWSiQdc/edit?usp=sharing",
  },
];

export const codingProjects: Project[] = [
  {
    key: "nyt",
    name: "NYT Large Language Model (LLM)",
    description:
      "I designed a local Ollama-based personal assistant that summarized and read New York Times articles using real-time TTS. The system refreshed its dataset daily and answered both current and historical questions—stored and processed locally for privacy.",
    images: [
      {
        src: "/projects/nyt-llm.mp4",
        caption:
          "The NYT LLM answering “What's happening in the tech sector today?” using locally stored articles.",
      },
      {
        src: "/projects/nyt-logo.jpg",
        caption:
          "Article summaries were vectorized and retrieved from a local database for contextual question answering.",
      },
    ],
    link: "https://github.com/smonzon14/NYT-LLM",
    size: "lg",
  },
  {
    key: "beamshyft",
    name: "Beamshyft - Lower Construction Costs for Developers",
    description:
      "I built the Beamshyft web platform to connect developers with manufacturers for cost-efficient interior materials. Developed with Next.js, it enabled users to request materials, manage deliveries, and source stylish furnishings directly from producers.",
    images: [
      {
        src: "/projects/beamshyft_white.PNG",
        caption:
          "The Beamshyft platform delivered interior construction materials from manufacturers to developers.",
      },
    ],
    size: "lg",
    link: "https://beamshyft.com/",
  },
  {
    key: "curdle",
    name: "Curdle - Wordle for Cheeses",
    description:
      "To address my cheese-based insecurity, I created Curdle—a Wordle-style game featuring real five-letter cheese names (yes, there were 42). Built with JavaScript, it refreshed daily and offered a flavorful test of dairy vocabulary.",
    images: [
      {
        src: "/projects/curdle.png",
        caption:
          "A playful word game that challenged users to guess five-letter cheese names.",
      },
    ],
    size: "lg",
    link: "/curdle/index.html",
  },
  {
    key: "simulation-physics",
    name: "Newtonian Physics Simulator",
    description:
      "I built a 2D physics simulator in Python using Pygame, featuring gravitational bodies, instantaneous velocities, and dynamic interactions. Users could create, move, and observe objects as they interacted under Newtonian forces.",
    images: [
      {
        src: "projects/simulation-physics-compressed.gif",
        caption:
          "A 2D physics simulation that visualized gravitational attraction and motion in real time.",
      },
    ],
    size: "lg",
  },
  {
    key: "simulation-cgol",
    name: "Conway's Game of Life (C++)",
    description:
      "I implemented Conway's Game of Life in C++ and color-graded cells based on the rule they followed, exploring how simple rules produced complex patterns.",
    images: [
      {
        src: "/projects/simulation-cgol.gif",
        caption:
          "A colorized visualization of Conway's Game of Life implemented in C++.",
      },
    ],
    size: "lg",
  },
  {
    key: "blockbreaker",
    name: "Blockbreaker",
    description:
      "I created a modern blockbreaker game using JavaScript and an HTML5 canvas. It featured multiple levels, progressive difficulty, and crisp collision physics.",
    images: [
      {
        src: "/projects/blockbreaker.mp4",
        caption:
          "Gameplay demo of the modernized blockbreaker built with HTML5 canvas.",
      },
      {
        src: "/projects/blockbreaker-ss.png",
        caption:
          "Each level increased difficulty, demanding precision and timing to clear all blocks.",
      },
    ],
    size: "lg",
    link: "https://github.com/smonzon14/BlockBreaker",
  },
  {
    key: "vibeq",
    name: "VibeQ - Spotify Group DJ App",
    description:
      "I developed VibeQ, an app that let multiple users vote on the next Spotify song in a shared queue via QR code. Built with React Native (Expo) and Firebase, it won two runner-up awards at a UMass Amherst hackathon.",
    images: [
      {
        src: "/projects/vibeq.png",
        caption:
          "“Still waiting for your favorite song? Bring the aux to the people with VibeQ.”",
      },
    ],
    size: "lg",
    link: "https://github.com/smonzon14/VibeQ",
  },
  {
    key: "myhs",
    name: "MyHS - High School Student Portal",
    description:
      "In high school, I wrote a Swift-based web app that aggregated grades, homework, and schedules. The IT department mistook it for hacking and issued a cease-and-desist—an early lesson in innovation (and bureaucracy).",
    images: [
      {
        src: "/projects/myhs.jpg",
        caption:
          "A Swift web app that synced grades, homework, and schedules—built during high school.",
      },
    ],
    size: "lg",
    link: "https://github.com/smonzon14/MyHS",
  },
];

export const engineeringProjects: Project[] = [
  {
    key: "feedkevin",
    name: "FeedKevin! - Pet Food Timer",
    description:
      "To avoid double-feeding our cat Kevin, I soldered a WiFi-enabled smart button that logged and displayed feeding times using an ESP8266, SSD1306 OLED, and a single button. The device fetched NTP time and kept everyone honest—including Kevin.",
    images: [
      {
        src: "/gifs/feedkevin.gif",
        caption:
          "A WiFi-enabled feeding tracker built with an ESP8266, OLED, and tactile button.",
      },
      {
        src: "/projects/feedkevin-timer.jpeg",
        caption:
          "Pressing the button logged Kevin's last meal so he couldn't beg twice.",
      },
      {
        src: "/projects/feedkevin-weight.jpg",
        caption: "Kevin had a problem.",
      },
    ],
    size: "md",
    link: "https://github.com/smonzon14/Feed-Kevin",
  },
  {
    key: "biwheel",
    name: "Raspberry Pi Robot",
    description:
      "Originally meant to help me “clean my room remotely,” this three-wheel robot evolved into a PS4-controlled rover with a camera, ultrasonic sensor, and claw arm. Built with Raspberry Pi and OpenCV, it detected and grabbed objects autonomously or via controller.",
    images: [
      {
        src: "/projects/biwheel-top.jpg",
        caption:
          "Top view showing the camera and ultrasonic sensor used for detection.",
      },
      {
        src: "/projects/biwheel-controller.JPEG",
        caption:
          "Controlled with a DualShock 4 controller; included a two-DOF claw for object interaction.",
      },
      {
        src: "/projects/biwheel-cad-compressed.gif",
        caption: "The robot's CAD model designed in Fusion 360.",
      },
      {
        src: "/projects/biwheel-back.jpg",
        caption:
          "Rear view showing power setup and status LED for controller connection.",
      },
      {
        src: "/projects/biwheel-karate.mp4",
        caption:
          "Robot performing a “karate chop” emote—because function and fun coexisted.",
      },
    ],
    size: "lg",
  },
  {
    key: "drone",
    name: "Raspberry Pi Quadcopter",
    description:
      "I built a quadcopter powered by a Raspberry Pi with an onboard camera, GPS, and Bluetooth/WiFi control. The project explored PID flight control and quadcopter dynamics—the Raspberry Pi wasn't ideal for flight control, but the lessons were invaluable.",
    images: [
      {
        src: "/projects/drone-exposed.jpg",
        caption:
          "Components included Raspberry Pi, GPS, IMU, ESCs, and a camera for navigation.",
      },
      {
        src: "/projects/drone-design.png",
        caption:
          "Fusion 360 model showing optimized weight distribution and frame design.",
      },
      {
        src: "/projects/drone-top.jpg",
        caption: "Top view highlighting navigation and sensing modules.",
      },
      {
        src: "/projects/drone-testing.mp4",
        caption:
          "PID tuning session using a ceiling-mounted tether for safe testing.",
      },
    ],
    size: "lg",
    link: "https://github.com/smonzon14/PiDrone",
  },
  {
    key: "mushete",
    name: "Mushroom Environment Controller",
    description:
      "I designed a custom ESP32-based environmental controller for mushroom cultivation. Built on a custom KiCAD PCB, it controlled humidity, UV lighting, PC fans, and a Peltier element for heating/cooling. It also included an OLED interface and internet connectivity for monitoring.",
    images: [
      {
        src: "/projects/mushete-board-completed.JPEG",
        caption:
          "Completed controller featuring an ESP32 microcontroller and custom PCB.",
      },
      {
        src: "/projects/mushete-kicad.jpg",
        caption: "KiCAD schematic showing humidity and fan control circuits.",
      },
      {
        src: "/projects/mushete-board-pcb.jpg",
        caption:
          "PCB layout integrating sensors, display, and solid-state cooling components.",
      },
      {
        src: "/projects/mushete-sensor.mp4",
        caption:
          "Temperature and humidity sensor feeding data to the OLED display.",
      },
      {
        src: "/projects/mushete-mount.png",
        caption:
          "Custom mount for the Peltier module designed for easy maintenance.",
      },
      {
        src: "/projects/mushete-case.jpg",
        caption:
          "Completed mushroom-growing setup inside a repurposed PC case.",
      },
    ],
    size: "lg",
  },
  {
    key: "3dprinter",
    name: "3D Printer Cooling System",
    description:
      "To improve print quality on my budget 3D printer, I designed a custom fan mount and nozzle system in Fusion 360. The upgrade significantly improved cooling performance, overhangs, and overall print precision.",
    images: [
      {
        src: "/projects/3dprinter-attachment.jpg",
        caption:
          "Custom cooling mount and nozzle assembly for improved print performance.",
      },
      {
        src: "/projects/3dprinter-design.png",
        caption: "First nozzle revision designed in Fusion 360.",
      },
      {
        src: "/projects/3dprinter-design2.png",
        caption: "Simplified second revision—less proved to be more.",
      },
      {
        src: "/projects/3dprinter-mount.png",
        caption: "Cooling mount designed to fit the printer's extrusion frame.",
      },
      {
        src: "/projects/3dprinter-nozzle.gif",
        caption:
          "Stress test demonstrating improved cooling and layer consistency.",
      },
    ],
    size: "md",
  },
  {
    key: "whoshome",
    name: "Anybody Home?",
    description:
      "Because living in an attic made it hard to tell who was home, I created an ESP8266-based device that detected nearby phones by MAC address and sent notifications. I eventually decommissioned it—effective, but a little too Black Mirror.",
    images: [
      {
        src: "/projects/whoshome.jpg",
        caption:
          "ESP8266 device that detected known MAC addresses to infer presence.",
      },
    ],
    size: "sm",
  },
  {
    key: "breaker",
    name: "Breaker Panel Monitor",
    description:
      "To prevent frozen pipes during winter, I built a breaker panel monitor that detected circuit trips and sent notifications via IFTTT. It was a reliable, low-cost safeguard—and far cheaper than calling an electrician.",
    images: [
      {
        src: "/projects/breaker-panel.jpg",
        caption:
          "Breaker monitor that detected tripped circuits and alerted via WiFi.",
      },
      {
        src: "/projects/breaker-ifttt.PNG",
        caption:
          "Example IFTTT mobile notification triggered by a breaker trip.",
      },
    ],
    size: "sm",
  },
];

export const projects: Project[] = [
  ...researchProjects,
  ...engineeringProjects,
  ...codingProjects,
];
