import {Button, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import {MOVIES_URL} from "../../helper/constants";

function MovieTable({movies, getAllMovies}) {

    const handleDelete = async (id) => {
        await fetch(MOVIES_URL + id, {
            method: 'DELETE',
        });
        await getAllMovies();
    }

    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>Title</th>
                <th>Director</th>
                <th>Year</th>
                <th>Remove</th>
                <th>Edit</th>
            </tr>
            </thead>
            <tbody>
            {
                movies.map((movie)=> <tr>
                    <td>{movie.id}</td>
                    <td>{movie.title}</td>
                    <td>{movie.director}</td>
                    <td>{movie.year}</td>
                    <td><Button
                        onClick={()=>handleDelete(movie.id)} variant="danger">Remove</Button></td>
                    <td><Link to={`/edit/${movie.id}`}>Edit</Link></td>
                </tr>)
            }

            </tbody>
        </Table>
    );
}

export default MovieTable;
