import './App.css';
import TaskList from "./Components/taskList";
import { Provider } from 'react-redux';
import {store} from './app/store';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <TaskList/>
        </Provider>
     
    </div>
  );
}

export default App;
