import React from 'react';

const SidePanel = () => {
    return (
        <div className="shadow-panelShadow p-3 lg:p-5 rounded-md">
            <div className="flex items-center justify-between">
                <p className="text__para mt-0 font-semibold">
                    Cena roboczogodziny
                </p>
                <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
                    130 zł
                </span>
            </div>
            <div className="mt-[30px]">
                <p className="text__para mt-0 font-semibold text-headingColor">
                    Dostępne godziny:
                </p>
                <ul className="mt-3">
                    <li className="flex items-center justify-between mb-2">
                        <p className="text-[15px] leading-6 text-textColor font-semibold">
                            Poniedziałek
                        </p>
                        <p className="text-[15px] leading-6 text-textColor font-semibold">
                            9:00 - 17:00
                        </p>
                    </li>
                    <li className="flex items-center justify-between mb-2">
                        <p className="text-[15px] leading-6 text-textColor font-semibold">
                            Wtorek
                        </p>
                        <p className="text-[15px] leading-6 text-textColor font-semibold">
                            7:00 - 15:00
                        </p>
                    </li>
                    <li className="flex items-center justify-between mb-2">
                        <p className="text-[15px] leading-6 text-textColor font-semibold">
                            Środa
                        </p>
                        <p className="text-[15px] leading-6 text-textColor font-semibold">
                            7:00 - 15:00
                        </p>
                    </li>
                    <li className="flex items-center justify-between mb-2">
                        <p className="text-[15px] leading-6 text-textColor font-semibold">
                            Czwartek
                        </p>
                        <p className="text-[15px] leading-6 text-textColor font-semibold">
                            8:00 - 16:00
                        </p>
                    </li>
                    <li className="flex items-center justify-between mb-2">
                        <p className="text-[15px] leading-6 text-textColor font-semibold">
                            Piątek
                        </p>
                        <p className="text-[15px] leading-6 text-textColor font-semibold">
                            8:00 - 16:00
                        </p>
                    </li>
                    <li className="flex items-center justify-between mb-2">
                        <p className="text-[15px] leading-6 text-textColor font-semibold">
                            Sobota
                        </p>
                        <p className="text-[15px] leading-6 text-textColor font-semibold">
                            9:00 - 13:00
                        </p>
                    </li>
                </ul>
            </div>
            <button className="btn px-2 w-full rounded-md">
                Umów wizytę
            </button>
        </div>
    );
};

export default SidePanel;
