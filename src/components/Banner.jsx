import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from '../img/toro-robotico.png'
import { useState, useEffect } from 'react'
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { HashLink } from 'react-router-hash-link';
import {BrowserRouter as Router} from "react-router-dom";


function Banner() {

  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"]
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(300 - Math.random()*100);
  const period = 2000;

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i]
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

    setText(updatedText);

    if (isDeleting){
      setDelta(prevDelta => prevDelta/2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum+1);
      setDelta(500)
    }
  }


  useEffect(() => {
    let ticker = setInterval(()=>{
      tick()
    },delta)
  
    return () => {
      clearInterval(ticker)
    }
  }, [text, delta, tick])

  
  

  return (
    <Router>
      <section className='banner' id='home'>
          <Container>
              <Row className='align-item-center'>
                  <Col xs={12} md={6} xl={7}>
                  <TrackVisibility>
                  {({isVisible}) => 
                    <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                      <span className="tagline">Welcome to my portafolio</span>
                      <h1>{`Hi, i'm a webcoded `}<br /> <span className='wrap'>{text}</span></h1>
                      <p>"Welcome to my digital portfolio. Here, you can explore my experience as a web developer, my technical expertise, and the exciting projects I've contributed to. My goal is to bring innovative and functional solutions to life that transform ideas into reality. Take a look around, and don't hesitate to connect with me!</p>
                      <HashLink to='#connect'>
                        <button className='bcb'>
                          <span>
                            Let's Connect<ArrowRightCircle size={25}/>
                          </span>
                        </button>
                      </HashLink>
                    </div>}
                  </TrackVisibility>
                  </Col>
                  <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="header img" />
                  </Col>
              </Row>
          </Container>
      </section>
    </Router>
  )
}

export default Banner