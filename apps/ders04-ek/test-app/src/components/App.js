import logo from '../assests/logo.svg';
import '../assests/App.css';
import {Button, Col, Container, ProgressBar, Row} from "react-bootstrap";
import {MyProgressBar} from "./MyProgressBar";
import {useState} from "react";


function App() {
    const [total, setTotal] = useState(0);
  return (
    <div className="App">
        <Container>
            <h3>{total}</h3>
            <MyProgressBar changeGlobal={setTotal}/>
            <MyProgressBar changeGlobal={setTotal}/>
            <MyProgressBar changeGlobal={setTotal}/>
        </Container>

    </div>
  );
}

export default App;
