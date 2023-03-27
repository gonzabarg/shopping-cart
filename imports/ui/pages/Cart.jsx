import React from "react";
import { Meteor } from 'meteor/meteor'

import { useTracker, useFind, useSubscribe } from 'meteor/react-meteor-data'
import { cartProductsCollection } from "../../api/collections/cartProducts";
import { Container, Row, Col, Image, CloseButton, Form } from 'react-bootstrap'
import Loading from '../components/Loading';

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



    if (isLoading()) {

        return <Loading />
    }

    return (
        <>
            <Container>
                <Row>
                    <h3 className="hk-grotesk-semi-bold my-3">
                        Shopping cart
                    </h3>
                </Row>
                <Row>
                    <Col lg={7}>

                        {cartProducts.map(product =>

                            <div className="cart-item">

                                <Image src={product.image} className="w-25" />

                                <div className="d-flex flex-column justify-content-start">
                                    <span className="hk-grotesk-medium mb-1">
                                        {product.name}
                                    </span>

                                    <span className="hk-grotesk my-1">
                                        {product.brand}
                                    </span>

                                    <span className="hk-grotesk-medium my-1">
                                        ${product.price}
                                    </span>
                                </div>

                                <Form.Control type="number" style={{ width: '15%' }} value={product.quantity} />

                                <CloseButton />

                            </div>

                        )}

                    </Col>
                    <Col lg={5}></Col>
                </Row>
            </Container>
        </>
    )
}

export default Cart;