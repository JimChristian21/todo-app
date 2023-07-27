import React from "react";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Todo = ({todo}) => {

    return (
        <div className="w-100 bg-slate-200 p-1 mb-2 rounded flex justify-between content-center">
            <span className="mt-3">
            <input type="checkbox" className="ml-2"/>
            <label className="text-base ml-2">{todo}</label>
            </span>
            <span>
            <button type="button" className="text-lg border-2 rounded p-2 hover:text-sky-700">
                <FontAwesomeIcon icon={faPen} />
            </button>
            <button type="button" className="text-lg border-2 rounded p-2 hover:text-sky-700">
                <FontAwesomeIcon icon={faTrash} />
            </button>
            </span>
        </div>
    );
}

export default Todo;