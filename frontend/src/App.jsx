// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/general/home';
import Signup_agri from './pages/general/signup_agri';
import Login from './pages/general/login';
import Signup from './pages/general/signup_client';
import AddProduct from './pages/products/AddProduct';
import ManageProduct from './pages/products/ManageProduct';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signup_agri' element={<Signup_agri />} />
        <Route path='/login' element={<Login />} />
        <Route path='/add-product' element={<AddProduct />} />
        <Route path='/ManageProduct' element={<ManageProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
