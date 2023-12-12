import React from "react";
import ReactDOM from "react-dom";

import {Match} from "./match";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./home";

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

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="match" element={<Match/>}/>
                <Route path="*" element={<notFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));