import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import products from '../components/products';

const HomeScreen = () => {
    console.log(products)
    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map((item) => (
                    <Col sm={12} md={6} lg={4} xl={3}>
                        <Product product={item} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default HomeScreen
