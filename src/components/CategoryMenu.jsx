import React, { useEffect, useState } from 'react'
import FoodData from '../data/data.js'
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../redux/slices/CategorySlice.jsx';

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  // Function to list unique categories from FoodData
  const listUniqueCategories = () => {
    const uniqueCategories = [...new Set(FoodData.map((food) => food.category))];
    setCategories(uniqueCategories);
  }

  useEffect(() => {
    listUniqueCategories();
  }, []);

  return (
    <div className='m-6'>
      <h3 className='text-xl font-bold text-gray-600'>Find the best foods</h3>
      <div className='flex gap-3 my-5 overflow-x-scroll scroll-smooth lg:overflow-x-hidden ' id='scroll'>
        {/* "All" button */}
        <button 
          onClick={() => dispatch(setCategory('All'))}
          className={`px-3 py-2 bg-gray-200 rounded-lg hover:bg-green-500 hover:text-white ${selectedCategory === "All" && "bg-green-500 text-white"}`}>
          All
        </button>
        
        {/* Dynamically generated category buttons */}
        {categories.map((category, index) => (
          <button 
            onClick={() => dispatch(setCategory(category))}
          className={`px-3 py-2 bg-gray-200 rounded-lg hover:bg-green-500 hover:text-white ${selectedCategory === category && "bg-green-500 text-white"}`} key={index}>
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}

export default CategoryMenu;
