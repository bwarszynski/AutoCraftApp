import React from 'react';
import heroImg01 from '../assets/images/hero-img01.png';
import heroImg02 from '../assets/images/hero-img02.png';
import heroImg03 from '../assets/images/hero-img03.png';
import icon01 from '../assets/images/icon01.png';
import icon02 from '../assets/images/icon02.png';
import icon03 from '../assets/images/icon03.png';
import {Link} from "react-router-dom";
import {BsArrowRight} from "react-icons/bs";

const Home = () => {
    return (
        <>
            {/*=== sekcja mechaników START === */}
                <section className="hero__section pt-[60px] 2xl:h-[800px]">
                    <div className="container">
                        <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
                            {/* zawartość mechaników */}
                            <div>
                                <div className="lg:w-[570px]">
                                    <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                                        Kompleksowo zadbamy o twój samochód!
                                    </h1>
                                    <p className="text__para">
                                        Nasz warsztat zapewnia szeroką gamę usług, które zadbają o to, by twoje auto
                                        cieszyło cię długą i bezawaryjną jazdą.
                                    </p>
                                    <button className="btn">
                                        Zarezerwuj wizytę
                                    </button>
                                </div>
                                {/* rekomendacje */}
                                <div
                                    className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                                    <div>
                                        <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor ">
                                            20+
                                        </h2>
                                        <span className="w-[100px] h-2 bg-yellow rounded-full block mt-[-14px]"></span>
                                        <p className="text__para">
                                            Lat doświadczenia w branży
                                        </p>
                                    </div>
                                    <div>
                                        <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor ">
                                            10
                                        </h2>
                                        <span className="w-[100px] h-2 bg-purple rounded-full block mt-[-14px]"></span>
                                        <p className="text__para">
                                            Mechaników w zespole
                                        </p>
                                    </div>
                                    <div>
                                        <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor ">
                                            100%
                                        </h2>
                                        <span
                                            className="w-[100px] h-2 bg-irisBlue rounded-full block mt-[-14px]"></span>
                                        <p className="text__para">
                                            Zadowolonych klientów
                                        </p>
                                    </div>
                                </div>

                            </div>
                            <div className="flex gap-[30px] justify-end">
                                <div>
                                    <img className="w-full" src={heroImg01} alt=""/>
                                </div>
                                <div className="mt-[30px]">
                                    <img src={heroImg02} alt="" className="w-full mb-[30px]"/>
                                    <img src={heroImg03} alt="" className="w-full"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            {/*=== sekcja mechaników KONIEC === */}

                <section>
                    <div className="container">
                        <div className="lg:w-[470px] mx-auto">
                            <h2 className="heading text-center">
                                Zapewniamy najwyższą jakość usług.
                            </h2>
                            <p className="text__para text-center">
                                Nasz warsztat świadczy usługi najwyższej jakości zgodnie z najnowszą technologią i
                                dostępną
                                wiedzą. Nasz zespół przechodzi ciągłe szkolenia, by zapewnić najlepszą obsługę twojego
                                auta,
                                bez względu na rodzaj silnika.
                            </p>
                        </div>

                        <div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">

                            <div className="py-[30px] px-5">
                                <div className="flex items-center justify-center">
                                    <img src={icon01} alt="" width={150}/>
                                </div>
                                <div className="mt-[30px]">
                                    <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                                        Wybierz mechanika
                                    </h2>
                                    <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                                        Wybierz mechanika, który będzie odpowiadał twojej potrzebie. Znajdziesz u nas
                                        specjalistów od większości usług dostępnych dla aut spalinowych.
                                    </p>
                                    <Link to="/mechanics"
                                          className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primary hover:border-none">
                                        <BsArrowRight className="group-hover:text-white w-6 h-5"/>
                                    </Link>
                                </div>
                            </div>
                            <div className="py-[30px] px-5">
                                <div className="flex items-center justify-center">
                                    <img src={icon02} alt="" width={275}/>
                                </div>
                                <div className="mt-[30px]">
                                    <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                                        Znajdź nas
                                    </h2>
                                    <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                                        Jesteśmy zlokalizowani w Tucholi przy ulicy Świeckiej, DW240 kierunek Świecie.
                                    </p>
                                    <Link to="/contact"
                                          className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primary hover:border-none">
                                        <BsArrowRight className="group-hover:text-white w-6 h-5"/>
                                    </Link>
                                </div>
                            </div>
                            <div className="py-[30px] px-5">
                                <div className="flex items-center justify-center">
                                    <img src={icon03} alt="" width={265}/>
                                </div>
                                <div className="mt-[30px]">
                                    <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                                        Umów wizytę
                                    </h2>
                                    <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                                        Wygodnie umów wizytę w naszym warsztacie przez internet.
                                    </p>
                                    <Link to="/mechanics"
                                          className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primary hover:border-none">
                                        <BsArrowRight className="group-hover:text-white w-6 h-5"/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* === sekcja O NAS START === */}
            


        </>
    );
};

export default Home;
