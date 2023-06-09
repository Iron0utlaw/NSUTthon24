import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '../src/comp/Pages/home/home'
import Reg from '../src/comp/Pages/Register'
import Teams from '../src/comp/Pages/Teams';
import Error from './comp/Pages/404/Error'
import SocEvents from './comp/Pages/SocPages/SocEvents';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/registration' element={<Reg/>}/>
      <Route path='/teams' element={<Teams/>}/>
      <Route path='*' element={<Error/>}/>
      <Route path='/soc-events' element={<SocEvents/>}/>
    </Routes>
  );
}

export default App;
