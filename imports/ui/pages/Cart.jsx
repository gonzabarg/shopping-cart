import React from "react";
import { Meteor } from 'meteor/meteor'

import { useTracker, useFind, useSubscribe } from 'meteor/react-meteor-data'
import { cartProductsCollection } from "../../api/collections/cartProducts";
import { Container, Row, Col, Button } from 'react-bootstrap'
import Loading from '../components/Loading';

import CartItem from "../components/CartItem";


const useAccount = () => useTracker(() => {
    const user = Meteor.user()
    const userId = Meteor.userId()
    return {
        user,
        userId,
        isLoggedIn: !!userId
    }
}, []);

const Cart = () => {

    const { user, userId, isLoggedIn } = useAccount();

    const isLoading = useSubscribe('cartProducts', userId);
    const cartProducts = useFind(() => cartProductsCollection.find({ userId: userId }));

    console.log('CART PRODUCTS: ', cartProducts);

    let subtotal = cartProducts.reduce((acc, product) => {
        return (acc += product.subtotalProduct)
    }, 0);
    let taxes = parseInt(subtotal * 0.22).toFixed(2);
    let total = (parseInt(subtotal) + parseInt(taxes)).toFixed(2);



    if (isLoading()) {

        return <Loading />
    }

    return (
        <>
            <Container className="my-5">
                <Row>
                    <h3 className="hk-grotesk-semi-bold my-3">
                        Shopping cart
                    </h3>
                </Row>
                <Row className="justify-content-between">
                    <Col lg={6} >

                        {cartProducts.map(product =>

                            <CartItem product={product} />


                        )}

                    </Col>
                    <Col lg={5}>
                        <div className="cart-total-container">
                            <div className="hk-grotesk-medium" style={{ fontSize: '1.2rem' }}>
                                Order summary
                            </div>
                            <div className="w-100 d-flex flex-row justify-content-between py-3" style={{ borderBottom: '1px solid #D3D3D3' }}>
                                <span className="hk-grotesk text-muted">
                                    Subtotal
                                </span>
                                <span className="hk-grotesk-medium">
                                    ${subtotal}
                                </span>
                            </div>
                            <div className="w-100 d-flex flex-row justify-content-between py-3" style={{ borderBottom: '1px solid #D3D3D3' }}>
                                <span className="hk-grotesk text-muted">
                                    Tax estimate
                                </span>
                                <span className="hk-grotesk-medium">
                                    ${taxes}
                                </span>
                            </div>
                            <div className="w-100 d-flex flex-row justify-content-between py-3 hk-grotesk-medium" >
                                <span >
                                    Order total
                                </span>
                                <span >
                                    ${total}
                                </span>
                            </div>

                            <Button variant="dark" className="w-100 my-3 rounded-0" >
                                Checkout
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Cart;