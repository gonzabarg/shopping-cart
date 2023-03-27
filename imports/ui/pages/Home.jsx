import React from "react";

import { productsCollection } from "../../api/collections/products";

import { useSubscribe, useFind } from 'meteor/react-meteor-data';

import { Container, Row, Col } from "react-bootstrap";

import ProductThumbnail from "../components/ProductThumbnail";

import Loading from '../components/Loading';

const Home = () => {


    const isLoading = useSubscribe('products');

    const products = useFind(() => {
        return productsCollection.find({});

    });


    const title = {
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        marginBottom: '0'
    }

    if (isLoading()) {

        return <Loading />
    }


    return (

        <section>

            <Container className="py-6" >

                <Row>
                    <Col xl={8} className="mx-auto text-center mb-5">
                        <h3 style={title}>
                            Take a look at our products
                        </h3>

                        <p className="text-muted" style={{ fontSize: '1.2rem' }} >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </Col>
                </Row>

                <Row className="flex-wrap justify-content-start align-items-start">

                    {products.map((product) => {

                        console.log(product);

                        return <ProductThumbnail product={product} />

                    })}

                </Row>
            </Container>

        </section>

    );


}

export default Home;