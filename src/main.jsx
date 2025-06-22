import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './styles/App.css'
import App from './pages/App.jsx';
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import Cart from "./pages/Cart.jsx"

const router = createBrowserRouter([
  {
    path: "/",              // Main layout route
    element: <App />,       // App includes NavBar
    children: [
      { index: true, element: <Home /> },        // "/"
      { path: "shop", element: <Shop /> },       // "/shop"
      { path: "cart", element: <Cart /> },       // "/cart"
    ],
  },
]);

// It's an array of route objects.
// Each object has:
// path: the URL (e.g. / or /profile)
// element: the React component that should render for that path.



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

// App is home and it can go to shop 
