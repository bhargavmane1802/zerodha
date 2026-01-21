import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from "./landing_page/home/Home"
import About from "./landing_page/about/About"
import Product from "./landing_page/product/Product"
import Pricingpage from "./landing_page/pricing/Pricingpage"
import Support from "./landing_page/support/Support.js"
import Navbar from "./landing_page/support/Navbar"
import Footer from "./landing_page/support/Footer"
import {BrowserRouter,Routes,Route} from "react-router-dom"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/pricing" element={<Pricingpage/>}/>
      <Route path="/support" element={<Support/>}/>
      <Route path="*" element={<Home/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
);
