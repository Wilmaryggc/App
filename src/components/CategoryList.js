import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCategory } from '../redux/categoriesSlice';

const CategoryList = () => {
  const categories = useSelector(state => state.categories);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteCategory(id));
  };

  return (
    <div>
      <h2>Category List</h2>
      <Link to="/category/new">Add New Category</Link>
      <ul>
        {categories.map(category => (
          <li key={category.id}>
            {category.name}
            <button onClick={() => handleDelete(category.id)}>Delete</button>
            <Link to={`/category/${category.id}`}>View Detail</Link>
            <Link to={`/category/edit/${category.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;