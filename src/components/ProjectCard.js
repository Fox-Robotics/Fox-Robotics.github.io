import { Col } from "react-bootstrap";
import VideoImage from "./VideoImage";

export const ProjectCard = ({
  title,
  media,
  projectId,
  veryShortDescription,
  type,
}) => {
  let hiperlink;
  let projClassName = "proj-imgbx1";
  if (projectId !== undefined) {
    hiperlink = "/#/Projects?projectId=" + projectId + "&type=" + type;
    projClassName = "proj-imgbx";
  }
  return (
    <Col size={12} sm={6} md={4}>
      <a href={hiperlink} className="text-decoration-none text-white">
        <div className={projClassName}>
          <VideoImage media={media} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{veryShortDescription}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};
