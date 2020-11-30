import React, { Component } from 'react';
import { Container, Tab, Row, Col, Nav } from 'react-bootstrap';

export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Programming</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className="mt-3">
                <Tab.Pane eventKey="first">
                  <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpflwTPWVjPZD0tddWA-_dKhd4syk5t_qbVtUMiWJG0ATVTI-p" 
                    alt="Design"
                    />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos optio ut incidunt
                    distinctio molestiae id asperiores harum voluptates voluptatem debitis amet
                    delectus, officiis ex atque?
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS8MvEgJi3fb_iX4leqyWYQEXPZT0mfVi6ZGN1ONBkZR5Wqhhai" 
                    alt="Team"
                    />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos optio ut incidunt
                    distinctio molestiae id asperiores harum voluptates voluptatem debitis amet
                    delectus, officiis ex atque?
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <img 
                    src="https://4.bp.blogspot.com/--jfiBVhD0tk/W8AgZiqTdyI/AAAAAAAAAFs/vL_e_rYHSWYFioptq98hkMEmvOsJRA7jQCLcBGAs/s640/Software-developer.jpg" 
                    alt="Programing"
                    />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos optio ut incidunt
                    distinctio molestiae id asperiores harum voluptates voluptatem debitis amet
                    delectus, officiis ex atque?
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <img 
                    src="https://lh3.googleusercontent.com/proxy/EbF6nKPyEeuHAgsjO-2vEVODmZQsVnepKSLLCoc_AGCZSANZjQCHSZJBvKDklyGcj-fLYw1yxKJm-vqASHoSMCo-fIFaKvLEyDNBeqkC5lwTmBIOXYTGhnz1HA" 
                    alt="Frameworks"
                    />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos optio ut incidunt
                    distinctio molestiae id asperiores harum voluptates voluptatem debitis amet
                    delectus, officiis ex atque?
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <img 
                    src="https://image.slidesharecdn.com/html5apptechnologies-140619005018-phpapp01/95/tool-libraries-for-modern-web-app-development-5-638.jpg?cb=1403140252" 
                    alt="Libraries"
                    />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos optio ut incidunt
                    distinctio molestiae id asperiores harum voluptates voluptatem debitis amet
                    delectus, officiis ex atque?
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}
