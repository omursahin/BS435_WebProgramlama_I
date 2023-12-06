import '../assets/App.css';
import {Button, Col, Container, Row} from "react-bootstrap";
import {Movies} from "../pages/movies";
import {RouterProvider, createBrowserRouter, useNavigate} from "react-router-dom";
import {Create} from "../pages/create";
import {Edit} from "../pages/edit";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Movies/>,
    },
    {
        path: "/create",
        element: <Create/>,
    },
    {
        path: "/edit/:id",
        element: <Edit/>,
    }
]);

function App() {
    return (
        <div className="App">
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
