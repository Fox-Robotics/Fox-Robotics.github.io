import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Clogo from "../assets/img/C-logo.png";
import kicatlogo from "../assets/img/kicat-logo.png";
import altium from "../assets/img/altium-logo.png";

export const Skills = () => {
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
    <section className="skill" id="Technologies">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Technologies</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.<br></br> Lorem Ipsum has been the industry's standard
                dummy text.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={Clogo} alt="Image" />
                  <h5>C</h5>
                </div>
                <div className="item">
                  <img src={kicatlogo} alt="Image" />
                  <h5>KiCAT</h5>
                </div>
                <div className="item">
                  <img src={altium} alt="Image" />
                  <h5>Altium Design</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
