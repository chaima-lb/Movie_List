import React, { useState } from 'react'
import './Filter.css'

function Filter({ FilterMovie }) {
  const [title, setTitle] = useState('')
  const getTitle = (e) => {
    setTitle(e.target.value)
  }
  FilterMovie(title)
  return (
    <div>
      <input className='' type="text" placeholder='search' onChange={getTitle} />
    </div>
  )
}

export default Filter;