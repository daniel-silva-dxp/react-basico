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
            ],
            index: -1
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
                                const { tasks, index } = this.state;
                                let { newTask } = this.state;
                                newTask = newTask.trim();

                                if (tasks.indexOf(newTask) !== -1) {
                                    return;
                                }
                                const myTasks = [...tasks];

                                if (index === -1) {
                                    this.setState({
                                        tasks: [...myTasks, newTask],
                                        newTask: ""
                                    });
                                } else {
                                    myTasks[index] = newTask;
                                    this.setState({
                                        tasks: [...myTasks],
                                        index: -1
                                    });
                                }
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
                                                const { tasks } = this.state;
                                                this.setState({
                                                    index,
                                                    newTask: tasks[index]
                                                });
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
                            {this.state.tasks.length === 0 && (
                                <span className="no-tasks">No tasks</span>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
