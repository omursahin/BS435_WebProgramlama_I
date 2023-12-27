import logo from './logo.svg';
import './App.css';
import {Counter} from "./components/counter";
import {useEffect, useState} from "react";
import Api from "./components/api";

function App() {
    const [user, setUser] = useState(null);

    const [counter, setCounter] = useState(0);

    const degerDegistir = (deger) => {
        setCounter(counter + deger);
    }

    useEffect(() => {
        console.log("App.js içindeki useEffect çalıştı");
        setCounter(10);
        const user = localStorage.getItem("user");
        if(user){
            setUser(JSON.parse(user));
        }
    }, []);

    useEffect(() => {
        console.log("Counter değişti yeni değer: " + counter);
    }, [counter]);

    const handleLogin = () => {
        setUser({name: "Ahmet"});
        localStorage.setItem("user", JSON.stringify({name: "Ahmet"}));
    }

    if(!user){
        return <>
            <div>Lütfen Giriş Yapın</div>
            <button onClick={handleLogin}>Giriş Yap</button>
        </>
    }
    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
    }
    return (
    <div className="App">
        <>Ana Counter değeri {counter} <br/></>
        <Counter degistir={degerDegistir} isChange={true} />
        <Counter degistir={degerDegistir} isChange={false}/>
        <Counter degistir={degerDegistir} isChange={false}/>
        <Counter degistir={degerDegistir} isChange={false}/>
        <Api counter={counter} />
        <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default App;
