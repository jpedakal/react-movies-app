import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';

const HomeScreen = () => {
    
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProduct = async () => {
            const { data } = await axios.get('http://localhost:3001/api/product')

            setProducts(data)
        }

        fetchProduct();
    }, [])

    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map((item) => (
                    <Col key={item._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={item} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default HomeScreen;
