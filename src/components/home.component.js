import React, { Component, Link } from "react";
import { Card, Image, Button } from "semantic-ui-react";
import ReactStars from "react-rating-stars-component";
import pratik from "./images/prtk.jpg";
import vaish from "./images/vaish.jpg";
import teena from "./images/teena.jpg";
import dogImg from "./images/Dog walking-rafiki.svg";
import axios from 'axios';


export default class Home extends Component {

  render() {

    const sendMail = () => {
      axios.get('localhost:8080/nci/sendemail').then(response => {console.log(response)}).catch(error =>  {console.log(error)});
      alert("Email Request Sent!")
      
    }

    return (
     <> <div>
       <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <a class="navbar-brand" href="#">Signed in as Pet Owners</a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">History</a> 
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Logout</a> 
            </li>
          </ul>
        </div>
      </div>
    </nav>
   
    <div className="main">
    <div className="header-container">
      <Image src={dogImg} className="img-container" wrapped ui={false} />
      <h3 className="section-header">MEET THE KEEPERS </h3>      
    </div>
      <div className="card-container">
        <Card.Group>
          <Card>
            <div className="card-upper">
              <Image
                src={pratik}
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>Pratik Kasalkar</Card.Header>
                <Card.Meta>
                  <span className="date">Joined in 2015 || Petkeeper </span>
                </Card.Meta>
                <Card.Description>
                  Pratik Kasalkar is a Software Engineer, loves dogs and wants to own a dog one day.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <ReactStars count={5} size={24} activeColor="#ffd700" edit={false} value={4} />
              </Card.Content>
            </div>
            <div className="card-lower">
              <Card.Content extra>
                <div className='ui contact-btn'>
                  <Button className="btn btn-outline-primary btn-lg" onClick={sendMail}>
                    Contact
                  </Button>
                </div>
              </Card.Content>
            </div>
          </Card>
          <Card>
          <div className="card-upper">
              <Image
                src={vaish}
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>Vaishnavi Kasar</Card.Header>
                <Card.Meta>
                  <span className="date">Joined in 2020 || Petkeeper</span>
                </Card.Meta>
                <Card.Description>
                  I'm Vaishnavi Kasar student from NCI who is a zoophilist. Dogs tend to be energetic, faithful, and easy to get along with, well, so do I love them a lot!
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <ReactStars count={5} size={24} activeColor="#ffd700" edit={false} value={4} />
              </Card.Content>
            </div>
            <div className="card-lower">
              <Card.Content extra>
                <div className='ui contact-btn'>
                  <Button className="btn btn-outline-primary btn-lg">
                    Contact
                  </Button>
                </div>
              </Card.Content>
            </div>
          </Card>
          <Card>
          <div className="card-upper">
              <Image
                src={teena}
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>Teena Kohli</Card.Header>
                <Card.Meta>
                  <span className="date">Joined in 2018 || Petkeeper/Petowner</span>
                </Card.Meta>
                <Card.Description>
                  Teena is a DevOps Engineer. She's got a German Shepard and loves animals.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <ReactStars count={5} size={24} activeColor="#ffd700" edit={false} value={1} />
              </Card.Content>
            </div>
            <div className="card-lower">
              <Card.Content extra>
                <div className='ui contact-btn'>
                  <Button className="btn btn-outline-primary btn-lg">
                    Contact
                  </Button>
                </div>
              </Card.Content>
            </div>
          </Card>
        </Card.Group>
      </div>
      </div>
      </div>
      </>
    );
  }
}
