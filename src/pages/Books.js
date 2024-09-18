import React, { useEffect, useState } from 'react'
import Book from '../components/Book';

function Books() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const url = 'https://potterapi-fedeperin.vercel.app/en/books';

    try {
      const response = await fetch(url);
      const result = await response.json();

      console.log(result);
      setBooks(result);
      
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchBooks();
  }, [])
  
    
  return (
    <div>
        {/* Harry potter Books */}
        <div className='harry-hero-container'>
          <h1>Books</h1>

          <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6'>
            {books.map((item, index) => (
              <Book key={index} item={item} />
            ))}
          </div>
        </div>
    </div>
  )
}

export default Books