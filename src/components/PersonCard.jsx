import React from 'react'

export const PersonCard = ({item}) => {
  const person = item;
    
  return (
    <div className='card-container'>
      <div className='card-detail'>
        <h3><span>Name:</span> {person.firstName}</h3>
        <p><span>Phone:</span> {person.phone}</p>
        <p><span>Gender:</span> {person.gender}</p>
        <p><span>Color:</span> {person.color}</p>
      </div>
    </div>
  )
}
