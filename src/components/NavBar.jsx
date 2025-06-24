import { Link, useLocation } from 'react-router-dom';
import TextField from "@mui/material/TextField";
import '../styles/Shop.css'

function NavBar({searchItem, setSearchItem}){
    const location = useLocation()
    const path = location.pathname.toLowerCase();
    const showSearch = path === '/shop';


    return (
        <>
            <nav className="main ">
                
                <div>
                    {/* Link is too home */}
                    <Link to="/">Home</Link> 

                    {/* Link is too Shop */}
                    <Link to="shop">Shop</Link>

                </div>

                <div>
                {/* Only show search if it is in the home and search page */}
                {showSearch && (
                    <TextField
                    variant="outlined"
                    label="Search"
                    fullWidth
                    value={searchItem}
                    onChange={(e) => setSearchItem(e.target.value.toLowerCase())}
                    />
                )}
                </div>


                
                <div>
                    {/* Link is too Shopping Cart */}
                    <Link to="cart">Cart</Link>
                </div>


            </nav>
        </>
    )
}

export default NavBar;