import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='bg-[#1E0B41]'>
            <p>&copy; 2023 RePlay | <Link to="/terms">Terms and Conditions</Link> | <Link to="/privacy">Privacy Policy</Link></p>
        </footer>
    );
}

export default Footer;