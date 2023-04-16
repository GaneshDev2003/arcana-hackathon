import './App.css';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tableau } from './components/Tableau';
import CustomNav from './components/Navbar';
import Home from './components/Home';
import {Forecast} from './components/Forecast';

function App() {
  return (
    <div className='App'>
      <Router>
        <CustomNav/>
      <Routes>
        <Route path='/' exact Component = {Home}/>
        <Route path = '/chart' Component={Tableau}/>
        <Route path = '/news' Component={News}/>
        <Route path = '/forecast' Component={Forecast}/>
      </Routes>
    </Router>
    </div>
    
  );
}

export default App;
