import React from 'react';
import {formatedDate} from "../../utils/formatedDate.js";

const MechanicAbout = () => {
    return (
        <div>
            <div>
                <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
                    O mnie
                    <span className="text-irisBlue font-bold  text-[24px] leading-9">
                    Jacek Kubik
                    </span>
                </h3>
                <p className="text__para">
                    Ponad 15 lat doświadczenia w diagnostyce pojazdowej. Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Autem, beatae error odit placeat repellat vel.
                </p>
            </div>

            <div className="mt-12">
                <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
                    Ukończone kursy
                </h3>
                <ul className="pt-4 md:p-5">
                    <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                        <div className="">
                            <span className="text-irisBlue text-[15px] leading-6 font-semibold">
                                {formatedDate("06-23-2009")}
                            </span>
                            <p className="text-[16px] leading-6 font-medium text-textColor">
                                Kurs diagnosty samochodowego Dekra Polska
                            </p>
                        </div>
                        <p className="text-[14px] leading-5 font-medium text-textColor">
                            Dekra Warszawa
                        </p>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                        <div className="">
                            <span className="text-irisBlue text-[15px] leading-6 font-semibold">
                                {formatedDate("04-12-2010")}
                            </span>
                            <p className="text-[16px] leading-6 font-medium text-textColor">
                                Szkolenie uzupełniające dla diagnostów
                            </p>
                        </div>
                        <p className="text-[14px] leading-5 font-medium text-textColor">
                            Instytut Transportu Samochodowego
                        </p>
                    </li>
                </ul>
            </div>

            <div className="mt-12">
                <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
                    Doświadczenie
                </h3>
                <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
                    <li className="p-4 rounded bg-[#fff9ea]">
                        <span className="text-yellow text-[15px] leading-6 font-semibold">
                            {formatedDate("04-02-2005")} - {formatedDate("02-11-2013")}
                        </span>
                        <p className="text-[16px] leading-6 font-medium text-textColor">
                            Mechanik
                        </p>
                        <p className="text-[14px] leading-5 font-medium text-textColor">
                            Warsztat AutoMechanik Tuchola
                        </p>
                    </li>
                    <li className="p-4 rounded bg-[#fff9ea]">
                        <span className="text-yellow text-[15px] leading-6 font-semibold">
                            {formatedDate("04-10-2013")} - Dziś
                        </span>
                        <p className="text-[16px] leading-6 font-medium text-textColor">
                            Diagnosta Mechanik
                        </p>
                        <p className="text-[14px] leading-5 font-medium text-textColor">
                            Warsztat AutoCraft Tuchola
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default MechanicAbout;
