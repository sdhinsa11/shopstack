import { useState } from 'react'
import { useOutletContext } from "react-router-dom";
// import List from "../components/List.jsx"
import '../styles/Home.css' 



function Home(){
    const { allProducts } = useOutletContext();
    console.log(allProducts);

    return (
        <>
            <div className='main-section'>
                <div className='section-one'>
                    <h1 className='main-title'>Stacked with the Best in Beauty.</h1>
                    <p>Welcome to ShopStack — your one-stop destination for all things beauty. Whether you're going for an everyday glow or a 
                        bold transformation, we've got you covered with curated makeup picks from trusted brands and rising stars alike. At 
                        ShopStack, we believe beauty should be both effortless and empowering. Stacked with the best in beauty, our platform 
                        makes it easy to discover, shop, and fall in love with products that match your unique vibe. Ready to slay your routine?</p>
                </div>
                
                {/* <img src={allProducts[1]?.image} alt='Lipstick' height='500px' width='500px'></img> */}

            </div>
            
        </>
    )
}

export default Home;