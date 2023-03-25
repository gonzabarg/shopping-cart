import React from "react";
import { Col, Card } from "react-bootstrap";

const ProductThumbnail = () => {

    return (

        <Col sm={5} lg={3} style={{ height: '20rem', margin: '1rem 0' }}>

            <Card style={{ width: '100%', height: '100%', border: '0' }}>

                <div className="rounded-0" style={{ minHeight: '80%', overflow: 'hidden' }}>

                    <Card.Img variant="top" className="border-0 rounded-1" src="https://d19m59y37dris4.cloudfront.net/sell/2-0-1/img/product/serrah-galos-494312-unsplash.jpg" />

                </div>



                <Card.Body className="px-0 d-flex flex-row justify-content-between align-items-start">
                    <div>
                        <Card.Title className="hk-grotesk product-thumbnail-text">Card Title</Card.Title>
                        <Card.Text className="hk-grotesk text-muted product-thumbnail-text">
                            Charcoal
                        </Card.Text>
                    </div>
                    <Card.Text className="hk-grotesk product-thumbnail-text">
                        $35
                    </Card.Text>
                </Card.Body>

            </Card>

        </Col>
    )
}

export default ProductThumbnail;