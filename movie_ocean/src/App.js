import React, { useState, useEffect } from 'react'
import Movie from './components/Movie'
import MyNavbar from './components/MyNavbar'
import dotenv from 'dotenv'
import './App.css'
import { movieContext } from './helpers/Contexts'
import {
  Container
} from 'react-bootstrap'
dotenv.config();


function App() {
  const [movies, setmovies] = useState([])
  const [Dmovies, setDmovies] = useState([])

  const fetchData = async () => {
    const response = await fetch('/movies');
    const data = await response.json();
    setmovies(data);
    setDmovies(data);
  }
  useEffect(() => {
    fetchData();
  }, [])


  return (
    <div className="App">
      <movieContext.Provider value={{ movies, setDmovies }}>
        <MyNavbar />
        <Container fluid className="movie-container">
          {
            Dmovies && Dmovies.map(movie => <Movie key={movie.id} {...movie} />)
          }
        </Container>
      </movieContext.Provider>
    </div>
  );
}

export default App;
