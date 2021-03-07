import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from './Rating';


const Product = ({ product }) => {
    console.log(product)
    return (
        <Card className='my-3 p-3 ronded'>
            <a href={`/products/${product._id}`}>
                <Card.Img src={product.image} variant='top' />
            </a>
            <Card.Body>
                <a href={`/products/${product._id}`}>
                    <Card.Title as='h4'>{product.name}</Card.Title>
                </a>
                <Card.Text as='div'>
                    <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                </Card.Text>
                <Card.Text as='h5'>${product.price}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product;
