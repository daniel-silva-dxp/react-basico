"user strict";
import React from "react";
import { FaEdit, FaWindowClose } from "react-icons/fa";

import "./list.css";

const List = ({ tasks, handleEdit, handleDelete }) => {
    return (
        <ul className="my-tasks">
            {tasks.map((task, index) => (
                <li key={index}>
                    {task}
                    <div>
                        <FaEdit
                            onClick={e => handleEdit(e, index)}
                            className="edit"
                        />
                        <FaWindowClose
                            onClick={e => handleDelete(e, index)}
                            className="delete"
                        />
                    </div>
                </li>
            ))}
            {tasks.length === 0 && <span className="no-tasks">No tasks</span>}
        </ul>
    );
};

export default List;
