import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../views/Home';
import Catalog from '../views/Catalog';
import Book from '../views/Book';
import RentHistory from '../views/MyBooks';
import About from '../views/About';
import NotFound from '../views/NotFound';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { NavBar } from '../components/NavBar';
import useDarkMode from '../hooks/useDarkMode';

function GlobalRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/catalog/:subject" exact element={<Layout><Catalog /></Layout>} />
                <Route path="/book/:key/:cover_id" element={<Layout><Book/></Layout>} />
                <Route path="/rent-history" element={<Layout><RentHistory /></Layout>} />
                <Route path="/about" element={<Layout><About /></Layout>} />
                <Route path="*" element={<Layout><NotFound /></Layout>} />
            </Routes>
        </BrowserRouter>
    );
}

const Layout = ({children}) => {

    const [isDarkMode, toggleDarkMode] = useDarkMode();

    return (
        <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
            <Header/>
            <NavBar toggleDarkMode={toggleDarkMode}/>
            {children}
            <Footer/>
        </div>
    )
};

export default GlobalRouter;
