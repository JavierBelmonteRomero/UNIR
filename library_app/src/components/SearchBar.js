import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ value, onChange }) => {
    const [category, setCategory] = useState('');

    const [subCategory, setSubCategory] = useState('');
    const navigate = useNavigate();

    const categoryOptions = ['Art', 'Science', 'Animals', 'Fiction'];
    const subCategoryOptions = {
        Art: ['architecture', 'design', 'music', 'photography'],
        Science: ['biology', 'mathematics', 'physics', 'chemistry'],
        Animals: ['bears', 'cats', 'dogs'],
        Fiction: ['fantasy', 'horror', 'humor', 'thriller']
    };

    const handleCategoryChange = (selectedCategory) => {
        setCategory(selectedCategory);
        setSubCategory('');
    };

    const handleSubCategoryChange = (selectedSubCategory) => {
        setSubCategory(selectedSubCategory);
        navigate(`/catalog/${selectedSubCategory}`);
    };

    return (
        <div className='search-bar'>
            <label className='search-bar-component'>
                Select Category:
                <select className='search-bar-select' value={category} onChange={(e) => handleCategoryChange(e.target.value)}>
                    <option value="" disabled>Select a category</option>
                    {categoryOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            </label>
            {category && (
                <label className='search-bar-component'>
                    Select Sub-Category:
                    <select className='search-bar-select' value={subCategory} onChange={(e) => handleSubCategoryChange(e.target.value)}>
                        <option value="" disabled>Select a sub-category</option>
                        {subCategoryOptions[category].map((option) => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </label>
            )}
        </div>
        
    );
};

export default SearchBar;