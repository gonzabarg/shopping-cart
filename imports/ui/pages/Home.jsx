import React from "react";

import { Container, Row, Col, Card } from "react-bootstrap";

import ProductThumbnail from "../components/ProductThumbnail";

const Home = () => {

    const title = {
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        marginBottom: '0'
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

                <Row className="flex-wrap justify-content-between align-items-start">

                    <ProductThumbnail />
                    <ProductThumbnail />
                    <ProductThumbnail />
                    <ProductThumbnail />
                    <ProductThumbnail />

                </Row>
            </Container>

        </section>

    );
}

export default Home;