import {useState} from "react";
import {useAuth} from "./AuthContext.tsx";

export const Login = () => {
    const {
        login,
        logout
    } = useAuth();

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {
        if(name === "test" && password === "123456"){
            login("test");
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