import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./Routes/Routes.jsx";
import CartProvider from "./Providers/CartProvider.jsx";
import { Toaster } from "react-hot-toast";
import UserProvider from "./Providers/UserProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <CartProvider>
        <RouterProvider router={router} />
        <Toaster />
      </CartProvider>
    </UserProvider>
  </StrictMode>
);
