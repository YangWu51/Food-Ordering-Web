import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Cartscreen from './screens/Cartscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Orderscreen from './screens/Orderscreen';
import Adminscreen from './screens/Adminscreen';
import Userslist from './screens/Userslist';
import Orderslist from './screens/Orderslist';
import Pizzaslist from './screens/Pizzaslist';
import Addpizza from './screens/Addpizza';

function App() {
  useEffect(() => {
    // Set body styles to prevent overflow
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.overflowX = 'hidden';
  }, []);

  return (
    <div className="App" style={{ maxWidth: '100vw', overflowX: 'hidden' }}>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homescreen />} />
          <Route path="/cart" element={<Cartscreen />} />
          <Route path="/register" element={<Registerscreen />} />
          <Route path="/login" element={<Loginscreen />} />
          <Route path="/orders" element={<Orderscreen />} />
          <Route path="/admin" element={<Adminscreen />} />
          <Route path="/admin/userslist" element={<Userslist />} />
          <Route path="/admin/orderslist" element={<Orderslist />} />
          <Route path="/admin/pizzaslist" element={<Pizzaslist />} />
          <Route path="/admin/addpizza" element={<Addpizza />} />





        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
