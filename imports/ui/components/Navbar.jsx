import React from "react"
import { Meteor } from 'meteor/meteor'

import { useTracker, useFind, useSubscribe } from 'meteor/react-meteor-data'
import { cartProductsCollection } from "../../api/collections/cartProducts"

import HeaderDesktop from "./HeaderDesktop"



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


    const isLoading = useSubscribe('cartProducts', userId);
    const cartProducts = useFind(() => {

        return cartProductsCollection.find({ userId: userId });
    });

    console.log('CART PRODUCTS: ', cartProducts.length);


    if (!user) {

        return (

            <>
                <nav className="navbar-background">


                    <HeaderDesktop />

                </nav>
            </>


        )
    }

    if (!isLoading()) {

        return (
            <>
                <nav className="navbar-background">

                    <HeaderDesktop username={user.username} productsQuantity={cartProducts.length} />

                </nav>
            </>
        )


    }



}

export default Navbar;