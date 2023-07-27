import './App.css';
import { 
  faPlus, 
  faTrash,
  faPen
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import AddForm from './components/AddForm';


function App() {

  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState('');

  const handleInput = (e) => {
    setTodo(e.target.value);
  }

  const handleAdd = () => {
    setTodoList([
      ...todoList,
      todo
    ]);
    setTodo('');
  }

  const todos = todoList.map((item, i) => {
    return (
      <div key={i} className="w-100 bg-slate-200 p-1 mb-2 rounded flex justify-between content-center">
        <span className="mt-3">
          <input type="checkbox" className="ml-2"/>
          <label className="text-base ml-2">{item}</label>
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
  });

  return (
    <div>
      <header>
        <div className="container p-5 shadow bg-sky-600 w-10/12 min-h-96 rounded mx-auto mt-5">
          <div>
            <h1>Todo App: </h1>
          </div>
          
          <AddForm todo={todo} handleAdd={handleAdd} handleInput={handleInput} />

          <hr className="mt-5"/>
          
          <div className="mt-5 flex flex-col">
            {todos}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
