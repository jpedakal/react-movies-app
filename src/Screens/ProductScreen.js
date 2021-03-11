import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button, ListGroup, Image } from 'react-bootstrap';
import Rating from '../components/Rating';
import axios from 'axios';


const ProductScreen = ({ match }) => {
    
    const [product, setProduct] = useState({})
    useEffect(() => {
        const fetchProductById = async () => {
            const { data } = await axios.get(`http://localhost:3001/api/product/${match.params.id}`)
            setProduct(data)
        };

        fetchProductById();
    }, [match])

    return (
        <>
            <Row>
                <Col md={4}>
                    <Image width='360' height='460' src={product.image} alt={product.name} />
                </Col>
                <Col md={4}>
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
                        <ListGroup.Item>{product.countInStock > 0 ? 'In stock ' : 'Out Of Stock'}</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <ListGroup>
                        <ListGroup.Item>
                            <Button className='btn-block btn-info' type='button' disabled={product.countInStock === 0}>Add To Cart</Button>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button className='btn-block btn-danger' type='button' disabled={product.countInStock === 0}>Buy Now</Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
            <Link className='btn btn-danger my-3' to='/'>Go Back</Link>
        </>
    )
}

export default ProductScreen