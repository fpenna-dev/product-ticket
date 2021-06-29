import React, { useState, useEffect } from "react";
import Button from "./Button.jsx";
import Logo from "./images/logo.png";
// import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import "./Login.css";
import { Link } from "react-router-dom";
import { app, fire, googleAuthProvider } from "../firebaseconfig";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  useEffect(() => {
    app.onAuthStateChanged((user) => {
      if (user) {
        history.push("/main");
      }
    });
  }, [history]);

  const socialLogin = async (provider) => {
    await fire
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        history.push("/main");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const userLogin = () => {
    app
      .signInWithEmailAndPassword(email, password)
      .then((r) => {
        console.log(r);
        history.push("/main");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8 col-md-6 col-lg-5 col-xl-4">
          <img src={Logo} alt="logo" className="logo" />
          <Button
            texto="Iniciar sesion con Google"
            clase="login__google"
            onClick={() => socialLogin(googleAuthProvider)}
            // imagen={faGoogle}
          ></Button>
          <div className="mb-3">
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label form__label"
            >
              Usuario / Email:
            </label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Usuario/Email"
            />
            <div className="invalid-feedback">Ingrese su usuario</div>
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
                setPassword(e.target.value);
              }}
              type="password"
              className="form-control"
              id="exampleFormControlInput2"
              placeholder="Contraseña"
            />
            <Link to="/recover" className="form__forgot">
              <small>¿Olvidaste tu contraseña?</small>
            </Link>
          </div>
          <Button texto="Login" onClick={userLogin} clase="login"></Button>
          <p className="form__par">
            ¿No tenes cuenta?
            <Link to="/register" className="form__register">
              Registrate!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
