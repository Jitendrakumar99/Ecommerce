import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Routes,Route } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Layout from './component/Layout.jsx'
import Product from './component/Product.jsx';
import Cart from './component/Cart.jsx';
import About from './component/About.jsx';
import { Toaster } from 'react-hot-toast';
import Card from './component/Card.jsx';
// import Navbar from './component/Navbar.jsx';

{/* <Routes>
  <Route path="/" element={<Layout/>}></Route>

  <Route index element={<App/>}></Route>
  <Route path="/Product" element={<Layout/>}></Route>
  <Route path="/About" element={<Layout/>}></Route>
  <Route path="/Cart" element={<Layout/>}></Route>

</Routes> */}
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/",
    element: <Layout />, // Use Layout as the wrapper
    children: [
      {
        path: "Product",
        element: <Product />,
      },
      {
        path: "About",
        element: <About />,
      },
      {
        path: "Cart",
        element: <Cart />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster/ >
    <RouterProvider router={router} />
  
  </StrictMode>
);
