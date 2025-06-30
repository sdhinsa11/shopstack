import { Link, useLocation } from 'react-router-dom';
import TextField from "@mui/material/TextField";
import '../styles/NavBar.css'

function NavBar({searchItem, setSearchItem, noSearch, setNoSearch}){
    const location = useLocation()
    const path = location.pathname.toLowerCase();
    const showSearch = path === '/shop';


    return (
        <>
            <nav className="main">
                
                <div className='firstLinks'>
                    <h3>Shop Stack</h3>
                    {/* Link is too home */}
                    <Link to="/" className='homeLink'>Home</Link> 

                    {/* Link is too Shop */}
                    <Link to="shop">Shop</Link>
                    

                </div>

                <div className='searchBar'>
                {/* Only show search if it is in the home and search page */}
                {showSearch && (
                    <div>
                        <TextField
                        variant="outlined"
                        label="Search"
                        fullWidth
                        value={searchItem}
                        onChange={(e) => {
                            setSearchItem(e.target.value.toLowerCase());
                            setNoSearch(false);
                          }}
                        /> 
                        <button onClick={() => {searchItem !== '' ? (setNoSearch(true), setSearchItem('')) 
                                                                  : (setNoSearch(true)); }}>X</button>
                    </div>
                )}
                </div>

                {/* <div>
                    <h3>Shop Stack</h3>
                </div> */}


                
                <div>
                    {/* Link is too Shopping Cart */}
                    <Link to="cart">Cart</Link>
                </div>


            </nav>
        </>
    )
}

export default NavBar;