import React from 'react'
import { useForm } from 'react-hook-form'
import { Container, Col, Row } from 'react-bootstrap'
import contactImg from '../assets/img/contact-img.svg'
import 'animate.css';
import TrackVisibility from 'react-on-screen';

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data, event) => {
    console.log(data);
    if (event) {
      event.target.submit()}
  }

  return (
    <section className='contact' id='connect'>
      <Container>
        <Row className='align-items-center'>
          <Col md={6}>
            <img src={contactImg} alt="Contact-img" />
          </Col>
          <Col md={6}>
          <TrackVisibility> 
            {({isVisible}) => 
            <div className={isVisible ? 'animate__animated animate__pulse' : ''}>
            <h2>Get in Touch</h2>
            </div>}
            </TrackVisibility>
            <form
              target="_blank"
              action="https://formsubmit.co/51198046718894ffb36609317992248f"
              method="POST"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Row>
                <Col sm={6} className='px-1'>
                  <label htmlFor="firstName">Name</label>
                  <input
                    id="firstName"
                    type="text"
                    {...register('firstName', { required: true, maxLength: 10 })}
                  />
                  {errors.firstName?.type === 'required' && <p>The name field is required</p>}
                  {errors.firstName?.type === 'maxLength' && <p>The name field can only have 10 characters</p>}
                </Col>
                <Col sm={6} className='px-1'>
                  <label htmlFor="mail">Email Address</label>
                  <input
                    id="mail"
                    type="email"
                    {...register('mail', { required: true, pattern: /\S+@\S+\.\S+/ })}
                  />
                  {errors.mail?.type === 'required' && <p>The mail field is required</p>}
                  {errors.mail?.type === 'pattern' && <p>Invalid format</p>}
                </Col>
                <Col>
                  <label htmlFor="message">Message</label>   
                  <textarea
                    id="message"
                    rows='6'
                    {...register('message', { required: true, minLength: 10 })}
                  ></textarea>
                  {errors.message?.type === 'required' && <p>The message field is required</p>}
                  {errors.message?.type === 'minLength' && <p>The message field must have at least 10 characters</p>}
                </Col>
                <button type="submit">
                  <span>Enviar</span>
                </button>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact
