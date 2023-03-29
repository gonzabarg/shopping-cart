import React from 'react'
import { Meteor } from 'meteor/meteor'

import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { useLayoutEffect } from 'react'

import '/client/main.css'


import Home from './pages/Home'
import Product from './pages/Product'
import Cart from './pages/Cart'
import UserPage from './pages/UserPage'
import OrderSummary from './pages/OrderSummary'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

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

    <div style={{ minHeight: '100vh' }}>
        <BrowserRouter>
            <Wrapper>

                <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>

                    <Navbar />

                    <Routes>
                        <Route path='/' element={<Home />}></Route>
                        <Route path='/product/:id' action={({ params }) => { }} element={<Product />}></Route>
                        <Route path='/cart' element={<Cart />}></Route>
                        <Route path='/order/:id' action={({ params }) => { }} element={<OrderSummary />}></Route>
                        <Route path='/user-page' element={<UserPage />}></Route>
                    </Routes>


                    <Footer />


                </div>

            </Wrapper>
        </BrowserRouter>
    </div>


);
