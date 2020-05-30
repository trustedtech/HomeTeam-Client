import React, { useEffect } from 'react';
import axios from 'axios';
import Header2 from '../components/Header2'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import M from 'materialize-css';
import { Collapsible, CollapsibleItem } from 'react-materialize';

// const [sidevnav, setSidenav] = useState(false);
const LightTooltip = withStyles((theme) => ({
    tooltip: {
        fontFamily: 'Quicksand',
        backgroundColor: theme.palette.common.white,
        border: '1px solid lightgray',
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[14],
        fontSize: '1rem',
        padding: 15
    },
}))(Tooltip);


export default function Dashboard(props) {
    useEffect(() => {
        // call to api/getHousehold
        // axios({url: '/some/endpoint', withCredentials: true}) 
        // call to all data you need
    }, [])
    return (
        <div className='container'>
            <Header2 />
            <div className="row">
                <div id='member-dash' className="col s12 m12 l6">
                    <div id='member-dash-identity' className="dashbox">
                        <div id='identity-labels'>
                            <h3 id='identity-member' className='dashbox-label'>Brian K.</h3>
                            <p id='identity-household'>Casa de Codes</p> 
                            <hr/>
                        </div>
                        <div id='identity-badges'>
                            <LightTooltip disableFocusListener disableTouchListener title={"Zen Master: You're great at keeping the house fresh and clean."}>
                            <i className="md-48 material-icons" style={{color:'limegreen'}}>spa</i>
                            </LightTooltip>
                            <LightTooltip disableFocusListener disableTouchListener title={'Easy Breezey: You keep up with your tasks like a pro.'}>
                            <i className="md-48 material-icons" style={{color:'lightskyblue'}}>toys</i>
                            </LightTooltip>
                            <LightTooltip disableFocusListener disableTouchListener title={'House MVP: Your housemates recognize and appreciate your consistent, quality work.  Keep it up!'}>
                            <i className="md-48 material-icons" style={{color:'red'}}>favorite</i>
                            </LightTooltip>
                            &nbsp; &nbsp; 
                            <LightTooltip disableFocusListener disableTouchListener title={'You have overdue tasks'}>               
                            <i className="md-48 material-icons" style={{color:'darkgray'}} >hourglass_empty</i>
                            </LightTooltip>
                            <LightTooltip disableFocusListener disableTouchListener title={'Household Admin'}>
                            <i className="md-48 material-icons" style={{color:'lightblue', float:'right'}}>stars</i>
                            </LightTooltip>
                        </div>
                    </div>
                    <div id='member-dash-tasks'>
                        <div id='tasks-area' className="dashbox">
                            <h3 style={{color:"#69EBF9"}} className='dashbox-label'>My Tasks</h3>
                            <hr/>
            
                            <ul id='tasks-list' className=''>
                                <li style={{color:'#ff9075'}} className='task-group-header'>
                                    --- Overdue ---
                                </li>
                                <li className='line-item'>
                                <LightTooltip disableFocusListener
                                    title={
                                        <React.Fragment>
                                            <b>Take-out Trash:</b> Gather trash from any pails throughout the house and consolidate to a larger trash bag.  Tie the final trash bag, place in trash can outside, and carry trash can to the designated trash pickup location.
                                            {/* <Typography color="inherit">Tooltip with HTML</Typography>
                                            <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
                                            {"It's very engaging. Right?"} */}
                                        </React.Fragment> 
                                    }>
                                    <div style={{backgroundColor:'#fff4ee', borderColor:'#d2b7a8'}} className='task-tag'>
                                        Take-out Trash
                                    </div>
                                </LightTooltip>
                                    {/* <!-- <p style='color":"orangered;'className='task-due-day-tag'>Overdue</p>  --> */}
                                    <div className='task-actions'>
                                        {/* <i className="md-48 material-icons task-action-icon" style={{color:'slategray'}}>snooze</i> */}
                                        <i 
                                        className="md-48 material-icons task-action-icon" 
                                        style={{color:'#69ebf9'}}>assignment_turned_in</i>
                                    </div>
                                </li>
                                <li className='task-group-header'>
                                    --- Due Today ---
                                </li>
                                <li className='line-item'>
                                    <LightTooltip disableFocusListener 
                                    title={
                                        <React.Fragment>
                                            <b>Handle Dishes / Washer:</b> Put away any clean dishes from the dishwasher.  Ensure the kitchen sink is clear of dishes by moving any unclean dishes to the dishwasher and/or running the dishwasher.
                                            {/* <Typography color="inherit">Tooltip with HTML</Typography>
                                            <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
                                            {"It's very engaging. Right?"} */}
                                        </React.Fragment> 
                                    }>
                                    <div className='task-tag task-due-today'>
                                        Handle Dishes / Washer
                                    </div>
                                    </LightTooltip>
                                    {/* <!-- <p className='task-due-day-tag'>by Friday</p>  --> */}
                                    <div className='task-actions'>
                                        <i className="md-48 material-icons task-action-icon" style={{color:'#b8d4e4'}}>snooze</i>
                                        <i className="md-48 material-icons task-action-icon" style={{color:'#69ebf9'}}>assignment_turned_in</i>
                                    </div>
                                </li>
                                <li className='task-group-header'>
                                    --- Upcoming ---
                                </li>
                                <li className='line-item'>
                                    <div className='task-tag'>
                                        Vacuum Common Floors
                                    </div>                            
                                    <p className='task-due-day-tag'>Wed</p> 
                                    <div className='task-actions'>
                                        <i className="md-48 material-icons task-action-icon" style={{color:'#b8d4e4'}}>snooze</i>
                                        <i className="md-48 material-icons task-action-icon" style={{color:'#69ebf9'}}>assignment_turned_in</i>
                                    </div>
                                </li>
                                <li className='line-item'>
                                    <div className='task-tag'>
                                        Dust Common Surfaces
                                    </div>
                                    <p className='task-due-day-tag'>Thu</p> 
                                    <div className='task-actions'>
                                        <i className="md-48 material-icons task-action-icon" style={{color:'#b8d4e4'}}>snooze</i>
                                        <i className="md-48 material-icons task-action-icon" style={{color:'#69ebf9'}}>assignment_turned_in</i>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id='household-dash' className="col s12 m12 l6">
                    <div id='household-dash-activity' className="dashbox">
                        <h3 className='dashbox-label'>Household</h3>
                        <hr/>
                        <ul>
                            <li className='hh-notice'>
                                <b>Appreciate</b>
                                <p><strong>Jen is keeping up with tasks and doing quality work.  Show love by sending the heart badge.</strong><i className="md-48 material-icons" style={{color:'red', float:'right'}}>favorite</i>
                                </p>                                
                            </li>
                            <li style={{color:'#32cd32'}} className='task-group-header'>
                                --- Recently Completed ---
                            </li>
                            <li className='line-item'>
                                <div className='task-tag'>
                                    Wipe Windows & Glass
                                </div>
                                <p className='task-due-day-tag'>Fri</p> 
                                <div className='task-actions'>
                                    <i className="md-48 material-icons task-action-icon" style={{color:' limegreen'}}>mood</i>
                                    <i className="md-48 material-icons task-action-icon" style={{color:' orange'}}>mood_bad</i>
                                </div>
                            </li>
                            <li className='line-item'>
                                <div className='task-tag'>
                                    Vacuum Common Floors
                                </div>
                                <p className='task-due-day-tag'>Wed</p> 
                                <div className='task-actions'>
                                    <i className="md-48 material-icons task-action-icon" style={{color:' limegreen'}}>mood</i>
                                    <i className="md-48 material-icons task-action-icon" style={{color:' orange'}}>mood_bad</i>
                                </div>
                            </li>
                            <li className='line-item'>
                                <div className='task-tag'>
                                    Deep Clean Fridge
                                </div>
                                <p className='task-due-day-tag'>Tue</p> 
                                <div className='task-actions'>
                                    <i className="md-48 material-icons task-action-icon" style={{color:'limegreen'}}>mood</i>
                                    <i className="md-48 material-icons task-action-icon" style={{color:'orange'}}>mood_bad</i>
                                </div>
                            </li>
                            <li className='line-item'>
                                <div className='task-tag'>
                                    Take-out Recycles
                                </div>
                                <p className='task-due-day-tag'>Tue</p> 
                                <div className='task-actions'>
                                    <i className="md-48 material-icons task-action-icon" style={{color:' limegreen'}}>mood</i>
                                    <i className="md-48 material-icons task-action-icon" style={{color:' orange'}}>mood_bad</i>
                                </div>
                            </li>
                            <li style={{color:'#c3c3c3'}} className='task-group-header'>
                                --- Snoozed ---
                            </li>
                            <li className='line-item'>
                                <div className='task-tag task-tag-snoozed'>
                                    Sweep Porch / Patio
                                </div>
                                <p className='task-due-day-tag'>Sun</p> 
                                <div className='task-actions'>
                                </div>
                            </li>
                            <li class='line-item'>
                                <div class='task-tag task-tag-snoozed'>
                                    Deep Vacuum Furniture
                                </div>
                                <p class='task-due-day-tag'>Mon</p> 
                                <div class='task-actions'>
                                </div>
                            </li>
                            <li class='line-item'>
                                <div class='task-tag task-tag-snoozed'>
                                    Change HVAC Filter
                                </div>
                                <p class='task-due-day-tag'>Mon</p> 
                                <div class='task-actions'>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}