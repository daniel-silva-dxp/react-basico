"user strict";
import React, { Component } from "react";
import Header from "./header/header";
import { FaEdit, FaWindowClose } from "react-icons/fa";

import "./main.css";
import Form from "./forms/form";

class Main extends Component {
    constructor() {
        super();
        this.state = {
            newTask: "",
            tasks: [
                "Estudar Reactjs",
                "Estudar Inglês",
                "Estudar para certificação"
            ]
        };
    }

    render() {
        return (
            <div className="main">
                <Header />
                <div className="container">
                    <div className="box">
                        <Form
                            addTask={e => {
                                e.preventDefault();
                                const { tasks } = this.state;
                                let { newTask } = this.state;
                                newTask = newTask.trim();

                                if (tasks.indexOf(newTask) !== -1) {
                                    return;
                                }
                                const myTasks = [...tasks];
                                this.setState({
                                    tasks: [...myTasks, newTask]
                                });
                            }}
                            setTask={e => {
                                this.setState({
                                    newTask: e.target.value
                                });
                            }}
                            newTask={this.state.newTask}
                        />
                        <ul className="my-tasks">
                            {this.state.tasks.map((task, index) => (
                                <li key={index}>
                                    {task}
                                    <div>
                                        <FaEdit
                                            onClick={e => {
                                                console.log("Edit", index);
                                            }}
                                            className="edit"
                                        />
                                        <FaWindowClose
                                            onClick={e => {
                                                const { tasks } = this.state;
                                                const newTasks = [...tasks];
                                                newTasks.splice(index, 1);
                                                this.setState({
                                                    tasks: [...newTasks]
                                                });
                                            }}
                                            className="delete"
                                        />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
