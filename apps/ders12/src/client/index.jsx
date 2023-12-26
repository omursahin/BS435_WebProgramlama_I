import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Home} from "./home";
import {News} from "./news";
import {User} from "./user";


const NotFound = () => {

    return (
        <div>
            <h2>NOT FOUND: 404</h2>
            <p>
                HATA: Aradığınız sayfaya ulaşılamıyor.
            </p>
        </div>
    );
};

const App = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/news" component={News}/>
                <Route exact path="/user" component={User}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    );
};

ReactDOM.render(<App/>, document.getElementById("root"));