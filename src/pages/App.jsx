import { useState } from 'react'
import '../styles/App.css'
import { Outlet } from "react-router-dom";
import NavBar from '../components/NavBar.jsx'

function App() {
  // This is a component and not a page so turn the nav bar into a component and then 
  // But this is always being displayed in all the component?
  //  The app is a nav bar comeponent? 

  return (
    <div>
      <NavBar /> {/* Always displayed */}
      <Outlet /> {/* This is where the "child" page content will appear, this is like the routes if we were doing this another way. */}
    </div>
  )
}

export default App;

 {/* How <Outlet /> works
      When React Router renders a nested route, it injects the matched child route’s element inside the parent’s <Outlet />.
      So, for example, if you visit /shop:
      Router sees the route path: "/" with element: <App />
      Inside <App />, it renders <NavBar /> (always visible)
      Then, it finds the matching child route { path: "shop", element: <Shop /> }
      The <Shop /> component is rendered inside <Outlet /> */}