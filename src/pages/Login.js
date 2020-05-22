import React, {useState} from 'react';
import Header from '../components/Header'
import { Collapsible, CollapsibleItem } from 'react-materialize';

export default function Login(props) {
    const pad1 = 'padding: 0 25px 0 25px';

    const [signup, setSignup] = useState(false);

    return (
        <div>
            <Header />
            <div className="row">
                <div id='welcome-section' className="col s12 m12 l6">

                    <div id='welcome-dash' className="dashbox">
                        <h3 id='welcome' className='dashbox-label'>Welcome to HomeTeam!</h3>
                        <p>Everyone appreciates a clean, neat living space.  We breathe easy, think clearly, and behave calmly.  However, with the demands and hurries of a busy life, our spaces can often end-up dirty and in disarray.  It takes a team effort to sail above the tide of life and maintain a clean, healthy, happy home.</p>
                        <p>That's where HomeTeam comes in!  HomeTeam is a place where you and your housemates can add, share and track tasks that maintain your household and living spaces.  When we're all on the same page and everyone's working together, the work is easier and the rewards are sweeter.</p>
                        <p>Go ahead and sign-up today to get started with HomeTeam!</p>
                    </div>

                </div>

                <div id='auth-section' className="col s12 m12 l6">
                    
                    <div id='login-dash' className="dashbox">
                        <h3 className='dashbox-label'>Login</h3>
                        <form style={{padding: '0 25px 0 25px'}}>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="username" type="text" className="validate" />
                                    <label for="username">Username</label>
                                </div>
                                <div className="input-field col s12">
                                    <input id="password" type="tel" className="validate" />
                                    <label for="password">Password</label>
                                </div>
                                <button className="btn auth-btn waves-effect waves-light" type="submit" name="action">Submit
                                </button>
                            </div>
                        </form>
                    </div>

                    <div id='signup-dash' className="dashbox">
                        <h3 className='dashbox-label'>Sign Up</h3>
                        <Collapsible>
                            <CollapsibleItem expanded={signup} onSelect={()=> setSignup(true)} header="Hello." node="div">
                            <form>                    
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="firstname" type="text" className="validate" />
                                        <label for="firstname">First Name</label>
                                    </div>
                                    <div className="input-field col s12">
                                        <input id="lastname" type="tel" className="validate" />
                                        <label for="lastname">Last Name</label>
                                    </div>
                                    <div className="input-field col s12">
                                        <input id="email" type="tel" className="validate" />
                                        <label for="email">Email Address</label>
                                    </div>
                                    <div className="input-field col s12">
                                        <input id="signup-username" type="text" className="validate" />
                                        <label for="signup-username">Username</label>
                                    </div>
                                    <div className="input-field col s12">
                                        <input id="signup-password" type="tel" className="validate" />
                                        <label for="signup-password">Password</label>
                                    </div>
                                    <button className="btn auth-btn waves-effect waves-light" type="submit" name="action">Submit
                                    </button>
                                </div>
                            </form>                            </CollapsibleItem>
                        </Collapsible>

                        {/* <ul id='signup-dropform' className='collapsible'>
                            <li>
                                <div className='collapsible-header'>
                                    <button id='signup-select' className="btn auth-btn waves-effect waves-light" type="submit" name="action">Click Here to Sign Up
                                    </button>
                        </div>
                                <div className='collapsible-body'>
                                    <form>                    
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input id="firstname" type="text" className="validate" />
                                                <label for="firstname">First Name</label>
                                            </div>
                                            <div className="input-field col s12">
                                                <input id="lastname" type="tel" className="validate" />
                                                <label for="lastname">Last Name</label>
                                            </div>
                                            <div className="input-field col s12">
                                                <input id="email" type="tel" className="validate" />
                                                <label for="email">Email Address</label>
                                            </div>
                                            <div className="input-field col s12">
                                                <input id="signup-username" type="text" className="validate" />
                                                <label for="signup-username">Username</label>
                                            </div>
                                            <div className="input-field col s12">
                                                <input id="signup-password" type="tel" className="validate" />
                                                <label for="signup-password">Password</label>
                                            </div>
                                            <button className="btn auth-btn waves-effect waves-light" type="submit" name="action">Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </li>
                        </ul> */}
                    </div>

                </div>
            </div>
        </div>
    );
}