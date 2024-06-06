import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, updateProduct } from '../redux/productsSlice';
import { useNavigate, useParams } from 'react-router-dom';

const ProductForm = () => {
  const { id } = useParams();
  const products = useSelector(state => state.products);
  const product = products.find(prod => prod.id === id) || {};
  const [name, setName] = useState(product.name || '');
  const [price, setPrice] = useState(product.price || '');
  const [category, setCategory] = useState(product.category || '');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(updateProduct({ id, name, price, category }));
    } else {
      dispatch(addProduct({ id: Date.now(), name, price, category }));
    }
    navigate('/products');
  };

  return (
    <div>
      <h2>{id ? 'Edit Product' : 'Add Product'}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Product Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Price:
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
        <br />
        <label>
          Category:
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
        </label>
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default ProductForm;