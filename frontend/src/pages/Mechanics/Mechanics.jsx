import React from 'react';
import MechanicCard from "../../components/Mechanics/MechanicCard.jsx";
import {mechanics} from "../../assets/data/mechanics.js";
import Testimonial from "../../components/Testimonial/Testimonial.jsx";

const Mechanics = () => {
    return <>
        <section className="bg-[#fff9ea]">
            <div className="container text-center">
                <h2 className="heading">
                    Znajdź swojego mechanika
                </h2>
                <div
                    className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
                    <input type="search"
                           className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
                           placeholder="Znajdź mechanika"/>
                    <button className="btn mt-0 rounded-[0px] rounded-r-md">
                        Szukaj
                    </button>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {mechanics.map(mechanic => (<MechanicCard key={mechanic.id} mechanic={mechanic}/>))}
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="xl:w-[470px] mx-auto">
                    <h2 className="heading text-center">
                        Co mówią nasi klienci?
                    </h2>
                    <p className="text__para text-center">
                        Przeczytaj opinie naszych klientów o jakości naszych usług
                    </p>
                </div>
                <Testimonial/>
            </div>
        </section>
    </>
};

export default Mechanics;
