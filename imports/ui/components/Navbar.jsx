import React from "react";
import { useEffect } from "react";

import { Meteor } from 'meteor/meteor'

import { useTracker, useFind, useSubscribe } from 'meteor/react-meteor-data'
import { cartProductsCollection } from "../../api/collections/cartProducts";

import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";



const useAccount = () => useTracker(() => {
    const user = Meteor.user()
    const userId = Meteor.userId()
    return {
        user,
        userId,
        isLoggedIn: !!userId
    }
}, []);

const Navbar = () => {

    const { user, userId, isLoggedIn } = useAccount();

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 900;

    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        // subscribe to window resize event "onComponentDidMount"
        window.addEventListener("resize", handleResizeWindow);
        return () => {
            // unsubscribe "onComponentDestroy"
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);

    const isLoading = useSubscribe('cartProducts', userId);
    const cartProducts = useFind(() => {

        return cartProductsCollection.find({ userId: userId });
    });

    console.log('CART PRODUCTS: ', cartProducts.length);
    console.log('USER', user.username);


    const background = {
        backgroundColor: 'white',
        width: '100%',
        height: "5.5rem",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'sticky',
        top: '0',
        zIndex: '5'

    }





    return (
        <>
            <nav style={background}>

                {console.log(width > breakpoint)}

                {width > breakpoint ? <HeaderDesktop username={user.username} isLogged={isLoggedIn} productsQuantity={cartProducts.length} /> : <HeaderMobile />}

            </nav>
        </>
    )
}

export default Navbar;