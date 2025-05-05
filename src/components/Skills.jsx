import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Container, Row, Col} from 'react-bootstrap';
import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';
import colorSharp from '../assets/img/color-sharp.png';

function Skills() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <section className='skill' id='skills'>
        <Container>
            <Row>
                <Col>
                    <div className='skill-bx'>
                        <h2>Skills</h2>
                        <p>I've cultivated a diverse set of skills that empower me to craft engaging and functional digital experiences. From visual design to code implementation, each ability I've honed contributes to transforming ideas into real-world solutions. You'll find the tools and technologies I've mastered and regularly apply in my work.</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Imagen" />
                                <h5>Web Development</h5>
                                <p>HTML, CSS3, Javascript(ES6+), React, Pseint, <span className='frameworks'>Python</span></p>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Imagen" />
                                <h5>Design & UI/UX</h5>
                                <p>Responsive Design, Flexbox, Grid, Brand Identity</p>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Imagen" />
                                <h5>Tools & Frameworks</h5>
                                <p>Git, GitHub, Bootstrap, Tailwind CSS, Phaser, Water.css <span className='frameworks'>Node.js & Express.j</span></p>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Imagen" />
                                <h5>Design, Management & AI</h5>
                                <p>Excalidraw, Blogger, WordPress, RPG Maker, Mailchimp, Canvas, Raphael, Trello</p>
                            </div>
                        </Carousel>

                    </div>
                </Col>
            </Row>
        </Container>
        <img className='background-image-left' alt='footer-background-img' src={colorSharp} />
    </section>
  )
}

export default Skills