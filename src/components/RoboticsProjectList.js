import LineFollowerImg1 from "../assets/img/LineFollowerV1,1.jpg";
import LineFollowerImg2 from "../assets/img/LineFollowerV1,2.jpg";
import LineFollowerImg3 from "../assets/img/LineFollowerV1,3.jpg";
import UTT from "../assets/videos/UTT.mp4";

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

  {
    projectId: 0,
    title: "Line Follower V1",
    veryShortDescription: "V1",
    landingDescription:
      " Printed Circuit Board (PCB) that uses an optic sensor array to detect a black-line track and operate an entire mobile system.",
    githubLink: "https://github.com/Fox-Robotics/Line-follower-v1",
    longDescription:
      "The Line Follower V1 functions via the QTR-8A Reflectance Sensor Array to detect a black line in the track. This optic sensor sends an analog signal to the Arduino Nano, the Machine Control Unit (MCU). The analog signal received by the MCU is sent again to the TB6612FNG Dual Motor Driver Carrier which consequently controls the two motors on the back wheels. The entire system is powered with a 7.4V Lipo battery.",
    technologies: ["C++", "KiCAD",],
    technologiesDescription:
      "Printed circuit board designed using KiCAD and engineered by a C++ code",
    media: [
      [LineFollowerImg1, "image"],
      [LineFollowerImg2, "image"],
      [LineFollowerImg3, "image"],
      [UTT, "video"],
    ],
    members: ["Francisco Durazo", "Luis Adrian Cabrera", "Elias Rubio", "Dahel Corona", "Ana Sofia Soto", "Miguel Borquez", "Diego Rubio", "Ceesar Jaramillo", "Blanca Ramirez"],
  },
  
  {
    projectId: 1,
    title: "Line Follower V2",
    veryShortDescription: "V2",
    landingDescription:
      "2Here at Fox Robotics, we are looking for opportunities to change the way you look at technologies. We are innovators, we are disruptors.",
    pageLink: "",
    githubLink: "https://github.com/Fox-Robotics/Line-follower-v1",
    longDescription:
      "2Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    technologies: ["C", "KiCAD"],
    technologiesDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    media: [
      [LineFollowerImg1, "image"],
      [LineFollowerImg2, "image"],
      [LineFollowerImg3, "image"],
    ],
    members: ["2juanito", "2luis", "2pancho"],
  },
];

export default Roboticsprojects;
