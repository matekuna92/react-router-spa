import React from 'react';
import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation.js';
import styles from './Root.module.css';

// Outlet marks where the child components should be rendered
const RootLayout = () => {
    return (
        <>
            <MainNavigation />
            <main className={styles.content}>
                <Outlet />
            </main> 
        </>
    )
}

export default RootLayout;