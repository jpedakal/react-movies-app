import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button, ListGroup, Image } from 'react-bootstrap';
import Rating from '../components/Rating';
import products from '../components/products';

const ProductScreen = ({ match }) => {
    const product = products.find(p => p._id === match.params.id)
    console.log(product)
    return (
        <>
            <Link className='btn btn-danger my-3' to='/'>Go Back</Link>
            <Row>
                <Col md={6}>
                    
                </Col>
            </Row>
        </>
    )
}

export default ProductScreen
