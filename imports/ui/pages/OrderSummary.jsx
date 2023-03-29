import React from 'react'
import { useFind, useSubscribe } from 'meteor/react-meteor-data'
import { useParams } from "react-router"
import { Link } from 'react-router-dom'

import { Container, Row, Col, Button, Image } from 'react-bootstrap'

import Loading from '../components/Loading'

import { ordersCollection } from "../../api/collections/orders"


const OrderSummary = () => {

    let params = useParams();

    console.log(params.id);

    const isLoading = useSubscribe('order', params.id);
    const order = useFind(() => ordersCollection.find({ number: params.id }));

    console.log('ORDER: ', order[0]);

    if (isLoading()) {

        return <Loading />

    }

    return (
        <>
            <Container>
                <Row className='justify-content-center'>
                    <Col lg={6}>

                        <div className='w-100 py-4 d-flex flex-column justify-content-start align-items-start'>

                            <span className='hk-grotesk text-muted my-1'>
                                Thank you!
                            </span>

                            <p className='hk-grotesk-bold my-2' style={{ fontSize: '2rem' }}>

                                It's on the way!

                            </p>

                            <span className='hk-grotesk text-muted mt-1 mb-4'>
                                Your order <span className='hk-grotesk-semi-bold'>#{order[0].number}</span> has shipped and will be with you soon.
                            </span>


                        </div>

                        <div className='w-100'>
                            {order[0].products.map((product) =>

                                <div className="cart-item justify-content-start">

                                    <Image src={product.image} className="w-25" />

                                    <div className="w-50 mx-4 d-flex flex-column justify-content-center align-items-start" >
                                        <span className="hk-grotesk-medium mb-1">
                                            {product.name}
                                        </span>

                                        <span className="hk-grotesk my-1">
                                            {product.brand}
                                        </span>

                                        <div className='d-flex flex-row justify-content-start align-items-center my-3'>
                                            <div className="pe-3 me-2" style={{ borderRight: '1px solid #D3D3D3' }}>
                                                Quantity <span className='text-muted'> {product.quantity}</span>
                                            </div>

                                            <span className="hk-grotesk-medium my-1 ms-2">
                                                Price <span className='text-muted'> ${product.price}</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="w-100 d-flex flex-row flex-wrap justify-content-start align-items-start">

                            <div className="w-50 text-start hk-grotesk-medium py-3">
                                Subtotal
                            </div>
                            <div className="w-50 text-end text-muted py-3">
                                {order[0].subtotal}
                            </div>
                            <div className="w-50 text-start hk-grotesk-medium py-3">
                                Taxes
                            </div>
                            <div className="w-50 text-end text-muted py-3">
                                {order[0].taxes}
                            </div>
                            <div className="w-50 text-start hk-grotesk-medium py-3">
                                Total
                            </div>
                            <div className="w-50 text-end text-muted py-3">
                                {order[0].total}
                            </div>

                        </div>
                    </Col>

                    <Row className='my-4'>

                        <Link to='/' className='text-decoration-none w-auto mx-auto'>
                            <Button variant='dark' className='w-auto p-2 rounded-0'>
                                Continue shopping
                            </Button>
                        </Link>

                    </Row>

                </Row>
            </Container>
        </>
    )
};

export default OrderSummary;