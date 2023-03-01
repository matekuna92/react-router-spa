import React from 'react';

import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    // productId name comes from App js path: '/products/:productId'
    const params = useParams();

    return (
        <>
            <h1>Product Detail</h1>
            <p> {params.productId} </p>
        </>
    );
}

export default ProductDetail;