import { Link } from "react-router-dom";

function NavBar(){
    return (
        <>
            <nav className="nav">
                {/* Link is too home */}
                <Link to="/">Home</Link> 

                {/* Link is too Shop */}
                <Link to="Shop">Shop</Link>

                {/* Link is too Shopping Cart */}
                <Link to="Cart">Cart</Link>
            </nav>
        </>
    )
}

export default NavBar;