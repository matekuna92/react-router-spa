import React from 'react';

import MainNavigation from "../components/MainNavigation";


const Error = () => {
    return (
        <>
            <MainNavigation />
            <main>
                <h1>Page not found.</h1>
                <p>Please check the URL, it may have been typed incorrectly.</p>    
            </main>
        </>
    );
}

export default Error;