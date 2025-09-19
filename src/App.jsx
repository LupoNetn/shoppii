import React from "react";
import { createBrowserRouter, Route, RouterProvider } from "react-router";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import AppLayout from "./components/AppLayout";
import Brands from "./pages/Brands";
import About from "./pages/About";

import { ToastContainer } from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
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
      {
        path: "/brands",
        element: <Brands />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <div className="">
        <RouterProvider router={router} />
        <ToastContainer
          position="top-right" // top-right, top-center, bottom-left etc.
          autoClose={3000} // auto dismiss after 3s
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored" // light, dark, colored
        />
      </div>
    </>
  );
};

export default App;
