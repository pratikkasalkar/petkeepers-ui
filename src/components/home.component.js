import React, { Component } from "react";
import { Card, Icon, Image,Button } from "semantic-ui-react";
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";


export default class Home extends Component {
    render() {
        return (

          <div className="card-container">
            <Card.Group>
            <Card>
              <Image
                src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>Matthew</Card.Header>
                <Card.Meta>
                  <span className="date">Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                  Matthew is a musician living in Nashville.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
              <ReactStars count={5} size={24} activeColor="#ffd700" edit={false} value={4}/>
              </Card.Content>
              <Card.Content extra>
        <div className='ui contact-btn'>
          <Button  className="btn btn-outline-primary btn-lg">
            Contact
          </Button>         
        </div>
      </Card.Content>
            </Card>
            <Card>
              <Image
                src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>Matthew</Card.Header>
                <Card.Meta>
                  <span className="date">Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                  Matthew is a musician living in Nashville.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
              <ReactStars count={5} size={24} activeColor="#ffd700" edit={false} value={4}/>
              </Card.Content>
              <Card.Content extra>
              <div className='ui contact-btn'>
          <Button  className="btn btn-outline-primary btn-lg">
            Contact
          </Button>         
        </div>
      </Card.Content>
            </Card>
            <Card>
              <Image
                src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>Teena</Card.Header>
                <Card.Meta>
                  <span className="date">Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                  Matthew is a musician living in Nashville.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
              <ReactStars count={5} size={24} activeColor="#ffd700" edit={false} value={1}/>
              </Card.Content>
              <Card.Content extra>
              <div className='ui contact-btn'>
          <Button  className="btn btn-outline-primary btn-lg">
            Contact
          </Button>         
        </div>
      </Card.Content>
            </Card>
          </Card.Group>
    </div>
            
        );
    }
}
