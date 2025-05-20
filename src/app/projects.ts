export type Project = {
    name: string;
    description: string;
    images: {
        src: string;
        caption: string;
    }[];
    size: 'sm' | 'md' | 'lg';
    link?: string;
};

export const researchProjects: Project[] = [
    {
        name: "Music-Spectrogram Inpainting",
        description: "A Stable Diffusion model tuned to inpaint spectrograms. This was used to generate new audio samples from existing spectrograms, with a focus on preserving the original audio characteristics. By preserving certain frequencies, this model is capable of filling in music that sounds semantically similar and in key to the original, yet completely new. In this study, the idea was to generate music that was better suited for hydrogel water extraction rates by using frequency ranges and songs that performed the best. This was in collaboration with MIT researchers at META and the MIT Media Lab.",
        images: [
            {
                src: "/projects/diffusion-diagram.png",
                caption: "A framework designed to inpaint spectrograms using Stable Diffusion, with a focus on preserving original audio characteristics.",
            },
            {
                src: "/projects/diffusion-reverse.mp4",
                caption: "The reverse diffusion process, where noise is gradually removed from the spectrogram to generate a new image. This image is then converted back to audio using an inverse Short-Time Fourier Transform (STFT).",
            },
            {
                src: "/projects/diffusion-beatmatch.png",
                caption: "An example of a spectrogram inpainting task, where the model regenerates an original spectrogram. Masked parts are regenerated above 300 Hz while the rest is kept intact - preserving the bassline and the beat.",
            }
        ],
        size: 'lg',
        link: "",
    },
    {
        name: "Honors Thesis",
        description: "A research project discussing the use of Generative Adverserial Networks for timbre synthesis and a multiclass-classification model for instrument identification. The idea was to use a GAN to synthesize audio with specific timbre descriptors from text (i.e. \"soothing piano with long release and pleasant overtones\"). This would be incredibly useful for sound designers/music producers to come up with new sounds or don't have a background in sound synthesis. This was my undergraduate honors thesis at the UMass Amherst Commonwealth Honors College, a program that requires a thesis to graduate with honors.",
        images: [
            {
                src: "/projects/honors-title.png",
                caption: "My undergraduate thesis at the UMass Amherst Commonwealth Honors College. Here I discuss the use of Generative Adversarial Networks for timbre synthesis and build a multiclass-classification model for instrument identification.",
            },
            {
                src: "/projects/honors-gan.png",
                caption: "The basic Generative Adversarial Network (GAN) architecture I studied as the basis for my thesis. Though I did not have resources to implement a GAN, I did study the architecture and its applications for timbre synthesis. I designed a multiclass-classification model instead to identify instruments and as a starting point for the discriminator model.",
            },
            {
                src: "/projects/honors-spectrograms.png",
                caption: "Example spectrograms of sound samples from the NSynth dataset, which were used to train the classifier model.",
            },
            {
                src: "/projects/honors-nsynth-dataset.png",
                caption: "The NSynth dataset distribution, showing a wide variety of instrument families but a lack of samples for some classes - an issue I discuss in this paper. The dataset contains 300,000 samples of 1-second audio clips, each with a unique sounds and timbre.",
            },
            {
                src: "/projects/honors-confusion-matrix.png",
                caption: "A confusion matrix showing the performance of the classifier model on a test set. The model was able to achieve an accuracy of 76% on the test set, with confused classes being psychoacoustically similar. e.g. (bass vs. guitar) or (reed vs. brass.)",
            }
        ],
        size: 'lg',
        link: "https://docs.google.com/document/d/1Xb-1g6tz4VSmXon9N6VQUGq1lYzuSttLNalpCWSiQdc/edit?usp=sharing",
    },

]

