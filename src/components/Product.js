import React from 'react';
import { Card } from 'react-bootstrap';

const Product = ({ product }) => {
    console.log(product)
    return (
        <Card className='my-3 p-3 ronded'>
            <a href={`/products/${product._id}`}>
                <Card.Img src={product.image} variant='top' />
            </a>
            <Card.Body>
                <a href={`/products/${product._id}`}>
                    <Card.Title as='div'>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </a>

            </Card.Body>
        </Card>
    )
}

export default Product;
