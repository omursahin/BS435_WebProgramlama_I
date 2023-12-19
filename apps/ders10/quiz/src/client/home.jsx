import React from "react";
import {Link} from "react-router-dom";

export const Home = ({user}) => {
    return (
        <div>
            <h2>Quiz Oyunu</h2>
            <p className="welcome-text">
                Quiz oyununa hoş geldiniz. Bu oyunda, 4 şıktan oluşan bir dizi soru soracağız.
                Şıklardan yalnızca biri doğrudur. Eğer sorulardan birini yanlış cevaplarsan, yenilirsin!
                Oyunu kazanmak istiyorsan tamamını doğru cevaplamak zorundasın :)
            </p>
            {
                user ? (
                        <div>
                            <Link to={"/match"} className={"button"}>
                                Oyna
                            </Link>
                            <div className="action">
                                <p>Galibiyet: {user.victories}</p>
                                <p>Mağlubiyet: {user.defeats}</p>
                            </div>
                        </div>
                    ) :
                    (
                        <p>Oynamak için giriş yapmanız gerekmektedir!</p>
                    )
            }

        </div>
    );
}