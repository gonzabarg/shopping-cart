import React from 'react';
import { Meteor } from 'meteor/meteor';

import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';

import '/client/main.css';


import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import About from './pages/About';
import Products from './pages/Products';
import UserPage from './pages/UserPage';

import Navbar from './components/Navbar';

const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, [location.pathname]);
    return children
}


export const App = () => (


    <BrowserRouter>
        <Wrapper>

            <div style={{ height: '100vh' }}>

                <Navbar />

                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/products' element={<Products />}></Route>
                    <Route path='/product/:id' action={({ params }) => { }} element={<Product />}></Route>
                    <Route path='/cart' element={<Cart />}></Route>
                    <Route path='/user-page' element={<UserPage />}></Route>
                </Routes>


            </div>

        </Wrapper>
    </BrowserRouter>

);