export const codingProjects: Project[] = [
    
    {
        name: "NYT Large Language Model (LLM)",
        description: "Designed as a personal-assistant, I made an locally-stored Large Language Model (LLM) for New York Times articles. The model refreshes articles daily and is capable of summarizing current events, or any other questions a user may have about past news.",
        images: [
            {
                src: "/projects/nyt-llm.mp4",
                caption: "Here is a video of the NYT LLM in action, answering my question 'What is happening in the tech sector today?'.",
            },
            {
                src: "/projects/nyt-logo.jpg",
                caption: "New York Times article summaries are retrieved from RSS feeds and stored in a vectorized database. These are retrieved by the LLM to answer questions.",
            }
        ],
        link: "https://github.com/smonzon14/NYT-LLM",
        size: 'lg',
    },
    {
        name: "Curdle - Wordle for Cheeses",
        description: "A web app that allows users to play a wordle-style game with cheese names. The app was built using Javascript, and features a word list of 5-letter cheeses (there are 42 5-letter cheeses). Built for cheese lovers who are undereducated on 5-letter cheeses. Refreshes daily. Play it with the link below!",
        images: [
            {
                src: "/projects/curdle.PNG",
                caption: "A web app that allows users to play a wordle-style game with 5-letter cheese names. (There are more than you think)",
            },
        ],
        size: 'lg',
        link: "/curdle/index.html",
    },
    {
        name: "Newtonian Physics Simulator",
        description: "A physics simulator built with Python and Pygame, featuring a 2D physics engine that simulates gravitational bodies and instantaneous velocities in a 2D space. The simulator allows users to create and manipulate objects in a 2D space, and observe their interactions with each other. I built this project to learn about PyGame and test my knowledge of basic gravitational physics.",
        images: [
            {
                src: "projects/simulation-physics.gif",
                caption: "A physics simulator built with Python and Pygame, featuring a 2D physics engine that simulates gravitational bodies and instantaneous velocities in a 2D space.",
            },
        ],
        size: 'lg',
    },
    {
        name: "Conway's Game of Life, C++",
        description: "A C++ implementation of Conway's Game of Life, a cellular automaton that simulates the evolution of a grid of cells based on simple rules. The project was built to expirement with cellular automata and the elegant patterns that arise from simple rules. I color-graded cells depending on which rule they were following.",
        images: [
            {
                src: "/projects/simulation-cgol.gif",
                caption: "A C++ implementation of Conway's Game of Life, a cellular automaton that simulates the evolution of a grid of cells based on simple rules.",
            },
        ],
        size: 'lg',
    },
    {
        name: "Blockbreaker",
        description: "A modern blockbreaker game built with JavaScript and an HTML5 canvas. The game features levels with increasing difficulty to break blocks with a limited number of balls.",
        images: [
            {
                src: "/projects/blockbreaker.mp4",
                caption: "A modern blockbreaker game built with JavaScript and an HTML5 canvas.",
            },
        ],
        size: 'lg',
        link: "https://github.com/smonzon14/BlockBreaker",
    },
    {
        name: "VibeQ - Spotify group DJ app",
        description: "I built this app during a 3 day hackathon at UMass Amherst which won two runner-up awards. It allows Spotify users to request/upvote songs in a queue for a DJ or master music player. The app was built with React Native on Expo and Google Cloud Firebase.",
        images: [
            {
                src: "/projects/vibeq.png",
                caption: "\"Still waiting for your favorite song to play? Bring aux to the bourgeoisie with VibeQ!\"",
            },
        ],
        size: 'lg',
        link: "https://github.com/smonzon14/VibeQ"
    },
    {
        name: "Beamshyft - Lower construction costs for developers",
        description: "The website for a service that delivers interior construction materials to developers. This is a startup I'm building with a friend, and we are currently working on building the service. The website was built with Next.js and will feature backend services for users to request materials and track deliveries.",
        images: [
            {
                src: "/projects/beamshyft_white.PNG",
                caption: "The website for a service that delivers interior construction materials to developers. This is a startup I'm building with a friend, and we are currently working on building the service.",
            },
        ],
        size: 'lg',
        link: "https://beamshyft.com/",
    },
    {
        name: "MyHS - Highscool student portal",
        description: "A web app that allows highschool students to view their grades, homework, and schedule. The app was writen in Swift while I attended highschool. Despite my efforts to explain that I had no sensitive data, the IT department didn't trust a highschooler to build an app and I was handed a cease and desist letter. I wear it with pride.",
        images: [
            {
                src: "/projects/myhs.jpg",
                caption: "A web app that syncs highschool grades, homework, and schedule all in one place (logo designed by me). The app was writen in Swift while I attended highschool.",
            },
        ],
        size: 'lg',
        link: "https://github.com/smonzon14/MyHS",
    }
]

