import React from 'react'
import { PersonCard } from '../components/PersonCard';

const name = 'Peter';
const secondname = 'Jackson';
const thirdname = 'software developer';
const number = 2024;
const animal = 'Dog';
const petname = 'bernard'; 

const data = [
  {
    firstName: 'Moses',
    gender: 'Male',
    phone: '07010942297',
    color: 'purple',
  },
  {
    firstName: 'christee',
    gender: 'Female',
    phone: '0712399032',
    color: 'Forest Green',
  },
  {
    firstName: 'Chris',
    gender: 'Male',
    phone: '07098989898',
    color: 'Black',
  },
  {
    firstName: 'Pecuihe',
    gender: 'Female',
    phone: '07098989898',
    color: 'Red',
  },
  {
    firstName: 'Bassey',
    gender: 'Male',
    phone: '0907832198',
    color: 'Yellow',
  },
  {
    firstName: 'Nsi',
    gender: 'Male',
    phone: '0907832198',
    color: 'Red',
  },
]

function HomeScreen() {
  return (
    <div>
        <h1>
            Hello,<span className='firstname'>{name}</span>, my name is {secondname}
        </h1>
        <p>I am a {thirdname} </p>
        <p> I started out in <span className='year'>{number}</span></p>
        <p> I have a <span className='animalname'>{animal}</span> , and its name is {petname}</p>



        {/* Hero page */}
      <div className='hero-container'>
        <h1>Software Developers</h1>

        <div className='cards-grid'>
          {data.map((item, index) => (
            <div key={index}>
              <PersonCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomeScreen