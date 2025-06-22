import { useState } from 'react'
import '../styles/App.css'
import { Link } from "react-router-dom";

function App() {

  return (
    <div>
      <h1>Hello from the main page of the app!</h1>
      <p>Here are some examples of links to other pages</p>
      <nav>
        <ul>
          <li>
            <Link to="Home">Home page</Link> 
          </li>
          <li>
            <Link to="Shop">Shop page</Link> 
          </li>
          <li>
            <Link to="Cart">Cart page</Link> 
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default App
