import React, { Fragment, useState } from 'react';
import makeStyles, { theme } from './DashboardStyles';
import Topbar from "../navbar/Topbar";
import AdminHome from './AdminHome';
import Sidebar from "../sidebar/Sidebar";
import { Grid, MuiThemeProvider } from '@material-ui/core';
import CreateClients from './CreateClients';
// import dashboardStyles from './DashboardStyles';

const Dashboard = (props) => {
    // const classes = dashboardStyles();
    const classes = makeStyles();
    const [isOpen, setIsOpen] = useState(true);
    const [display, setDisplay] = useState('Home');

    const displayHandler = (display) => {
        setDisplay(display);
    }

    const isOpenHandler = () => {
        setIsOpen(!isOpen);
    }

    const clientDisp = () => {
        if (isOpen) {
            return (
                <Grid container>
                    <MuiThemeProvider theme={theme}>
                        <Grid item sm={12} md={3} lg={3} xl={2} xs={12} >
                            <Sidebar displayHandler={displayHandler} />
                        </Grid>
                        <Grid item md={9} lg={9} xl={10} >
                            client dashboard
                        </Grid>
                    </MuiThemeProvider>
                </Grid>
            )
        }
        else {
            return (
                <Fragment>
                    {(display === 'Home') && <AdminHome />}
                    {(display === 'CreateClients') && <div className={classes.centerDiv} ><CreateClients /></div>}
                </Fragment>
            )
        }
    }
    const adminDisp = () => {
        if (isOpen) {
            return (
                <Grid container>
                    <MuiThemeProvider theme={theme}>
                        <Grid item sm={12} md={3} lg={3} xl={2} xs={12} >
                            <Sidebar displayHandler={displayHandler} />
                        </Grid>

                        <Grid item sm={12} xs={12} md={9} lg={9} xl={10} >
                            {(display === 'Home') && <AdminHome />}
                            {(display === 'CreateClients') && <div className={classes.centerDiv} ><CreateClients /></div>}
                        </Grid>
                    </MuiThemeProvider>
                </Grid>
            )
        }
        else {
            return (
                <Fragment>
                    {(display === 'Home') && <AdminHome />}
                    {(display === 'CreateClients') && <div className={classes.centerDiv} ><CreateClients /></div>}
                </Fragment>
            )
        }
    }


    return (
        <Fragment>
            <div className={classes.topContainer}>
                <Topbar isOpenHandler={isOpenHandler} isLoggedout={props.isLoggedout} isLoggedin={props.isLoggedin}  isOpen={isOpen} />
                <div className={classes.container}>
                    {props.userType !== 'admin' ? adminDisp() : clientDisp()}
                </div>
            </div>
        </Fragment>
    )
}

export default Dashboard;
