import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import InventoryList from './pages/inventory/InventoryList';
import ProductList from './pages/products/ProductList';
import ProductDetail from './pages/products/ProductDetail';
import ProductForm from './pages/products/ProductForm';
import SalesList from './pages/sales/SalesList';
import SalesForm from './pages/sales/SalesForm';
import OrdersList from './pages/orders/OrdersList';
import OrderDetail from './pages/orders/OrderDetail';
import OrderForm from './pages/orders/OrderForm';
import UsersList from './pages/users/UsersList';
import UserForm from './pages/users/UserForm';
import NotFound from './pages/NotFound';
import { RootState } from './redux/store';

const App: React.FC = () => {
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);

  const isAdmin = user?.role === 'admin';
  const isManager = user?.role === 'manager' || isAdmin;

  return (
    <Routes>
      <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/" />} />
      <Route path="/register" element={!isAuthenticated ? <Register /> : <Navigate to="/" />} />
      
      <Route path="/" element={isAuthenticated ? <Layout /> : <Navigate to="/login" />}>
        <Route index element={<Dashboard />} />
        
        {/* Inventory Routes */}
        <Route path="inventory" element={<InventoryList />} />
        
        {/* Products Routes */}
        <Route path="products" element={<ProductList />} />
        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="products/add" element={isManager ? <ProductForm /> : <Navigate to="/products" />} />
        <Route path="products/edit/:id" element={isManager ? <ProductForm /> : <Navigate to="/products" />} />
        
        {/* Sales Routes */}
        <Route path="sales" element={<SalesList />} />
        <Route path="sales/add" element={<SalesForm />} />
        
        {/* Orders Routes */}
        <Route path="orders" element={isManager ? <OrdersList /> : <Navigate to="/" />} />
        <Route path="orders/:id" element={isManager ? <OrderDetail /> : <Navigate to="/" />} />
        <Route path="orders/add" element={isManager ? <OrderForm /> : <Navigate to="/" />} />
        <Route path="orders/edit/:id" element={isManager ? <OrderForm /> : <Navigate to="/" />} />
        
        {/* Users Routes - Admin Only */}
        <Route path="users" element={isAdmin ? <UsersList /> : <Navigate to="/" />} />
        <Route path="users/add" element={isAdmin ? <UserForm /> : <Navigate to="/" />} />
        <Route path="users/edit/:id" element={isAdmin ? <UserForm /> : <Navigate to="/" />} />
      </Route>
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
