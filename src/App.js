import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
// router import
import Main from './routes/main';
import { useState } from 'react';

function App() {

  const [on, setOn] = useState('');

  return (
    <div className='App'>

      <Routes>
          <Route path='/' element={<Main on={on} setOn={setOn}></Main>}></Route>
      </Routes>
    </div>
    
  );
}

export default App;
