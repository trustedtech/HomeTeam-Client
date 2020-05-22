// HomeTeam-Client
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import globalStyles from './assets/styles/global.css';
import 'materialize-css/dist/css/materialize.min.css';
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Household from "./pages/Household";


function App() {
    return (
            <div className='container'>
                <Login />
            </div>

        // <Router>
        //     <div>
        //         <ul>
        //             <li>
        //                 <Link to="/login">Login</Link>
        //             </li>
        //             <li>
        //                 <Link to="/dashboard">Dashboard</Link>
        //             </li>
        //             {/* <li>
        //                 <Link to="/household">Member</Link>
        //             </li>
        //             <li>
        //                 <Link to="/household">Household</Link>
        //             </li>
        //             <li>
        //                 <Link to="/household">Options</Link>
        //             </li> */}
        //         </ul>

        //         <Switch>

        //             <Route exact path={["/", "/login"]}>
        //                 <Login />
        //             </Route>

        //             <Route exact path="/dashboard">
        //                 <Dashboard />
        //             </Route>

        //             <Route exact path="/household">
        //                 <HouseholdAdmin />
        //             </Route>

        //         </Switch>
        //     </div>
        // </Router>
    );
}

export default App;