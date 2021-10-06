import React, { useState, useEffect } from 'react'
import Movie from './components/Movie'
import MyNavbar from './components/MyNavbar'
import dotenv from 'dotenv'
import './App.css'
import { movieContext } from './helpers/Contexts'
import { isMobile } from 'react-device-detect'
import {
  Container
} from 'react-bootstrap'
dotenv.config();


function App() {
  const [movies, setmovies] = useState([])
  const [Dmovies, setDmovies] = useState([])
  const [show, setshow] = useState(true)
  const fetchData = async () => {
    const response = await fetch('/movies');
    const data = await response.json();
    setmovies(data);
    setDmovies(data);
  }
  const handleclick = () => {
    setshow(false)
  }
  useEffect(() => {
    fetchData();
  }, [])

  if (isMobile && show) {
    return (
      <div>
        <h4> Recommended to continue to desktop </h4>
        <button onClick={handleclick} style={{ cursor: "pointer" }}> Continue </button>
      </div>
    )
  }

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
