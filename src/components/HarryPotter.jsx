import React from 'react'

const HarryPotter = ({ item }) => {
    const harry = item;
  return (
    <div className='harry-container'>
        <div className='harry-image'>
            <img src={harry.cover} alt={harry.originalTitle} />
        </div>

        <div className='harry-text'>
            <div className='harry-heading'>
                <h3>{harry.title}</h3>
            </div>
            
            <div className='harry-description'>
                <p >{harry.description}</p>
            </div>

            <div className='harry-date'>
                <p>{harry.releaseDate}</p>
                <p>{harry.pages}</p>
            </div>
        </div>
    </div>
  )
}

export default HarryPotter