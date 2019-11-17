import React from "react";
import "./App.css";
import { Header, Card, Icon } from "semantic-ui-react";

function App() {
  return (
    <div className="App">
      <div className="right">
        <Header as="h2">Easier ML Ops</Header>
      </div>
      <div className="left">
        <div>
          <Header as="h2">Face Recognition</Header>

          <Card.Group>
            <Card>
              <Card.Content>
                <Card.Header>Model 1</Card.Header>
                <Card.Meta>
                  <span className="date">Deployed 6:10am</span>
                </Card.Meta>
                <Card.Description>Some Commit Message</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="info" />
                  version 1.0
                </a>
              </Card.Content>
            </Card>

            <Card>
              <Card.Content>
                <Card.Header>Model 1</Card.Header>
                <Card.Meta>
                  <span className="date">Deployed 6:10am</span>
                </Card.Meta>
                <Card.Description>Some Commit Message</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="info" />
                  version 2.0
                </a>
              </Card.Content>
            </Card>

            <Card>
              <Card.Content>
                <Card.Header>Model 1</Card.Header>
                <Card.Meta>
                  <span className="date">Deployed 6:10am</span>
                </Card.Meta>
                <Card.Description>Some Commit Message</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="info" />
                  version 3.0
                </a>
              </Card.Content>
            </Card>
          </Card.Group>
        </div>

        <div>
          <br/>
          <Header as="h2">Named Entity Extraction</Header>

          <Card.Group>
            <Card>
              <Card.Content>
                <Card.Header>Model 2</Card.Header>
                <Card.Meta>
                  <span className="date">Deployed 6:10am</span>
                </Card.Meta>
                <Card.Description>Some Commit Message</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="info" />
                  version 1.0
                </a>
              </Card.Content>
            </Card>

            <Card>
              <Card.Content>
                <Card.Header>Model 2</Card.Header>
                <Card.Meta>
                  <span className="date">Deployed 6:10am</span>
                </Card.Meta>
                <Card.Description>Some Commit Message</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="info" />
                  version 2.0
                </a>
              </Card.Content>
            </Card>

            
          </Card.Group>
        </div>
      </div>
    </div>
  );
}

export default App;
