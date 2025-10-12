import { Link, useLocation } from 'react-router-dom'; // allows you to navigate between the pages without refreshing 
import { forwardRef } from 'react';
import TextField from "@mui/material/TextField";
import '../styles/NavBar.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';

function NavBar({searchItem, setSearchItem, setNoSearch, cartNum}){
    const location = useLocation()
    const path = location.pathname.toLowerCase();
    const showSearch = path === '/shop'; // when to show the search
 



    return (
        <>
            <nav className="main">
                
                <div className='firstLinks'>
                    <h1>Shop Stack</h1>
                    {/* Link is too home */}
                    <Link to="/" className='one'>Home</Link> 

                    {/* Link is too Shop */}
                    <Link to="shop" className='two'>Shop</Link>
                </div>

                <div className='searchBar'>
                {/* Only show search if it is in the home and shop page */}
                {showSearch && (
                    <div className='searchItems'>
                        <TextField
                        variant="outlined"
                        label="Search"
                        fullWidth
                        size='small'
                        className='bar'
                        value={searchItem}
                        onChange={(e) => {
                            setSearchItem(e.target.value.toLowerCase());
                            setNoSearch(false);
                          }}
                        /> 
                        <button className='xBtn'onClick={() => {searchItem !== '' ? (setNoSearch(true), setSearchItem('')) 
                                                                  : (setNoSearch(true)); }}>X</button>
                    </div>
                )}
                </div>

                {/* <div>
                    <h3>Shop Stack</h3>
                </div> */}


            {/* /* <Link to="cart">Cart</Link> */ }
                <div>
                    {/* https://stackoverflow.com/questions/62036213/how-to-put-routerlink-in-iconbutton-in-reactjs */}
                    {/* Link is too Shopping Cart */}
                    {/* <ShoppingCartIcon component={Link} to="cart">
                    
                    </ShoppingCartIcon> */}
                    {/* Has link to the cart page */}
                    <IconButton className='iconBtn'component={Link} to="cart" disableRipple disableFocusRipple> 
                        <ShoppingCartIcon className='three'/>
                        <div>{cartNum}</div>

                    </IconButton>

                    
                </div>


            </nav>
        </>
    )
}

export default NavBar;