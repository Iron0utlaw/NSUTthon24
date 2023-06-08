import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '../src/comp/Pages/home'
import Reg from '../src/comp/Pages/Register'
import Teams from '../src/comp/Pages/Teams';

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
