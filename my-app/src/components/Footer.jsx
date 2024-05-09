import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='bg-[#1E0B41] fixed bottom-0 left-0 w-full'>
            <p>&copy; 2023 RePlay | <Link to="/terms">Terms and Conditions</Link> | <Link to="/privacy">Privacy Policy</Link></p>
        </footer>
    );
}

export default Footer;