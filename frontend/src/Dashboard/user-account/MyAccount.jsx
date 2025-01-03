import React from 'react';
import {useContext, useState} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";
import MyBookings from "./MyBookings.jsx";
import Profile from "./Profile.jsx";
import useGetProfile from "../../hooks/useFetchData.jsx";
import { BASE_URL} from "../../config.js";
import Loading from "../../components/Loader/Loading.jsx";
import Error from "../../components/Error/Error.jsx";
import {useNavigate} from "react-router-dom";

const MyAccount = () => {
    const {dispatch} = useContext(AuthContext);
    const [tab, setTab] = useState("bookings")

    const {data:userData, loading, error} = useGetProfile(`${BASE_URL}/users/profile/me`)

    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch({type: "LOGOUT"});
        navigate("/login")
    }

    return (
        <section>
            <div className="max-w-[1170px] px-5 mx-auto">
                {
                    loading && !error && <Loading/>
                }
                {
                    error && !loading && <Error errMessage={error}/>
                }

                {!loading && !error && (
                        <div className="grid md:grid-cols-3 gap-10">
                            <div className="pb-[50px] px-[30px] rounded-md">
                                <div className="flex items-center justify-center">
                                    <figure
                                        className="w-[100px] h-[100px] rounded-full border-2 border-solid border-primary">
                                        <img
                                            src={userData?.photo}
                                            alt=""
                                            className="w-full h-full rounded-full"/>
                                    </figure>
                                </div>
                                <div className="text-center mt-4">
                                    <h3 className="text-[18px] leading-[30px] text-headingColor font-bold">
                                        {userData?.name}
                                    </h3>
                                    <p className="text-textColor text-[15px] leading-6 font-medium">
                                        {userData?.email}
                                    </p>
                                    <p className="text-textColor text-[15px] leading-6 font-medium">
                                        Model Auta:
                                        <span className="ml-2 text-headingColor text-[22px] leading-8">
                                            {userData?.carModel}
                                        </span>
                                    </p>
                                </div>
                                <div className="mt-[50px] md:mt-[100px]">
                                    <button
                                        onClick={handleLogout}
                                        className="w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white">
                                        Wyloguj
                                    </button>
                                    <button
                                        className="w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white">
                                        Usuń konto
                                    </button>
                                </div>
                            </div>

                            <div className="md:col-span-2 md:px-[30px]">
                                <div>
                                    <button onClick={() => setTab('bookings')}
                                            className={` ${tab === 'bookings' && 'bg-primary text-white font-normal'} p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primary`}>
                                        Moje rezerwacje
                                    </button>
                                    <button onClick={() => setTab('settings')}
                                            className={` ${tab === 'settings' && 'bg-primary text-white font-normal'} py-2 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primary`}>
                                        Ustawienia konta
                                    </button>
                                </div>

                                {
                                    tab === 'bookings' && <MyBookings/>
                                }
                                {
                                    tab === 'settings' && <Profile user={userData}/>
                                }

                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    );
};

export default MyAccount;
