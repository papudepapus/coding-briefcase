import React from 'react'
import landImg1 from '../img/leorgeTatto.png';
import landImg2 from '../img/entortas.png';
import landImg3 from '../img/macpizzas.png';
import landImg4 from '../img/Dragon.png';
import landImg5 from '../img/toa-a.png';
import gameImg1 from '../img/ProyectoMario.png';
import gameImg2 from '../img/laVieja.png';
import viteImg1 from '../img/cats-api.png';
import viteImg2 from '../img/movie-search-api.png';
import { Col, Container, Row, Nav, Tab } from 'react-bootstrap'
import ProjectCard from './ProjectCard.jsx';
import colorSharp2 from '../assets/img/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';


function Projects() {

    const landingPage = [
        {
            title: 'Leorgetatto',
            description: 'A web platform for tattoo enthusiasts, where they can explore designs, check prices, and connect with professional tattoo artists. Designed with HTML, CSS, and JavaScript, it offers intuitive navigation and a visually engaging experience.',
            imgUrl: landImg1,
            projectLink: 'https://papudepapus.github.io/leorgetatto.github.io/'
        },
        {
            title: 'Entortas',
            description: 'An online cake store offering a variety of prices, sizes, and personalized designs. With an intuitive interface, users can easily browse options and place orders. Developed using HTML, CSS, and JavaScript.',
            imgUrl: landImg2,
            projectLink: 'https://papudepapus.github.io/Entortas.github.io/'
        },
        {
            title: 'Macpizzas',
            description: 'A website for a local pizzeria providing menu details, location, contact information, and additional services like a drink bar, ice cream, and live music performances. Developed using HTML, CSS, and JavaScript, it delivers an intuitive and engaging experience for customers.',
            imgUrl: landImg3,
            projectLink: 'https://papudepapus.github.io/macpizzas.github.io/'
        },
        {
            title: 'Dragon Rojo',
            description: 'A website for a local Chinese restaurant offering an authentic menu of rice, noodles, soups, and meats, with essential location and contact details. Built with HTML, CSS, and JavaScript for a user-friendly experience.',
            imgUrl: landImg4,
            projectLink: 'https://papudepapus.github.io/Dragonrojo.githud.io/'
        },
        {
            title: 'Tales of Asia',
            description: 'Welcome to my blog—a dedicated space for light novel enthusiasts. Here, I share translations, reviews, and commentary on a diverse range of light novels, including Japanese, Chinese, Korean, and original works. Hosted on Blogspot, I aim to bring you closer to these captivating narrative worlds through engaging insights and creative perspectives. Dive in and explore stories filled with emotion, adventure, and innovation.',
            imgUrl: landImg5,
            projectLink: 'https://toa-a.blogspot.com/'
        }
    ]

    const games = [
        {
            title: 'Proyect Mario',
            description: 'A reverse engineering project using Phaser to replicate the core elements of Super Mario Bros 3, including characters, physics, sounds, and atmosphere. It stands out for its accuracy and advanced JavaScript implementation.',
            imgUrl: gameImg1,
            projectLink: 'https://papudepapus.github.io/juego-proyect.github.io/'
        },
        {
            title: 'La vieja',
            description: 'La Vieja is a modern Tic Tac Toe game built with React and Vite. It uses state management and effects for smooth gameplay and saves your progress in local storage so you can pick up where you left off—even after a page refresh. Enjoy its engaging animations and dynamic interface—a fresh take on a timeless classic.',
            imgUrl: gameImg2,
            projectLink: 'https://papudepapus.github.io/juego-1-tik/'
        },
    ]

    const vite = [
        {
            title: 'Cats Api',
            description: 'A charming web application that seamlessly integrates two APIs—one delivering a random cat GIF and another providing a random cat fact. The app builds a visually appealing component that displays both the GIF and the fact, along with a refresh button to update the content with a click.',
            imgUrl: viteImg1,
            projectLink: 'https://papudepapus.github.io/buscador-apis-2/'
        },
        {
            title: 'Movie search',
            description: 'This React-based web app is a powerful search tool for movies, TV series, and games inspired by films. It leverages an API that delivers detailed movie information, displaying search results within attractive, well-designed boxes. Users can also sort results by release year, offering an intuitive and engaging way to explore their favorite content.',
            imgUrl: viteImg2,
            projectLink: 'https://papudepapus.github.io/componente-buscador/'
        },
    ]

  return (
    <section className="project" id="project">
        <Container>
            <Row>
                <Col>
                <TrackVisibility>
                    {({isVisible}) => 
                    <div className={isVisible ? 'animate__animated animate__bounce' : ''}>
                    <h2>Projects</h2>
                    <p>Throughout my journey as a developer, I've worked on diverse projects that showcase my passion for technology, creativity, and problem-solving. From interactive web platforms to reverse engineering classic video games, each project has been an opportunity to learn, innovate, and refine my skills. Below, you'll find a collection of developments that stand out for their functionality, design, and purpose. Explore them and see what I can create!</p>
                    </div>}
                    </TrackVisibility>
                    <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                        <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                            <Nav.Item>
                                <Nav.Link eventKey="first">ladingPage</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Games</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">React+vite</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey='first'>
                                <Row>
                                    {
                                        landingPage.map((project, index)=>{
                                            return(
                                                <ProjectCard key={index} {...project}/>
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey='second'>
                                <Row>
                                    {
                                        games.map((project, index)=>{
                                            return(
                                                <ProjectCard key={index} {...project}/>
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey='third'>
                                <Row>   
                                    {
                                        vite.map((project, index)=>{
                                            return(
                                                <ProjectCard key={index} {...project}/>
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Col>
            </Row>
        </Container>
        <img className='background-image-right' src={colorSharp2} alt='background-img' />
    </section>
  )
}

export default Projects