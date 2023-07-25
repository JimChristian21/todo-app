import './App.css';

function App() {
  return (
    <div className="">
      <header className="">
        <div className="container p-5 shadow bg-white-400 w-1/3 rounded mx-auto mt-5">
          <div>
            <h1>Todo App: </h1>
          </div>
          <div>
            <input 
              type="text" 
              className="pl-2 p-2 border-2 text-base rounded border-gray"
              placeholder="Add new todo"
            />
            <button 
              type="button" 
              className="ml-6 p-2 border-2 text-base rounded border-black"
              >
                Add
            </button>
          </div>
          
          <div className="mt-5">
            <div>
              <input type="checkbox"/>
              <label className="text-base">Run</label>
              <button type="button" className="text-base border-2 rounded mx-1 p-1">Edit</button>
              <button type="button" className="text-base border-2 rounded mx-1 p-1">Delete</button>
            </div>
            <div>
              <input type="checkbox"/>
              <label className="text-base">Swim</label>
              <button type="button" className="text-base border-2 rounded mx-1 p-1">Edit</button>
              <button type="button" className="text-base border-2 rounded mx-1 p-1">Delete</button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
