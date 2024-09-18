
// import { useEffect, useState } from 'react';
import './App.css';
import Nav from './components/Nav';
// import { PersonCard } from './components/PersonCard';
// import HarryPotter from './components/HarryPotter';
// import DogsData from './components/DogsData';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeScreen from './pages/HomeScreen';
import AboutUs from './pages/AboutUs';
import Books from './pages/Books';
import Contact from './pages/Contact';


function App() {
  // const fetchData = async () => {
  //   const url = 'https://potterapi-fedeperin.vercel.app/en/books';

  //   try {
  //     const response = await fetch(url);
  //     const result = await response.json();

  //     // show result
  //     console.log(result);
  //     setHarryPotter(result);

  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const [books, setBooks] = useState([]);

  //   const fetchBooks = async () => {
  //     const url = 'https://stephen-king-api.onrender.com/api/books';
  
  //     try {
  //       const response = await fetch(url);
  //       const result = await response.json();
  
  //       console.log(result);
  //       setBooks(result);
  
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   };

  //   useEffect(() => {
  //     fetchBooks();
  //   }, []);

  return (
    <div>
      {/* Navbar */}
      <Nav />

      {/* Display pages */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeScreen /> } />
          <Route path='/about' element={<AboutUs /> } />
          <Route path='/books' element={<Books />} />
          <Route path='/contact' element={<Contact /> } />
        </Routes>
      </BrowserRouter>

      

















      

      {/* Harry potter spells */}
      {/* Harry potter spells */}
      {/* <div className='harry-hero-container'>
        <h1>Books</h1>

        <div className='harry-grid'>
          {books.map((item, index) => (
            <DogsData key={index} item={item} />
          ))}
        </div>
      </div> */}

      


     

     {/* <img 
        src='/man.png'  
        alt='man'
        height='500px'
        width='100%'
      /> */}
    </div>
  );
}

export default App;