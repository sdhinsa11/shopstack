import { useState } from 'react'
import '../styles/App.css'
import { Outlet } from "react-router-dom";
import NavBar from '../components/NavBar.jsx'

function App() {
  // This is a component and not a page so turn the nav bar into a component and then 
  // But this is always being displayed in all the component?
  //  The app is a nav bar comeponent? 
  const [cart, setCart] = useState();

  const addToCart = (product) =>{
    setCart((prev) => [...prev, product]);
  };

  return (
    <div>
      <NavBar /> {/* Always displayed */}
      <Outlet context={{ cart, addToCart }} /> {/* This is where the "child" page content will appear, this is like the routes if we were doing this another way. */}
    </div>
  )
}

export default App;
