//import logo from './logo.svg';
import './App.css';


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/categories" element={<CategoryList />} />
          <Route path="/category/new" element={<CategoryForm />} />
          <Route path="/category/:id" element={<CategoryDetail />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/new" element={<ProductForm />} />
          <Route path="/product/:id" element={<ProductDetail />} />
  </Routes>
</Router>
    </Provider>
  );
};
export default App;
//function App() {
 // return (
    //<div className="App">
      //<header className="App-header">
        //<img src={logo} className="App-logo" alt="logo" />
        //<p>
         // Edit <code>src/App.js</code> and save to reload.
        //</p>
        //<a
         // className="App-link"
         // href="https://reactjs.org"
          //target="_blank"
          //rel="noopener noreferrer"
        //>
          //Learn React
        //</a>
      //</header>
    //</div>
  //);
//}


