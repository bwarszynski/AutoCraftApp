import {useEffect, useRef} from 'react';
import logo from '../../assets/images/logo.png';
import {NavLink, Link} from "react-router-dom";

const navLinks = [
    {
        path: "/home", display: 'Home'
    },
    {
        path: "/mechanics", display: 'Znajdź mechanika'
    },
    {
        path: "/services", display: 'Usługi'
    },
    {
        path: "/contact", display: 'Kontakt'
    },
]

const Header = () => {
    return (
        <header className="header flex items-center">
            <div className="container">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="logo">
                        <img src={logo} alt="logo"/>
                    </div>

                    {/* Menu */}
                    <div className="navigation">
                        <ul className="menu flex items-center gap-[2.7rem]">
                            {navLinks.map((link, index) => (
                                    <li key={index}>
                                        <NavLink
                                            to={link.path}
                                            className={navClass =>
                                                navClass.isActive
                                                    ? "text-primary text-[16px] leading-7 font-[600]"
                                                    : "text-textColor text-[16px] leading-7 font-[500] hover:text-primary"
                                            }
                                        >
                                            {link.display}
                                        </NavLink>
                                    </li>
                                ))}
                        < /ul>
                    </div>

                    {/* nav right */}
                    <div>
                        <ul className="flex items-center gap-[2.7rem]">
                            <li>
                                <Link
                                    to="/login"
                                    className="text-textColor text-[16px] leading-7 font-[500] hover:text-primary"
                                >
                                    Zaloguj się
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/register"
                                    className="text-textColor text-[16px] leading-7 font-[500] hover:text-primary"
                                >
                                    Zarejestruj się
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
