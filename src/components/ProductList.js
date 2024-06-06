import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct } from '../redux/productsSlice';

const ProductList = () => {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div>
      <h2>Product List</h2>
      <Link to="/product/new">Add New Product</Link>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name}
            <button onClick={() => handleDelete(product.id)}>Delete</button>
            <Link to={`/product/${product.id}`}>View Detail</Link>
            <Link to={`/product/edit/${product.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;