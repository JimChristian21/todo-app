import React from "react";
import { faTrash, faPen, faCancel, faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Todo = ({todo, handleDelete}) => {

    const [isEdit, setIsEdit] = useState(false);
    const [newTodo, setNewTodo] = useState(todo);
    
    return (
        <div className="w-100 bg-slate-200 p-1 mb-2 rounded flex justify-between content-center">
            <div className="flex w-full">
            { !isEdit && (
                <>
                    <div className="w-11/12 flex flex-row justify-start content-center">
                        <input type="checkbox" className="ml-2"/>
                        <label className="text-base ml-2 mt-3">{todo}</label>
                    </div>
                    <div className="flex flex-row">
                        <button type="button" className="text-lg border-2 rounded p-2 hover:text-sky-700" onClick={() => setIsEdit(true)}>
                            <FontAwesomeIcon icon={faPen} />
                        </button>
                        <button 
                            type="button" className="text-lg border-2 rounded p-2 hover:text-sky-700"
                            onClick={() => handleDelete(todo)}
                        >
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                </>
            )}

{           isEdit && (
                <>
                    <input 
                        type="text" 
                        className="pl-2 p-2 border-2 text-base rounded border-black w-11/12"
                        placeholder="Add new todo"
                        value={todo}
                        // onChange={handleInput}
                    />
                    <div className="flex flex-row">
                        <button type="button" className="text-lg border-2 rounded p-2 hover:text-sky-700" onClick={() => setIsEdit(true)}>
                            <FontAwesomeIcon icon={faSave} />
                        </button>
                        <button 
                            type="button" className="text-lg border-2 rounded p-2 hover:text-sky-700"
                            onClick={() => setIsEdit(false)}
                        >
                            <FontAwesomeIcon icon={faCancel} />
                        </button>
                    </div>
                </>
            )}
            
            </div>
            
        </div>
    );
}

export default Todo;