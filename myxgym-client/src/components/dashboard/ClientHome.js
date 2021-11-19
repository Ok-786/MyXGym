import { Grid } from '@material-ui/core';
import React, { Fragment } from 'react';
import ClientGraphInfo from './ClientGraphInfo/ClientGraphInfo';
import makeStyles from './DashboardStyles';

export default function ClientHome() {
    const classes = makeStyles();
    return (
        <Fragment>
            <Grid container>
                <Grid item sm={12} xm={12} xl={6} lg={6} md={12}>
                    <div className={classes.centerDiv}>
                        a
                    </div>
                </Grid>
                <Grid item sm={12} xm={12} xl={6} lg={6} md={12}>
                    <div className={classes.centerDiv}>
                        <ClientGraphInfo/>
                    </div>
                </Grid>
                <Grid item sm={12} xm={12} xl={6} lg={6} md={12}>
                </Grid>
                <Grid item sm={6}>
                </Grid>
            </Grid>
        </Fragment>

    )
}
