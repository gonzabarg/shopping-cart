import React from "react"

import { useSubscribe, useFind } from 'meteor/react-meteor-data'

import { Container, Row, Col } from "react-bootstrap"

import ProductThumbnail from "../components/ProductThumbnail"
import Loading from '../components/Loading'

import { productsCollection } from "../../api/collections/products"

const Home = () => {


    const isLoading = useSubscribe('products');

    const products = useFind(() => {
        return productsCollection.find({});

    });

    if (isLoading()) {

        return <Loading />
    }


    return (

        <section>

            <Container className="py-5" >

                <Row>
                    <Col xl={8} className="mx-auto text-center mb-5">
                        <h3 className="page-title">
                            Take a look at our products
                        </h3>

                        <p className="text-muted" style={{ fontSize: '1.2rem' }} >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </Col>
                </Row>

                <Row className="flex-wrap justify-content-start align-items-start">

                    {products.map((product) => {

                        return <ProductThumbnail product={product} />

                    })}

                </Row>
            </Container>

        </section>

    );


}

export default Home;