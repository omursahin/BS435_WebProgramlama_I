import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';


export const News = () => {
    const [news, setNews] = useState();
    const [errorMsg, setErrorMsg] = useState();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {

        /*
            Not: Burada bir kütüphane kullanılabilir ancak eğitici olması açısından fetch ile yapıyoruz.
         */
        const id = new URLSearchParams(window.location.search).get("newsId");
        if (!id) {
            setNews(null);
            setErrorMsg("Hata: belirsiz entry id'si")
            return;
        }

        const query = encodeURIComponent("{getNewsById(id:\"" + id + "\"){title,text,author{id},comments{text,author{id}}}}");

        const url = "/graphql?query=" + query;

        let response;
        let payload;

        try {
            response = await fetch(url);
            payload = await response.json();
        } catch (err) {
            setErrorMsg("Gönderileri çekerken hata: " + err);
            setNews(null);
            return;
        }

        if (response.status === 200) {

            if (payload.errors || !payload.data) {
                setErrorMsg("İstekte hata");
                setNews(null);
            } else
                setErrorMsg(null);
            setNews(payload.data.getNewsById);

        } else {
            setErrorMsg("HTTP bağlantısında hata: durum kodu:" + response.status);
            setNews(null);
        }
    }

    if (errorMsg) {
        return (
            <p>
                {errorMsg}
            </p>);
    }

    if (!news) {
        return (<h3>Yükleniyor...</h3>);
    }

    return (
        <div>
            <p>
                <Link to={"/"}>Anasayfa</Link>
            </p>

            <h2>{news.title}</h2>
            <p>Yazar: <Link to={"/user?userId=" + news.author.id}>{news.author.id}</Link></p>
            <p>{news.text}</p>

            <ul>
                {news.comments.map(c =>
                    <li>
                        <Link to={"/user?userId=" + c.author.id}>{c.author.id}</Link>: {c.text}
                    </li>)
                }
            </ul>

        </div>
    );

}
