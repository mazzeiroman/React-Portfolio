import React, { Component } from 'react';
import "./style.css";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import SocialMedia from "../components/SocialMedia";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <br></br>
        <SocialMedia/>
        <div>
        <Container>
        <br></br>
        <div className="textarea"> 
        <Row >
          <Col size="md-12" >
          <h1> Contact</h1>
          </Col>
        </Row>
        </div>
        <br></br>
        </Container>
        </div>
        <Container>
          <Row>
          <Col size="md-12">
            <br></br>
      <div className='ContactForm textarea'>
      <br></br>
      <br></br>
        <form id='contact-form' noValidate>
          <div className='row'>
            <div className='col-6'>
              <input
                type='text'
                name='name'
                value={this.state.name}
                className='form-control formInput'
                onChange={this.handleChange}
                placeholder='Name'
                noValidate
              ></input>
            </div>

            <div className='col-6'>
              <input
                type='email'
                name='email'
                value={this.state.email}
                className='form-control formInput'
                onChange={this.handleChange}
                placeholder='Email'
                noValidate
              ></input>
            </div>
          </div>

          <div className='row'>
            <div className='col-6'>
              <input
                type='subject'
                name='subject'
                value={this.state.subject}
                className='form-control formInput'
                onChange={this.handleChange}
                placeholder='Subject'
                noValidate
              ></input>
            </div>

            <div className='col-6'>
              <textarea
                rows='5'
                name='message'
                value={this.state.message}
                className='form-control formInput'
                onChange={this.handleChange}
                placeholder='Message'
                noValidate
              ></textarea>
            </div>
          </div>
          <br></br>
          <br></br>
          <div className='title'>
          <button className='submit-btn' type='submit'>
            Submit
          </button>
          </div>
        </form>
        <br></br>
        <br></br>
      </div>
      </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Contact;