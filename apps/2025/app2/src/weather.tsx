import {useEffect, useState} from "react";
import {useAuth} from "./AuthContext.tsx";
import {useNavigate} from "react-router";

export const Weather = () => {
    const url = "https://api.openweathermap.org/data/2.5/weather?lat=38&lon=35&appid=4ff7f438f540f4cf8bf71612715caf60&units=metric";
    const [error, setError] = useState("");
    const [data, setData] = useState();

    const {
        isLoggedIn
    } = useAuth();
    const handleClick = () => {
        nav("/login");
    }
    const nav = useNavigate();
    if(!isLoggedIn){
        return <>
            <div>Lütfen giriş yapınız.</div>
            <button onClick={handleClick}>
                Giriş Yap
            </button>
        </>
    }
    const handleFetchWeather = async () => {
        fetch(url).then(
            (response) => response.json()
        ).then((data) => setData(data))
    }

    useEffect(() => {
        handleFetchWeather();
    }, []);

    return <>
    <h1>Hava Durumu</h1>
        {error && <h2>{error}</h2>}
        Weather: {data && <h2>{data.main.temp}</h2>}
        Feel: {data && <h2>{data.main.feels_like}</h2>}
    </>
}