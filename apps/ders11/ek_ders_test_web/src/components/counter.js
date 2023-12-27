import {useState} from "react";

export const Counter = ({degistir, isChange}) => {
    const [subcounter, setSubcounter] = useState(0);

    const handleIncrease = () => {
        setSubcounter(subcounter + 1);
        if (isChange) {
            degistir(5);
        }
    }

    return <>
        Counter değeri {subcounter}
        <button onClick={handleIncrease}>+</button>
        <br/>
    </>
}
