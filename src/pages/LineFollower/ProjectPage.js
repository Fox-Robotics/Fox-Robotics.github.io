import React from "react";
import { useSearchParams } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { ProjectsNavBar } from "../../components/ProjectsNavBar";
import ProjectBanner from "../../components/ProjectBanner";
import ProjectDescription from "../../components/ProjectDescription";
import ProjectImages from "../../components/ProjectImages";
import RoboticsProjectList from "../../components/RoboticsProjectList";

export default function ProjectPage() {
  const [searchParams] = useSearchParams();
  let id = 0;
  if (searchParams.get("projectId") < RoboticsProjectList.length) {
    id = searchParams.get("projectId");
  }
  return (
    <div>
      <ProjectsNavBar></ProjectsNavBar>
      <ProjectBanner projectId={id}></ProjectBanner>
      <ProjectDescription projectId={id}></ProjectDescription>
      <ProjectImages projectId={id}></ProjectImages>
      <Footer />
    </div>
  );
}
