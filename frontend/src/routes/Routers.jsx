import React from 'react';
import Home from "../pages/Home.jsx";
import Services from "../pages/Services.jsx";
import Login from "../pages/Login.jsx";
import Signup from "../pages/Signup.jsx";
import Contact from "../pages/Contact.jsx";
import Mechanics from "../pages/Mechanics/Mechanics.jsx";
import MechanicDetails from "../pages/Mechanics/MechanicDetails.jsx";
import {Routes, Route} from "react-router-dom";

const Routers = () => {
    return <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/mechanics" element={<Mechanics/>}/>
        <Route path="/mechanics/:id" element={<MechanicDetails/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Signup/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>
    </Routes>
};

export default Routers;
