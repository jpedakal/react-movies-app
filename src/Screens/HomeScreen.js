import React from 'react';
import { Row, Col } from 'react-bootstrap';
import products from '../components/products';

const HomeScreen = () => {
    console.log(products)
    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map(item => (
                    <Col>
                    {item.name}
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default HomeScreen
