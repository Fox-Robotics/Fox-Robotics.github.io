import { Col } from "react-bootstrap";

export const ProjectCard = ({
  title,
  images,
  projectId,
  veryShortDescription,
}) => {
  console.log(images[0]);
  return (
    <Col size={12} sm={6} md={4}>
      <a
        href={"/projects?projectId=" + projectId}
        className="text-decoration-none text-white"
      >
        <div className="proj-imgbx">
          <img src={images[0]} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{veryShortDescription}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};
