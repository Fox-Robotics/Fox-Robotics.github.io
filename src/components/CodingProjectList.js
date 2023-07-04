import LineFollowerImg1 from "../assets/img/LineFollowerV1,1.jpg";
import LineFollowerImg2 from "../assets/img/LineFollowerV1,2.jpg";
import LineFollowerImg3 from "../assets/img/LineFollowerV1,3.jpg";

/*
El nombre de las tecnologias tiene que estar escrito exactamente asi para que funcione
C, Cpp, KiCAD, Altium, Solidworks, Python
*/

const codingProjects = [
  {
    projectId: 0,
    title: "Coding 1",
    veryShortDescription: "V1",
    landingDescription:
      "Here at Fox Robotics, we are looking for opportunities to change the way you look at technologies. We are innovators, we are disruptors.",
    githubLink: "https://github.com/Fox-Robotics/Line-follower-v1",
    longDescription:
      "dddLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    technologies: ["C", "KiCAD", "Altium", "Cpp", "Solidworks", "Python"],
    technologiesDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    images: [LineFollowerImg1, LineFollowerImg2, LineFollowerImg3],
    members: ["juanito", "luis", "pancho"],
  },
  {
    projectId: 1,
    title: "Coding 2",
    veryShortDescription: "V2",
    landingDescription:
      "2Here at Fox Robotics, we are looking for opportunities to change the way you look at technologies. We are innovators, we are disruptors.",
    githubLink: "https://github.com/Fox-Robotics/Line-follower-v1",
    longDescription:
      "2Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    technologies: ["C", "KiCAD"],
    technologiesDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    images: [LineFollowerImg1, LineFollowerImg2, LineFollowerImg3],
    members: ["2juanito", "luis", "pancho"],
  },
];

export default codingProjects;
