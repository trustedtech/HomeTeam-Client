import React from 'react';
import logo from './../assets/images/hometeam_logo-600-125-sb.png';

export default function Header(props) {
    return (
        <header>
            <nav className='row'>
                <div className="nav-wrapper white">
                    <a href="#" className='brand-logo left'><img id='ht-logo' src={logo} /></a>
                </div>
            </nav>
            <div id='colored-double-hr'></div>
        </header>
    );
}