import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './comp/home'
import Reg from './comp/Register'
import Teams from './comp/Teams';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/r' element={<Reg/>}/>
      <Route path='/s' element={<Teams/>}/>
    </Routes>
  );
}

export default App;
