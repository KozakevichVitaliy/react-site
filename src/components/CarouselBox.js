import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import forestImg from '../assets/forest.jpeg'
import dforestImg from '../assets/dforest.jpeg'
import fall_forestImg from '../assets/fall-forest.jpeg'

export default class CarouselBox extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img
               className="d-block w-100"
               height="550"
               src={ forestImg }
               alt="forest"
            />
            <Carousel.Caption>
              <h3>Forest image</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, rerum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
               className="d-block w-100 center"
               height="550"
               src={ dforestImg }
               alt="dforest"
            />
            <Carousel.Caption>
              <h3>Dark Forest image</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, rerum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
               className="d-block w-100"
               height="550"
               src={ fall_forestImg }
               alt="fall_forestImg"
            />
            <Carousel.Caption>
              <h3>Fall Forest image</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, rerum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}
