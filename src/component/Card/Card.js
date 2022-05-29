import React from 'react'
import './Card.css'
import ReactStars from 'react-stars'
function Card({ title, URLimage, desc, date, duration, rating }) {
  return (
    <div>
      <div>
        <div className="movie_card" >  <img className="locandina" src={URLimage} alt=''/>
          <div className="info_section">
            <div className="movie_header">
              
      <ReactStars value= {rating} count={10}/>
              <h1>{title}</h1>
              <span className="minutes">{date}</span>
              
            </div>
            <div className="movie_desc">
              <p className="text">
               <h4>{desc}</h4>
              </p>
            </div>
            <div className="movie_social">
              <ul>  
                <li><i className="material-icons">trailer</i></li>
                <li><i className="material-icons">{duration}</i></li>
                <li><i className="material-icons">watch</i></li>
              </ul>
            </div>
          </div>
      
        </div>
      </div>
    </div>
  )
}

export default Card
