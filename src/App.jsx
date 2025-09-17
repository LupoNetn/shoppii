import React from "react";
import { createBrowserRouter, Route, RouterProvider } from "react-router";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/products/:id",
    element: <ProductDetails />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

const App = () => {
  return (
    <>
      <div className="">
        <Navbar />
        <RouterProvider router={router} />
        <Footer />
      </div>
    </>
  );
};

export default App;
