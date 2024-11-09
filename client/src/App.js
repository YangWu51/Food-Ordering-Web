import logo from './logo.svg';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Link, Switch, Routes} from 'react-router-dom'
import './App.css';

import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Cartscreen from './screens/Cartscreen';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="/cart" element={<Cartscreen />} />
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
