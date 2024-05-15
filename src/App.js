import './App.css';
import { Header } from './components/common/header/TodoHeader';
import { TodoIndex } from './components/todo/TodoIndex';

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <Header title={'My Apps'} className={'center'} />
      </div>
      <div className="container">
        <TodoIndex />
      </div>
    </div>
  );
}

export default App;
