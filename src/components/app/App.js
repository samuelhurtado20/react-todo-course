import './App.css';
import { Header } from '../../common/header/Header';
import { TodoIndex } from '../todo/TodoIndex';
import { Menu } from '../menu/Menu';
import { useState } from 'react';

function App() {

  const [menu, setMenu] = useState('todo-app')
  return (
    <div className="App">
      <div className="sidebar">
        <Header title={'My Apps'} className={'center'} />
        <Menu menu={menu} setMenu={setMenu} />
      </div>
      <div className="container">
        {menu === 'todo-app' && <TodoIndex />}
      </div>
    </div>
  );
}

export default App;
