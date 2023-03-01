import React from 'react';

import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {
    // productId name comes from App js path: '/products/:productId'
    const params = useParams();

    // ".." means go 1 level up to the previous path - products/:productId is the child of "/" route, so it goes back to home page.
    // fix: using path value for relative attribute instead of the default "route" which means go up 1 route, not 1 path
    return (
        <>
            <h1>Product Detail</h1>
            <p> {params.productId} </p>
            <Link to='..' relative='path'> Back </Link>
        </>
    );
}

export default ProductDetail;