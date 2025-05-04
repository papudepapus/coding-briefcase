import React from 'react'
import { Col } from 'react-bootstrap'

function ProjectCard({title, description, imgUrl, projectLink}) {
  return (
      <Col sm={6} md={4}>
        <a href={projectLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="proj-imgbx">
              <img src={imgUrl} alt=''/>
              <div className="proj-txtx">
                  <h4>{title}</h4>
                  <span>{description}</span>
              </div>
          </div>
          </a>
      </Col>
  )
}

export default ProjectCard