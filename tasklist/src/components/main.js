"user strict";
import React, { Component } from "react";
import Button from "./forms/button";
import Input from "./forms/input";
import Header from "./header/header";
import { FaPlus } from "react-icons/fa";

import "./main.css";

class Main extends Component {
    constructor() {
        super();
        this.state = {
            newTask: ""
        };
    }
    render() {
        return (
            <div className="main">
                <Header />
                <div className="container box">
                    <form action="#">
                        <Input
                            newType="text"
                            handleChange={e => {
                                this.setState({
                                    newTask: e.target.value
                                });
                            }}
                            msg="Your Task"
                        />
                        <Button method="submit">
                            <FaPlus />
                        </Button>
                        <div>{this.state.newTask}</div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Main;
