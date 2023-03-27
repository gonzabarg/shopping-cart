import React from "react";
import { Meteor } from 'meteor/meteor';
import { useParams } from "react-router";
import { productsCollection } from "../../api/collections/products";
import { useTracker } from 'meteor/react-meteor-data'

import { useSubscribe, useFind } from 'meteor/react-meteor-data';

import Loading from "../components/Loading";
import { Container, Row, Col, Image, Button } from "react-bootstrap";


const Product = () => {


    let params = useParams();
    const userId = Meteor.userId();

    const isLoadingProducts = useSubscribe('product', params.id);

    const product = useFind(() => {
        return productsCollection.find({ _id: params.id });

    });


    const [quantity, setQuantity] = React.useState(1);
    const addQuantity = () => {
        setQuantity((quantity) => quantity + 1);
    };

    const takeQuantity = () => {
        if (quantity > 1) {
            setQuantity((quantity) => quantity - 1);
        }
    };


    // const handleClick = () => {

    //     if (!cart[0]) {

    //         console.log('userid', userId);

    //         Meteor.call('cart.insert', { userId: userId }, (error) => {

    //             if (error) {
    //                 console.log(error);
    //             } else {
    //                 console.log('Cart created');
    //             }
    //         });

    //     }

    //     if (!isLoadingCart() && !isLoadingProducts()) {

    //         console.log('PRODUCT', product);

    //         Meteor.call('cartProducts.add', { productId: product[0]._id, cartId: cart[0]._id, name: product[0].name, quantity: quantity, price: product[0].price }, (error) => {

    //             if (error) {
    //                 console.log(error);
    //             } else {

    //                 console.log('Product added to cart');
    //                 Meteor.call('products.removeFromStock', { productId: product[0]._id, qty: quantity }, (error) => {

    //                     if (error) {
    //                         console.log('Error actualizando stock', error);
    //                     } else {

    //                         console.log('Stock actualizado');
    //                     }

    //                 })

    //             }
    //         });
    //     }

    const handleClick = () => {

        Meteor.call('cartProducts.add', { productId: product[0]._id, userId: userId, name: product[0].name, image: product[0].image, brand: product[0].brand, quantity: quantity, price: product[0].price }, (error) => {

            if (error) {
                console.log(error);
            } else {

                console.log('Agregado al carrito');

                Meteor.call('products.removeFromStock', { productId: product[0]._id, qty: quantity }, (error) => {

                    if (error) {
                        console.log('Error actualizando stock', error);
                    } else {

                        console.log('Stock actualizado');
                    }

                })
            }
        })
    }



    if (isLoadingProducts()) {

        return <Loading />
    }



    return (
        <>
            <section className="py-5">

                <Container >
                    <Row>
                        <Col lg={6} className="py-3">
                            <Image src={product[0].image} className="w-100" />
                        </Col>

                        <Col lg={6} xl={5} className="ps-lg-5 py-3 d-flex flex-column justify-content-start align-items-start">

                            <span className="hk-grotesk text-muted mb-2">
                                {product[0].brand}
                            </span>


                            <h2 className="hk-grotesk-semi-bold">
                                {product[0].name}
                            </h2>

                            <p className="hk-grotesk-medium my-2" style={{ fontSize: '2rem' }}>
                                ${product[0].price}
                            </p>

                            <p className="hk-grotesk my-2">
                                {product[0].description}
                            </p>

                            <p className="hk-grotesk mt-3">
                                <span className="hk-grotesk-medium">Stock available:</span> {product[0].stock}
                            </p>

                            <div className="input-group">
                                {quantity === 1 ? (
                                    <button
                                        className="btn text-center rounded-0 fw-bold input-group-text bg-secondary"
                                        onClick={(ev) => ev.preventDefault()}
                                        disabled
                                    >
                                        -
                                    </button>
                                ) : (
                                    <button
                                        className="btn btn-dark text-center rounded-0 fw-bold input-group-text"
                                        onClick={takeQuantity}
                                    >
                                        -
                                    </button>
                                )}
                                <span className="text-center rounded-0 fw-bold input-group-text">
                                    {quantity}
                                </span>
                                <button
                                    className="btn btn-dark text-center rounded-0 fw-bold input-group-text"
                                    onClick={addQuantity}
                                >
                                    +
                                </button>
                            </div>

                            <Button onClick={handleClick} variant="dark" className="w-25 rounded-0 mt-3 py-2 hk-grotesk-medium">
                                Add to cart
                            </Button>

                        </Col>
                    </Row>
                </Container>

            </section>
        </>
    )
}

export default Product;