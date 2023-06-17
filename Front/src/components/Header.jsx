import { useState } from 'react';
import { FaBars, FaHeartbeat, FaHome, FaInfoCircle, FaTimes } from 'react-icons/fa';
import { MdMedicalServices } from 'react-icons/md';
import { RiContactsBookLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className='header'>
            <h2>
                <FaHeartbeat className='heart' />
                <span>MediSphere</span>
            </h2>
            <div id="menu-btn" style={{ fontSize: '20px' }} onClick={toggleMenu}>
                {isMenuOpen ?
                    <>
                        <FaTimes />
                        <ul className='nav-list'>
                            <li>
                                <Link to='/' className="link">
                                    Home
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/contact' className="link">
                                    Contact
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/about' className="link" >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to='/services' className='link'>
                                    Services
                                </Link>
                            </li>
                        </ul>
                    </>
                    : <FaBars />}
            </div>

            <nav className={isMenuOpen ? 'navbar active' : 'navbar'}>
                <ul className='nav-list'>
                    <li>
                        <Link to='/' className="link" onClick={closeMenu}>
                            <FaHome className='icons' />
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/services' className="link" onClick={closeMenu}>
                            <MdMedicalServices className='icons' />
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/about' className="link" onClick={closeMenu}>
                            <FaInfoCircle className='icons' />
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact' className="link" onClick={closeMenu}>
                            <RiContactsBookLine className='icons' />
                        </Link>
                    </li>
                </ul>

            </nav>

            <div className='auth-buttons'>
                <Link to='/login' className="button-link">Login</Link>
                <Link to='/signup' className="button-link">Sign Up</Link>
            </div>
        </header>
    );
}

export default Header;
