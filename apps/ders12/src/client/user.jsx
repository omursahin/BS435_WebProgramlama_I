import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';


export const User = () => {
    const [user, setUser] = useState();
    const [errorMsg, setErrorMsg] = useState();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {

        /*
            Not: Burada bir kütüphane kullanılabilir ancak eğitici olması açısından fetch ile yapıyoruz.
         */
        const id = new URLSearchParams(window.location.search).get("userId");
        if (!id) {
            setUser(null);
            setErrorMsg("Hata: belirsiz user id'si")
            return;
        }

        const query = encodeURIComponent("{getUserById(id:\"" + id + "\"){id,name,middlename,surname,email}}");

        const url = "/graphql?query=" + query;

        let response;
        let payload;

        try {
            response = await fetch(url);
            payload = await response.json();
        } catch (err) {
            setErrorMsg("Kullanıcı bilgisi çekerken hata: " + err);
            setUser(null);
            return;
        }

        if (response.status === 200) {

            if (payload.errors || !payload.data) {
                setErrorMsg("İstekte hata");
                setUser(null);
            } else
                setErrorMsg(null);
            setUser(payload.data.getUserById);

        } else {
            setErrorMsg("HTTP bağlantısında hata: durum kodu:" + response.status);
            setUser(null);
        }
    }

    if (errorMsg) {
        return (
            <p>
                {errorMsg}
            </p>);
    }

    if (!user) {
        return (<h3>Yükleniyor...</h3>);
    }

    return (
        <div>
            <p>
                <Link to={"/"}>Anasayfa</Link>
            </p>
            <h2>Kullanıcı Bilgileri</h2>
            <ul>
                <li>Id: {user.id}</li>
                <li>Ad: {user.name}</li>
                <li>İkinci Ad: {user.middlename}</li>
                <li>Soyad: {user.surname}</li>
                <li>Email: {user.email}</li>
            </ul>
        </div>
    );

}
