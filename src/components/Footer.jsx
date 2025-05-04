import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
//import MailChimpForm from './MailChimpForm'
import logo from '../img/github-2.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../img/discord-3.svg'

function Footer() {
  return (
    <footer className="footer">
        <Container>
            <Row className="align-item-center">
                <Col sm={6}>
                    <a target="_blank" href="https://github.com/papudepapus"><img src={logo} alt="logo" /></a>
                </Col>
                <Col sm={6} className="text-center text-sm-end">
                    <div className="social-icon">
                        <a target="_blank" href="https://www.linkedin.com/in/wilfri-corrales-4111802a5/"><img src={navIcon1} alt="icon" /></a>
                        <a target="_blank" href="https://www.facebook.com/profile.php?id=100007203495642"><img src={navIcon2} alt="icon" /></a>
                        <a target="_blank" href="https://discord.com/invite/YmHNbDy"><img src={navIcon3} alt="icon-discord" /></a>
                    </div>
                    <p>CopyRight 2025. All Right Reserved</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer