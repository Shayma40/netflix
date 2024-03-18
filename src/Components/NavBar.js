import React, { useEffect, useState } from 'react';
import './NavBar.css';

function NavBar() {
    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar);
    }, []);


    return (
        <div className={`NavBar ${show && 'NavBar_black'}`}>

            <div className='NavBar_contents'>
            <img
            className='logo' 
            src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' 
            alt='' 
            />

            <img
            className='avatar'
            src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
            alt=''
            />
            </div>

        </div>
    )
}

export default NavBar;