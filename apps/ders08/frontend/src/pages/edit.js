import {Button, Col, Container, Form, Row} from "react-bootstrap";
import MovieTable from "../components/tables/MovieTable";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {MOVIES_URL} from "../helper/constants";

export const Edit = () => {
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [year, setYear] = useState("");

    const params = useParams("id");

    const getMovie = async () => {
        const response = await fetch(MOVIES_URL + params.id);
        const data = await response.json();
        setTitle(data.title);
        setDirector(data.director);
        setYear(data.year);
        setId(data.id);
    }

     useEffect(() => {
        getMovie();
     }, []);

    const nav = useNavigate();
    const handleSave = async (e) => {
        e.preventDefault();
        const movie = {
            id,
            title,
            director,
            year
        };
        const response = await fetch(MOVIES_URL + movie.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movie)
        });

        if(response.status === 204){
            alert("Movie created");
            nav("/");
        } else {
            alert("Error");
        }

    }

    return (
        <div>
            <h2>Edit new movie</h2>
            <Container>
                <Row>
                    <Col></Col>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Title</Form.Label>
                                <Form.Control value={title} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="Enter title" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Director</Form.Label>
                                <Form.Control value={director} type="text" onChange={(e)=>setDirector(e.target.value)} placeholder="Enter director" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Year</Form.Label>
                                <Form.Control value={year} type="number" onChange={(e)=>setYear(e.target.value)} placeholder="Enter year" />
                            </Form.Group>

                            <Button onClick={handleSave} variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                    <Col>
                        <Link to={'/'}>Back</Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
