import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import CategoryList from './components/CategoryList';
import CategoryForm from './components/CategoryForm';
import CategoryDetail from './components/CategoryDetail';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import ProductDetail from './components/ProductDetail';


const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/categories" element={<CategoryList />} />
          <Route path="/category/new" element={<CategoryForm />} />
          <Route path="/category/:id" element={<CategoryDetail />} />
          <Route path="/category/edit/:id" element={<CategoryForm />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/new" element={<ProductForm />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/product/edit/:id" element={<ProductForm />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;