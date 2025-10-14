import {useState} from "react";

export const Login = ({setIsLoggedIn}) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {
        if(name === "test" && password === "123456"){
            setIsLoggedIn(true);
        } else{
            setIsLoggedIn(false);
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