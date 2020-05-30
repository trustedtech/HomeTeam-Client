import React, {useState} from 'react';
import axios from 'axios';
import Header from '../components/Header'
import M from 'materialize-css';
import { Collapsible, CollapsibleItem } from 'react-materialize';
// import Axios from 'axios';
// import {} from '../assets/scripts/auth';

const SignUpBtn = function(props) {

    return (
        <button id='signup-select' className="btn auth-btn waves-effect waves-light" type="button" name="action">
            Click Here to Sign Up
        </button>
    );
}

export default function Login(props) {
    const pad1 = 'padding: 0 25px 0 25px';
    
    let collapsible = document.querySelectorAll(".collapsible");
    M.Collapsible.init(collapsible, {});

    const [signupForm, setSignupForm] = useState({firstname: '', lastname: '', email: '', username: '', password: ''});
    const [loginForm, setLoginForm] = useState({username: '', password: ''});

    const handleLoginForm = (event, field) => {
        console.log('field', field)
        console.log('event.target.value', event.target.value)
        setLoginForm({
            ...loginForm,
            [field]: event.target.value
        });
    }

    const handleSignupForm = (event, field) => {
        console.log('field', field)
        console.log('event.target.value', event.target.value)
        setSignupForm({
            ...signupForm,
            [field]: event.target.value
        });
    }

    const handleLoginSubmit = (event) => {
        // console.log('You clicked me!');
        event.preventDefault();
        axios.post('http://localhost:3001/api/login', loginForm)
        .then((res) => {
            // console.log(res.data);
            props.history.push('/dashboard')
        })
        .catch((err) => console.log(err));
    }

    const handleSignupSubmit = (event) => {
        // console.log('You clicked me!');
        event.preventDefault();
        axios.post('http://localhost:3001/api/signup', signupForm)
        .then((res) => {
            // console.log(res.data);
            props.history.push('/dashboard')
        })
        .catch((err) => console.log(err));
    }


    return (
        <div className='container'>
            <Header />
            <div className="row">
                <div id='welcome-section' className="col s12 m12 l6">

                    <div id='welcome-dash' className="dashbox">
                        <h3 id='welcome' className='dashbox-label'>Welcome to HomeTeam!</h3>
                        <p>Everyone appreciates a clean, neat living space.  We breathe easier, think clearer, and behave calmer.  However, with the demands and hurries of a busy life, our spaces can often end-up dirty and in disarray.  It takes a team effort to sail above the tide of life and maintain a clean, healthy, happy home.</p>
                        <p>That's where HomeTeam comes in!  HomeTeam is a place where you and your housemates can add, share and track tasks that maintain your household and living spaces.  When we're all on the same page and everyone's working together, the work is easier and the rewards are sweeter.</p>
                        <p>Sign-up now to get started!</p>
                    </div>

                </div>

                <div id='auth-section' className="col s12 m12 l6">
                    
                    <div id='login-dash' className="dashbox">
                        <h3 className='dashbox-label'>Login</h3>
                        <form                             
                            style={{padding: '0 25px 0 25px'}}
                            onSubmit={(event) => handleLoginSubmit(event)}
                            >
                            
                            <div className="row">
                                <div className="input-field col s12">
                                    <input
                                        id="login-username"
                                        value={loginForm.username}
                                        onChange={(event) => handleLoginForm(event, 'username')}
                                        type="text"
                                        className="validate"
                                        name='login-username'
                                    />
                                    <label htmlFor="login-username">Username</label>
                                </div>
                                <div className="input-field col s12">
                                    <input
                                        id="login-password"
                                        value={loginForm.password}
                                        onChange={(event) => handleLoginForm(event, 'password')}
                                        type="password"
                                        className="validate"
                                        name='login-password'
                                    />
                                    <label htmlFor="login-password">Password</label>
                                </div>
                                <button 
                                    id='login-submit' 
                                    className="btn auth-btn waves-effect waves-light" 
                                    type="submit" 
                                    name="action"
                                >Submit
                                </button>
                            </div>
                        </form>
                    </div>

                    <div id='signup-dash' className="dashbox">
                        <h3 className='dashbox-label'>Sign Up</h3>
                        <Collapsible accordion id='signup-dropform'>
                            <CollapsibleItem expanded={false} header={<SignUpBtn />} node="div">
                                <form onSubmit={(event) => handleSignupSubmit(event)}>                    
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input 
                                                id="firstname"
                                                value={signupForm.firstname}
                                                onChange={(event) => handleSignupForm(event, 'firstname')}
                                                type="text" 
                                                className="validate" />
                                            <label htmlFor="firstname">First Name</label>
                                        </div>
                                        <div className="input-field col s12">
                                            <input 
                                                id="lastname"
                                                value={signupForm.lastname} 
                                                onChange={(event) => handleSignupForm(event, 'lastname')}
                                                type="tel" 
                                                className="validate" />
                                            <label htmlFor="lastname">Last Name</label>
                                        </div>
                                        <div className="input-field col s12">
                                            <input 
                                                id="email"
                                                value={signupForm.email} 
                                                onChange={(event) => handleSignupForm(event, 'email')}
                                                type="tel" 
                                                className="validate" />
                                            <label htmlFor="email">Email Address</label>
                                        </div>
                                        <div className="input-field col s12">
                                            <input 
                                                id="signup-username"
                                                value={signupForm.username}
                                                onChange={(event) => handleSignupForm(event, 'username')}
                                                type="text" 
                                                className="validate" />
                                            <label htmlFor="signup-username">Username</label>
                                        </div>
                                        <div className="input-field col s12">
                                            <input 
                                                id="signup-password"
                                                value={signupForm.password} 
                                                onChange={(event) => handleSignupForm(event, 'password')}
                                                type="password" 
                                                className="validate" />
                                            <label htmlFor="signup-password">Password</label>
                                        </div>
                                        <button className="btn auth-btn waves-effect waves-light" type="submit" name="action">Submit
                                        </button>
                                    </div>
                                </form>
                            </CollapsibleItem>
                        </Collapsible>                    
                    </div>
                </div>
            </div>
        </div>
    );
}