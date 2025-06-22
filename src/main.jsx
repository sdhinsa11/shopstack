import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './styles/App.css'
import App from './pages/App.jsx';
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // go to "/"
  },
  {
    path: "Home",
    element: <Home />, // go to "/profile"
  },
  {
    path: "Shop",
    element: <Shop />, // go to "/profile"
  },
  {
    path: "Cart",
    element: <Cart />, // go to "/profile"
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
