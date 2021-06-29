import React from "react";
import "./Button.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = (props) => {
    const { texto, imagen, onClick, clase } = props;
    return (
        <button onClick={onClick} className={clase}>
            {/* <FontAwesomeIcon icon={imagen} className="button__icon" /> */}
            {texto}
        </button>
    );
};

export default Button;
