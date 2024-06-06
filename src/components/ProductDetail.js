import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductDetail = () => {
  const { id } = useParams();
  const product = useSelector(state =>

 state.products.find(prod => prod.id === id));

  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <h2>Product Detail</h2>
      <p>ID: {product.id}</p>
      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>
      <p>Category: {product.category}</p>
    </div>
  );
};

export default ProductDetail;