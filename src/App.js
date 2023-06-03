import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './comp/home'
import Reg from './comp/reg'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/r' element={<Reg/>}/>
    </Routes>
  );
}

export default App;
