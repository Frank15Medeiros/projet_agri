// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/general/home';
import Signup_agri from './pages/general/signup_agri';
import Login from './pages/general/login';
import Signup from './pages/general/signup_client';
import Agricu from './pages/agriculteur/ventagricu';
import ClientProductPage from './pages/client/ClientProductPage';
import AdminProductsPage from './pages/admin/AdminProductsPage';
import AdminPurchaseList from './pages/admin/AdminPurchaseList';
import Product from './pages/products/AddProduct';
import ManageProduct from './pages/products/ManageProduct';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signup_agri' element={<Signup_agri />} />
        <Route path='/login' element={<Login />} />
        <Route path='/agricu' element={<Agricu />} />
        <Route path='/products' element={<ClientProductPage />} />
        <Route path='/admin/products' element={<AdminProductsPage />} />
        <Route path='/admin/purchases' element={<AdminPurchaseList />} />
        <Route path='/add-product' element={<Product />} />
        <Route path='/ManageProduct' element={<ManageProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
