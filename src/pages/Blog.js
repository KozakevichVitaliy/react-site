import React, { Component } from 'react';
import { Container, Row, Col, Media, Card, ListGroup } from 'react-bootstrap';

export default class Blog extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="9">
            <Media className="m-5">
              <img
                width={150}
                height={150}
                className="mr-3"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                alt="JavaScript"
              />
              <Media.Body>
                <h5>Blog post</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ducimus alias
                  quibusdam aspernatur nesciunt ipsum, sed illum. Fugit dolorem ipsum illo quaerat
                  quasi soluta voluptatibus nisi ipsa quia. Animi, cupiditate?
                </p>
              </Media.Body>
            </Media>
            <Media className="m-5">
              <img
                width={150}
                height={150}
                className="mr-3"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                alt="JavaScript"
              />
              <Media.Body>
                <h5>Blog post</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ducimus alias
                  quibusdam aspernatur nesciunt ipsum, sed illum. Fugit dolorem ipsum illo quaerat
                  quasi soluta voluptatibus nisi ipsa quia. Animi, cupiditate?
                </p>
              </Media.Body>
            </Media>
            <Media className="m-5">
              <img
                width={150}
                height={150}
                className="mr-3"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                alt="JavaScript"
              />
              <Media.Body>
                <h5>Blog post</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ducimus alias
                  quibusdam aspernatur nesciunt ipsum, sed illum. Fugit dolorem ipsum illo quaerat
                  quasi soluta voluptatibus nisi ipsa quia. Animi, cupiditate?
                </p>
              </Media.Body>
            </Media>
            <Media className="m-5">
              <img
                width={150}
                height={150}
                className="mr-3"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                alt="JavaScript"
              />
              <Media.Body>
                <h5>Blog post</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ducimus alias
                  quibusdam aspernatur nesciunt ipsum, sed illum. Fugit dolorem ipsum illo quaerat
                  quasi soluta voluptatibus nisi ipsa quia. Animi, cupiditate?
                </p>
              </Media.Body>
            </Media>
          </Col>
          <Col md="3">
            <h5 className="text-center mt-5">Categories</h5>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>Html/Css</ListGroup.Item>
                <ListGroup.Item>JavaScript</ListGroup.Item>
                <ListGroup.Item>Java</ListGroup.Item>
                <ListGroup.Item>Python</ListGroup.Item>
                <ListGroup.Item>C++</ListGroup.Item>
              </ListGroup>
            </Card>
            <Card className="mt-3" bg="light">
              <Card.Body>
                <Card.Title>Side widget</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt porro quo minima
                  explicabo ipsam illo.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
