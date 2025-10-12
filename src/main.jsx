import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './styles/App.css'
import App from './pages/App.jsx';
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import Cart from "./pages/Cart.jsx"



// It's an array of route objects.
// Each object has:
// path: the URL (e.g. / or /profile)
// element: the React component that should render for that path.


const router = createBrowserRouter([
  {
    path: "/",              // Main layout route
    element: <App />,       // App includes NavBar - component that renders for "/", acts like a layout for the nested routes 
    children: [
      { index: true, element: <Home /> },        // "/" (default of the "/")
      { path: "shop", element: <Shop /> },       // "/shop" (shows the Shop page)
      { path: "cart", element: <Cart /> },       // "/cart" (shows the Cart page)
    ],
  },
]);


// Rendering the route to tell react to use this one 
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

// App is home and it can go to shop 
