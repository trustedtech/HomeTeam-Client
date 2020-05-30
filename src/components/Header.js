import React from 'react';
import logo from './../assets/images/hometeam_logo-600-125-sb.png';



export default function Header(props) {
    return (
        <header>
            <nav className='row'>
                <div className="nav-wrapper white">
                    <a href="#" className='brand-logo left'><img id='ht-logo' src={logo} /></a>
                    <a href="#" data-target="mobile-demo" class="sidenav-trigger right"><i class="material-icons md-dark">menu</i></a>
                    {/* <ul class="right hide-on-med-and-down">
                        <li><a href="#"><i class="md-48 material-icons">dashboard</i></a></li>
                        <li><a href="#"><i class="md-48 material-icons">person</i></a></li>
                        <li><a href="#"><i class="md-48 material-icons">home</i></a></li>
                        <li><a href="#"><i class="md-48 material-icons">settings</i></a></li>
                    </ul>
                    <ul class="sidenav" id="mobile-demo">
                        <li><a href="#"><i class="md-48 material-icons">dashboard</i>Dashboard</a></li>
                        <li><a href="#"><i class="md-48 material-icons">person</i>Member</a></li>
                        <li><a href="#"><i class="md-48 material-icons">home</i>Household</a></li>
                        <li><a href="#"><i class="md-48 material-icons">settings</i>Options</a></li>
                    </ul> */}
                </div>
            </nav>
            <div id='colored-double-hr'></div>
        </header>
    );
}