import React, { Fragment, useState } from 'react';
import SigninStyles from './SigninStyles';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { Grid, Typography, IconButton, Button, TextField, FormControlLabel, Checkbox } from '@material-ui/core';
import { pink } from '@material-ui/core/colors';
import { useHistory } from 'react-router-dom';
import { toast } from "react-toastify";
import Spinner from '../spinner/Spinner';


const Signin = (props) => {
    const classes = SigninStyles();
    const history = useHistory();
    const [checked, setChecked] = useState(false);
    const [loading, setLoading] = useState(false);
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    });

    const checkHandler = (event) => {
        !event.target.checked === true ? setChecked(false) : setChecked(true);
    };
    const onChangeHandler = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value });
    };

    const { email, password } = inputs;

    const onSubmitHandler = async () => {
        setLoading(true);

        try {
            const body = { email, password };
            const response = await fetch('http://localhost:8000/api/auth/signin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });

            const parseRes = await response.json();

            setTimeout(function () {

                if (parseRes) setLoading(false);

                if (parseRes.token) {
                    localStorage.setItem('token', parseRes.token);
                    localStorage.setItem('role', parseRes.role);
                    props.handleSignin(true, parseRes.role);
                    toast.success("Login Successfull");
                    history.push('/dashboard');
                } else {
                    toast.error(parseRes);
                }
            }, 3000);

        } catch (err) {
            toast.error(err);
        }
        // if
    }

    return (
        <Fragment>
            <Grid container>
                <Spinner loading={loading} />
                <Grid item sm={5} md={8} className={classes.leftDiv}>
                    <div className={classes.paperFilterLeft}></div>
                </Grid>
                <Grid item sm={7} md={4} xs={12} className={classes.rightDiv}>

                    <div className={classes.paperPictureRight}>
                        <div className={classes.paperFilterRight}>
                            <Typography variant='h3' className={classes.logo}>MY<IconButton className={classes.Iconbg}><FitnessCenterIcon className={classes.largeIcon} fontSize='large' /><FitnessCenterIcon className={classes.largeIcon} fontSize='large' style={{ marginLeft: '-82', transform: 'rotate(90deg' }} /></IconButton>GYM</Typography>
                            <hr />
                            <div className={classes.headText} >
                                <h3 className={classes.h1}>Signin</h3>
                                <p className={classes.p}>Welcome Back!Please Login to your account</p>
                                <TextField
                                    type="email"
                                    name="email"
                                    id="outlined-basic1"
                                    style={{ width: '100%' }}
                                    size='small'
                                    label="Email"
                                    variant="outlined"
                                    value={email}
                                    onChange={onChangeHandler}
                                />
                                <br />
                                <TextField
                                    type="password"
                                    name="password"
                                    size='small'
                                    style={{ width: '100%', marginBlock: '10px' }}
                                    id="outlined-basic"
                                    label="Password"
                                    variant="outlined"
                                    value={password}
                                    onChange={onChangeHandler}
                                />
                                <div >
                                    <div className={classes.rememberMeLeft} ><FormControlLabel onClick={checkHandler} control={<Checkbox checked={checked} sx={{ color: pink[800], '&.Mui-checked': { color: pink[600], }, }} />} label="Remember me" /></div>
                                    <div className={classes.forgetPasswordRight}><p>Forget Password?</p></div>
                                </div>
                                <br />
                                <br />
                                <Button variant="outlined" style={{ marginBlockStart: '15px', width: "100%" }} color="secondary" onClick={onSubmitHandler}>Sign in</Button>
                                <p>Don't have an account? <span style={{ color: 'blue', cursor: 'pointer' }} onClick={() => history.push('/signup')}>Signup</span></p>
                                <div className={classes.copyrights}><p style={{ color: 'red' }}>© MYVGYM 2021. ALL RIGHTS RESERVED.</p></div>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>

        </Fragment >
    )
};

export default Signin;