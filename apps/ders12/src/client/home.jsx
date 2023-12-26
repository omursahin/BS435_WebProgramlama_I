import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';


export const Home = () => {
    const [news, setNews] = useState();
    const [errorMsg, setErrorMsg] = useState();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {

        /*
            Not: Burada bir kütüphane kullanılabilir ancak eğitici olması açısından fetch ile yapıyoruz.
         */

        const query = "query=" + encodeURIComponent("{getNews{id,title,author{id}}}");

        const url = "/graphql?" + query;

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

            if(payload.errors || !payload.data){
                setErrorMsg("İstekte hata");
                setNews(null);
            } else
                setErrorMsg(null);
            setNews(payload.data.getNews);

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

    if (!news || news.length === 0) {
        return (<p>Yeni entry bulunmamaktadır</p>);
    }

    return (
        <div>
            <h2>Forum</h2>
            <table>
                <tr>
                    <th>Yazar</th>
                    <th>Entry</th>
                </tr>
                {news.map(n => {
                    return (
                        <tr>
                            <td><Link to={"/user?userId=" + n.author.id}>{n.author.id}</Link></td>
                            <td><Link to={"/news?newsId=" + n.id}>{n.title}</Link></td>
                        </tr>);
                })}
            </table>
        </div>
    )
}
