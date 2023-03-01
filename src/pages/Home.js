import React from 'react';
import { Link } from 'react-router-dom';

// using regular a href would cause the app to send unneccessary request and refresh page when routing to page: Link solves the problem
const HomePage = () => {
    return (
        <>
            <h1>Home Page</h1>
            <p> Go to <Link to='/products'> products page </Link></p>
        </>
    )
}

export default HomePage;