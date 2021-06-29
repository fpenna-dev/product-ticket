import React, { useState, useEffect } from "react";
import Button from "./Button.jsx";
import "./Register.css";
import { app } from "../firebaseconfig";
import { useHistory } from "react-router-dom";

const Register = () => {
    const [email, setEmail] = useState("");
    const [verifyPass, setVerifypass] = useState("");
    const [password, setPassword] = useState("");
    const [msgerror, setMsgerror] = useState(null);
    const history = useHistory();

    useEffect(() => {
        app.onAuthStateChanged((user) => {
            if (user) {
                history.push("/main");
            }
        });
    }, [history]);

    const userRegister = () => {
        if (password !== verifyPass) {
            setMsgerror("Las contraseñas no coinciden");
            return;
        }
        app.createUserWithEmailAndPassword(email, password)
            .then(() => {
                console.log("Usuario Registrado");
                setTimeout(() => {
                    history.push("/");
                }, 2000);
            })
            .catch((e) => {
                if (e.code === "auth/invalid-email") {
                    setMsgerror("Ingrese un Email correcto");
                }
                if (e.code === "auth/weak-password") {
                    setMsgerror(
                        "Ingrese una contraseña de al menos 6 caracteres"
                    );
                }
            });
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-8 col-md-6 col-lg-5 col-xl-4">
                    <div className="mb-3">
                        <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label form__label"
                        >
                            Email:
                        </label>
                        <input
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            type="text"
                            className="form-control"
                            id="validationCustomUsername"
                            placeholder="Email"
                        />
                        <div className="invalid-feedback">
                            Ingrese su usuario
                        </div>
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="exampleFormControlInput2"
                            className="form-label form__label"
                        >
                            Contraseña:
                        </label>
                        <input
                            onChange={(e) => {
                                setVerifypass(e.target.value);
                            }}
                            type="password"
                            className="form-control"
                            id="exampleFormControlInput2"
                            placeholder="Contraseña"
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="exampleFormControlInput2"
                            className="form-label form__label"
                        >
                            Confirmar Contraseña:
                        </label>
                        <input
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            type="password"
                            className="form-control"
                            id="exampleFormControlInput2"
                            placeholder="Confirmar Contraseña"
                        />
                    </div>
                    {msgerror != null ? (
                        <div className="mb-3 mt-4">
                            <p className="error">{msgerror}</p>
                        </div>
                    ) : (
                        <span></span>
                    )}

                    <Button
                        texto="Registrar"
                        onClick={userRegister}
                        clase="login"
                    ></Button>
                </div>
            </div>
        </div>
    );
};

export default Register;
