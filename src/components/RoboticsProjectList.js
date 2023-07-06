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
    projectId: 0,
    title: "Line Follower V1",
    veryShortDescription: "V1",
    landingDescription:
      "Here at Fox Robotics, we are looking for opportunities to change the way you look at technologies. We are innovators, we are disruptors.",
    pageLink: "",
    githubLink: "https://github.com/Fox-Robotics/Line-follower-v1",
    longDescription:
      "dddLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    technologies: ["C", "KiCAD", "Altium", "Cpp", "Solidworks", "Python"],
    technologiesDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    media: [
      [LineFollowerImg1, "image"],
      [LineFollowerImg2, "image"],
      [LineFollowerImg3, "image"],
      [UTT, "video"],
    ],
    members: ["juanito", "luis", "pancho"],
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
