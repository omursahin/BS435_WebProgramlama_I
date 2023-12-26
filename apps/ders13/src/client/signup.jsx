import React from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export const SignUp = ({fetchAndUpdateUserInfo}) => {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [errorMsg, setErrorMsg] = useState();


    const nav = useNavigate();

    const doSignUp = async () => {

        if (confirm !== password) {
            setErrorMsg("Şifreler eşleşmemektedir");
            return;
        }
        const url = "/api/signup";

        let response;
        const payload = {userId: userId, password: password};

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

        if (response.status === 400) {
            setErrorMsg("Geçersiz kullanıcıId/şifre");
            return;
        }

        if (response.status !== 201) {
            setErrorMsg("Sunucuya bağlanırken hata: durum kodu " + response.status);
            return;
        }

        setErrorMsg(null);
        await fetchAndUpdateUserInfo();
        nav("/");
    };

    if (errorMsg) {
        return <div>{errorMsg}</div>
    }

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
            <div>
                <p>Onay:</p>
                <input
                    type="password"
                    value={confirm}
                    id="confirm"
                    onChange={(e) => setConfirm(e.target.value)}
                />
            </div>
            {errorMsg && (
                <div className="errorMsg">
                    <p>{errorMsg}</p>
                </div>)}
            <button className="button" onClick={doSignUp}>
                Üye Ol
            </button>
        </div>
    );
}