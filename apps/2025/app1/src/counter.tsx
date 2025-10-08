import {useState} from "react";

export const Counter = () => {
    const [count, setCount] = useState(0)

    return <>
            <h1>{count}</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    Artır
                </button>
                <button onClick={() => setCount((count) => count - 1)}>
                    Azalt
                </button>
            </div>
        </>
}
