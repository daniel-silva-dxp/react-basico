"user strict";
import React from "react";
import Input from "./input";
import Button from "./button";
import { FaPlus } from "react-icons/fa";

import "./form.css";

const Form = ({ addTask, setTask, newTask }) => {
    return (
        <form onSubmit={addTask} action="#">
            <Input
                newType="text"
                handleChange={setTask}
                msg="Your Task"
                value={newTask}
            />
            <Button method="submit">
                <FaPlus />
            </Button>
        </form>
    );
};

export default Form;
