import React from 'react';

import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import Products from './pages/Products';
import RootLayout from './pages/Root';

// same function with createRoutesFromElements
/* const routeDefinitions = createRoutesFromElements(
	<Route>
		<Route path='/' element={<HomePage />} />
		<Route path='/products' element={<Products />} />
	</Route>
); */
// const router = createBrowserRouter(routeDefinitions);

// define children routes to render when RootLayout renders
const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{ path: '/', element: <HomePage /> },
			{ path: '/products',element: <Products /> },
		]
	}
  ]);

function App() {
  	return <RouterProvider router={router} />
}

export default App;
