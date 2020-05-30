import React from 'react';
import logo from './../assets/images/hometeam_logo-600-125-sb.png';

// const handleNavClick = (event) => {
//     // console.log('You clicked me!');
//     event.preventDefault();
//     props.history.push('/' + event.target.value);
// }

export default function Header(props) {
    return (
        <header>
            <nav classNameName='row'>
                <div className="nav-wrapper white">
                    <a href="/dashboard" className='brand-logo left'><img id='ht-logo' src={logo} /></a>
                    <a href="#" data-target="mobile-demo" class="sidenav-trigger right"><i class="material-icons md-dark">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="/dashboard"><i className="md-48 material-icons">dashboard</i></a></li>
                        <li><a href="/member"><i className="md-48 material-icons">person</i></a></li>
                        <li><a href="/household"><i className="md-48 material-icons">home</i></a></li>
                        <li><a href="/household/admin"><i className="md-48 material-icons">settings</i></a></li>
                    </ul>
                    <ul className="sidenav" id="mobile-demo">
                        <li><a href="#"><i className="md-48 material-icons">dashboard</i>Dashboard</a></li>
                        <li><a href="#"><i className="md-48 material-icons">person</i>Member</a></li>
                        <li><a href="#"><i className="md-48 material-icons">home</i>Household</a></li>
                        <li><a href="#"><i className="md-48 material-icons">settings</i>Options</a></li>
                    </ul>
                </div>
            </nav>
            <div id='colored-double-hr'></div>
        </header>
    );
}