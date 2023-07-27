import React from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddForm = ({todo, handleInput, handleAdd}) =>{

    return (
        <div className="mt-3 w-full">
            <input 
              type="text" 
              className="pl-2 p-2 border-2 text-base rounded border-black w-11/12"
              placeholder="Add new todo"
              value={todo}
              onChange={handleInput}
            />
            <button 
              type="button" 
              className="p-2 border-2 text-base rounded border-black text-black bg-sky-200 w-1/12"
              onClick={handleAdd}
              >
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    );
}


export default AddForm;