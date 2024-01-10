import React, {useState} from 'react';
import mechanicImg from '../../assets/images/mechanic-img01.jpeg';
import starIcon from '../../assets/images/Star.png';
import MechanicAbout from "./MechanicAbout.jsx";
import Feedback from "./Feedback.jsx";
import SidePanel from "./SidePanel.jsx";

const MechanicDetails = () => {

    const [tab, setTab] = useState('about');

    return <section>
        <div className="max-w-[1170px] px-5 mx-auto">
            <div className="grid md:grid-cols-3 gap-[50px]">
                <div className="md:col-span-2">
                    <div className="flex items-center gap-5">
                        <figure className="max-w-[200px] max-h-[200px]">
                            <img src={mechanicImg} alt="" className="w-full"/>
                        </figure>
                        <div>
                            <span
                                className="bg-[#CCF0F3] text-irisBlue py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
                                Diagnosta
                            </span>
                            <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
                                Jacek Kubik
                            </h3>
                            <div className="flex items-center gap-[6px]">
                                <span
                                    className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                                    <img src={starIcon} alt=""/> 4.3
                                </span>
                                <span
                                    className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-textColor">
                                    (272)
                                </span>
                            </div>
                            <p className="text__para text-[14px] leading-6 md:text-[15px] max-w-[390px]">
                                Ponad 15 lat doświadczenia w zawodzie.
                            </p>
                        </div>
                    </div>

                    <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
                        <button
                            onClick={() => setTab('about')}
                            className={`${tab === 'about' && 'border-b border-solid border-primary'} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}>
                            O mnie
                        </button>
                        <button
                            onClick={() => setTab('feedback')}
                            className={`${tab === 'feedback' && 'border-b border-solid border-primary'} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}>
                            Opinie
                        </button>
                    </div>

                    <div className="mt-[50px]">
                        {
                            tab === 'about' && <MechanicAbout/>
                        }
                        {
                            tab === 'feedback' && <Feedback/>
                        }
                    </div>
                </div>
                <div>
                    <SidePanel/>
                </div>
            </div>
        </div>
    </section>
};

export default MechanicDetails;
