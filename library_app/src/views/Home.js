import React from 'react';
import SearchBar from '../components/SearchBar';

const Home = () => {
    return (
        <div className="home-container">
            <img
                className="background-image"
                src="https://www.indianarrative.com/wp-content/uploads/2022/07/Reading_books.jpg"
                alt="Reading books"
            />
            <div className="overlay">
                <SearchBar />
            </div>
        </div>
    );
};

export default Home;