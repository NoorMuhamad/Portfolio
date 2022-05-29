import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import covid from "../../Assets/Projects/covid.png";
import redQueen from "../../Assets/Projects/redQueen.png";
import feeding from "../../Assets/Projects/feeding.png";
import M3 from "../../Assets/Projects/m3u.png";
import miss from "../../Assets/Projects/missAmerican.png";
import khel from "../../Assets/Projects/khel-khel.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={M3}
              isBlog={false}
              title="M3U-editor (Laravel)"
              description="That a service based project in which I worked on generating playlist by link just like we can insert a link it fetched all stuff related to that link. and also divided into user subscription like diamond gold silver category and arranged their prices accordingly to user subscription. it has two side user side and admin side, all stuff related to that playlist and regrading to  their billing control by admin. Also integrate the paypal payment method in that project."
              link="https://m3u-editor.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={khel}
              isBlog={false}
              title="Khel-Khilari (Angular+Nest.js)"
              description="Khel Khilari will be an online venue finder that will help users find nearby sports venue according to their requirements like price range, this will provide ease to all sport enthusiasts and players who aren’t aware of venues near them. Knowledge areas of this project are Application development and Website development. It will also offer exclusive sales and marketing services to sports venue owners to generate revenue. In addition to that it will also provide features such as team formation, match making, live scoring, umpire hiring and rating."
              link="https://github.com/NoorMuhamad/khel-khilari-web"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={feeding}
              isBlog={false}
              title="FeedingPlatform (Laravel)"
              description="That project is feeding platform a america NGO who worked into Africa and middle east for feeding people its charity based application.I build this application using laravel  on that project i am also 6 to 7 seven months  it has different portal lives that donor super admin and manager all these portal has their own functionalities."
              link="https://feedingplatform.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={covid}
              isBlog={false}
              title="Covid-19 API (React.js)"
              description="That Project is all about to understand the condition of country and also fetch the data from the api and show into project and also understand the concept and also deploy on the Surge.sh "
              link="https://github.com/NoorMuhamad/project02_Covid19"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={miss}
              isBlog={false}
              title="Miss America (Laravel)"
              description="Miss America is online portal to automate the american miss and mao teen selection. This project has 4 portal super state local and candidate portal local managing local competitions and state managing state portal and national managing main mao and miss selection and in candidate portal every candidate can see his cooperation his state and every stuff related to his miss america way and in this project  also integrated STRIPE API payment."
              link="http://phplaravel-704464-2332106.cloudwaysapps.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={redQueen}
              isBlog={false}
              title="Red Queen (React + Web animation)"
              description="Red Queen project understand the concept of animation and also implement the a concept of the Web Animations API allows for synchronizing and timing changes to the presentation of a Web page, i.e. animation of DOM elements. It does so by combining two models: the Timing Model and the Animation Model."
              link="https://github.com/NoorMuhamad/Red-Queen-Project-04-A"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
