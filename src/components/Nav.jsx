import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import { LuMenu, LuX } from 'react-icons/lu';

const links = [
  {
    id: 1,
    name: 'About Us',
    path: '/about',
  },
  {
    id: 2,
    name: 'Books',
    path: '/books'
  },
  {
    id: 3,
    name: 'Students',
    path: '/student'
  },

  {
    id: 4,
    name: 'Blog',
    path: '/blog'
  },
  {
    id: 5,
    name: 'Contact',
    path: '/contact'
  },
]

export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false)


  return (
    <div className='container mx-auto py-[20px]'>
      <div className='flex justify-between items-center'>
        <h1>
          <a href='/' >Jaquar</a>
        </h1>

        <nav>
          {/* DESKTOP MENU */}
          <div className='hidden md:flex '>
            <ul className='flex gap-10'>
              {links.map((item, index) => (
                <li key={index}>
                  <a href={item.path}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* MOBILE VIEW */}
          <div className='md:hidden'>
            {/* HAMBURGER MENU */}
            <div 
              className=''
            >
              <LuMenu 
                className='text-[30px]'
                onClick={() => setIsNavOpen((prev) => !prev)} 
              />
            </div>

            {/* NAV MENU */}
            <div className={isNavOpen ? 'showMenu' : 'hideMenu'}>
              <div className='absolute top-0 right-0 px-8 py-8'>
                <LuX 
                  className='text-[30px]' 
                  onClick={() => setIsNavOpen(false)}
                />
              </div>

              <div className='flex flex-col items-center justify-between min-h-[250px]'>
                <ul>
                  {links.map((item, index) => (
                    <li key={index}>
                      <a href={item.path}>{item.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
