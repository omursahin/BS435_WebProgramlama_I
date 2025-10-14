import './App.css'
import {useState} from "react";

function App() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <input type="text" placeholder="İsim"
            onChange={(e) => setName(e.target.value)}/>
            <br/>
            <input type="password" placeholder="Şifre"
            onChange={(e) => setPassword(e.target.value)}/>
            <br/>
            <button>Giriş Yap</button>
        </>
    )
}

export default App
