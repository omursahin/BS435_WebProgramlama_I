import React from "react";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

export const Login = ({fetchAndUpdateUserInfo}) => {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState();


    const nav = useNavigate();

    const doLogIn = async () => {

        const url = "/api/login";

        const payload = {userId: userId, password: password};

        let response;

        try {
            response = await fetch(url, {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });
        } catch (err) {
            setErrorMsg("Sunucuya bağlanırken hata: " + err);
            return;
        }

        if (response.status === 401) {
            setErrorMsg("Geçersiz kullanıcıId/şifre");
            return;
        }

        if (response.status !== 204) {
            setErrorMsg("Sunucuya bağlanırken hata: durum kodu " + response.status);
            return;
        }

        setErrorMsg(null);
        await fetchAndUpdateUserInfo();
        nav("/");
    };

    return (
        <div className="center">

            <div>
                <p>Kullanıcı Id:</p>
                <input
                    type="text"
                    value={userId}
                    id="userId"
                    onChange={(e) => setUserId(e.target.value)}
                />
            </div>
            <div>
                <p>Şifre:</p>
                <input
                    type="password"
                    value={password}
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            {errorMsg && (
                <div className="errorMsg">
                    <p>{errorMsg}</p>
                </div>)}
            <button className="button" onClick={doLogIn}>
                Giriş
            </button>
            <Link className="button" tabIndex="0" to={"/signup"}>
                Üye Ol
            </Link>
        </div>
    );
}