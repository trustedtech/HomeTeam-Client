import React from 'react';
import Header2 from '../components/Header2'
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles, makeStyles } from '@material-ui/core/styles';


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

export default function HouseholdAdmin(props) {
    return (
<div className='container'>
            <Header2 />
            <div className="row">
                <div id='member-dash' className="col s12 m12 l4">
                    <div id='member-dash-identity' className="dashbox">
                        <div id='identity-labels'>
                        <h3 className='dashbox-label'>Household</h3>
                            <p id='identity-household'>Casa de Codes</p> 
                            <hr/>
                        </div>

                        <div id='identity-badges'>
                        <LightTooltip disableFocusListener disableTouchListener title={"There are unassigned tasks in your household."}>
                            <i className="md-48 material-icons" style={{color:'orange'}}>report_problem</i>
                        </LightTooltip>
                        </div>
                        <div id='hhadm-members-list'>
                            <ul id='tasks-list' className=''>
                                <li className='hhadm-members-list-item'>Brian K.
                                    <div className='hhadm-members-list-badges'>
                                    <LightTooltip disableFocusListener disableTouchListener title={'Overdue tasks'}>               
                                    <i className="md-48 material-icons" style={{color:'darkgray'}} >hourglass_empty</i>
                                    </LightTooltip>
                                    <LightTooltip disableFocusListener disableTouchListener title={'Work quality is good'}>
                                    <i className="md-48 material-icons" style={{color:'limegreen', float:'right'}}>insert_emoticon</i>
                                    </LightTooltip>
                                    <LightTooltip disableFocusListener disableTouchListener title={"Zen Master"}>
                                    <i className="md-48 material-icons" style={{color:'limegreen'}}>spa</i>
                                    </LightTooltip>
                                    <LightTooltip disableFocusListener disableTouchListener title={'Easy Breezey'}>
                                    <i className="md-48 material-icons" style={{color:'lightskyblue'}}>toys</i>
                                    </LightTooltip>
                                    <LightTooltip disableFocusListener disableTouchListener title={'House MVP'}>
                                    <i className="md-48 material-icons" style={{color:'red'}}>favorite</i>
                                    </LightTooltip>
                                </div>
                                </li>
                                <li className='hhadm-members-list-item'>Jen B.
                                <div className='hhadm-members-list-badges'>
                                    <LightTooltip disableFocusListener disableTouchListener title={'Work quality is good'}>
                                    <i className="md-48 material-icons" style={{color:'limegreen', float:'right'}}>insert_emoticon</i>
                                    </LightTooltip>
                                    <LightTooltip disableFocusListener disableTouchListener title={"Zen Master"}>
                                    <i className="md-48 material-icons" style={{color:'limegreen'}}>spa</i>
                                    </LightTooltip>
                                    <LightTooltip disableFocusListener disableTouchListener title={'Easy Breezey'}>
                                    <i className="md-48 material-icons" style={{color:'lightskyblue'}}>toys</i>
                                    </LightTooltip>
                                </div>
                                </li>
                                
                                <li className='hhadm-members-list-item'>John R.
                                <div className='hhadm-members-list-badges'>
                                    <LightTooltip disableFocusListener disableTouchListener title={'Overdue tasks'}>               
                                    <i className="md-48 material-icons" style={{color:'darkgray'}} >hourglass_empty</i>
                                    </LightTooltip>
                                    <LightTooltip disableFocusListener disableTouchListener title={'Work quality is lacking'}>
                                    <i className="md-48 material-icons" style={{color:'orange', float:'right'}}>mood_bad</i>
                                    </LightTooltip>
                                </div>
                                </li>
                            </ul>                            
                        </div>
                    </div>
                    <div id='member-dash-tasks'>
                        <div id='tasks-area' className="dashbox">
                            <h3 style={{color:"#69EBF9"}} className='dashbox-label'>Concerns</h3>
                            <hr/>
                            <ul>
                                <li style={{color:'#c3c3c3'}} className='task-group-header'>
                                    --- None ---
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id='household-dash' className="col s12 m12 l8">
                    <div id='household-dash-activity' className="dashbox">
                        <h3 className='dashbox-label' style={{color:"#69EBF9", display:'inline-block'}}>Task Management</h3>
                        <i className="md-48 material-icons task-action-icon" style={{color:' #949494', float:'right'}}>control_point</i>
                        <hr/>
                        <ul>
                            <li className='line-item'>
                                <div className='task-tag'>
                                    Take-out Trash
                                </div>
                                <p className='task-due-day-tag'>Mon / Thu</p> 
                                <div className='task-actions'>
                                    <i className="md-48 material-icons task-action-icon" style={{color:' slategray'}}>repeat</i>
                                    <i className="md-48 material-icons task-action-icon" style={{color:'slategray'}}>person</i>
                                </div>
                                <div className='task-actions-2'>
                                    Brian K.
                                </div>
                            </li>
                            <li className='line-item'>
                                <div className='task-tag'>
                                    Handle Dishes / Washer
                                </div>
                                <p className='task-due-day-tag'>alt-daily</p> 
                                <div className='task-actions'>
                                    <i className="md-48 material-icons task-action-icon" style={{color:' slategray'}}>repeat</i>
                                    <i className="md-48 material-icons task-action-icon" style={{color:'slategray'}}>person</i>
                                </div>
                                <div className='task-actions-2'>
                                    Brian K.
                                </div>
                            </li>
                            <li className='line-item'>
                                <div className='task-tag'>
                                    Wipe Windows & Glass
                                </div>
                                <p className='task-due-day-tag'>bi-monthly</p> 
                                <div className='task-actions'>
                                    <i className="md-48 material-icons task-action-icon" style={{color:' slategray'}}>repeat</i>
                                    <i className="md-48 material-icons task-action-icon" style={{color:'slategray'}}>person</i>
                                </div>
                                <div className='task-actions-2'>
                                    Jen B.
                                </div>
                            </li>
                            <li className='line-item'>
                                <div className='task-tag'>
                                    Dust Common Surfaces
                                </div>
                                <p className='task-due-day-tag'>weekly</p> 
                                <div className='task-actions'>
                                    <i className="md-48 material-icons task-action-icon" style={{color:' slategray'}}>repeat</i>
                                    <i className="md-48 material-icons task-action-icon" style={{color:'slategray'}}>person</i>
                                </div>
                                <div className='task-actions-2'>
                                    Brian K.
                                </div>
                            </li>
                            <li className='line-item'>
                                <div className='task-tag'>
                                    Sweep Porch / Patio
                                </div>
                                <p className='task-due-day-tag'>bi-montly</p> 
                                <div className='task-actions'>
                                    <i className="md-48 material-icons task-action-icon" style={{color:' slategray'}}>repeat</i>
                                    <i className="md-48 material-icons task-action-icon" style={{color:'slategray'}}>person</i>
                                </div>
                                <div className='task-actions-2'>
                                    John R.
                                </div>
                            </li>
                            <li className='line-item'>
                                <div className='task-tag'>
                                    Deep Vacuum Furniture
                                </div>
                                <p className='task-due-day-tag'>quarterly</p> 
                                <div className='task-actions'>
                                    <i className="md-48 material-icons task-action-icon" style={{color:' slategray'}}>repeat</i>
                                    <i className="md-48 material-icons task-action-icon" style={{color:'slategray'}}>person</i>
                                </div>
                                <div className='task-actions-2'>
                                    John R.
                                </div>
                            </li>
                            <li className='line-item'>
                                <div className='task-tag'>
                                    Vacuum Common Floors
                                </div>
                                <p className='task-due-day-tag'>weekly</p> 
                                <div className='task-actions'>
                                    <i className="md-48 material-icons task-action-icon" style={{color:' slategray'}}>repeat</i>
                                    <i className="md-48 material-icons task-action-icon" style={{color:'slategray'}}>person</i>
                                </div>
                                <div className='task-actions-2'>
                                    Brian K.
                                </div>
                            </li>
                            <li className='line-item'>
                                <div className='task-tag'>
                                    Deep Clean Fridge
                                </div>
                                <p className='task-due-day-tag'>quarterly</p> 
                                <div className='task-actions'>
                                    <i className="md-48 material-icons task-action-icon" style={{color:' slategray'}}>repeat</i>
                                    <i className="md-48 material-icons task-action-icon" style={{color:'slategray'}}>person</i>
                                </div>
                                <div className='task-actions-2'>
                                    Jen B.
                                </div>
                            </li>
                            <li className='line-item'>
                                <div className='task-tag'>
                                    Take-out Recycles
                                </div>
                                <p className='task-due-day-tag'>Tue / Fri</p> 
                                <div className='task-actions'>
                                    <i className="md-48 material-icons task-action-icon" style={{color:' slategray'}}>repeat</i>
                                    <i className="md-48 material-icons task-action-icon" style={{color:'slategray'}}>person</i>
                                </div>
                                <div className='task-actions-2'>
                                    Jen B.
                                </div>
                            </li>
                            <li className='line-item'>
                                <div className='task-tag'>
                                    Change HVAC Filter
                                </div>
                                <p className='task-due-day-tag'>Fri</p> 
                                <div className='task-actions'>
                                    <i className="md-48 material-icons task-action-icon" style={{color:' slategray'}}>repeat</i>
                                    <i className="md-48 material-icons task-action-icon" style={{color:'slategray'}}>person</i>
                                </div>
                                <div className='task-actions-2'>
                                    John R.
                                </div>
                            </li>
                            <li style={{color:'#c3c3c3'}} className='task-group-header'>
                                --- Unassigned ---
                            </li>
                            <li className='line-item'>
                                <div className='task-tag task-tag-snoozed'>
                                    Mow Lawn
                                </div>
                                <p className='task-due-day-tag'></p> 
                                <div className='task-actions'>
                                    <i className="md-48 material-icons task-action-icon" style={{color:' slategray'}}>repeat</i>
                                    <i className="md-48 material-icons task-action-icon" style={{color:'slategray'}}>person</i>
                                </div>
                            </li>
                            <li class='line-item'>
                                <div class='task-tag task-tag-snoozed'>
                                    Trim Hedges
                                </div>
                                <p class='task-due-day-tag'></p> 
                                <div className='task-actions'>
                                    <i className="md-48 material-icons task-action-icon" style={{color:' slategray'}}>repeat</i>
                                    <i className="md-48 material-icons task-action-icon" style={{color:'slategray'}}>person</i>
                                </div>
                            </li>
                            <li class='line-item'>
                                <div class='task-tag task-tag-snoozed'>
                                    Rake Leaves
                                </div>
                                <p class='task-due-day-tag'></p> 
                                <div className='task-actions'>
                                    <i className="md-48 material-icons task-action-icon" style={{color:' slategray'}}>repeat</i>
                                    <i className="md-48 material-icons task-action-icon" style={{color:'slategray'}}>person</i>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>    );
}