import React, { useState } from 'react'
import './FilterRating.css'
import {  Form, FormControl,} from 'react-bootstrap'

const FilterRating = ({FilterRating}) => {
  const [ratingmin, setRatingmin] = useState(0)
  const [ratingmax, setRatingmax] = useState(10)

    const getRatingmin = (e) =>{
      (e.target.value===''?setRatingmin(0):setRatingmin(e.target.value))
     
    }
    const getRatingmax = (e) =>{
      (e.target.value===''?setRatingmax(10):setRatingmax(e.target.value))
     
    }
    
    FilterRating(ratingmin,ratingmax);
  return (
    <div  style={{display:'flex'}}>

      <Form className="inputstyle">
      <FormControl
        style={{width: '150px'}}
          type="number"
          id="tentacles" 
          name="tentacles" 
          min="0"
          max="10"
          placeholder="Raiting-min"
          className="me-2"
          aria-label="Search"
          onChange={getRatingmin}     
        />
      </Form>
      <Form className="inputstyle">
      <FormControl
          style={{width: '150px'}}
          type="number"
          id="tentacles" 
          name="tentacles" 
          min="0"
          max="10"
          placeholder="Raiting-max"
          className="me-2"
          aria-label="Search"
          onChange={getRatingmax}     
        />
      </Form>
      </div>
  )
}

export default FilterRating;