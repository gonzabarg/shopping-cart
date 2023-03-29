import React from "react"
import { Meteor } from 'meteor/meteor'
import { useNavigate } from "react-router"
import { useTracker, useFind, useSubscribe } from 'meteor/react-meteor-data'
import { cartProductsCollection } from "../../api/collections/cartProducts"

import { Container, Row, Col, Button } from 'react-bootstrap'
import Loading from '../components/Loading'
import { Link } from "react-router-dom"
import { Random } from 'meteor/random'

import CartItem from "../components/CartItem"


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

    const navigate = useNavigate();

    const { user, userId, isLoggedIn } = useAccount();

    const isLoading = useSubscribe('cartProducts', userId);
    const cartProducts = useFind(() => cartProductsCollection.find({ userId: userId }));

    console.log('CART PRODUCTS: ', cartProducts);

    let subtotal = cartProducts.reduce((acc, product) => {
        return (acc += product.subtotalProduct)
    }, 0);
    let taxes = parseInt(subtotal * 0.22).toFixed(2);
    let total = (parseInt(subtotal) + parseInt(taxes)).toFixed(2);


    const placeOrder = () => {

        const orderNumber = Random.hexString(8);
        console.log(typeof orderNumber);
        const dateToday = new Date();


        Meteor.call('orders.insert', { number: orderNumber, userId: userId, username: user.username, products: cartProducts, createdAt: dateToday, subtotal: subtotal, taxes: taxes, total: total }, (error) => {

            if (error) {
                console.log(error);
            }

            console.log('Order placed successfully');

            Meteor.call('cartProducts.clear', { userId: userId }, (error) => {

                if (error) {

                    console.log(error);
                }

                console.log('Cart cleared');
            });

            navigate('/order/' + orderNumber);
        });


    }


    if (isLoading()) {

        return <Loading />
    }

    return (

        <Container className="my-5">
            <Row>
                <h3 className="hk-grotesk-semi-bold my-3">
                    Shopping cart
                </h3>
            </Row>
            <Row className="justify-content-between">
                <Col lg={6} >

                    {cartProducts.length == 0 ?

                        <>
                            <p>
                                No products added to cart yet.
                            </p>

                            <Link to="/" className='text-decoration-none'>
                                <Button variant="dark">
                                    Go shopping
                                </Button>
                            </Link>

                        </>
                        :
                        console.log('Hay productos en el carrito')
                    }

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

                        <Button variant="dark" className="w-100 my-3 rounded-0" onClick={placeOrder} >
                            Checkout
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>

    )
}

export default Cart;