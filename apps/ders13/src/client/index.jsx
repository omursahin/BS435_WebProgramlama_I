import React, {useEffect, useRef, useState} from "react";
import ReactDOM from "react-dom";

import {Match} from "./match";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./home";
import {Login} from "./login";
import {SignUp} from "./signup";
import {HeaderBar} from "./headerbar";

const notFound = () => {
    return (
        <div>
            <h2>Sayfa Bulunamadı: 404</h2>
            <p>
                Hata: Aradığınız sayfaya şu anda ulaşılamıyor.
                Lütfen daha sonra tekrar deneyiniz.
            </p>
        </div>
    )
}

const App = () => {
    /*
    Giriş yapıp yapmama durumuna göre render edilecek kısımları bu değişkene göre belirliyoruz.
    Eğer kullanıcı giriş yaparsa veriler bu state'de tutulur.
    Eğer değeri null ise kullanıcı giriş yapmamıştır.
    */
    const [user, setUser] = useState(null);
    const [userCount, setUserCount] = useState(1);
    const [errorMsg, setErrorMsg] = useState(null);
    const ws = useRef(null);

    /*
    Giriş yapıp yapmamamız, oturum tanımlama bilgisine bağlıdır.
    Her HTTP isteğinde sunucuya gönderilen budur.
    Bu bilgi eksikse, 401 durum kodu hatası alacağız.
    Sayfayı tarayıcıdan manuel olarak yenilediğimiz zaman geçerli bir cookie değeri olmasına rağmen yeni state ile yeniden bağlanacaktır
    (ve bu nedenle userId boştur). Sunucuya bir AJAX çağrısı yaparak eğer geçerli bir oturum varsa userId'yi tekrar doldurmak gerekir.
    */

    useEffect(() => {
        fetchAndUpdateUserInfo();
        let protocol = "ws:";
        if (window.location.protocol.toLowerCase() === "https:") {
            protocol = "wss:";
        }

        ws.current = new WebSocket(protocol + "//" + window.location.host);
        ws.current.onmessage = (event) => {
            const dto = JSON.parse(event.data);

            if (!dto || !dto.userCount) {
                setUserCount("ERROR");
                return;
            }
            setUserCount(dto.userCount);
        };
        return () => {
            ws.current.close();
        }
    }, []);

    const fetchAndUpdateUserInfo = async () => {

        const url = "/api/user";

        let response;

        try {
            response = await fetch(url);
        } catch (err) {
            setErrorMsg("Sunucu bağlantısında hata: " + err);
            return;
        }

        if (response.status === 401) {
            setUser(null);
            return;
        }

        if (response.status !== 200) {
            //TODO sayfada çeşitli uyarılar gösterilebilir.
        } else {
            const payload = await response.json();
            setUser(payload);
        }
    };

    return (
        <BrowserRouter>
            <HeaderBar userId={user?.id}
                       updateLoggedInUser={setUser}/>
            <Routes>
                <Route path="/" element={<Home user={user} userCount={userCount}/>}/>
                <Route path="match" element={<Match user={user} setUser={setUser} fetchAndUpdateUserInfo={fetchAndUpdateUserInfo}/>} />
                <Route path="login" element={<Login fetchAndUpdateUserInfo={fetchAndUpdateUserInfo}/>}/>
                <Route path="signup" element={<SignUp fetchAndUpdateUserInfo={fetchAndUpdateUserInfo}/>}/>
                <Route path="*" element={<notFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));