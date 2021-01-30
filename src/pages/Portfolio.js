import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import SocialMedia from "../components/SocialMedia";
import CardPortfolio from "../components/CardPortfolio";


let portfolio = [
  {
      name: "Vinyl Destination",
      img: "./images/home.jpg",
      description: "A full-stack application. An Album collection developed using MySQL, Node, Express, Handlebars, sequelize and Passport (Pull out all the stops!). Following the MVC design pattern.",
      repo: "https://github.com/rachelrosenstein/Vinyl-Destination",
      deployed: "https://vinyl-destination.herokuapp.com/"
  },
  {
      name: "Weather Dashboard",
      img: "./images/weather.jpg",
      description: "A web application so the user can see the weather anywhere they want, using the OpenWeather API to retrieve weather data for cities.",
      repo: "https://github.com/mazzeiroman/weather-dashboard",
      deployed: "https://mazzeiroman.github.io/weather-dashboard/"
  },
  {
      name: "Look & Laugh App",
      img: "./images/joke.jpg",
      description: "A mental health and wellness application to help relieve stress and anxiety, Search a word, have a laugh. Save your images, and jokes for later.",
      repo: "https://github.com/theoriginalison/look-laugh",
      deployed: "https://theoriginalison.github.io/look-laugh/"
  },
  {
      name: "Daily Schedule",
      img: "./images/scheduler.jpg",
      description: "A simple calendar application that allows a user to save events for each hour of the day by modifying starter code.",
      repo: "https://github.com/mazzeiroman/work-day-scheduler",
      deployed: "https://mazzeiroman.github.io/work-day-scheduler/."
  },
  {
      name: "JavaScript Quiz",
      img: "./images/quiz.jpg",
      description: "The user arrives at the home page with a timer set to 1min, and presses the button 'Start!' to start the quiz and the countdown on the timer",
      repo: "https://github.com/mazzeiroman/code-quiz",
      deployed: "https://mazzeiroman.github.io/code-quiz/"
  },
  {
      name: "Team-generator",
      img: "./images/team.jpg",
      description: "This application was created using node.JS and allows the user to generate a professional HTML file after answering a few questions/prompts using the console.",
      repo: "https://github.com/mazzeiroman/team-generator",
      deployed: "https://drive.google.com/file/d/1w67HImkFGj4f2AtNqlJlm6b9yVuoROn5/view"
  },
  {
      name: "Eat-da-burger",
      img: "./images/eatdaburg.jpg",
      description: "A burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!). Following the MVC design pattern; using Node and MySQL to query and route data in the app, and Handlebars to generate HTML.",
      repo: "https://github.com/mazzeiroman/eat-da-burger",
      deployed: "https://mighty-basin-34115.herokuapp.com/"
  },
  {
      name: "Employee-tracker",
      img: "./images/employee.jpg",
      description: "This application was created using node.JS and MySQL allows the user to generate, view and manage the departments, roles, and employees in a company.",
      repo: "https://github.com/mazzeiroman/employee-tracker",
      deployed: "https://drive.google.com/file/d/1KUuQIrWXG5VOb6ojj2jK6YCjk3Lc_p00/view"
  },
  {
      name: "README-GENERATOR",
      img: "./images/readme.jpg",
      description: "A simple application that allows the user to create a a high-quality, professional README.md answering a few questions using the terminal or console. This allows the project creator to devote more time working on the project.",
      repo: "https://github.com/mazzeiroman/README-GENERATOR",
      deployed: "https://drive.google.com/file/d/1mJu0J4XZoFvBORfSU61gKcUDyT5Ph9JT/view?usp=sharing"
  }
];

function Portfolio() {
  return (
    <div>
      <br></br>
      <SocialMedia/>
      <Container>

        <Row >
          <Col size="md-12">
            <div className = "textarea">
          <h1> Portfolio</h1>
          </div>
          </Col>
        </Row>
        <br></br>
        <Row>
          {portfolio.map(project => (
            <CardPortfolio project={project}/>
          ))}
        </Row>

      </Container>
    </div>
  );
}

export default Portfolio;