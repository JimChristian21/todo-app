import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header bg-black">
        <div className="container p-5 bg-blue-500">
          <div>
            <label className="">Todo: </label>
            <input 
              type="text" 
              className="pl-2 p-2 border-2 text-base rounded border-black"
            />
            <button 
              type="button" 
              className="ml-6 p-2 border-2 text-base rounded border-black"
              >
                Add
            </button>
          </div>

          <hr className="mt-5"/>
          
          <div>
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
