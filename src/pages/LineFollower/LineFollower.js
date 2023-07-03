import React from "react";
import { Footer } from "../../components/Footer";
import { ProjectsNavBar } from "../../components/ProjectsNavBar";
import ProjectBanner from "../../components/ProjectBanner";
import ProjectDescription from "../../components/ProjectDescription";
import ProjectImages from "../../components/ProjectImages";
import RoboticsProjectList from "../../components/RoboticsProjectList";

export default function LineFollower({ projectId }) {
  return (
    <div>
      <ProjectsNavBar></ProjectsNavBar>
      <ProjectBanner projectId={0}></ProjectBanner>
      <ProjectDescription projectId={0}></ProjectDescription>
      <ProjectImages projectId={0}></ProjectImages>
      <Footer />
    </div>
  );
}
