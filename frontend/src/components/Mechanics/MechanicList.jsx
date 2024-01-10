import React from 'react';
import {mechanics} from "../../assets/data/mechanics.js";
import MechanicCard from "./MechanicCard.jsx";

const MechanicList = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            {mechanics.map(mechanic => (<MechanicCard key={mechanic.id} mechanic={mechanic}/>))}
        </div>
    );
};

export default MechanicList;
