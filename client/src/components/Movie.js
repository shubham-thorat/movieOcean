import React, { useState } from 'react'
import useColorBadge from '../helpers/useColorBadge'
import '../App.css'
import {
    Card,
    Button,
    Badge
} from 'react-bootstrap'


function Movie({ id, title, overview, poster_path, average, download_link }) {

    const [close, setclose] = useState(true)
    const handleOverview = () => {
        var over = document.getElementsByClassName("movie-overview")
        if (close === true) {
            over[id - 1].style.bottom = "6rem";
            over[id - 1].style.transform = "translateY(0%)";
            setclose(false);
        }
        else {
            over[id - 1].style.bottom = "0rem";
            over[id - 1].style.transform = "translateY(100%)";
            setclose(true)
        }
    }
    return (
        <Card className="movie">
            <Card.Img variant="top" src={poster_path} alt={title} height="400px" />
            <Card.Footer className="d-flex justify-content-between align-items-center" >
                <Card.Title>{title}</Card.Title>
                <Badge className={`text-dark ${useColorBadge(average)}`}>{average}</Badge>
            </Card.Footer>
            <div className="movie-overview">
                <h3> OVERVIEW </h3>
                <Card.Text> {overview}</Card.Text>
            </div>
            <Button variant="outline-primary" className="m-1" onClick={handleOverview} > OVERVIEW</Button>
            <Button href={download_link} variant="outline-danger" className="m-1"> DOWNLOAD NOW</Button>
        </Card >
    )
}

export default Movie
