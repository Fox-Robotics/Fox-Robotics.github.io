import React from "react";
import { useSearchParams } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { ProjectsNavBar } from "../../components/ProjectsNavBar";
import ProjectBanner from "../../components/ProjectBanner";
import ProjectDescription from "../../components/ProjectDescription";
import ProjectImages from "../../components/ProjectImages";
import Roboticsprojects from "../../components/RoboticsProjectList";
import codingProjects from "../../components/CodingProjectList";
import ProjectMembers from "../../components/ProjectMembers";

export default function ProjectPage() {
  const [searchParams] = useSearchParams();
  let id = 0;
  let projectList = Roboticsprojects;
  if (searchParams.get("type") === "coding") {
    projectList = codingProjects;
  }
  if (searchParams.get("projectId") < projectList.length) {
    id = searchParams.get("projectId");
  }
  return (
    <div>
      <ProjectsNavBar></ProjectsNavBar>
      <ProjectBanner projectId={id} projectList={projectList}></ProjectBanner>
      <ProjectDescription
        projectId={id}
        projectList={projectList}
      ></ProjectDescription>
      <ProjectImages projectId={id} projectList={projectList}></ProjectImages>
      <ProjectMembers projectId={id} projectList={projectList}></ProjectMembers>
      <Footer />
    </div>
  );
}