export const engineeringProjects: Project[] = [
    
    {
        name: "Raspberry Pi Robot",
        description: "A robot designed to pick up objects remotely, featuring a camera, an ultrasonic sensor, and dynamic claw with 2 degrees of freedom. The robot is capable of using OpenCV for object detection and grabbing objects - particularly 'green cubes' which I 3D printed for testing. I designed this project to experiment with robotics and computer vision.",
        images: [
            {
                src: "/projects/biwheel-controller.JPEG",
                caption: "In version 1, robot had a camera, an ultrasonic sensor. A dynamic claw with 2 degrees of freedom was added later. The robot can be controlled with a DualShock 4 controller or run autonomously with computer vision.",
            },
            {
                src: "/projects/biwheel-cad.gif",
                caption: "The CAD model of the robot, designed in Fusion 360.",
            },
            {
                src: "/projects/biwheel-top.jpg",
                caption: "The robot's top view, showing the camera and ultrasonic sensor. The camera was used for object detection and the ultrasonic sensor was used to determine distance to objects.",
            },
            {
                src: "/projects/biwheel-back.jpg",
                caption: "The robot's back view. I used a portable battery pack to power the robot, and batteries to power the motor. An LED light is used to indicate controller connection.",
            },
            {
                src: "/projects/biwheel-karate.mp4",
                caption: "The robot performing a karate chop emote, demonstrating its awesome moves. (for self-defense purposes)",
            },
        ],
        size: 'lg',
    },
    {
        name: "Raspberry Pi Bluetooth/WiFi Quadcopter",
        description: "A quadcopter built with a Raspberry Pi, featuring a camera, GPS, and Bluetooth/WiFi control.  I designed this project to learn about quadcopter dynamics and attempt to code my own flight controller using PID. Unfortunately, A Raspberry Pi has many drawbacks to be used as a flight controller (and my battery may have been too big), but I taught myself PID control and quadcopter dynamics to try it the HARD way.",
        images: [
            {
                src: "/projects/drone-exposed.jpg",
                caption: "Parts of the quadcopter, including a Raspberry Pi, camera, GPS module, ESC management, and IMU. The drone was designed to be controlled via Bluetooth or WiFi, and I used a Raspberry Pi for the flight controller.",
            },
            {
                src: "/projects/drone-design.png",
                caption: "The CAD model of the quadcopter, designed in Fusion 360. I paid special attention to the weight distribution and center of mass, as well as structural integrity.",
            },
            {
                src: "/projects/drone-top.jpg",
                caption: "The top view of the quadcopter. Included a camera, IMU, and GPS module for navigation.",
            },
            {
                src: "/projects/drone-testing.mp4",
                caption: "A video of me tuning the PID controllers with a string holding the quadcopter from the ceiling. In these tests I tried to remove the 'wobble' by changing PID parameters for the roll, pitch, and yaw of the quadcopter.",
            },
        ],
        size: 'lg',
        link: "https://github.com/smonzon14/PiDrone",
    },
    {
        name: "Mushroom Environment Controller",
        description: "A custom-built environment controller for mushroom cultivation, featuring an ESP32 microcontroller, a custom PCB, and OLED display. The controller was able to atomize water, connect to the internet, power UV lights, control PC fans, generate heat/cold with a Peltier solid-state cooling device, and had a selector knob for user-interaction. Sadly, something shorted out and I was unable to grow mushrooms :( but I plan on reviving it one day.",
        images: [
            {
                src: "/projects/mushete-board-completed.JPEG",
                caption: "A custom-built environment controller for mushroom cultivation, featuring an ESP32 microcontroller, and a custom PCB with several interfaces.",
            },
            {
                src: "/projects/mushete-kicad.jpg",
                caption: "The KiCAD schematic for the mushroom environment controller, featuring a built-in custom humidifier and fan controller circuit.",
            },
            {
                src: "/projects/mushete-board-pcb.jpg",
                caption: "The custom PCB design for the mushroom environment controller, designed in KiCAD. The PCB features an ESP32 microcontroller, OLED display, a tempurature/humidity sensor, humidifier, fan outputs, and a Peltier cooling/heating device.",
            },
            {
                src: "/projects/mushete-sensor.mp4",
                caption: "The temperature and humidity sensor used in the mushroom environment controller, which relays data to an OLED display.",
            },
            {
                src: "/projects/mushete-mount.png",
                caption: "The custom mount for the Peltier cooling/heating device, designed to fit the retro-fitted PC case. The mount was designed to be easily removable for maintenance.",
            },
            {
                src: "/projects/mushete-case.jpg",
                caption: "The setup of the mushroom environment, built with an old PC case, mylar insulation, and UV lights.",
            }
        ],
        size: 'lg',
    },
    {
        name: "3D Printer Cooling System",
        description: "A custom-built cooling fan mount, and nozzle system for a 3D printer to improve capabilities and print quality.",
        images: [
            {
                src: "/projects/3dprinter-attachment.jpg",
                caption: "A custom-built cooling fan, mount, and nozzle system for a 3D printer. I built the original 3D Printer from a kit, and I designed this cooling system to improve the printer's capabilities and print-quality.",
            },
            {
                src: "/projects/3dprinter-design.png",
                caption: "The first revision for a cooling nozzle, designed in Fusion 360.",
            },
            {
                src: "/projects/3dprinter-design2.png",
                caption: "The second revision for a cooling nozzle, showing that simplicity is king.",
            },
            {
                src: "/projects/3dprinter-mount.png",
                caption: "The cooling mount, designed to fit the printer's extrusion system.",
            },
            {
                src: "/projects/3dprinter-nozzle.gif",
                caption: "A 3D-printer stress test, showing the cooling system in action on a glass bed with intricate supports. This was a major improvement overall.",
            }
        ],
        size: 'md',
    },
    {
        name: "Anybody Home?",
        description: "An ESP8266 project that detects when someone is home by scanning for their phone's MAC address, which can be used to trigger automations or send notifications. I decommissioned it (because it's creepy), but when you live in the attic - sometimes it's hard to tell who's home!",
        images: [
            {
                src: "/projects/whoshome.jpg",
                caption: "An ESP8266 that detects when someone is home by scanning for their phone's MAC address.",
            },
        ],
        size: 'sm',
    },
    {
        name: "Breaker Panel Monitor",
        description: "A custom-built breaker panel monitor that detects when a circuit is tripped and sends a notification to your phone. I designed this project to monitor the stubborn circuit that controlled a heater in my college house, and it worked great! (cheaper than calling an electrician)",
        images: [
            {
                src: "/projects/breaker-panel.jpg",
                caption: "A custom-built breaker panel monitor that detects when a circuit is tripped and sends a notification to your phone.",
            },
            {
                src: "/projects/breaker-ifttt.PNG",
                caption: "Notifications were sent to my phone when the circuit was tripped. For this I used IFTTT.",
            }
        ],
        size: 'sm',
    },
]

export const projects: Project[] = [
    ...researchProjects,
    ...engineeringProjects,
    ...codingProjects,
]