"user strict";
import React from "react";
import { FaEdit, FaWindowClose } from "react-icons/fa";

import "./list.css";

const List = ({ children, myKey }) => {
    return (
        <ul className="my-tasks">
            <li key={myKey}>
                {children}
                <div>
                    <FaEdit className="edit" />
                    <FaWindowClose className="delete" />
                </div>
            </li>
            ))
        </ul>
    );
};

export default List;
