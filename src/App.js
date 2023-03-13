import logo from './logo.svg';
import './App.css';
import NewTask from './NewTask'
import TaskView from './TaskView';
import {TaskProvider} from './TaskContext'

function App() {
  return (
    <div className="App">
      <TaskProvider>
          <TaskView />
      </TaskProvider>
    </div>
  );
}

export default App;
