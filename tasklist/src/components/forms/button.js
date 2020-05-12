"user strict";
import React from "react";

import "./button.css";

const Button = ({ children, handleClick, method }) => {
    return (
        <button
            type={method}
            onClick={handleClick}
            className="btn btn-medium btn-dark"
        >
            {children}
        </button>
    );
};

export default Button;
