import React from 'react'
import './portfolio.css'
import data from '../data.js'



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.ProjectsData.map(({id, img, name, source, live }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={img} alt={name} />
              </div>
              <h3>{name}</h3>
              <div className="portfolio__item-bta">
               <a href={source}  className='btn' target='_blank' rel="noreferrer">Source Code</a>
               <a href={live}  className='btn btn-primary' target='_blank' rel="noreferrer">Live Site</a>
              </div>  
            </article>
          )
        })
        }        

      </div>
    </section>
  )
}

export default Portfolio
