import { useState } from 'react'
import { useOutletContext } from "react-router-dom";
// import List from "../components/List.jsx"



function Home(){
    const { allProducts } = useOutletContext();

    return (
        <>
            <h1>This is the Home Page</h1>
        </>
    )
}

export default Home;