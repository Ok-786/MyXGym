import React from 'react';
import makeStyles from './TopbarStyles';
// import { Settings } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import Button from "@mui/material/Button";
// import { IconButton } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import AvatarMenu from './AvatarMenu';

const Topbar = (props) => {
    const history = useHistory();
    const classes = makeStyles();
    return (
        <div className={classes.topbar}>
            <div className={classes.topbarWrapper}>
                <div className={classes.topLeft}>
                    <IconButton style={{ marginInlineEnd: '1vh', color: 'red' }} onClick={props.isOpenHandler}><MenuIcon fontSize='large' /></IconButton>
                    <span className={classes.logo}>MyVGym</span>
                </div>
                <div className={classes.topRight}>
                    <div className={classes.topbarIconContainer}>
                    </div>
                    {
                        props.isLoggedin ?
                            <AvatarMenu isLoggedout={props.isLoggedout}/>
                            // <Button variant="outlined" color="error" onClick={props.isLoggedout}>Logout</Button>
                            :
                            <AvatarMenu isLoggedout={props.isLoggedout}/>
                            // <Button variant="outlined" color="primary" onClick={() => history.push("/Signin")}>Signin</Button>
                    }
                </div>
            </div>
        </div>
    )
}

export default Topbar;