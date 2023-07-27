import LineFollowerImg1 from "../assets/img/LineFollowerV1,1.jpg";
import LineFollowerImg2 from "../assets/img/LineFollowerV1,2.jpg";
import LineFollowerImg3 from "../assets/img/LineFollowerV1,3.jpg";
import Follower_V2 from "../assets/img/Follower_V2.jpg";
import Mecha from "../assets/img/Mecha.png";
import Emitter from "../assets/img/Emitter.png";
import Receiver from "../assets/img/Receiver.png";
import MazeSolver from "../assets/img/MazeSolver.png";
import SMPS from "../assets/img/SMPS.png";

/*
---------Notas Sobre como llenar el archivo---------
El nombre de las tecnologias tiene que estar escrito exactamente asi para que funcione
C, Cpp, KiCAD, Altium, Solidworks, Python

El githubLink puede estar vacio si no hay repositorio, ejemplo: githubLink: "",

En media, aparecen en el orden que se ponen, la primera es la que aparece en grande

El projectId tiene que empezar en 0 e ir en orden asendiente. No deben repetirse.

*/

const Roboticsprojects = [
  {
    projectId: 0,
    title: "Line Follower V1",
    veryShortDescription: "V1",
    landingDescription:
      " Printed Circuit Board (PCB) that uses an optic sensor array to detect a black-line track and operate an entire mobile system.",
    githubLink: "https://github.com/Fox-Robotics/Line-follower-v1",
    longDescription:
      "The Line Follower V1 functions via the QTR-8A Reflectance Sensor Array to detect a black line in the track. This optic sensor sends an analog signal to the Arduino Nano, the Machine Control Unit (MCU). The analog signal received by the MCU is sent again to the TB6612FNG Dual Motor Driver Carrier which consequently controls the two motors on the back wheels. The entire system is powered with a 7.4V Lipo battery.",
    technologies: ["Cpp", "KiCAD"],
    technologiesDescription:
      "Printed circuit board designed using KiCAD and engineered by a C++ code",
    media: [
      [LineFollowerImg1, "image"],
      [LineFollowerImg2, "image"],
      [LineFollowerImg3, "image"],
    ],
    members: [
      "Francisco Durazo",
      "Luis Adrian Cabrera",
      "Elias Rubio",
      "Dahel Corona",
      "Ana Sofia Soto",
      "Miguel Borquez",
      "Diego Rubio",
      "Ceesar Jaramillo",
      "Blanca Ramirez",
    ],
  },

  {
    projectId: 1,
    title: "Line Follower V2",
    veryShortDescription: "V2",
    landingDescription:
      "Printed Circuit Board (PCB) that redesigns the circuit of Line Follower V1 to optimize space and correct design mistakes to obtain an optimal Line-follower device.",
    githubLink: "https://github.com/Fox-Robotics/Line-follower-V2.git",
    longDescription:
      "The Line Follower V2  functions via the QTR-8A Reflectance Sensor Array to detect a black line in the track. This optic sensor sends an analog signal to the Arduino Nano, the Machine Control Unit (MCU). The analog signal received by the MCU is sent again to the TB6612FNG Dual Motor Driver Carrier which consequently controls the two motors on the back wheels. The entire system is powered with a 7.4V Lipo battery.",
    technologies: ["Cpp", "KiCAD"],
    technologiesDescription:
      "Printed circuit board designed using KiCAD and engineered by a C++ code",
    media: [[Follower_V2, "image"]],
    members: ["MIguel Borquez", "Ana Sofia Soto ", "Kevin Payan"],
  },

  {
    projectId: 2,
    title: "Linkage Mechanisms",
    veryShortDescription: "Mechanisms",
    landingDescription:
      "3D printed Linkage mechaisms designed with SolidWorks 2023.",
    githubLink: "https://github.com/Fox-Robotics/Mecanismos.git",
    longDescription:
      "The models were designed using SolidWorks 2022, where we conducted a series of motion studies to analyze the behavior of the crank. Once the analysis was complete, we proceeded to 3D print the model for further examination. We utilize a piece of plywood as the base allowing us to observe the mechanism more precisely. For the 3D printing of the model, we use Polylactic Acid (PLA) filament for the assembly parts of the crank.",
    technologies: [
      "Solidworks",
      "Working Model",
      "Ultimaker Cura",
      "Creality 3D",
    ],
    technologiesDescription:
      "Models design by solidworks, analyzed with Working Model, and manufactured via Cura and Creality Slicers",
    media: [[Mecha, "image"]],
    members: [
      "Luis Adrian Cabrera",
      "Jose Angel FIgueroa Zavala",
      "Gael Hurtado",
      "Fernando Guerrero",
      "Alejandro Padilla",
      "Yong Yi He",
      "Hector Fregoso",
      "Diego Campos",
    ],
  },

  {
    projectId: 3,
    title: "RadioFrequency Transmitter and Receiver",
    veryShortDescription: "RF System",
    landingDescription:
      "Printed Board Designs, which combine to create a system that can control any electronic device via radiofrequency. ",
    githubLink:
      "https://github.com/Fox-Robotics/Radiofrequency-tansmitter-and-receiver.git",
    longDescription:
      "The transmitter combines two joysticks, and two toggle switches to form a 6-channel emitter via NRF24 Transceiver module. It functions using  a 7.4V Lipo battery, which connects AMS1117-5.0, and AMS1117-3.3 to regulate microcontroller and RF module voltages. The joysticks form two-pairs of analog signals, and the switches result in a pair of digital signals. sent to ATMega microchip by SPI Communication Protocol and emitted by RF module. The receiver is powered by a 7.4V Lipo Battery and uses the same voltage regulators for the same pair of components to give output for the emitted signals.",
    technologies: ["KiCAD", "Cpp"],
    technologiesDescription:
      "Printed circuit board designed using KiCAD and engineered by a C++ code",
    media: [
      [Emitter, "image"],
      [Receiver, "image"],
    ],
    members: ["Luis Adrian Cabrera", "Ivan Zhou Zhou"],
  },

  {
    projectId: 4,
    title: "Maze Solver Robot",
    veryShortDescription: "Maze Solver",
    landingDescription:
      "Printed circuit Board that involves an algorithm and three sensor inputs to evaluate obstacles and define a route to solve a Maze.",
    githubLink: "https://github.com/Fox-Robotics/Maze-solver.git",
    longDescription:
      "The Maze Solver has three infrared sensors that detect obstacles in a predefined maze. Such signals are sent to the Raspberry Pi Pico Microcontroller and from this MCU to a TB6612FNG Dual Motor Driver Carrier, which sends the corresponding signals to the motors in the back of the model to control the wheels. Therefore, the Maze Solver moves by sections.",
    technologies: ["KiCAD", "Cpp"],
    technologiesDescription:
      "Printed circuit board designed using KiCAD and engineered by a C++ code",
    media: [[MazeSolver, "image"]],
    members: ["Luis Adrian Cabrera", "Dahel Corona"],
  },

  {
    projectId: 5,
    title: "Split Rail Switch Mode Power Supply",
    veryShortDescription: "SMPS",
    landingDescription:
      "Printed Circuit Board Design that possesses two voltage regulators, which distribute a specific amount of voltage through 5v, 12v, and -12v outputs",
    githubLink: "https://github.com/Fox-Robotics/Conmutated-power-supply.git",
    longDescription:
      "The Commutated Power Supply uses a 7.4V Lipo Battery as the voltage input for a TPS5430DDA IC This Voltage Regulator modules an output of 5V, which connects to a pinout. The input voltage used for a TPS65131RGET IC Voltage Regulator is supplied by the output voltage of 5V. The TPS65131RGET Voltage Regulator controls output voltages of 12V and -12V connected to a pair of pinouts.",
    technologies: ["KiCAD"],
    technologiesDescription: "Printed circuit board design using KiCAD",
    media: [[SMPS, "image"]],
    members: ["Luis Adrian Cabrera", "Dahel Corona"],
  },
];

export default Roboticsprojects;
