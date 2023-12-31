import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/Landign-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { HashLink as Link } from "react-router-hash-link";
import "animate.css";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(90);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "more then a robotics team.",
    "pushing boundaries in robotics.",
    "where creativity meets robotics.",
  ];
  const period = 900;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <div>
              <h1>
                {`We are FoxRobotics,`}{" "}
                <span
                  className="txt-rotate"
                  dataPeriod="1000"
                  data-rotate='[ "more then a robotics team", "pushing boundaries in robotics.", "where creativity meets robotics." ]'
                >
                  <span className="wrap">{text}</span>
                </span>
              </h1>
              <p>
                Here at Fox Robotics, we are looking for opportunities to change
                the way you look at technologies. We are innovators, we are
                disruptors.
              </p>
              <Link
                to="/#project"
                className="text-warning text-decoration-none"
              >
                <button className="text-warning" href="/#/#project">
                  See our projects
                  <ArrowRightCircle size={25} />
                </button>
              </Link>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div>
              <img
                src={headerImg}
                alt="Header Img"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
