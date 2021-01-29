import React from "react";
import "./style.css";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Home() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-3">
          <img src="../public/img/romanmazzei.jpg" className="rounded-circle mx-auto d-block ppic" alt="profile-picture"/>
          </Col>
          <Col size="md-9">
            <h1>  Hi, I'm Roman Mazzei  </h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          <h2>About me</h2>
            <p>
            Logical and results-driven employer-ready Full Stack Developer dedicated to building 
            and optimizing user-focused websites for customers with various business objectives.
             Judicious and creative when crafting effective websites, apps and platforms to propel 
             competitive advantage and revenue growth. Technically proficient and analytical problem 
             solver with calm and focused demeanor. Obtained a full stack web development certificate 
             from Penn LPS Coding Boot Camp. Fully proficient in HTML5, CSS3 and JavaScript, jQuery, 
             Bootstrap, Node.js, Git and Heroku. Eager to combine my background in Civil Engineering 
             with my technical skills to develop successful projects that meet customer needs.
            </p>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          <h2> My Skills </h2>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <div className="spread">
          <div className="card text-dark border-light mb-3">
          <div className="card-header border-primary">Constant learning</div>
          <div className="card-body text-dark">
            <p className="card-text">Learning is essential to success in your personal life and your work life.
              And since coding is always changing and evolving it is essential to keep learning new technologies to advance in the field.</p>
          </div>
        </div>

        <div className="card text-dark border-light mb-3">
          <div className="card-header border-primary">Problem Solving</div>
          <div className="card-body text-dark">
            <p className="card-text">Being a confident problem solver is really important to your success.
          I am always trying to find solutions to problems through genereating alternatives and evaluating them, to detect different paths towards better results.</p>
          </div>
        </div>

        <div className="card text-dark border-light mb-3">
          <div className="card-header border-primary">Multilingual</div>
          <div className="card-body text-dark">
            <p className="card-text">Being multilingual actually changes your brain structure, and this can help you in multiple ways.
          It improves your memory, helps you process information better, and helps with multitasking skills.</p>
          </div>
        </div>

        <div className="card text-dark border-light mb-3">
          <div className="card-header border-primary">Analytical thinking</div>
          <div className="card-body text-dark">
            <p className="card-text">Working with structural design taught me how to use the step-by-step approach to thinking, and that allows me to break 
        down complex problems into single and manageable components with easier solutions.</p>
          </div>
        </div>
        </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
