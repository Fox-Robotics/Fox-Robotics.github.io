import MyFoxyArt1 from "../assets/img/coding/MyFoxyArt/1.png";
import MyFoxyArt2 from "../assets/img/coding/MyFoxyArt/2.png";
import MyFoxyArt3 from "../assets/img/coding/MyFoxyArt/3.jpg";
import MyFoxyArt4 from "../assets/img/coding/MyFoxyArt/4.jpeg";
import MyFoxyArt5 from "../assets/img/coding/MyFoxyArt/5.jpg";
import MyFoxyArt6 from "../assets/img/coding/MyFoxyArt/6.jpeg";
import MyFoxyArt7 from "../assets/img/coding/MyFoxyArt/7.jpg";
import MyFoxyArt8 from "../assets/img/coding/MyFoxyArt/8.jpeg";
import MyFoxyArt9 from "../assets/img/coding/MyFoxyArt/9.png";
import TalentLand1 from "../assets/img/coding/TalentLand/1.gif";
import TalentLand2 from "../assets/img/coding/TalentLand/2.png";
import TalentLand3 from "../assets/img/coding/TalentLand/3.png";
import TalentLand4 from "../assets/img/coding/TalentLand/4.png";
import TalentLand5 from "../assets/img/coding/TalentLand/5.jpeg";
import TalentLand6 from "../assets/img/coding/TalentLand/6.jpeg";
import OpenSeaLab1 from "../assets/img/coding/OpenSeaLab/1.png";

/*
El nombre de las tecnologias tiene que estar escrito exactamente asi para que funcione
C, Cpp, KiCAD, Altium, Solidworks, Python, 
Tensorflow, Flask, React, JavaScript
*/

const codingProjects = [
  {
    projectId: 0,
    title: "Fox Sharing",
    veryShortDescription: "Talent Land 2023",
    landingDescription:
      "Mobile app for share mobility system that allows the user to have the availability to rent a car and move with it from one point to another safely.",
    pageLink: "",
    githubLink: "https://github.com/Fox-Robotics/Capgemini-FoxSharing-Front",
    longDescription: (
      <>
        This project was developed for the Genius Arena Talent Land 2023 on the
        Capgemini Car-To-Share track. Our goal was to develop and embeded system
        and a mobile app that enabled the user to rent, reserve, open and drive
        a shared car. <br />
        We developed an embedded system based on the ESP32 microcontroller that
        could be installed in most comercial cars and a cross platform mobile
        app to control it.
      </>
    ),
    technologies: [
      "ReactNative",
      "Python",
      "Flask",
      "JavaScript",
      "Altium",
      "AzureMaps",
      "AzureAppService",
    ],
    technologiesDescription:
      "React Native app with Flask backend hosted on Azure",
    media: [
      [TalentLand1, "image"],
      [TalentLand2, "image"],
      [TalentLand3, "image"],
      [TalentLand4, "image"],
      [TalentLand5, "image"],
      [TalentLand6, "image"],
    ],
    members: [
      "Diego Lorenzo Villalobos",
      "Anahi Hull",
      "Jorge Quintero Ruiz",
      "Cesar Rentería",
      "Fransico Millan",
    ],
  },
  {
    projectId: 1,
    title: "My Foxy Art",
    veryShortDescription: "NASA's Space Apps 2023",
    landingDescription:
      "A web application that applies artistic style transfer to NASA's images, extending a unique, never seen before picture.",
    pageLink: "https://foxrobotics.tech/MyFoxyArt.github.io/",
    githubLink: "https://github.com/Fox-Robotics/MyFoxyArt.github.io",
    longDescription:
      "Using ML/AI techniques, the team must develop a web application where once an user inputs a short text referring to space, the application searches through NASA´s repository of data and imagery, matching the input with the data found and creating brand new artistic images.",
    technologies: [
      "Python",
      "Flask",
      "Tensorflow",
      "React",
      "JavaScript",
      "Azure",
    ],
    technologiesDescription: "We utilize Tensorflow, Flask, and React",
    media: [
      [MyFoxyArt1, "image"],
      [MyFoxyArt2, "image"],
      [MyFoxyArt9, "image"],
      [MyFoxyArt3, "image"],
      [MyFoxyArt4, "image"],
      [MyFoxyArt5, "image"],
      [MyFoxyArt6, "image"],
      [MyFoxyArt7, "image"],
      [MyFoxyArt8, "image"],
    ],
    members: [
      "Alberto Mungía",
      "Diego Lorenzo Villalobos",
      "Francisco Millan",
      "Gael Hurtado",
    ],
  },
  {
    projectId: 2,
    title: "InvaSight",
    veryShortDescription: "Open Sea Lab 3.0 Hackathon",
    landingDescription:
      "To address this issue, InvaSight! aims to provide an accessible and efficient tool for monitoring and reporting invasive species in the Gulf of Mexico.",
    longDescription:
      "Citizen participation and environmental awareness are promoted through the reporting of invasive species sightings, creating a collaborative network among users, scientists, and authorities. InvaSight! was created with the communities of the regions whose economies and biodiversity have been negatively impacted by invasive species in mind. This app's objective is to facilitate the spread of information about this issue, so that its users are aware of the best course of action to take in order to prevent damage to themselves and their environment.",
    technologies: ["Figma", "HTML"],
    technologiesDescription:
      "This conceptual project served as a learning tool for new team members to familiarize with hackathons",
    media: [[OpenSeaLab1, "image"]],
    members: [
      "Anahi Hull",
      "Diego Lorenzo Villalobos",
      "Juan Alvaro Suarez",
      "Jorge Quintero Ruiz",
      "Francisco Millán",
      "César Rentería",
      "Abraham Saldivar",
      "Jose Melesio",
      "Blanca Ramirez",
      "Iñaki Perez",
    ],
  },
];

export default codingProjects;
