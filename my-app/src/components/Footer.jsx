import React from 'react';

const Footer = () => {
    return (
        <footer className='text-center bg-blue-950 text-white mt-5 p-2.5'>
            <p>&copy; 2023 RePlay | <a className='text-white no-underline hover:no-underline' href="terms.html">Terms and Conditions</a> | <a className='text-white no-underline hover:no-underline' href="privacy.html">Privacy Policy</a></p>
        </footer>
    );
}

export default Footer;