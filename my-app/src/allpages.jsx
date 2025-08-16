import React from "react";
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from "./home";
import About from "./about";
import Product from "./products";
import Service from "./service";
import Contact from "./contact";


function Pages(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/product" element={<Product/>}/>
                <Route path="/service" element={<Service/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    )
}


export default Pages;