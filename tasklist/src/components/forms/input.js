"user strict";
import React from "react";

import "./input.css";

const Input = ({ handleChange, newType, msg }) => {
    return <input type={newType} onChange={handleChange} placeholder={msg} />;
};

export default Input;
