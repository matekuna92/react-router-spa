import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

// using regular a href would cause the app to send unneccessary request and refresh page when routing to page: Link solves the problem
const HomePage = () => {
    const navigate = useNavigate();

    const navigateHandler = () => {
        navigate('/products');
    }

    return (
        <>
            <h1>Home Page</h1>
            <p> Go to <Link to='/products'> products page </Link></p>

            <form onSubmit={navigateHandler}>
                <label>Name</label>
                <input type='text'></input>
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default HomePage;