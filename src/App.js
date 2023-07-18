import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente jsx*/}
        {/* <Greetings name = "Santiago"></Greetings> */}
        {/* <GreetingF name="Jose"></GreetingF> */}
        <TaskListComponent></TaskListComponent>
      </header>
    </div>
  );
}

export default App;
