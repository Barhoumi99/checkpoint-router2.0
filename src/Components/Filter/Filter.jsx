import React from 'react'
import './Filter.css'

const Filter = ({ search, ratingFilter }) => {
  return (
    <div className='filter'>
        <input 
            placeholder='Search...'
            onChange={ event => {
                search(event.target.value)
            }}
        />
        <input 
            type='number'
            step={0.1}
            min={0.1}
            max={10}
            onChange={ event => ratingFilter(event.target.value) }
        />
    </div>
  )
}

export default Filter