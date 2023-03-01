import React from 'react';
import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation.js';

// Outlet marks where the child components should be rendered
const RootLayout = () => {
    return (
        <>
            <MainNavigation />
            <main>
                <Outlet />
            </main> 
        </>
    );
}

export default RootLayout;