import React, { useState, useContext } from 'react'
import { movieContext } from '../helpers/Contexts'
import {
    Navbar,
    Form,
    Button
} from 'react-bootstrap'


function MyNavbar() {
    const [searchmovie, setsearchmovie] = useState("")
    const { movies, setDmovies } = useContext(movieContext)
    const SearchMovie = (e) => {
        e.preventDefault();
        let movie = searchmovie.toLowerCase();
        let filterMovies = movies.filter(element => {
            const string = element.title.toLocaleLowerCase();
            return string.search(movie) !== -1;
        })
        setDmovies(filterMovies)
        setsearchmovie("")
    }
    return (
        <Navbar bg="dark" variant="dark" className="sticky-top justify-content-between align-items-center px-4 py-3 flex-wrap">
            <Navbar.Brand href="#" onClick={() => setDmovies(movies)}>  MOVIE OCEAN </Navbar.Brand>
            <Form className="d-flex" onSubmit={SearchMovie}>
                <Form.Control className="me-2 fs-bold" type="search" placeholder="Search Movies" aria-label="Search" onChange={(e) => setsearchmovie(e.target.value)} />
                <Button variant="outline-success" type="submit">Search</Button>
            </Form>
        </Navbar>
    )
}

export default MyNavbar
