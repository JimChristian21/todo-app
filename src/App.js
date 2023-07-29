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

  const handleEdit = (newTodo) => {

    let todos = todoList.map((tl) => {
      
      if (tl.id == newTodo.id) {

        return newTodo;
      }

      return tl;
    });

    setTodoList(todos);
  }

  const updateStatus = (event, todoValue) => {
  
    let todos;

    if (event.target.checked) {

      todos = todoList.map((tl) => {
      
        if (tl.id == todoValue.id) {
  
          return {
            ...todoValue,
            completed: true
          };
        }
  
        return tl;
      });
  
    } else {

      todos = todoList.map((tl) => {
      
        if (tl.id == todoValue.id
            && todoValue.status !== false
        ) {
  
          return {
            ...todoValue,
            completed: false
          };
        }
  
        return tl;
      });
    }

    setTodoList(todos);
  }

  const handleAdd = () => {

    if (todo !== '') {

      setTodoList([
        ...todoList,
        {
          id: todoList.length + 1,
          name: todo,
          completed: false
        }
      ]);
      
      setTodo('');
    } 
  }

  const handleDelete = (todo) => {
    setTodoList(todoList.filter((tl) => tl.id !== todo.id));
  }

  const todos = todoList.map((item, i) => {
    return (
      <Todo key={item.id} todo={item} handleDelete={handleDelete}  handleEdit={handleEdit} updateStatus={updateStatus}/>
    );
  });

  return (
    <div>
      <header>
        <div className="container p-5 shadow bg-sky-600 w-10/12 min-h-96 rounded mx-auto mt-5">
          <div>
            <h1>Todo App: </h1>
          </div>
          
          <AddForm todo={todo} handleAdd={handleAdd} handleInput={handleInput}/>

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
