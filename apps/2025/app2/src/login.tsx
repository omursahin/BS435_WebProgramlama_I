import {useState} from "react";
import {useAuth} from "./AuthContext.tsx";
import {useNavigate} from "react-router";

export const Login = () => {
    const {
        login,
        logout
    } = useAuth();
    const nav = useNavigate();

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {
        if(name === "test" && password === "123456"){
            login("test");
            nav("/")

        } else{
            logout();
        }
    }

    return <>
        <input type="text" placeholder="İsim"
               onChange={(e) => setName(e.target.value)}/>
        <br/>
        <input type="password" placeholder="Şifre"
               onChange={(e) => setPassword(e.target.value)}/>
        <br/>
        <button onClick={handleLogin}>Giriş Yap</button>
    </>
}