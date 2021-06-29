import React, { useState, useEffect } from "react";
import "./Main.css";
import { app } from "../firebaseconfig";
import { useHistory } from "react-router-dom";
import Button from "./Button.jsx";

const Main = () => {
    const [userLogin, setUserlogin] = useState(null);
    const history = useHistory();

    useEffect(() => {
        app.onAuthStateChanged((user) => {
            if (user) {
                setUserlogin(user.email);
                console.log(user.email);
            } else {
                history.push("/");
            }
        });
    }, [history]);

    const cerrarSesion = () => {
        app.signOut();
        setUserlogin(null);
        history.push("/");
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-8 col-md-6 col-lg-5 col-xl-4 main">
                    <div className="nav sticky-top">
                        <img src="https://place-hold.it/20x20" alt="" />
                        {userLogin ? (
                            <Button
                                texto="Cerrar Sesion"
                                clase="cerrar__sesion"
                                onClick={cerrarSesion}
                            ></Button>
                        ) : (
                            <span></span>
                        )}
                    </div>
                    <div className="head sticky-top">
                        <h3 className="head__title">Lista de tickets</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
