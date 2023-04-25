import './App.css';

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="head">
          <h1>welcome To</h1>
          <h1>ToDoApp</h1>
        </div>
        <div className="input">
          <input type="text" placeholder='Add here' />
          <i class="fas fa-plus"></i>
        </div>
        <div className="todos">
          <div className="todo">
            <div className="check">
              <input type="checkbox" />
              <p>React Tutorial</p>
            </div>
            <i class="fas fa-times"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
