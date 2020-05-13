"user strict";
import React from "react";

import "./input.css";

const Input = ({ handleChange, newType, msg, value }) => {
    return (
        <input
            type={newType}
            onChange={handleChange}
            value={value}
            placeholder={msg}
        />
    );
};

export default Input;
