import {useEffect, useState} from "react";
import {MOVIES_URL} from "../helper/constants";
import MovieTable from "../components/tables/MovieTable";
import {Button, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

export const Movies = () => {

    const [movies, setMovies] = useState([]);

    const getAllMovies = async () => {
        const response = await fetch(MOVIES_URL);
        const data = await response.json();
        setMovies(data);
    }

    useEffect(() => {
        getAllMovies();
    }, []);

    if(movies.length === 0) return (<div>Loading...</div>);

    return (

        <Container>
            <Row>
                <Col></Col>
                <Col>
                    <MovieTable movies={movies} getAllMovies={getAllMovies}/>
                </Col>
                <Col>
                    <Link to={'/create'}>Create</Link>
                </Col>
            </Row>
        </Container>
    );
}
