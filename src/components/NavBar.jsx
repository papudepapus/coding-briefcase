import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import logo from '../img/toro-logo-robot-1.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../img/discord-3.svg'
import { HashLink } from 'react-router-hash-link';
import {BrowserRouter as Router} from "react-router-dom";

function NavBar() {

    const[activeLink, SetActiveLink] = useState('home')
    const [scrolled, seScrolled] = useState(false)

    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 50) {
            seScrolled(true)
        } else {
            seScrolled(false);
        }
      }
    
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const onUpdateActiveLink = (value) => {
        SetActiveLink(value)
    }

  return (
    <Router>
      <Navbar expand="lg" className={scrolled ? 'scrolled': ''}>
        <Container>
          <Navbar.Brand href="#home">
              <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" > 
              <span className='navbar-toggller-icon'></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skill' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')} >Skills</Nav.Link>
              <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')} >Link</Nav.Link>
            </Nav>
            <span className='navbar-text'> 
              <div className="social-icon">
                  <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/wilfri-corrales-4111802a5/">
                      <img src={navIcon1} alt="" />
                  </a>
                  <a target="_blank" rel='noreferrer' href="https://www.facebook.com/profile.php?id=100007203495642">
                      <img src={navIcon2} alt="" />
                  </a>
                  <a target="_blank" rel='noreferrer' href="https://discord.com/invite/YmHNbDy">
                      <img src={navIcon3} alt="icon-discord" />
                  </a>
              </div>
              <HashLink to='#connect'>
                <button className='vvd'>
                    <span>Let's Connect</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}

export default NavBar