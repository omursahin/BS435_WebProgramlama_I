import './App.css'
import {useState} from "react";
import {Login} from "./login.tsx";
import {Weather} from "./weather.tsx";

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);


    return (
        <>
            {/*{isLoggedIn && <h1>Merhaba {name}</h1>}*/}
            {isLoggedIn ? <h1>Giriş yaptınız</h1> : <h1>Lütfen giriş yapın</h1>}
            <Login setIsLoggedIn={setIsLoggedIn} />
            <br/>
            {isLoggedIn && <Weather/>}

        </>
    )
}

export default App
