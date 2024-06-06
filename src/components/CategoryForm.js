import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCategory, updateCategory } from '../redux/categoriesSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CategoryForm = () => {
  const { id } = useParams();
  const categories = useSelector(state => state.categories);
  const category = categories.find(cat => cat.id === id) || {};
  const [name, setName] = useState(category.name || '');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(updateCategory({ id, name }));
    } else {
      dispatch(addCategory({ id: Date.now(), name }));
    }
    navigate('/categories');
  };

  return (
    <div>
      <h2>{id ? 'Edit Category' : 'Add Category'}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Category Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default CategoryForm;