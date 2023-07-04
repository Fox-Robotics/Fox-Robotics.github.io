import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TechToLogo from "./TechToLogo";

export const Technologies = ({ projectId, projectList }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="technologies" id="Technologies">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="technologies-bx wow zoomIn">
              <h2>Technologies</h2>
              <p>{projectList[projectId].technologiesDescription}</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme technologies-slider"
              >
                {projectList[projectId].technologies.map((project, index) => {
                  return (
                    <div className="item" key={index}>
                      <img src={TechToLogo[project]} alt="Image" />
                      <h5>{project}</h5>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
