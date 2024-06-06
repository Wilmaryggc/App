import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CategoryDetail = () => {
  const { id } = useParams();
  const category = useSelector(state => state.categories.find(cat => cat.id === id));

  if (!category) return <div>Category not found</div>;

  return (
    <div>
      <h2>Category Detail</h2>
      <p>ID: {category.id}</p>
      <p>Name: {category.name}</p>
    </div>
  );
};

export default CategoryDetail;