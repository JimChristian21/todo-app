import './App.css';
import { useState } from 'react';
import AddForm from './components/AddForm';
import Todo from './components/Todo';


function App() {

  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState('');

  const handleInput = (e) => {
    setTodo(e.target.value);
  }

  const handleAdd = () => {

    if (todo != '') {

      setTodoList([
        ...todoList,
        todo
      ]);
      
      setTodo('');
    } 
  }

  const handleDelete = (todo) => {
    setTodoList(todoList.filter((tl) => tl !== todo));
  }

  const todos = todoList.map((item, i) => {
    return (
      <Todo key={i} todo={item} handleDelete={handleDelete}/>
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
