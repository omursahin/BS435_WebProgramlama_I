import {Button, Col, ProgressBar, Row} from "react-bootstrap";
import {useState} from "react";

export const MyProgressBar = ({changeGlobal}) => {
    const [counter, setCounter] = useState(15);
    const handleButton = (delta) =>{
        setCounter(prevState =>
            prevState + delta);
        changeGlobal(prevState =>
            prevState + delta);
    }
    return (
        <>
            <Row>
                <Col>
                    <ProgressBar now={counter}/>
                </Col>
                <Col>
                    <Button size="sm" onClick={() => handleButton(5)} variant="success">+</Button>
                    <Button size="sm" onClick={() => handleButton(-5)} variant="danger">-</Button>
                </Col>
            </Row>
        </>)
}
