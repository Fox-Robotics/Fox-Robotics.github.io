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
import TalentLand1 from "../assets/videos/coding/TalentLand/1.MP4";
import TalentLand2 from "../assets/img/coding/TalentLand/2.png";
import TalentLand3 from "../assets/img/coding/TalentLand/3.png";
import TalentLand4 from "../assets/img/coding/TalentLand/4.png";
import TalentLand5 from "../assets/img/coding/TalentLand/5.jpeg";
import TalentLand6 from "../assets/img/coding/TalentLand/6.jpeg";

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
      [TalentLand1, "video"],
      [TalentLand2, "image"],
      [TalentLand3, "image"],
      [TalentLand4, "image"],
      [TalentLand5, "image"],
      [TalentLand6, "image"],
    ],
    members: ["2juanito", "luis", "pancho"],
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
      [MyFoxyArt3, "image"],
      [MyFoxyArt4, "image"],
      [MyFoxyArt5, "image"],
      [MyFoxyArt6, "image"],
      [MyFoxyArt7, "image"],
      [MyFoxyArt8, "image"],
    ],
    members: ["juanito", "luis", "pancho"],
  },
];

export default codingProjects;
