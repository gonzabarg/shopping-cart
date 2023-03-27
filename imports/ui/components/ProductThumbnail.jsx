import React from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductThumbnail = ({ product }) => {


    return (

        <Col sm={5} lg={3} style={{ height: 'auto', margin: '1rem 0' }}>


            <Card key={product._id} style={{ width: '100%', height: 'auto', border: '0' }}>

                <div className="rounded-0" style={{ maxHeight: '85%', overflow: 'hidden' }}>

                    <Card.Img variant="top" className="border-0 rounded-1" style={{ objectFit: 'contain', width: '100%', height: '100%' }} src={product.thumbnail} />

                </div>



                <Card.Body className="px-0 d-flex flex-row justify-content-between align-items-start">
                    <div>
                        <Link to={'/product/' + product._id} className="text-decoration-none text-dark">
                            <Card.Title className="hk-grotesk product-thumbnail-text">{product.name}</Card.Title>
                        </Link>
                        <Card.Text className="hk-grotesk text-muted product-thumbnail-text">
                            {product.brand}
                        </Card.Text>
                    </div>
                    <Card.Text className="hk-grotesk product-thumbnail-text">
                        ${product.price}
                    </Card.Text>
                </Card.Body>

            </Card>

        </Col>
    )
}

export default ProductThumbnail;