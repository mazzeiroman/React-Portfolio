import React from "react";
import "./style.css";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import SocialMedia from "../components/SocialMedia";
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'


function Home() {
  return (
    <div>
      <SocialMedia />
      <Container>
        <br></br>
        <div className="textarea">
          <Row >
            <Col size="md-3" >
              <img src="/images/romanmazzei.jpg" alt="profile picture" className="ppic" />
            </Col>
            <Col size="md-9">
              <h1>  Hi, I'm Roman Mazzei  </h1>
            </Col>
          </Row>
        </div>
      </Container>
      <br></br>
      <Container >
        <Row className="textarea">
          <Col size="md-12" >
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
          <br></br>
        </Row>
      </Container>
      <Container >
        <div className="textarea">
          <Row >
            <Col size="md-12">
              <h2> My Skills </h2>
            </Col>
          </Row>

              <CardDeck style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
              {" . "}
                <Card border="primary" style={{ width: '10rem', flex: 1}}>
                  <Card.Header>Constant learning</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      Learning is essential to success in your personal life and your work life.
                      And since coding is always changing and evolving it is essential to keep learning new technologies to advance in the field.
                  </Card.Text>
                  </Card.Body>
                </Card>
                {" . "}
                <Card border="primary" style={{ width: '18rem', flex: 1 }}>
                  <Card.Header>Problem Solving</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      Being a confident problem solver is really important to your success.
                      I am always trying to find solutions to problems through genereating alternatives and evaluating them, to detect different paths towards better results.
                  </Card.Text>
                  </Card.Body>
                </Card>
                {" . "}
                <Card border="primary" style={{ width: '18rem', flex: 1 }}>
                  <Card.Header>Multilingual</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      Being multilingual actually changes your brain structure, and this can help you in multiple ways.
                      It improves your memory, helps you process information better, and helps with multitasking skills.
                  </Card.Text>
                  </Card.Body>
                </Card>
                {" . "}
                <Card border="primary" style={{ width: '18rem', flex: 1 }}>
                  <Card.Header>Analytical thinking</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      Working with structural design taught me how to use the step-by-step approach to thinking, and that allows me to break
                      down complex problems into single and manageable components with easier solutions.
                  </Card.Text>
                  </Card.Body>
                </Card>
                {" . "}
              </CardDeck>
        </div>
      </Container>
    </div>
  );
}

export default Home;
