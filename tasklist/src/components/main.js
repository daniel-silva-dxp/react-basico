"user strict";
import React, { Component } from "react";
import Header from "./header/header";
import Form from "./forms/form";

import "./main.css";
import List from "./list/list";

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

    componentDidMount() {
        const tasks = JSON.parse(localStorage.getItem("tasks"));

        if (!tasks) {
            return;
        }

        this.setState({
            tasks
        });
    }

    componentDidUpdate(prevProps, prevState) {
        const { tasks } = this.state;
        if (tasks === prevState.tasks) {
            return;
        }
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    render() {
        const { tasks } = this.state;
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
                        <List
                            tasks={tasks}
                            handleEdit={(e, index) => {
                                const { tasks } = this.state;
                                this.setState({
                                    index,
                                    newTask: tasks[index]
                                });
                            }}
                            handleDelete={(e, index) => {
                                const { tasks } = this.state;
                                const newTasks = [...tasks];
                                newTasks.splice(index, 1);
                                this.setState({
                                    tasks: [...newTasks]
                                });
                            }}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
