import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, createBrowserRouter, createHashRouter, RouterProvider} from "react-router-dom";

import {Match} from "./match";
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

const router = createHashRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/match",
        element: <Match/>
    }
]);

const App = () => {

    return (
        <RouterProvider router={router}/>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));
