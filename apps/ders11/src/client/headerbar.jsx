import React from "react";
import {Link, useNavigate} from "react-router-dom";

export const HeaderBar = ({userId, updateLoggedInUser}) => {

    const nav = useNavigate();

    const doLogout = async () => {
        const url = "/api/logout";

        let response;

        try {
            response = await fetch(url, {method: "post"});
        } catch (err) {
            alert("Sunucuya bağlanmada hata: " + err);
            return;
        }

        if (response.status !== 204) {
            alert("Sunucuya bağlanmada hata: durum kodu " + response.status);
            return;
        }

        updateLoggedInUser(null);
        nav("/");
    };

    const renderLoggedIn = (userId) => {
        return (
            <>
                <p className="header-text">
                    Hoş geldin {userId}
                    !!!
                </p>
                <button className="header-button" onClick={doLogout}>
                    Logout
                </button>
            </>
        );
    }

    const renderNotLoggedIn = () => {
        return (
            <>
                <p className="header-text">Giriş yapmadınız</p>
                <div className="action-buttons">
                    <Link className="header-button" to="/login" tabIndex="0">
                        Giriş Yap
                    </Link>
                    <Link className="header-button" to="/signup" tabIndex="0">
                        Üye Ol
                    </Link>
                </div>
            </>
        );
    }

    return (
        <div className="header">
            <Link className="header-logo" to={"/"} tabIndex="0">
                Quiz
            </Link>
            {userId ? renderLoggedIn(userId) : renderNotLoggedIn()}
        </div>
    )
}