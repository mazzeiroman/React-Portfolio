import React from "react";
import { Link } from "react-router-dom";
import Col from "../Col";

function Card(props) {
  return (
   
    <Col size="md-4">
      <br></br>
        <br></br>
        <br></br>
      <Link to={props.project.repo} target="blank">
        <img 
        src={props.project.img}
        alt={props.project.name} 
        className="img-fluid border border-primary"/>
      </Link>
      <div className = "textarea">
      <h5>{props.project.name}</h5>
      <p>{props.project.description}</p>
      <div/>
        <Link to={props.project.repo} target="blank">
          GitHub Repo
        </Link>
        {" | "}
        <Link to={props.project.deployed} target="blank">
          Deployed Web App
        </Link>
        <br></br>
        <br></br>
      </div>
    </Col>
  
  );
}

export default Card;