import LineFollowerImg1 from "../assets/img/LineFollowerV1,1.jpg";
import LineFollowerImg2 from "../assets/img/LineFollowerV1,2.jpg";
import LineFollowerImg3 from "../assets/img/LineFollowerV1,3.jpg";
import MyFoxyArt1 from "../assets/img/coding/MyFoxyArt/1.png";
import MyFoxyArt2 from "../assets/img/coding/MyFoxyArt/2.png";
import MyFoxyArt3 from "../assets/img/coding/MyFoxyArt/3.jpg";
import MyFoxyArt4 from "../assets/img/coding/MyFoxyArt/4.jpeg";
import MyFoxyArt5 from "../assets/img/coding/MyFoxyArt/5.jpg";
import MyFoxyArt6 from "../assets/img/coding/MyFoxyArt/6.jpeg";
import MyFoxyArt7 from "../assets/img/coding/MyFoxyArt/7.jpg";
import MyFoxyArt8 from "../assets/img/coding/MyFoxyArt/8.jpeg";

/*
El nombre de las tecnologias tiene que estar escrito exactamente asi para que funcione
C, Cpp, KiCAD, Altium, Solidworks, Python, 
Tensorflow, Flask, React, JavaScript
*/

const codingProjects = [
  {
    projectId: 0,
    title: "My Foxy Art",
    veryShortDescription: "NASA's Space Apps 2023",
    landingDescription:
      "A web application that applies artistic style transfer to NASA's images, extending a unique, never seen before picture.",
    pageLink: "https://foxrobotics.tech/MyFoxyArt.github.io/",
    githubLink: "https://github.com/Fox-Robotics/MyFoxyArt.github.io",
    longDescription:
      "Using ML/AI techniques, the team must develop a web application where once an user inputs a short text referring to space, the application searches through NASA´s repository of data and imagery, matching the input with the data found and creating brand new artistic images.",
    technologies: ["Python", "Flask", "Tensorflow", "React", "JavaScript"],
    technologiesDescription: "We utilize Tensorflow, Flask, and React",
    media: [
      [MyFoxyArt1, "image"],
      [MyFoxyArt2, "image"],
      [MyFoxyArt3, "image"],
      [MyFoxyArt4, "image"],
      [MyFoxyArt5, "image"],
      [MyFoxyArt6, "image"],
      [MyFoxyArt7, "image"],
      [MyFoxyArt8, "image"],
    ],
    members: ["juanito", "luis", "pancho"],
  },
  {
    projectId: 1,
    title: "Coding 3",
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
    members: ["2juanito", "luis", "pancho"],
  },
];

export default codingProjects;
