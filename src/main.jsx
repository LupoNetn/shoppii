import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import shoppingCart from "./context/shoppingCart.jsx";
import 'react-toastify/dist/ReactToastify.css';


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ShoppingCart>
      <App />
    </ShoppingCart>
  </StrictMode>
);
