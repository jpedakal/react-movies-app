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
            <Row>
                <Col md={4}>
                    <Image width='360' height='470' src={product.image} alt={product.name} />
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h4>{product.name}</h4>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={product.numReviews} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h5>${product.price}</h5>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Brand : {product.brand}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Category : {product.category}
                        </ListGroup.Item>
                        <ListGroup.Item>{product.description}</ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
            <Link className='btn btn-danger my-3' to='/'>Go Back</Link>
        </>
    )
}

export default ProductScreen
