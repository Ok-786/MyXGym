import { List, ListItem, ListItemText, Grid, IconButton } from '@material-ui/core';
import { AttachMoney, Assignment, SupervisorAccount } from '@material-ui/icons';
import React from 'react';
import scriptCSS from './DashboardStyles';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export default function Featuredinfo(props) {
    const classes = scriptCSS();
    var count;
    const amount= 0;

    function renderedList(index, text) {
        if (index === 0) {

            return (
                <div className={classes.featuredItem}>
                    <ListItemText primary={text} className={classes.featuredTitle} />
                    <Grid container>
                        <Grid item  lg={10} xl={10} sm={7} xs={8} md={9} >
                            <div className={classes.featuredMoneyContainer}>
                                <span className={classes.featuredMoney}>
                                    0
                                </span>
                                <span className={classes.featuredMoneyRate}>
                                    {(count > 0) ? (
                                        <SupervisorAccount className={classes.featuredIconPositive} />
                                    ) : (
                                        <SupervisorAccount className={classes.featuredIconNegative} />
                                    )}
                                </span>

                            </div>
                        </Grid>
                        <Grid item  lg={2} xl={2} sm={5} xs={4} md={3}>
                            <IconButton><AddCircleIcon  style={{ color: '#153E3D', fontSize:'5vh' }} /></IconButton>
                        </Grid>
                    </Grid>
                </div >
            )
        } else if (index === 1) {
            return (
                <div className={classes.featuredItem}>
                    <ListItemText primary={text} className={classes.featuredTitle} />
                    <Grid container>
                        <Grid item  lg={10} xl={10} sm={7} xs={8} md={9} >
                            <div className={classes.featuredMoneyContainer}>
                                <span className={classes.featuredMoney}>
                                    0
                                </span>
                                <span className={classes.featuredMoneyRate}>
                                    {(props.count > 0) ? (
                                        <Assignment className={classes.featuredIconPositive} />
                                    ) : (
                                        <Assignment className={classes.featuredIconNegative} />
                                    )}
                                </span>
                            </div>
                        </Grid>
                        <Grid item  lg={2} xl={2} sm={5} xs={4} md={3}>
                            <IconButton><AddCircleIcon  style={{ color: '#153E3D', fontSize:'5vh' }} /></IconButton>
                        </Grid>
                    </Grid>
                </div>
            )
        } else if (index === 2) {
            return (
                <div className={classes.featuredItem}>
                    <ListItemText primary={text} className={classes.featuredTitle} />
                    <Grid container>
                        <Grid item  lg={10} xl={10} sm={7} xs={8} md={9} >
                            <div className={classes.featuredMoneyContainer}>
                                <span className={classes.featuredMoney}>
                                    0
                                </span>
                                <span className={classes.featuredMoneyRate}>
                                    {(amount > 0) ? (
                                        <AttachMoney className={classes.featuredIconPositive} />
                                    ) : (
                                        <AttachMoney className={classes.featuredIconNegative} />
                                    )}
                                </span>
                            </div>
                        </Grid>
                        <Grid item  lg={2} xl={2} sm={5} xs={4} md={3}>
                            <IconButton><AddCircleIcon  style={{ color: '#153E3D', fontSize:'5vh' }} /></IconButton>
                        </Grid>
                    </Grid>
                </div>
            )
        }
    }

    return (
        <div className={classes.centerDiv}>
            <List className={classes.featured}>
                {['Clients', 'Consulations', 'Revenue'].map((text, index) => (
                    <ListItem key={text}>
                        {renderedList(index, text)}
                    </ListItem>
                ))}
            </List>
        </div>
    )
}
